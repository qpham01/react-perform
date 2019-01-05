import React from "react";
import { classify } from "./utils";
import "./navigation.scss";

export class Nav extends React.Component {
  render() {
    const className =
      classify("nav", this.props.className) +
      (this.props.disabled ? " disabled" : "");
    return <nav className={className}>{this.props.children}</nav>;
  }
}

export class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const children = this.props.children,
      other = [],
      map = new Map();

    map[NavLink] = [];
    map[NavBarBrand] = [];

    for (let item of children) {
      if (map[item.type]) {
        map[item.type].push(item);
      } else {
        other.push(item);
      }
    }

    return (
      <nav className={classify("navbar", this.props.className)}>
        {map[NavBarBrand]}
        <Nav className="navbar-nav">{map[NavLink]}</Nav>
        {other}
      </nav>
    );
  }
}

export class NavBarBrand extends React.Component {
  render() {
    const props = this.props;
    return (
      <a {...props} className="navbar-brand">
        {props.children}
      </a>
    );
  }
}

export class NavLink extends React.Component {
  render() {
    const props = this.props;
    return (
      <a
        {...props}
        className={classify("nav", "-item -link " + (props.className || ""))}
      >
        {props.children}
      </a>
    );
  }
}
