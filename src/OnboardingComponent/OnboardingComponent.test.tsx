import React from "react";
import { shallow } from "enzyme";
import OnboardingComponent from "./onboardingComponent";

describe("Section of the landing page visible if no injected web3 provider is present: ", () => {
  beforeEach(() => {});

  it("Creates a component ", async function() {
    const props = {};
    const onboardingComponent = new OnboardingComponent(props);
    expect(onboardingComponent).toBeDefined();
  });

  it("Is invisible if web3Injected is passed in as true", async function() {
    const shallowComponent = shallow(
      <OnboardingComponent web3Injected={false} />
    );
    expect(shallowComponent).toMatchSnapshot();
  });

  it("Has an <img> tag inside it's HTML. ", async function() {
    const shallowComponent = shallow(<OnboardingComponent />);
    expect(shallowComponent).toMatchSnapshot();
  });

  it("Contains an <a> tag that links to metamask. ", async function() {
    const shallowComponent = shallow(<OnboardingComponent />);
    const metaMaskUrl = shallowComponent.find("a#metamask-url");
    expect(metaMaskUrl).toEqual("metamask.com");
  });
});
