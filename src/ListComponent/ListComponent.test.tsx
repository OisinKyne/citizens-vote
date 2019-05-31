import ListComponent from "./ListComponent";
import React from "react";
import { shallow, mount } from "enzyme";
import Bill from "../OireachtasService/interfaces/iBill";
import defaultApiResponse from "../OireachtasService/defaultApiResponse.json";

describe("List of Bills for voting Component", () => {
  let listComponent: any;
  let bill: Bill;
  beforeEach(() => {
    bill = defaultApiResponse.results[0].bill;
    const mockfn = jest.fn(() => {
      return Promise.resolve([bill]);
    });
    listComponent = shallow(<ListComponent updateBills={mockfn} />);
  });

  it("creates a ListComponent ", async function() {
    expect(listComponent).toBeTruthy();
  });

  it("if bills.map does not exist, listcomponent.BillItems is falsy  ", async function() {
    expect(listComponent.billItems).toBeFalsy();
  });

  it("if bills.map does exist, this.state.bills is truthy  ", async function() {
    // Return an empty array of bills in 'updateBills' async function.
    const newmockfn = jest.fn(() => {
      return Promise.resolve([bill]);
    });
    const newListComponent = mount(<ListComponent updateBills={newmockfn} />);

    newListComponent
      .props()
      .updateBills()
      .then((response: any) => {
        expect(newListComponent.state("bills")).toEqual([bill]);
      })
      .catch((err: any) => {
        fail("Unanticipated catch block hit. ");
      });
  });

  // it("if bills.map does not exist, listcomponent.BillItems is an empty array  ", async function() {
  //   // Return an empty array of bills in 'updateBills' async function.
  //   const newmockfn = jest.fn(() => {
  //     return Promise.resolve(null);
  //   });
  //   const newListComponent = new ListComponent({ updateBills: newmockfn });
  //   expect(newListComponent.billItems).toEqual([]);
  // });
});
