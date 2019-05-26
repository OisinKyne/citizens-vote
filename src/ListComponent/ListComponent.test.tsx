import ListComponent from "./ListComponent";
import React from "react";
import { shallow } from "enzyme";
import Bill from "../OireachtasService/interfaces/iBill";

describe("List of Bills for voting Component", () => {
  let listComponent: any;
  beforeEach(() => {
    const mockfn = jest.fn(() => {
      return Promise.resolve("");
    });

    listComponent = shallow(<ListComponent updateBills={mockfn} />);
  });

  it("creates a ListComponent ", async function() {
    expect(listComponent).toBeTruthy();
  });
});
