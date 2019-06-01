import Bill from "../OireachtasService/interfaces/iBill";
import React from "react";
import { shallow } from "enzyme";
import CastVoteModalComponent from "./CastVoteModalComponent";
import defaultApiResponse from "../OireachtasService/defaultApiResponse.json";

describe("CastVoteModal Component", () => {
  let blankCastVoteModalComponent: any;
  let filledCastVoteModalComponent: any;
  let blankBill: Bill;
  let filledBill: Bill;
  beforeEach(() => {
    blankBill = {
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

    const castVote = jest.fn(() => {});

    blankCastVoteModalComponent = shallow(
      <CastVoteModalComponent bill={blankBill} castVote={castVote} />
    );

    filledBill = defaultApiResponse.results[0].bill;
    filledCastVoteModalComponent = shallow(
      <CastVoteModalComponent bill={filledBill} castVote={castVote} />
    );
  });

  it("creates a CastVoteModalComponent ", async function() {
    expect(blankCastVoteModalComponent).toBeTruthy();
    expect(filledCastVoteModalComponent).toBeTruthy();
  });

  it("is passed an cast vote function ", async function() {
    // To Do
    expect(filledCastVoteModalComponent.props("castVote")).toEqual("");
  });

  it("contains a form object of class castVoteForm ", async function() {
    // To do
    expect(filledCastVoteModalComponent.find(".castVoteForm")).toEqual("");
  });

  it("the form object has an optional Name field ", async function() {
    // To do
    expect(filledCastVoteModalComponent.find(".castVoteForm")).toEqual("");
  });

  it("the form object contains a submit button  ", async function() {
    // To do
    expect(filledCastVoteModalComponent.find(".castVoteForm")).toEqual("");
  });

  it("clicking the submit button calls our passed in cast vote function ", async function() {
    // To do
    expect(filledCastVoteModalComponent.find(".castVoteForm")).toEqual("");
  });
});
