import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <AppBar className="navbar" position="static">
          <ToolBar>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <Typography variant="body1" color="inherit" id="title">
                CRYPTOCURRENCY
              </Typography>
            </Link>
            <Link
              to="/settings"
              style={{
                textDecoration: "none",
                color: "inherit",
                marginLeft: "80vw"
              }}
            >
              <Typography variant="body1" color="inherit" id="title">
                SETTINGS
              </Typography>
            </Link>
          </ToolBar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
