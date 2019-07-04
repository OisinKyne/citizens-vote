import Bill from "../OireachtasService/interfaces/iBill";
import React from "react";
import { shallow, mount, ShallowWrapper, ReactWrapper } from "enzyme";
import CastVoteModalComponent from "./CastVoteModalComponent";
import defaultApiResponse from "../OireachtasService/defaultApiResponse.json";
import logger from "../logger/winston";
import blankBill from "../helpers/BlankBill";

describe("CastVoteModal Component", () => {
  let blankCastVoteModalComponent: ReactWrapper;
  let filledCastVoteModalComponent: ShallowWrapper;
  let filledBill: Bill;
  beforeEach(() => {
    const handleClose = jest.fn(() => {});
    const inFavour = false;
    const open = false;

    blankCastVoteModalComponent = mount(
      <CastVoteModalComponent
        bill={blankBill}
        open={open}
        inFavour={inFavour}
        handleClose={handleClose}
      />
    );

    filledBill = defaultApiResponse.results[0].bill;
    filledCastVoteModalComponent = shallow(
      <CastVoteModalComponent
        bill={filledBill}
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
