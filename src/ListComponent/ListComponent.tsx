import React from "react";

class ListComponent extends React.Component {
  state = { bills: [] };

  constructor(props: any) {
    super(props);

    if (props.bills == true) {
      console.log("A bills object was passed to the list component.");
      console.log(props.bills);
      this.state = { bills: props.bills };
    }
  }

  render() {
    return <p>This is a list component</p>;
  }
}

export default ListComponent;
