import BillComponent from "./BillComponent";
import Bill from "../OireachtasService/interfaces/iBill";
import React from "react";
import { shallow } from "enzyme";

describe("Bill Component", () => {
  let billComponent: any;
  beforeEach(() => {
    const bill: Bill = {
      act: "",
      amendmentLists: [],
      billNo: 1,
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
    billComponent = shallow(<BillComponent bill={bill} key={0} />);
  });

  it("creates a ListComponent ", async function() {
    expect(billComponent).toBeTruthy();
  });
});
