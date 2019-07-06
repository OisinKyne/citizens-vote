import React from "react";
import { withSnackbar } from "notistack";
import Bill from "../OireachtasService/interfaces/iBill";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Paper,
  Tabs,
  Tab
} from "@material-ui/core";
import logger from "../logger/winston";
import { HowToVoteOutlined, ThumbDown, ThumbUp } from "@material-ui/icons";
import BlockchainService from "../BlockchainService/blockchainService";
import blankBill from "../helpers/BlankBill";

interface Props {
  // Whether dialog should render
  open: boolean;
  // Bill to vote on
  bill: Bill | undefined;
  // Whether this modal should launch leaning infavour/against bill
  inFavour: boolean;
  // Function to close modal without casting vote
  handleClose: any;
  // Functions for toast
  enqueueSnackbar: any;
  closeSnackbar: any;
}

interface State {
  inFavour: boolean;
  name: string;
  email: string;
}

/**
 * Component to present a user with a summary of their vote before they cast it with metamask
 *
 * Once a vote is cast and the transaction is mined, the bill is saved to localstorage on the clients browser
 */
class CastVoteModalComponent extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = { inFavour: this.props.inFavour, name: "", email: "" };
  }

  /**
   * Function called when the Dialog component fires onEnter callback.
   * Reads props.inFavour and overrides state.inFavour if necessary.
   */
  setTaNilTab() {
    this.setState({ ...this.state, inFavour: this.props.inFavour });
  }

  /**
   * Function that handles when the 'Cast Vote' button is clicked.
   *
   * First, calls the castVote function passed down from App.tsx that handles the web3 stuff
   * Then creates Snackbars indicating progress.
   */
  async castVote(
    bill: Bill,
    inFavour: boolean,
    enqueueSnackbar: any,
    closeSnackbar: any
  ): Promise<any> {
    return new Promise(function(resolve, reject) {
      logger.info(
        `Casting Vote. BillTitle: ${bill.shortTitleEn}, inFavour: ${inFavour}`
      );

      const voteCastNotification = enqueueSnackbar("Casting your vote", {
        variant: "info"
      });
      const blockchainService = new BlockchainService(null);
      blockchainService
        .castVote(bill.uri, inFavour)

        // Set a toast saying Ethereum transaction has started
        .then(() => {
          logger.info(
            "BlockchainServcice.CastVote() resolved, closing Vote Cast Snackbar"
          );
          closeSnackbar(voteCastNotification);
          resolve();
        })

        // Give an error Snackbar to the user, something went wrong
        .catch(() => {
          const voteFailedNotification = enqueueSnackbar(
            "Failed to cast vote",
            {
              variant: "error"
            }
          );

          // Clear error
          setTimeout(() => {
            closeSnackbar(voteFailedNotification);
          }, 3000);

          // Log a warning
          logger.warn(
            "BlockchainService.voteCast triggered a catch block, user likely rejected transaction"
          );
          reject("BlockchainService.voteCast triggered a catch block");
        });
    });
  }

  render() {
    if (!this.props.bill) {
      logger.info(
        "Not rendering without a bill object passed as a prop to CastVoteModal. "
      );
      return <div />;
    } else {
      return (
        <Dialog
          open={this.props.open}
          onEnter={this.setTaNilTab.bind(this)}
          onClose={this.props.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            {this.props.bill.shortTitleEn}
          </DialogTitle>
          <DialogContent>
            <Paper square className={"voteModalTabPaperComponent"}>
              <Tabs
                value={this.state.inFavour ? 0 : 1}
                onChange={(change: any, newValue: number) => {
                  // This field is Set to 1 if they vote Níl
                  // This field is set to 0 if they want Tá
                  // Update state accordingly.
                  if (newValue === 1) {
                    this.setState({
                      ...this.state,
                      inFavour: false
                    });
                  } else {
                    this.setState({
                      ...this.state,
                      inFavour: true
                    });
                  }
                }}
                variant="fullWidth"
                indicatorColor="primary"
                textColor="primary"
              >
                <Tab icon={<ThumbUp />} label="Tá" />
                <Tab icon={<ThumbDown />} label="Níl" />
              </Tabs>
            </Paper>
            <DialogContentText>
              You are going to cast your vote{" "}
              <b>{this.state.inFavour ? "for" : "against"}</b> this measure.
            </DialogContentText>
            <DialogContentText>{this.props.bill.longTitleEn}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              id={"CancelVoteButton"}
              onClick={this.props.handleClose}
              color="primary"
              variant={"contained"}
            >
              Cancel
            </Button>
            <Button
              id={"CastVoteButton"}
              variant={"contained"}
              onClick={() => {
                const bill: Bill = this.props.bill
                  ? this.props.bill
                  : blankBill;
                this.castVote(
                  bill,
                  this.props.inFavour,
                  this.props.enqueueSnackbar,
                  this.props.closeSnackbar
                )
                  .then(() => {
                    logger.info("Cast vote button on click returned");
                  })
                  .catch(() => {
                    logger.warn("Casting a vote failed");
                  });
                this.props.handleClose();
              }}
              color="primary"
            >
              Cast Vote
              {/* Vote Icon */}
              <HowToVoteOutlined />
            </Button>
          </DialogActions>
        </Dialog>
      );
    }
  }
}

export default withSnackbar(CastVoteModalComponent);
