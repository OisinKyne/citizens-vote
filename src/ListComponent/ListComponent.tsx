import React from "react";
import Bill from "../OireachtasService/interfaces/iBill";
import BillComponent from "../BillComponent/BillComponent";
import { Grid, Typography } from "@material-ui/core";

interface Props {
  updateBills: Function;
  triggerVoteCast: Function;
}
interface State {
  bills: Bill[];
}
class ListComponent extends React.Component<Props, State> {
  // React element BillComponents outputted from a map.
  public billItems: any = [];

  constructor(props: any) {
    super(props);
    this.state = { bills: [] };

    this.props.updateBills().then((bills: Bill[]) => {
      if (bills && bills.map) {
        this.billItems = bills.map((bill: Bill, index: number) => (
          <BillComponent
            bill={bill}
            key={index}
            triggerVoteCast={this.props.triggerVoteCast}
          />
        ));
        this.setState({ ...this.state, bills });
      }
    });
  }

  render() {
    return (
      <div>
        <Typography variant="h4" gutterBottom>
          {this.billItems.length} Dáil Bills
        </Typography>
        <div>
          <Grid container={true} direction="column" spacing={3}>
            {this.billItems}
          </Grid>
        </div>
      </div>
    );
  }
}

export default ListComponent;
