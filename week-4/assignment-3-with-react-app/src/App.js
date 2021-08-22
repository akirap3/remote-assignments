import React from "react";

import FloatingMenu from "./components/FloatingMenu";
import Container from "./components/Container/Container";

class App extends React.Component {
  render() {
    return (
      <div>
        <FloatingMenu />
        <Container />
      </div>
    );
  }
}

export default App;
