import React, { Component } from "react";

const MYCONTEXT = React.createContext();
export const Consumer = MYCONTEXT.Consumer;

export class Provider extends Component {
  state = {
    isfloatingMenu: false,
    sayHi: false,
    toggle: false,
  };

  handleToggle = () => {
    this.setState({
      toggle: !this.state.toggle,
    });
  };

  ToggleFloatingMenu = () => {
    this.setState({
      isfloatingMenu: !this.state.isfloatingMenu,
    });
  };

  ToggleText = () => {
    this.setState({
      sayHi: !this.state.sayHi,
    });
  };

  render() {
    return (
      <MYCONTEXT.Provider
        value={{
          isfloatingMenu: this.state.isfloatingMenu,
          sayHi: this.state.sayHi,
          toggle: this.state.toggle,
          handleToggle: this.handleToggle,
          ToggleFloatingMenu: this.ToggleFloatingMenu,
          ToggleText: this.ToggleText,
        }}
      >
        {this.props.children}
      </MYCONTEXT.Provider>
    );
  }
}
