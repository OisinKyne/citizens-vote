import React from "react";
import Typography from "@material-ui/core/Typography";
import withRoot from "./withRoot";
import OnboardingComponent from "./OnboardingComponent/OnboardingComponent";
import ListComponent from "./ListComponent/ListComponent";
import { Grid, Paper } from "@material-ui/core";
import Oireachtas from "./OireachtasService/oireachtas";
import Bill from "./OireachtasService/interfaces/iBill";

/**
 * Main page. Outlines what this website is for and contains the sub modules for voting and onboarding.
 */
class App extends React.Component {
  state = {
    castVoteModalOpen: false,
    bills: []
  };

  constructor(props: any) {
    super(props);
    const oireachtasService = new Oireachtas();
    const billsApiRequestUrl: string = oireachtasService.prepareDailBillsRequestUrl();

    // Get Dail Bills
    oireachtasService
      .getDailBills(billsApiRequestUrl)
      .then(response => {
        // If there are bills returned in this response, save them to the state.
        if (response.results) {
          const newBills: Bill[] = response.results.map(function(result) {
            return result.bill;
          });
          this.setState({ ...this.state, bills: newBills });
        }
      })
      .catch(error => {
        console.log(
          "Error thrown while trying to retrieve bills from the oireachtas api. "
        );
        console.log(error);
      });
  }
  onComponentDidMount() {}
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
    const { castVoteModalOpen, bills } = this.state;

    return (
      <div className={"centerColumn"}>
        {/* Dialog action to be replaced by Cast Vote Modal */}
        {/* <Dialog open={open} onClose={this.handleClose}>
          <DialogTitle>Super Secret Password</DialogTitle>
          <DialogContent>
            <DialogContentText>1-2-3-4-5</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={this.handleClose}>
              OK
            </Button>
          </DialogActions>
        </Dialog> */}

        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={"paper"}>
              <Typography variant="h2" gutterBottom>
                Data Driven Democracy in Ireland
              </Typography>
              <Typography variant="body1" gutterBottom>
                Through the use of the{" "}
                <a href="https://api.oireachtas.ie/">
                  Oireachtas Open Data API
                </a>
                ; this website allows you to vote on current Dáil legislation,
                and record that vote permanently to the Ethereum Blockchain.
              </Typography>
              <Typography variant="body1" gutterBottom>
                Citizens vote allows for any citizen to build up a voting record
                that they <em>cannot</em> change. This allows first time
                candidates for elected office to be compared against incumbent
                candidates <i>vote for vote</i>. How do the two measure up on
                climate change bills? How do the incumbent and challenger
                compare on tax bills? Abortion rights? Any contentious bill a
                voter wants to look at, if the challenger has been commiting
                their votes to the blockchain, a voter can trust that the
                candidate could not have changed that vote since the time it was
                cast. They can now fairly compare how the challenger voted and
                how the incumbent voted in the Dáil. Rather than relying on what
                candidates say they are going to do during the election cycle.
              </Typography>
              <Typography variant="h6" gutterBottom>
                It's time for informed voters to stop looking at what elected
                officials say, and to start looking at how they are voting. This
                project isn't a fully fledged application to do all that this
                entails. But it is a step in the right direction, helping
                Ireland take steps to becoming a more accountable and
                transparent Democracy.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={"paper"}>
              <OnboardingComponent web3Injected={false} />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={"paper"}>
              No bills found. <ListComponent billsList={bills} />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withRoot(App);
