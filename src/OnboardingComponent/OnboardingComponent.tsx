import React from "react";
import withRoot from "../withRoot";
import { withStyles, Grid, Typography } from "@material-ui/core";
import MetaMaskLogo from "../static/ethereum-metamask-chrome.png";

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
      <div className={"onboardingDiv"}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            ˇ<img src={MetaMaskLogo} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" gutterBottom>
              This application connects to the Blockchain through a Chrome
              Extension called{" "}
              <a href="https://metamask.io/" target="_blank">
                Metamask
              </a>
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(OnboardingComponent));
