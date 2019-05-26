import React from "react";
import Bill from "../OireachtasService/interfaces/iBill";
import BillComponent from "../BillComponent/BillComponent";

interface Props {
  updateBills: Function;
}
interface State {
  bills: Bill[];
}
class ListComponent extends React.Component<Props, State> {
  // React element BillComponents outputted from a map.
  billItems: any = [];

  constructor(props: any) {
    super(props);

    this.props.updateBills().then((bills: Bill[]) => {
      this.billItems = bills.map((bill: Bill, index: number) => (
        <BillComponent bill={bill} key={index} />
      ));
      this.setState({ ...this.state, bills });
    });
  }

  render() {
    return (
      <div>
        <p>
          {" "}
          {this.billItems ? this.billItems.length : 0} upcoming bills for voting
          on:
        </p>
        <div>{this.billItems}</div>
      </div>
    );
  }
}

export default ListComponent;
