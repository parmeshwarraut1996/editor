import React, { Component } from "react";
import { Popper, Paper, MenuItem, Button } from "@material-ui/core";
import style from "./ToolBar.less";
import {
  CLICK_POPPER,
  CLOSE_POPPER,
  SET_FONT_STYLE_BOLD,
  SET_FONT_STYLE_ITALIC,
  SET_UNDERLINE,
  SET_NUMBER_FORMAT,
  SET_HEADING_ONE,
  SET_HEADING_NORMAL,
  SET_HEADING_TWO,
    ADD_COVER_IMAGE
} from "../../constants/actionTypes";
import { connect } from "react-redux";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
var bold = require("../../assets/format_bold_black.png");
var ital = require("../../assets/format_ital_black.png");
var underline = require("../../assets/format_underlined_black.png");
var list_numbered = require("../../assets/format_list_numbered_black.png");
var list_bulleted = require("../../assets/format_list_bulleted_black.png");
var left_quotes = require("../../assets/left-quotes.png");
var add_link = require("../../assets/add-link.png");
var arrow_down = require("../../assets/arrow_down.png");

function mapStateToProps(state) {
  return {
    open: state.popper.openPop,
    setFontStyle: state.popper.data,
    show: state.imagePicker.open
  };
}
const mapDispatchToProps = dispatch => ({
  openPopper: () =>
    dispatch({
      type: CLICK_POPPER
    }),

  handleClickAway: () =>
    dispatch({
      type: CLOSE_POPPER
    }),
  font: style =>
    dispatch({
      type: SET_FONT_STYLE_BOLD,
      SET_FONT_STYLE_ITALIC,
      SET_UNDERLINE,
      SET_NUMBER_FORMAT,
      SET_HEADING_ONE,
      SET_HEADING_TWO,
      SET_HEADING_NORMAL,
      payload: style
    }),
    handleCoverImage: ()=>
    dispatch({
      type:ADD_COVER_IMAGE
    })
});

class EditorToolBar extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      anchorEl: null,
      selected: null,
      title: ""
    };
    this.handleItalicFont = this.handleItalicFont.bind(this);
  }
  openPopper(event) {
    const { currentTarget } = event;
    this.setState({
      open: !this.state.open,
      anchorEl: currentTarget
    });
    this.props.openPopper(currentTarget);
  }
  handleClickAway() {
    this.setState({
      open: false
    });
  }
  handleHeadingOne() {
    var fontStyle = "bold 18.72px Roboto, Helvetica, Arial, sans-serif";
    this.props.font(fontStyle);
    this.setState({
      title: "Heading 1",
      open: false
    });
  }
  handleHeadingTwo() {
    var fontStyle = "bold 16px Roboto, Helvetica, Arial, sans-serif";
    this.props.font(fontStyle);
    this.setState({
      title: "Heading 2",
      open: false
    });
  }
  handleNormal() {
    var fontStyle = "13.28px Roboto, Helvetica, Arial, sans-serif";
    this.props.font(fontStyle);
    this.setState({
      title: "Normal",
      open: false
    });
  }
  handleBoldFont() {
    var bold = "bold";
    this.props.font(bold);
  }
  handleItalicFont() {

    var italic = "italic";
    this.props.font(italic);
  }
  handleUnderlineToFont() {
    var underline = "underline";
    this.props.font(underline);
  }
  handleNumberList() {
    var decimal = "decimal";
    this.props.font(decimal);
  }
  addCoverImage(){
    this.props.handleCoverImage();
  }

  render() {
    return (
      <div className={style.ToolBar}>
        <div
          className={style.NormalText}
          onClick={event => this.openPopper(event)}
        >
          {this.state.title === "" ? (
            <div className={style.HeadingTextDiv}>
              Normal
              <img className={style.DownArrow} src={arrow_down} alt="" />
            </div>
          ) : (
            <div>{this.state.title}</div>
          )}
        </div>
        <div className={style.VerticleLine} />
        <div className={style.MarginDiv}>
          <Button id={style.BtnBold} onClick={() => this.handleBoldFont()}>
            <img className={style.Bold} src={bold} alt="" />
          </Button>
        </div>
        <div>
          <Button id={style.BtnItal} onClick={() => this.handleItalicFont()}>
            <img src={ital} alt="" />
          </Button>
        </div>
        <div>
          <Button
            id={style.BtnUnderline}
            onClick={() => this.handleUnderlineToFont()}
          >
            <img src={underline} alt="" />
          </Button>
        </div>
        <div className={style.VerticleLine} />
        <div />
        <div>
          <Button
            id={style.BtnNumberList}
            onClick={() => this.handleNumberList()}
          >
            <img src={list_numbered} alt="" />
          </Button>
        </div>
        <div>
          <Button id={style.BtnBulletList}>
            <img src={list_bulleted} alt="" />
          </Button>
        </div>
        <div className={style.VerticleLine} />
        <div />
        <div>
          <Button id={style.BtnLeftQuotes}>
            <img className={style.LeftQuotes} src={left_quotes} alt="" />
          </Button>
        </div>
        <div>
          <Button id={style.BtnAddLink}>
            <img className={style.AddLink} src={add_link} alt="" />
          </Button>
        </div>
        <div className={style.VerticleLine} />
        <div className={style.AddCoverDiv}>
          {!this.props.show? (
            <button id={style.AddCover} onClick={()=>this.addCoverImage()}>Add cover image</button>
          ) : (
            <div ></div>
          )}
        </div>
        <div />
        <ClickAwayListener onClickAway={() => this.handleClickAway()}>
          <Popper open={this.state.open} anchorEl={this.state.anchorEl}>
            <Paper>
              <MenuItem id={style.MenuItems}>
                <h3 id={style.H} onClick={() => this.handleHeadingOne()}>
                  Heading 1
                </h3>
              </MenuItem>
              <MenuItem id={style.MenuItems}>
                <h4 id={style.H} onClick={() => this.handleHeadingTwo()} t>
                  Heading 2
                </h4>
              </MenuItem>
              <MenuItem id={style.MenuItems}>
                <div onClick={() => this.handleNormal()}>
                  <label className={style.NormalText}>Normal </label>
                </div>
              </MenuItem>
            </Paper>
          </Popper>
        </ClickAwayListener>
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditorToolBar);
