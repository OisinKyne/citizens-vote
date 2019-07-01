import Bill from "../OireachtasService/interfaces/iBill";
import React from "react";
import { shallow, mount, ShallowWrapper, ReactWrapper } from "enzyme";
import CastVoteModalComponent from "./CastVoteModalComponent";
import defaultApiResponse from "../OireachtasService/defaultApiResponse.json";
import logger from "../logger/winston";

describe("CastVoteModal Component", () => {
  let blankCastVoteModalComponent: ReactWrapper;
  let filledCastVoteModalComponent: ShallowWrapper;
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
    const handleClose = jest.fn(() => {});
    const inFavour = false;
    const open = false;

    blankCastVoteModalComponent = mount(
      <CastVoteModalComponent
        bill={blankBill}
        castVote={castVote}
        open={open}
        inFavour={inFavour}
        handleClose={handleClose}
      />
    );

    filledBill = defaultApiResponse.results[0].bill;
    filledCastVoteModalComponent = shallow(
      <CastVoteModalComponent
        bill={filledBill}
        castVote={castVote}
        open={open}
        inFavour={inFavour}
        handleClose={handleClose}
        ref={undefined}
      />
    );
  });

  afterEach(() => {
    blankCastVoteModalComponent.unmount();
    filledCastVoteModalComponent.unmount();
  });

  it("creates a CastVoteModalComponent ", async function() {
    expect(blankCastVoteModalComponent).toBeTruthy();
    expect(filledCastVoteModalComponent).toBeTruthy();
  });

  it("clicking Cast Vote calls props.castVote", function() {
    // To do
    expect(blankCastVoteModalComponent.props()["castVote"]).toHaveBeenCalled();
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
