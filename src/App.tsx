import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "./withRoot";
import OnboardingComponent from "./OnboardingComponent/OnboardingComponent";

const styles = (theme: any) => ({
  root: {
    paddingTop: theme.spacing.unit * 20
  }
});

/**
 * Main page. Outlines what this website is for and contains the sub modules for voting and onboarding.
 */
class App extends React.Component {
  state = {
    open: false
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  handleClick = () => {
    this.setState({
      open: true
    });
  };

  render() {
    const { open } = this.state;

    return (
      <div className={"centerColumn"}>
        <Dialog open={open} onClose={this.handleClose}>
          <DialogTitle>Super Secret Password</DialogTitle>
          <DialogContent>
            <DialogContentText>1-2-3-4-5</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={this.handleClose}>
              OK
            </Button>
          </DialogActions>
        </Dialog>
        <Typography variant="h1" gutterBottom>
          Data Driven Democracy in Ireland
        </Typography>
        <Typography variant="body1" gutterBottom>
          Through the use of the{" "}
          <a href="https://api.oireachtas.ie/">Oireachtas Open Data API</a>;
          this website allows you to vote on current Dáil legislation, and
          record that vote permanently to the Ethereum Blockchain.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Let's stop re-electing T.D's on nice sounding rhetoric and promises,
          their name-recognition and ugly mugs posted on every street lamp.
          Let's start making <i>data-driven</i> decisions to elect our
          politicians.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Citizens vote allows for any citizen to build up a voting record that
          they <em>cannot</em> change. This allows first time candidates for
          elected office to be compared against incumbent candidates{" "}
          <i>vote for vote</i>. How do the two measure up on climate change
          bills? How do the incumbent and challenger compare on tax bills?
          Abortion rights? Any contentious bill a voter wants to look at, if the
          challenger has been commiting his votes to the blockchain, a voter can
          trust that the candidate could not have changed that vote since the
          time it was cast. They can now fairly compare how the challenger voted
          and how the incumbent voted in the Dáil. Rather than relying on what
          candidates say they are going to do during the election cycle.
        </Typography>
        <Typography variant="h6" gutterBottom>
          It's time for informed voters to stop looking at what elected
          officials say, and to start looking at how they are voting. This
          project isn't a fully fledged application to do all that this entails.
          But it is a step in the right direction, helping Ireland take steps to
          becoming a more accountable and transparent Democracy.
        </Typography>

        <OnboardingComponent />
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(App));
