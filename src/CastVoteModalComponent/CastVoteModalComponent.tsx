import React from "react";
import Bill from "../OireachtasService/interfaces/iBill";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from "@material-ui/core";
interface Props {
  open: boolean;
  handleClose: any;
  bill: Bill | undefined;
  castVote: any;
}
interface State {
  bill: Bill;
}
/**
 * Component to present a user with a summary of their vote
 */
class CastVoteModalComponent extends React.Component<Props, State> {
  render() {
    return (
      <Dialog open={this.props.open} onClose={this.props.handleClose}>
        <DialogTitle>Super Secret Password</DialogTitle>
        <DialogContent>
          <DialogContentText>1-2-3-4-5</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={this.props.handleClose}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default CastVoteModalComponent;
