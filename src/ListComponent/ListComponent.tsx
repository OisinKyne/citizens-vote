import React from "react";
import Bill from "../OireachtasService/interfaces/iBill";

interface Props {
  bills: Bill[];
}
interface State {
  bills: Bill[];
}
class ListComponent extends React.Component<Props, State> {
  state = { bills: [] };

  constructor(props: any) {
    super(props);

    if (props.bills == true) {
      console.log("A bills object was passed to the list component.");
      console.log(props.bills);
      this.setState({ bills: props.bills });
    }
  }

  render() {
    return (
      <p>
        This is a list of bills. We have{" "}
        {this.props.bills ? this.props.bills.length : 0} bills ready for voting
        on.{" "}
      </p>
    );
  }
}

export default ListComponent;
