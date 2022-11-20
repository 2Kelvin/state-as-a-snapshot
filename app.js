var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function Form() {
  var _React$useState = React.useState("Lora"),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      to = _React$useState2[0],
      setTo = _React$useState2[1];

  var _React$useState3 = React.useState("Hello"),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      message = _React$useState4[0],
      setMessage = _React$useState4[1];

  function handleSubmit(e) {
    e.preventDefault();
    setTimeout(function () {
      return alert("You said " + message + " to " + to);
    }, 1000);
  }

  return React.createElement(
    "form",
    { onSubmit: handleSubmit },
    React.createElement(
      "label",
      null,
      "To:",
      " ",
      React.createElement(
        "select",
        { value: to, onChange: function onChange(e) {
            return setTo(e.target.value);
          } },
        React.createElement(
          "option",
          { value: "Lora" },
          "Lora"
        ),
        React.createElement(
          "option",
          { value: "Jonas" },
          "Jonas"
        )
      )
    ),
    " ",
    React.createElement("textarea", {
      value: message,
      placeholder: "Write your message here",
      onChange: function onChange(e) {
        return setMessage(e.target.value);
      }
    }),
    React.createElement(
      "button",
      { type: "submit" },
      "Send"
    )
  );
}
export default function App() {
  return React.createElement(Form, null);
}

// react-connection
var root = ReactDOM.createRoot(document.getElementById("rootNode"));
root.render(React.createElement(App, null));

// since react state uses snapshots, changing the value from Alice to Bob after pressing send does not change the results because the snapshot had already been taken