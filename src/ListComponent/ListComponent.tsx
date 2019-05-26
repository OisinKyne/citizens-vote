import React from "react";

class ListComponent extends React.Component {
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
        This is a list of bills. We have {this.state.bills.length} bills ready
        for voting on.{" "}
      </p>
    );
  }
}

export default ListComponent;
