import Oireachtas from "./oireachtas";
import dummyResponseJson from "./defaultApiResponse.json";
import APIResponse from "./interfaces/iAPIResponse";
import logger from "../logger/winston";

describe("Oireachtas API object", () => {
  let dail: Oireachtas;
  let url: string;
  let callback: Function;

  function isValidApiResponse(obj: any): obj is APIResponse {
    try {
      return (
        typeof obj.head === "object" &&
        typeof obj.head.lang === "string" &&
        typeof obj.head.dateRange === "object" &&
        typeof obj.results === "object" &&
        typeof obj.head.counts.billCount === "number"
      );
    } catch (e) {
      console.log("Error validating if obj was a valid apiresponse: ");
      console.log(e);
      console.log(obj);
      return false;
    }
  }

  beforeEach(() => {
    dail = new Oireachtas();
    url = dail.prepareDailBillsRequestUrl();
  });

  it("prepareDailBillsRequestUrl returns the default url ", async function() {
    const defaultUrl =
      "https://api.oireachtas.ie/v1/legislation?bill_status=Current&bill_source=Government,Private%20Member&date_start=2019-05-01&date_end=2019-06-08&limit=50&chamber_id=&lang=en";
    expect(dail.prepareDailBillsRequestUrl()).toEqual(defaultUrl);
  });

  it("prepareDailBillsRequestUrl can return a custom URL ", async function() {
    const customUrl =
      "https://api.oireachtas.ie/v1/legislation?bill_status=Current&bill_source=Government,Private%20Member&date_start=2019-05-05&date_end=2019-05-09&limit=49&chamber_id=&lang=ga";
    expect(
      dail.prepareDailBillsRequestUrl(
        "Current",
        "2019-05-05",
        "2019-05-09",
        "49",
        "",
        "ga"
      )
    ).toEqual(customUrl);
  });

  it("has a function called getDailBills that accepts a URL and resolves to a value", async function() {
    // [Un]comment if you want to mock the call rather than hitting the real endpoint.
    const mockfn = jest.fn(() => {
      return Promise.resolve(dummyResponseJson);
    });
    dail.getDailBills = mockfn;
    await dail
      .getDailBills(url)
      .then(res => {
        expect(res).toBeTruthy();
        expect(res).toEqual(dummyResponseJson);
      })
      .catch(rej => {
        fail("Unanticipated catch block was hit testing getDailBills() ");
      });
  });

  it("has a function called getDailBills that accepts a URL and rejects if the request fails", async function() {
    const mockfn = jest.fn(async () => {
      return Promise.reject(
        "[RequestError: Error: getaddrinfo ENOTFOUND bad-url-name bad-url-name:80]"
      );
    });
    dail.getDailBills = mockfn;

    const badUrl = "http://bad-url-name";
    dail
      .getDailBills(badUrl)
      .then(res => fail("This getDailBills() call was meant to throw "))
      .catch(rej => {
        expect(rej).toEqual(
          "[RequestError: Error: getaddrinfo ENOTFOUND bad-url-name bad-url-name:80]"
        );
      });
  });

  it("can cast a mocked API response to our Bill type without error ", async function() {
    const mockfn = jest.fn(async () => {
      return Promise.resolve(dummyResponseJson);
    });
    dail.getDailBills = mockfn;

    await dail
      .getDailBills(url)
      .then(response => {
        const isValid = isValidApiResponse(response);
        return expect(isValid).toBeTruthy();
      })
      .catch(res => {
        fail(
          "Unexpected catch casting a mocked getDailBills response to a typed object"
        );
      });
  });

  it("fails to cast a bad mocked API response to our Bill type ", async function() {
    const mockfn = jest.fn(async () => {
      return Promise.resolve("This is not of format apiresponse");
    });
    dail.getDailBills = mockfn;

    await dail
      .getDailBills(url)
      .then(response => {
        return expect(isValidApiResponse(response)).toBeFalsy();
      })
      .catch(err => {
        fail("This catch block was not meant to fire. ");
      });
  });

  it("can cast a LIVE API response to our Bill type without error ", async function() {
    await dail
      .getDailBills(url)
      .then(response => {
        const isValid = isValidApiResponse(response);
        return expect(isValid).toBeTruthy();
      })
      .catch(res => {
        logger.error(res);
        fail(
          "Unexpected catch casting a live getDailBills response to a typed object"
        );
      });
  });
});
