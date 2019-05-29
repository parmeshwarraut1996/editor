import React, { Component } from "react";
import style from "./Header.less";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import ToolBar from "../toolbar/ToolBar";
import EditorToolBar from "../toolbar/ToolBar";
var logo = require("../../../src/assets/Logo.png");
class Header extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <AppBar id={style.Header}>
          <Toolbar>
            <div className={style.HeaderDiv}>
              <div>
                <img className={style.Logo} src={logo} alt="" />
              </div>
              <div>
                <Button id={style.BtnPublish}>publish</Button>
              </div>
            </div>
          </Toolbar>
        </AppBar>
        <div>
        <EditorToolBar/>
        </div>
        
        </div>
    );
  }
}
export default Header;
