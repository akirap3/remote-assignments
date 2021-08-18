class FloatingMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        id="floating-menu"
        style={{ width: this.props.isfloatingMenu ? "50vw" : "0" }}
      >
        <div id="menuDiv">
          <img
            id="menu-exit"
            src="image/crossIcon.svg"
            onClick={() => this.props.ToggleFloatingMenu()}
          />
          <ul id="menuUl">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        </div>
      </div>
    );
  }
}

const Container = (props) => (
  <div>
    <Header
      isfloatingMenu={props.isfloatingMenu}
      ToggleFloatingMenu={props.ToggleFloatingMenu}
    />
    <Main
      sayHi={props.sayHi}
      toggle={props.toggle}
      handleToggle={props.handleToggle}
      ToggleText={props.ToggleText}
    />
  </div>
);

const Header = (props) => (
  <header>
    <nav className="heading">
      <p>Welcome Title/Logo</p>
      <ul className="nav-items">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
      <img
        src="image/menu-icon.svg"
        alt="menu icon"
        onClick={() => props.ToggleFloatingMenu()}
      />
    </nav>
  </header>
);

const Main = (props) => (
  <main>
    <WelcomMessage sayHi={props.sayHi} ToggleText={props.ToggleText} />
    <SectionTitle />
    <ContentSection />
    <Button toggle={props.toggle} handleToggle={props.handleToggle} />
    {!props.toggle && <ContentSection />}
  </main>
);

const WelcomMessage = (props) => (
  <section className="welcome-message">
    <h1 onClick={() => props.ToggleText()}>
      {props.sayHi ? "Have a Good Time!" : "Welcome Message"}
    </h1>
  </section>
);

const SectionTitle = (props) => (
  <section className="section-title">
    <h2>Section Title</h2>
  </section>
);

const ContentSection = (props) => {
  const arr = Array(4)
    .fill()
    .map((x, i) => i + 1);
  const content = arr.map((number) => (
    <div className="content">
      <h3>Content Box {number}</h3>
    </div>
  ));
  return <section className="content-section">{content}</section>;
};

const Button = (props) => (
  <button className="call-to-action" onClick={() => props.handleToggle()}>
    {props.toggle ? "Show Content" : "Call to Action"}
  </button>
);
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
    return (
      <div>
        <FloatingMenu
          isfloatingMenu={this.state.isfloatingMenu}
          ToggleFloatingMenu={this.ToggleFloatingMenu}
        />
        <Container
          isfloatingMenu={this.state.isfloatingMenu}
          ToggleFloatingMenu={this.ToggleFloatingMenu}
          sayHi={this.state.sayHi}
          toggle={this.state.toggle}
          handleToggle={this.handleToggle}
          ToggleText={this.ToggleText}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
