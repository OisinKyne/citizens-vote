import React from "react";
import Bill from "../OireachtasService/interfaces/iBill";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  TextField,
  Paper,
  Tabs,
  Tab
} from "@material-ui/core";
import logger from "../logger/winston";
import { HowToVoteOutlined, ThumbDown, ThumbUp } from "@material-ui/icons";
interface Props {
  open: boolean;
  handleClose: any;
  bill: Bill | undefined;
  inFavour: boolean;
  castVote: any;
}
interface State {
  inFavour: boolean;
}
/**
 * Component to present a user with a summary of their vote
 */
class CastVoteModalComponent extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = { inFavour: this.props.inFavour };
  }

  /**
   * Function called when the Dialog component fires onEnter callback.
   * Reads props.inFavour and overrides state.inFavour if necessary.
   */
  setTaNilTab() {
    this.setState({ ...this.state, inFavour: this.props.inFavour });
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
            {/* <DialogContentText>
              You are going to cast your vote{" "}
              {this.state.inFavour ? "for" : "against"} this measure.
            </DialogContentText> */}
            <DialogContentText>
              You have the option to add your name or your email to your vote,
              but keep in mind this is being cast forever to the Blockchain.
            </DialogContentText>
            <TextField
              margin="dense"
              id="name"
              label="Name"
              type="text"
              fullWidth
            />
            <TextField
              margin="dense"
              id="email"
              label="Email"
              type="email"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={this.props.handleClose}
              color="secondary"
              variant={"contained"}
            >
              Cancel
            </Button>
            <Button
              variant={"contained"}
              onClick={this.props.handleClose}
              color="secondary"
            >
              Vote
              <HowToVoteOutlined />
            </Button>
          </DialogActions>
        </Dialog>
      );
    }
  }
}

export default CastVoteModalComponent;
