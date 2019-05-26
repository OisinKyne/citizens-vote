import ListComponent from "./ListComponent";
import React from "react";
import { shallow } from "enzyme";

describe("List of Bills for voting Component", () => {
  let listComponent: any;
  beforeEach(() => {
    listComponent = shallow(<ListComponent />);
  });

  it("creates a ListComponent ", async function() {
    expect(listComponent).toBeTruthy();
  });

  //   it("prepareDailBillsRequestUrl can return a custom URL ", async function() {
  //     const customUrl =
  //       "https://api.oireachtas.ie/v1/legislation?bill_status=Current&bill_source=Government,Private%20Member&date_start=2019-05-05&date_end=2019-05-09&limit=49&chamber_id=&lang=ga";
  //     expect(
  //       dail.prepareDailBillsRequestUrl(
  //         "Current",
  //         "2019-05-05",
  //         "2019-05-09",
  //         "49",
  //         "",
  //         "ga"
  //       )
  //     ).toEqual(customUrl);
  //   });

  //   it("has a function called getDailBills that accepts a URL and callback ", async function() {
  //     return dail.getDailBills(url, callback);
  //   });
});
