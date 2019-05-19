import React from "react";
import withRoot from "../withRoot";
import { withStyles } from "@material-ui/core";

const styles = (theme: any) => ({
  root: {
    paddingTop: theme.spacing.unit * 20
  }
});

class OnboardingComponent extends React.Component {
  state = {
    open: false
  };

  render() {
    return (
      <div className={"OnboardingDiv"}>
        <img src="https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg" />
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(OnboardingComponent));
