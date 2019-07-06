import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { mount, shallow } from "enzyme";
import { SnackbarProvider } from "notistack";

describe("App.tsx", () => {
  let shallowApp: any;
  beforeEach(() => {
    shallowApp = shallow(<App />);
  });

  it("renders without crashing", async () => {
    const app = mount(
      <SnackbarProvider>
        <App />
      </SnackbarProvider>
    );
    expect(app).toBeTruthy();
  });

  it("has a triggerCastVoteModal function ", async function() {
    const mockfn = jest.fn(async () => {
      return Promise.resolve("");
    });
    shallowApp.triggerCastVoteModal = mockfn;

    shallowApp.triggerCastVoteModal();
    expect(shallowApp.triggerCastVoteModal).toHaveBeenCalled();
  });
});
