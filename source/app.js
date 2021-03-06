import React from "react";
import Button from "./bootstrap/button";
import { NavBar, NavLink, NavBarBrand } from "./bootstrap/navigation";
import Jumbotron from "./bootstrap/jumbotron";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "./appsource.scss";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.onReset = this.onReset.bind(this);
    this.counterClicked = this.counterClicked.bind(this);

    this.state = { click: 0, labels: [] };
  }

  onClick(e) {
    let labels = this.state.labels.concat([this.state.click]);
    this.setState({ click: this.state.click + 1, labels: labels });
  }

  onReset(e) {
    this.setState({ click: 0, labels: [] });
  }

  counterClicked(e) {
    this.setState({ click: this.state.click + 1 });
  }

  render() {
    let buttons = this.state.labels.map((value, i) => {
      return <Button key={value}>{value}</Button>;
    });

    return (
      <div>
        <NavBar>
          <NavBarBrand href="http://02geek.com">02GEEK</NavBarBrand>
          <NavLink href="#">This is Active</NavLink>
          <NavLink href="#">Link</NavLink>
          <NavLink onClick={this.counterClicked} href="#">
            {`Click count: ${this.state.click}`}
          </NavLink>
          <NavLink className="disabled" href="#">
            Disabled
          </NavLink>
          <input />
        </NavBar>
        <ReactCSSTransitionGroup
          transitionName="app"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          <Jumbotron className="-fluid custom" containerFluid={true}>
            <h1>Building React.js User Interfaces</h1>
            <p>with Bootstrap and SASS.</p>
            <p>
              <Button
                className="-primary"
                href="http://02geek.com/"
                target="_blank"
              >
                Other way
              </Button>
              <Button
                onClick={this.onReset}
                className="-danger-outline -sm"
                label="Rest"
              />
            </p>
            <Button onClick={this.onClick} className="-primary -lg -block">
              {this.state.click}
            </Button>
            <ReactCSSTransitionGroup
              transitionName="app"
              transitionEnterTimeout={5000}
              transitionLeaveTimeout={500}
            >
              {buttons}
            </ReactCSSTransitionGroup>
          </Jumbotron>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
