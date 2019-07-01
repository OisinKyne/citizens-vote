import React from "react";
import { mount } from "enzyme";
import OnboardingComponent from "./OnboardingComponent";

describe("Onboarding Component: ", () => {
  let onboardingComponent: any;
  beforeEach(() => {
    onboardingComponent = mount(<OnboardingComponent web3Injected={false} />);
  });

  it("Creates a component ", async function() {
    expect(onboardingComponent).toBeDefined();
  });

  it("Is invisible if web3Injected is passed in as true", async function() {
    const mountedComponent = mount(<OnboardingComponent web3Injected={true} />);
    expect(mountedComponent).toMatchSnapshot();
  });

  it("Is visible if web3Injected is passed in as false", async function() {
    expect(onboardingComponent).toMatchSnapshot();
  });

  it("Contains an <a> tag that links to metamask. ", async function() {
    expect(
      onboardingComponent.containsMatchingElement(
        <a
          href="https://metamask.io/"
          target="_blank"
          rel="noopener noreferrer"
          className={"metaMaskUrl"}
        >
          MetaMask
        </a>
      )
    ).toBeTruthy();
  });
});
