import React from "react";
import Bill from "../OireachtasService/interfaces/iBill";
import { Paper, Grid, Typography } from "@material-ui/core";
import { ThumbUp, ThumbDown } from "@material-ui/icons";

interface Props {
  key: number;
  bill: Bill;
  triggerVoteCast: Function;
}
interface State {
  bill: Bill;
}
/**
 * Component to render a passed Bill interface conforming JSON object to a React Component with buttons for voting for and against bills.
 */
class BillComponent extends React.Component<Props, State> {
  startCastVoteFor(e: any) {
    this.props.triggerVoteCast(this.props.bill, true);
  }

  startCastVoteAgainst(e: any) {
    this.props.triggerVoteCast(this.props.bill, false);
  }

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
              <Grid
                container
                justify="space-between"
                alignItems="flex-end"
                alignContent="center"
                className={"billInfoGrid"}
              >
                <Grid item>
                  <Typography variant="body1">
                    <b>Read Bill:</b>{" "}
                    <a
                      href={billPdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={"billPdfUrl"}
                    >
                      PDF
                    </a>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    {/* Print the current house */}
                    <b>House:</b>{" "}
                    <a
                      href={this.props.bill.mostRecentStage.event.chamber.uri}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={"billPdfUrl"}
                    >
                      {!!this.props.bill.mostRecentStage.event.chamber.showAs
                        ? this.props.bill.mostRecentStage.event.chamber.showAs
                        : "-"}
                    </a>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    {/* Print the current stage */}
                    <b>Stage:</b>{" "}
                    <a
                      href={this.props.bill.mostRecentStage.event.uri}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={"billPdfUrl"}
                    >
                      {!!this.props.bill.mostRecentStage.event.showAs
                        ? this.props.bill.mostRecentStage.event.showAs
                        : "-"}
                    </a>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2}>
              <Grid container justify="space-around" alignItems="center">
                <Grid item onClick={this.startCastVoteFor.bind(this)}>
                  <ThumbUp />
                  <Typography>Tá</Typography>
                </Grid>
                <Grid item onClick={this.startCastVoteAgainst.bind(this)}>
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
