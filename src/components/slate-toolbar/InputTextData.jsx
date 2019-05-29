import React, { Component } from "react";
import { Input } from "@material-ui/core";

class InputTextData extends Component {
  constructor() {
    super();
  }
  

  render() {
    return (
      <div>
        <Input disableUnderline={true} defaultValue={this.props.text} />
      </div>
    );
  }
}

export default InputTextData;
