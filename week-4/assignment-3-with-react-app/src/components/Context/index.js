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
    this.setState((prevState) => {
      return {
        toggle: !prevState.toggle,
      };
    });
  };

  ToggleFloatingMenu = () => {
    this.setState((prevState) => {
      return {
        isfloatingMenu: !prevState.isfloatingMenu,
      };
    });
  };

  ToggleText = () => {
    this.setState((prevState) => {
      return {
        sayHi: !prevState.sayHi,
      };
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
