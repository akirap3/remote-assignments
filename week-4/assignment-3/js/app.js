class FloatingMenu extends React.Component {
  render() {
    return (
      <div id="floating-menu">
        <div id="menuDiv">
          <img id="menu-exit" src="image/crossIcon.svg" />
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

class Container extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav class="heading">
          <p>Welcome Title/Logo</p>
          <ul class="nav-items">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
          <img src="image/menu-icon.svg" alt="menu icon" />
        </nav>
      </header>
    );
  }
}

class Main extends React.Component {
  render() {
    return (
      <main>
        <WelcomMessage />
        <SectionTitle />
        <ContentSection />
        <Button />
        <ContentSection />
      </main>
    );
  }
}

class WelcomMessage extends React.Component {
  render() {
    return (
      <section class="welcome-message">
        <h1>Welcome Message</h1>
      </section>
    );
  }
}

class SectionTitle extends React.Component {
  render() {
    return (
      <section class="section-title">
        <h2>Section Title</h2>
      </section>
    );
  }
}

class ContentSection extends React.Component {
  render() {
    return (
      <section class="content-section">
        <div class="content">
          <h3>Content Box 1</h3>
        </div>
        <div class="content">
          <h3>Content Box 2</h3>
        </div>
        <div class="content">
          <h3>Content Box 3</h3>
        </div>
        <div class="content">
          <h3>Content Box 4</h3>
        </div>
      </section>
    );
  }
}

class Button extends React.Component {
  render() {
    return <button class="call-to-action">Call to Action</button>;
  }
}

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

ReactDOM.render(<App />, document.getElementById("root"));
