/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link } from "gatsby"
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"

const MenuItems = [
  {
    path: "/about",
    title: "O nás",
  },
  {
    path: "/projects",
    title: "Projekty",
  },
  {
    path: "/team",
    title: "Tým",
  },
  {
    path: "/news",
    title: "Aktuality",
  },
  {
    path: "/media",
    title: "Média",
  },
  {
    path: "/publications",
    title: "Publikace",
  },
  {
    path: "/tools",
    title: "Nástroje",
  },
  {
    path: "/contact",
    title: "Kontakt",
  },
]

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showMenu: false }
    this.handleToggleClick = this.handleToggleClick.bind(this)
  }

  handleToggleClick() {
    this.setState(state => ({
      showMenu: !state.showMenu,
    }))
  }

  render() {
    const listMenuItems = MenuItems.map((menuItem, index) => (
      <ListLink key={index} to={menuItem.path}>
        {menuItem.title}
      </ListLink>
    ))
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
          {listMenuItems}
        </ul>
      </nav>
    )
  }
}

export default Navigation

const navStyle = {
  menu: {
  },
  theme: {
    display: ["block", "block", "block", "none"],
    p: " 25px 20px 20px",
  },
  border: {
    borderTop: "1px solid transparent",
    display: ["block", "block", "block", "none"],
  },
}
