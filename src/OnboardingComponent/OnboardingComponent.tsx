import React from "react";
import withRoot from "../withRoot";
import { withStyles } from "@material-ui/core";

const styles = (theme: any) => ({
  root: {
    paddingTop: theme.spacing.unit * 20
  }
});

class OnboardingComponent extends React.Component {
  state = { open: true };

  constructor(props: any) {
    super(props);

    if (props.web3Injected === true) {
      console.log("Web3 is injected into this Onboarding object.");
      this.state = { open: false };
    }
  }

  render() {
    return (
      <div className={"OnboardingDiv"}>
        <img src="https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg" />
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(OnboardingComponent));
