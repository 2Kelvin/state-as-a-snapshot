export default function App() {
  return React.createElement(
    "h1",
    null,
    "State as a Snapshot"
  );
}

// react-connection
var root = ReactDOM.createRoot(document.getElementById("rootNode"));
root.render(React.createElement(App, null));