import React from "react";
import Bill from "../OireachtasService/interfaces/iBill";

interface Props {
  key: number;
  bill: Bill;
}
interface State {
  bill: Bill;
}
class BillComponent extends React.Component<Props, State> {
  render() {
    return <div>{this.props.bill.shortTitleEn} </div>;
  }
}

export default BillComponent;
