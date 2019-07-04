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
 * Component to present a user with a summary of their vote
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

      const voteCastNotification = enqueueSnackbar("Casting a vote", {
        variant: "info"
      });
      const blockchainService = new BlockchainService(null);
      blockchainService
        .castVote(bill.uri, inFavour)

        // Set a toast saying Ethereum transaction has started
        .then(castVoteResponse => {
          logger.info("CastVote() resolved to:  ");
          console.log(castVoteResponse);
          closeSnackbar(voteCastNotification);
          resolve(castVoteResponse);
        })

        // Give an error message, something went wrong
        .catch(err => {
          logger.error(err);

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
          reject(err);
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
            {/* Taking out name and email address for now. There are more modern ways to prove an Ethereum Address. 
            
            <DialogContentText>
              You have the option to add your name or your email to your vote,
              but keep in mind this is being cast forever to the Blockchain.
            </DialogContentText>
            <TextField
              margin="dense"
              id="name"
              value={this.state.name}
              onChange={(e: any) => {
                this.setState({ ...this.state, name: e.target.value });
              }}
              label="Name"
              type="text"
              fullWidth
            />
            <TextField
              margin="dense"
              id="email"
              value={this.state.email}
              onChange={(e: any) => {
                this.setState({ ...this.state, email: e.target.value });
              }}
              label="Email"
              type="email"
              fullWidth
            />*/}
          </DialogContent>
          <DialogActions>
            <Button
              onClick={this.props.handleClose}
              color="primary"
              variant={"contained"}
            >
              Cancel
            </Button>
            <Button
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
                );
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
