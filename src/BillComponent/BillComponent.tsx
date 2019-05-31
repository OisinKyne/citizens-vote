import React from "react";
import Bill from "../OireachtasService/interfaces/iBill";
import { Paper, Grid, Typography } from "@material-ui/core";
import { ThumbUp, ThumbDown } from "@material-ui/icons";

interface Props {
  key: number;
  bill: Bill;
}
interface State {
  bill: Bill;
}
/**
 * Component to render a passed Bill interface conforming JSON object to a React Component with buttons for voting for and against bills.
 */
class BillComponent extends React.Component<Props, State> {
  render() {
    let billPdfUrl = "/";
    if (this.props.bill.versions && this.props.bill.versions.length >= 1) {
      billPdfUrl = this.props.bill.versions[0].version.formats.pdf.uri;
    }
    return (
      <Grid item xs={12}>
        <Paper className={"billPaper"}>
          <Grid container justify="space-between" alignItems="center">
            <Grid item xs={10}>
              <Typography variant="h6" gutterBottom>
                {this.props.bill.shortTitleEn}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {this.props.bill.longTitleEn}
              </Typography>
              <Typography variant="body1">
                <a
                  href={billPdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={"billPdfUrl"}
                >
                  Read Bill
                </a>
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Grid container justify="space-around" alignItems="center">
                <Grid item>
                  <ThumbUp />
                  <Typography>Tá</Typography>
                </Grid>
                <Grid item>
                  <ThumbDown />
                  <Typography>Níl</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    );
  }
}

export default BillComponent;
