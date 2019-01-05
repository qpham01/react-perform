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
    const children = props.children,
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

    this.map = map;
    this.other = other;
  }

  render() {
    return (
      <nav className={classify("navbar", this.props.className)}>
        {this.map[NavBarBrand]}
        <Nav className="navbar-nav">{this.map[NavLink]}</Nav>
        {this.other}
      </nav>
    );
  }
}

export class NavBarBrand extends React.Component {
  render() {
    const props = this.props;
    return (
      <a className="navbar-brand" href={props.href}>
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
        className={classify("nav", "-item -link " + (props.className || ""))}
        href={props.href || "#"}
      >
        {props.children}
      </a>
    );
  }
}
