import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function Profile() {
  return (
    <img
      src="https://www.icegif.com/wp-content/uploads/2023/10/icegif-808.gif"
      alt="Katherine Johnson"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>DANCE WITH ME!!</h1>
      <Profile />
      <Profile />
      <Profile />
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
