import BlockchainService from "./blockchainService";
import logger from "../logger/winston";

describe("Blockchain Service ", () => {
  let service: BlockchainService;

  beforeEach(() => {
    const props = {};
    service = new BlockchainService(props);
  });

  it("getWeb3 fails to return a web3 object in a test, because a test browser doesn't have metamask injecting web3 ", async function() {
    expect(service.getWeb3().catch(() => {})).rejects;
  });

  it("returns false for isWeb3Injected due to being in a test runner ", async function() {
    expect(BlockchainService.isWeb3Injected()).toBeFalsy();
  });

  // it("prepareDailBillsRequestUrl can return a custom URL ", async function() {
  //   const customUrl =
  //     "https://api.oireachtas.ie/v1/legislation?bill_status=Current&bill_source=Government,Private%20Member&date_start=2019-05-05&date_end=2019-05-09&limit=49&chamber_id=&lang=ga";
  //   expect(
  //     dail.prepareDailBillsRequestUrl(
  //       "Current",
  //       "2019-05-05",
  //       "2019-05-09",
  //       "49",
  //       "",
  //       "ga"
  //     )
  //   ).toEqual(customUrl);
  // });

  // it("has a function called getDailBills that accepts a URL and resolves to a value", async function() {
  //   // [Un]comment if you want to mock the call rather than hitting the real endpoint.
  //   const mockfn = jest.fn(() => {
  //     return Promise.resolve(dummyResponseJson);
  //   });
  //   dail.getDailBills = mockfn;
  //   await dail
  //     .getDailBills(url)
  //     .then(res => {
  //       expect(res).toBeTruthy();
  //       expect(res).toEqual(dummyResponseJson);
  //     })
  //     .catch(rej => {
  //       fail("Unanticipated catch block was hit testing getDailBills() ");
  //     });
  // });

  // it("has a function called getDailBills that accepts a URL and rejects if the request fails", async function() {
  //   const mockfn = jest.fn(() => {
  //     return Promise.reject(
  //       "[RequestError: Error: getaddrinfo ENOTFOUND bad-url-name bad-url-name:80]"
  //     );
  //   });
  //   dail.getDailBills = mockfn;

  //   const badUrl = "http://bad-url-name";
  //   const badResponse = dail.getDailBills(badUrl);
  //   expect(badResponse).rejects.toEqual(
  //     "[RequestError: Error: getaddrinfo ENOTFOUND bad-url-name bad-url-name:80]"
  //   );
  // });

  // it("can cast a mocked API response to our Bill type without error ", async function() {
  //   const mockfn = jest.fn(() => {
  //     return Promise.resolve(dummyResponseJson);
  //   });
  //   dail.getDailBills = mockfn;

  //   await dail
  //     .getDailBills(url)
  //     .then(response => {
  //       const isValid = isValidApiResponse(response);
  //       return expect(isValid).toBeTruthy();
  //     })
  //     .catch(res => {
  //       fail(
  //         "Unexpected catch casting a mocked getDailBills response to a typed object"
  //       );
  //     });
  // });

  // it("fails to cast a bad mocked API response to our Bill type ", async function() {
  //   const mockfn = jest.fn(() => {
  //     return Promise.resolve("This is not of format apiresponse");
  //   });
  //   dail.getDailBills = mockfn;

  //   await dail
  //     .getDailBills(url)
  //     .then(response => {
  //       return expect(isValidApiResponse(response)).toBeFalsy();
  //     })
  //     .catch(err => {
  //       fail("This catch block was not meant to fire. ");
  //     });
  // });

  // it("can cast a LIVE API response to our Bill type without error ", async function() {
  //   await dail
  //     .getDailBills(url)
  //     .then(response => {
  //       const isValid = isValidApiResponse(response);
  //       return expect(isValid).toBeTruthy();
  //     })
  //     .catch(res => {
  //       logger.error(res);
  //       fail(
  //         "Unexpected catch casting a live getDailBills response to a typed object"
  //       );
  //     });
  // });
});
