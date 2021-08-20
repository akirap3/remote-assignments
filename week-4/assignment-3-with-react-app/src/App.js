import React from "react";

import FloatingMenu from "./components/FloatingMenu";
import Container from "./components/Container/Container";

class App extends React.Component {
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
    const { isfloatingMenu, sayHi, toggle } = this.state;
    return (
      <div>
        <FloatingMenu
          isfloatingMenu={isfloatingMenu}
          ToggleFloatingMenu={this.ToggleFloatingMenu}
        />
        <Container
          ToggleFloatingMenu={this.ToggleFloatingMenu}
          sayHi={sayHi}
          toggle={toggle}
          handleToggle={this.handleToggle}
          ToggleText={this.ToggleText}
        />
      </div>
    );
  }
}

export default App;
