import ListComponent from "./ListComponent";
import React from "react";
import { shallow, mount } from "enzyme";
import Bill from "../OireachtasService/interfaces/iBill";
import defaultApiResponse from "../OireachtasService/defaultApiResponse.json";

describe("List of Bills for voting Component", () => {
  let listComponent: any;
  let emptyListComponent: any;
  let resolveWithBills: any;
  let resolveWithoutBills: any;
  let bill: Bill;
  let triggerVoteCastModal: Function;
  beforeEach(() => {
    bill = defaultApiResponse.results[0].bill;
    resolveWithBills = jest.fn(() => {
      return Promise.resolve([bill]);
    });
    resolveWithoutBills = jest.fn(() => {
      return Promise.resolve([]);
    });
    triggerVoteCastModal = jest.fn(() => {});
    listComponent = shallow(
      <ListComponent
        updateBills={resolveWithBills}
        triggerVoteCast={triggerVoteCastModal}
      />
    );
    emptyListComponent = shallow(
      <ListComponent
        updateBills={resolveWithoutBills}
        triggerVoteCast={triggerVoteCastModal}
      />
    );
  });

  it("creates a ListComponent ", async function() {
    expect(listComponent).toBeTruthy();
  });

  it("if bills.map does not exist, listcomponent.BillItems is falsy  ", async function() {
    expect(listComponent.billItems).toBeFalsy();
  });

  it("if bills.map does exist, this.state.bills is truthy  ", async function() {
    // Return an array of bills in 'updateBills' async function.
    const newmockfn = jest.fn(() => {
      return Promise.resolve([bill]);
    });
    const newListComponent = mount(
      <ListComponent
        updateBills={newmockfn}
        triggerVoteCast={triggerVoteCastModal}
      />
    );

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

  it("if this.props.updateBills() returns something that isn't truthy and doesnt have a .map() function; the state is unchanged  ", async function() {
    const newmockfn = jest.fn(() => {
      return Promise.resolve(null);
    });

    const newListComponent = shallow(
      <ListComponent
        updateBills={newmockfn}
        triggerVoteCast={triggerVoteCastModal}
      />
    );
    expect(newListComponent.state("bills")).toEqual([]);
  });

  it("if there are no bills. Text says '0 Dáil Bills'  ", async function() {
    const text = emptyListComponent.text();
    expect(text).toEqual("0 Dáil Bills");
  });

  it("if there are bills. Text says '1 Dáil Bills<BillComponent />'  ", async function() {
    const text = listComponent.text();
    expect(text).toEqual("1 Dáil Bills<BillComponent />");
  });
});
