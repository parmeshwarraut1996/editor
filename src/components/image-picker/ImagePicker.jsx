import React, { Component } from "react";
import { MuiThemeProvider, createMuiTheme, Tooltip } from "@material-ui/core/";
import style from "./ImagePicker.less";
import { UPLOAD_IMAGE,REMOVE_COVER } from "../../constants/actionTypes";
import { connect } from "react-redux";
var close = require("../../assets/close.png");
var delete_icon = require("../../assets/delete.png");
var delete_white_icon = require("../../assets/delete_white.png");

const theme = createMuiTheme({
  overrides: {
    MuiInputBase: {
      root: {
        width: "100%",
        backgroundColor: "#F3F6F8;",
        borderBottom: "1px solid #E1E9EE",
        position: "relative"
      }
    }
  }
});

function mapStateToProps(state) {
  return {
    show: state.imagePicker.upload,
    remove: state.imagePicker.upload,
    open:state.imagePicker.open

  };
}

const mapDispatchToProps = dispatch => ({
  uploadImage: img =>
    dispatch({
      type: UPLOAD_IMAGE,
      payload: img
    }),
    removeCover:()=>
    dispatch({
      type:REMOVE_COVER,
      
      
    })
});

class ImagePicker extends Component {
  constructor() {
    super();
    this.state={
      open:true
    }

    this.fileChangedHandler = this.fileChangedHandler.bind(this);
  }

  fileChangedHandler(event) {
    const img = URL.createObjectURL(event.target.files[0]);

    this.props.uploadImage(img);
  }
  deleteImage(){
    var remove=null;
    this.props.uploadImage(remove);
  }

  removeCover(){
    this.setState({
      open:false
    })
    this.props.removeCover();
    
    
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className={style.Container}>
          <div className={style.UploadImageDiv}>
            {this.props.show === null ? (
              <div className={style.SubImageDiv} style={{display: this.props.open ? 'flex' : 'none' }}>
                <input
                  id={style.Label}
                  type="file"
                  onChange={event => this.fileChangedHandler(event)}
                />
                <Tooltip
                  disableFocusListener
                  disableTouchListener
                  placement="left"
                  title="Remove cover"
                >
                  <div className={style.CloseImageDiv}>
                    <img id={style.CloseImage} src={close} alt="" onClick={()=>this.removeCover()} />
                  </div>
                </Tooltip>
              </div>
            ) : (
              <div className={style.UploadImageContainerDiv}>
                <div className={style.UploadImageContainer}>
                  <div className={style.ImageDiv}>
                    <img id={style.Image} src={this.props.show} alt="" />
                  </div>
                  <div className={style.DeleteDiv}>
                    <img id={style.Delete} src={delete_icon} alt="" onClick={()=>this.deleteImage()} />
                  </div>
                </div>
                <input
                  id={style.Text}
                  type="text"
                  placeholder="Add credit and caption"
                />
              </div>
            )}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImagePicker);
