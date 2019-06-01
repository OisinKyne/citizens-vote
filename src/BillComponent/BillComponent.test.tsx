import BillComponent from "./BillComponent";
import Bill from "../OireachtasService/interfaces/iBill";
import React from "react";
import { shallow } from "enzyme";

describe("Bill Component", () => {
  let emptyBillComponent: any;
  let triggerVoteCastFunction: Function;
  beforeEach(() => {
    const bill: Bill = {
      act: "",
      amendmentLists: [],
      billNo: "",
      billType: "",
      billTypeURI: "",
      billYear: "",
      debates: [],
      events: [],
      lastUpdated: "",
      longTitleEn: "",
      longTitleGa: "",
      method: "",
      methodURI: "",
      mostRecentStage: {
        event: {
          chamber: {
            chamberCode: "",
            showAs: "",
            uri: ""
          },
          dates: [],
          house: {
            chamberCode: "",
            chamberType: "",
            houseCode: "",
            houseNo: "",
            showAs: "",
            uri: ""
          },
          progressStage: 0,
          showAs: "",
          stageCompleted: false,
          stageOutcome: null,
          stageURI: "",
          uri: ""
        }
      },
      originHouse: {
        showAs: "",
        uri: ""
      },
      relatedDocs: [],
      shortTitleEn: "",
      shortTitleGa: "",
      source: "",
      sourceURI: "",
      sponsors: [],
      stages: [],
      status: "",
      statusURI: "",
      uri: "",
      versions: []
    };
    triggerVoteCastFunction = jest.fn(() => {});
    emptyBillComponent = shallow(
      <BillComponent
        bill={bill}
        key={0}
        triggerVoteCast={triggerVoteCastFunction}
      />
    );
  });

  it("creates a ListComponent ", async function() {
    expect(emptyBillComponent).toBeTruthy();
  });
});
