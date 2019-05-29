import React, { Component } from "react";
import { Button } from "@material-ui/core";
import style from "./AddSnippet.less";
import { ADD_MEDIA } from "../../../../constants/actionTypes";
var curly_brackets = require("../../../../assets/curly-brackets.png");
import {connect} from 'react-redux';

function mapStateToProps(state) {
  return {
    open: state.addMedia.open
  };
}
const mapDispatchToProps = dispatch => ({
  addMedia: (snippet) => {
    dispatch({
      type: ADD_MEDIA,
      payload:snippet
    });
  }
});
class AddSnippet extends Component {
  constructor() {
    super();
  }
  addMedia(){
    var snippet="snippet";
    this.props.addMedia(snippet);
  }
  render() {
    return (
      <div>
        <Button onClick={() => this.addMedia()}>
          <div className={style.IconDiv}>
            <div className={style.ImageDiv}>
              <img className={style.AddSnippet} src={curly_brackets} alt="" />
            </div>
            <div className={style.IconTitleDiv}>Snippet</div>
          </div>
        </Button>
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddSnippet);
