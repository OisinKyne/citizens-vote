import React from "react";
import Typography from "@material-ui/core/Typography";
import withRoot from "./withRoot";
import OnboardingComponent from "./OnboardingComponent/OnboardingComponent";
import ListComponent from "./ListComponent/ListComponent";
import { Grid, Paper } from "@material-ui/core";
import Oireachtas from "./OireachtasService/oireachtas";
import Bill from "./OireachtasService/interfaces/iBill";
import logger from "./logger/winston";
import CastVoteModalComponent from "./CastVoteModalComponent/CastVoteModalComponent";
import BlockchainService from "./BlockchainService/blockchainService";

/**
 * Main page. Outlines what this website is for and contains the sub modules for voting and onboarding.
 */
interface Props {}
interface State {
  castVoteModalOpen: boolean;
  bills: Bill[];
  billToVoteOn: Bill | undefined;
  inFavour: boolean;
}
class App extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      castVoteModalOpen: false,
      bills: [],
      billToVoteOn: undefined,
      inFavour: false
    };
  }

  /**
   * Instansiates an Oireachtas service object, calls the oireachtas API, then updates the Bills in state accordingly.
   */
  async updateBills() {
    return new Promise(function(resolve, reject) {
      const oireachtasService = new Oireachtas();

      // Calculate the date 7 days ago, then the date 14 days ahead of now for getting bills.
      const date = new Date();
      const resultLimit = "50";
      const billState = "Current";
      const date7DaysAgo = new Date(date.getTime() - 7 * 24 * 60 * 60 * 1000);
      const date7DaysAgoString = date7DaysAgo.toISOString().substring(0, 10);
      const date14DaysFromNow = new Date(
        date.getTime() + 14 * 24 * 60 * 60 * 1000
      );
      const date14DaysFromNowString = date14DaysFromNow
        .toISOString()
        .substring(0, 10);
      const billsApiRequestUrl: string = oireachtasService.prepareDailBillsRequestUrl(
        billState,
        date7DaysAgoString,
        date14DaysFromNowString,
        resultLimit,
        "",
        "ga"
      );

      // Get Dail Bills
      const newBills = oireachtasService
        .getDailBills(billsApiRequestUrl)
        .then(response => {
          // If there are bills returned in this response, map them to Bill Objects then return the list of them.
          if (response.results) {
            logger.info(
              `${
                response.results.length
              } results returned from api.oireachtas.ie`
            );
            return response.results.map(function(result) {
              return result.bill;
            });
          } else {
            logger.warn(`api.oireachtas.ie returned no results for voting on.`);
            return;
          }
        })
        .catch(error => {
          logger.error(
            "Error thrown while trying to retrieve bills from the oireachtas api. "
          );
          reject(error);
        });
      resolve(newBills);
    });
  }

  /**
   * This function is passed down to a Bill Component. When called it is passed the Bill interface and a boolean, true meaning voting in favour
   * @param bill
   * @param vote
   */
  triggerCastVoteModal(bill: Bill, vote: boolean) {
    this.setState({
      ...this.state,
      castVoteModalOpen: true,
      billToVoteOn: bill,
      inFavour: vote
    });
  }

  handleClose = (event: any, reason: any) => {
    this.setState({
      ...this.state,
      castVoteModalOpen: false
    });
  };

  // Function to cast a vote to the blockchain.
  castVote = (bill: Bill, inFavour: boolean, name?: string, email?: string) => {
    logger.info(
      `Casting Vote. BillTitle: ${
        bill.shortTitleEn
      }, inFavour: ${inFavour}, name:${name}, email: ${email}`
    );
    const blockchainService = new BlockchainService();
    blockchainService
      .getWeb3()
      .then(web3 => {
        logger.info("Web3 ready for voting with. ");
        console.log(web3);
      })
      .catch(err => {
        logger.error("Error thrown getting web3 and sending a transaction. ");
        logger.error(err);
      });

    this.setState({
      ...this.state,
      castVoteModalOpen: false
    });
  };

  handleClick = () => {
    this.setState({ ...this.state, castVoteModalOpen: true });
  };

  render() {
    return (
      <div className={"centerColumn"}>
        <CastVoteModalComponent
          open={this.state.castVoteModalOpen}
          handleClose={this.handleClose}
          bill={this.state.billToVoteOn}
          inFavour={this.state.inFavour}
          castVote={this.castVote}
        />
        <Grid container spacing={2}>
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
              <ListComponent
                updateBills={this.updateBills}
                triggerVoteCast={this.triggerCastVoteModal.bind(this)}
              />
            </Paper>
          </Grid>

          <Grid item xs={12}>
            {/* Identifying myself and donation address */}
            <Paper className={"paper"}>
              <Typography variant="caption">
                Built by Oisín Kyne. To donate some Ether:{" "}
                <a
                  href="https://etherscan.io/address/0xa338096d43efFc151E7e89519b524CA5a7E5626f"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  oisinkyne.eth
                </a>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withRoot(App);
