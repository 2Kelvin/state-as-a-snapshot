function Form() {
  const [to, setTo] = React.useState("Lora");
  const [message, setMessage] = React.useState("Hello");

  function handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => alert(`You said ${message} to ${to}`), 1000);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        To:{" "}
        <select value={to} onChange={(e) => setTo(e.target.value)}>
          <option value="Lora">Lora</option>
          <option value="Jonas">Jonas</option>
        </select>
      </label>{" "}
      <textarea
        value={message}
        placeholder="Write your message here"
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}
export default function App() {
  return <Form />;
}

// react-connection
const root = ReactDOM.createRoot(document.getElementById("rootNode"));
root.render(<App />);

// since react state uses snapshots, changing the value from Alice to Bob after pressing send does not change the results because the snapshot had already been taken
