import React from "react";
import Bill from "../OireachtasService/interfaces/iBill";
import { Paper, Grid, Typography } from "@material-ui/core";

interface Props {
  key: number;
  bill: Bill;
}
interface State {
  bill: Bill;
}
class BillComponent extends React.Component<Props, State> {
  render() {
    return (
      <Grid item xs={12}>
        <Paper className={"billPaper"}>
          <Typography variant="h6">{this.props.bill.shortTitleEn}</Typography>
          <Typography variant="body1">{this.props.bill.longTitleEn}</Typography>
        </Paper>
      </Grid>
    );
  }
}

export default BillComponent;
