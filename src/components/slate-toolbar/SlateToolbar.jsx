import React, { Component } from "react";
var add_media = require("../../assets/add_media.png");
import style from "./SlateToolbar.less";
import {
  Input,
  createMuiTheme,
  MuiThemeProvider,
  TextField,
  Button
} from "@material-ui/core";
import InputTextData from "./InputTextData";
import {
  SET_TEXT,
  CLICK_MEDIA,
  CLOSE_MEDIA
} from "../../constants/actionTypes";
var close = require("../../assets/close.png");
const theme = createMuiTheme({
  overrides: {
    MuiInputBase: {
      root: {
        fontSize: "13px"
      },
      multiline: {
        padding: "0"
      }
    }
  }
});
import { connect } from "react-redux";
import AddImage from "./media-toolbar/add-image/AddImage";
import AddVideo from "./media-toolbar/add-video/AddVideo";
import AddSlides from "./media-toolbar/add-slides/AddSlides";
import AddLinks from "./media-toolbar/add-links/AddLinks";
import AddSnippet from "./media-toolbar/add-snippet/AddSnippet";
import UploadContainer from "./UploadContainer";

function mapStateToProps(state) {
  return {
    inputText: state.text.textData,
    open: state.text.open,
    setFontStyle: state.popper.data,
    add: state.addMedia.open,
    type: state.addMedia.data
  };
}

const mapDispatchToProps = dispatch => ({
  setInputText: text => {
    dispatch({
      type: SET_TEXT,
      payload: text
    });
  },

  addMedia: () => {
    dispatch({
      type: CLICK_MEDIA
    });
  },
  closeMedia: () => {
    dispatch({
      type: CLOSE_MEDIA
    });
  }
});
var arr = [];
class SlateToolbar extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      txt: "",
      edit: false,
      fontSet: ""
    };
    this.changeFont = this.changeFont.bind(this);
  }
  changeFont(style) {
    if (style === "bold") {
      this.setState({
        fontSet: style
      });
    } else if (style === "italic") {
      this.setState({
        fontSet: style
      });
    } else if (style === "underline") {
      console.log("undeline" + style);

      this.setState({
        fontSet: style
      });
    } else if (style === "bold 18.72px Roboto, Helvetica, Arial, sans-serif") {
      console.log("in slateBar");

      this.setState({
        fontSet: style
      });
    }
  }
  handleKeyDown(event) {
    if (event.key === "Enter") {
      arr.push(this.state.text);

      this.props.setInputText(arr);
      this.setState({
        text: ""
      });
    }
  }
  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }
  addMedia() {
    this.props.addMedia();
  }
  closeMedia() {
    this.props.closeMedia();
  }
  editHandleChange(data) {
    this.setState({
      edit: true
    });
  }
  handleEditKeyDown(event) {
    if (event.key === "Enter") {
      arr.push(this.state.txt);

      this.props.setInputText(arr);
      this.setState({
        txt: ""
      });
    }
  }

  render() {
    
      
    
    return (
      <MuiThemeProvider theme={theme}>
        <div className={style.Container}>
          <div className={style.TextDiv}>
            <div className={style.TextData}>
              {this.props.inputText.map(object => {
                return (
                  <p
                    className={style.Text}
                    contentEditable={true}
                    style={{
                      fontStyle: this.props.setFontStyle,
                      textDecoration: this.props.setFontStyle,
                      fontWeight: this.props.setFontStyle
                    }}
                  >
                    {object}
                  </p>
                );
              })}
            </div>
          </div>
          <div className={style.AddMediaDiv}>
            {!this.props.open ? (
              <div className={style.ImageDiv}>
                <div>
                  <img
                    className={style.Image}
                    src={add_media}
                    alt=""
                    onClick={() => this.addMedia()}
                  />
                </div>
                <div className={style.InputDiv}>
                  {this.props.setFontStyle === "decimal" ? (
                    <ol
                      className={style.Ol}
                      style={{ listStyleType: this.props.setFontStyle }}
                    >
                      <li
                        className={style.Li}
                        contentEditable={true}
                        value={this.state.text}
                        onChange={event => this.handleChange(event)}
                        placeholder="Write here.Add image or a video for visual imapct"
                        onKeyDown={event => this.handleKeyDown(event)}
                      />
                    </ol>
                  ) : (
                    <div>
                      <Input
                        className={style.Headline}
                        style={{
                          fontStyle: this.props.setFontStyle,
                          textDecoration: this.props.setFontStyle,
                          fontWeight: this.props.setFontStyle,
                          font: this.props.setFontStyle
                        }}
                        disableUnderline={true}
                        value={this.state.text}
                        onChange={event => this.handleChange(event)}
                        placeholder="Write here.Add image or a video for visual imapct"
                        onKeyDown={event => this.handleKeyDown(event)}
                      />
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className={style.ImageDiv}>
                <div>
                  <img
                    className={style.CloseImage}
                    src={close}
                    alt=""
                    onClick={() => this.closeMedia()}
                  />
                </div>

                {!this.props.add ? (
                  <div className={style.MediaDiv}>
                    <AddImage />
                    <AddVideo />
                    <AddSlides />
                    <AddLinks />
                    <AddSnippet />
                  </div>
                ) : (
                  <UploadContainer data={this.props.type}/>
                )}
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
)(SlateToolbar);
