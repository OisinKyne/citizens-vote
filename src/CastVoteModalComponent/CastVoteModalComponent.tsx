import React from "react";
import Bill from "../OireachtasService/interfaces/iBill";
import { Paper, Grid, Typography } from "@material-ui/core";

interface Props {
  bill: Bill;
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
    return <Grid container>This is my Cast Vote Modal Component</Grid>;
  }
}

export default CastVoteModalComponent;
