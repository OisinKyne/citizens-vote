import React from "react";
import withRoot from "../withRoot";
import { Grid, Typography } from "@material-ui/core";
import MetaMaskLogo from "../static/ethereum-metamask-chrome.png";

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
    if (this.state.open === false) {
      return null;
    }
    return (
      <div className={"onboardingDiv"}>
        <Grid container spacing={3} alignContent={"center"}>
          <Grid item xs={12}>
            <a
              href="https://metamask.io/"
              target="_blank"
              rel="noopener noreferrer"
              className={"metamaskUrl"}
            >
              <img
                src={MetaMaskLogo}
                className={"fullWidthImage"}
                alt="MetaMask Fox Logo"
              />
            </a>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" gutterBottom>
              This application connects to the Blockchain through a Chrome
              Extension called{" "}
              <a
                href="https://metamask.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Metamask
              </a>
              . This means this website has no control over your vote, it merely
              facilitates the process. Please install Metamask, or any other
              web3 provider to post messages to the blockchain.
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withRoot(OnboardingComponent);
