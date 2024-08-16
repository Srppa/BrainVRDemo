/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"

import LinkTranslated from "../LinkTranslated";

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showMenu: false }
    this.handleToggleClick = this.handleToggleClick.bind(this)
    this.messages = props.pageContext.messages
    
  }

  handleToggleClick() {
    this.setState(state => ({
      showMenu: !state.showMenu,
    }))
  }

  render() {
    return (
      <nav className="site-navigation" >
        <button
          aria-label="toggle menu"
          onClick={this.handleToggleClick}
          className={"menu-trigger" + (this.state.showMenu ? " is-active" : "")}
        >
          <div className="icon-menu-line">
            <RiMenu3Line />
          </div>
          <div className="icon-menu-close">
            <RiCloseLine />
          </div>
        </button>
        <ul>
          <li>
            <LinkTranslated href={"/about"}>{this.messages["about"]}</LinkTranslated>
          </li>
          <li>
            <LinkTranslated href={"/projects"}>{this.messages["projects"]}</LinkTranslated>
          </li>
          <li>
            <LinkTranslated href={"/team"}>{this.messages["team"]}</LinkTranslated>
          </li>
          <li>
            <LinkTranslated href={"/news"}>{this.messages["news"]}</LinkTranslated>
          </li>
          <li>
            <LinkTranslated href={"/media"}>{this.messages["media"]}</LinkTranslated>
          </li>
          <li>
            <LinkTranslated href={"/tools"}>{this.messages["tools"]}</LinkTranslated>
          </li>
          <li>
            <LinkTranslated href={"/contact"}>{this.messages["contact"]}</LinkTranslated>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navigation
