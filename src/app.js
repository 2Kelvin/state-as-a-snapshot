function Counter() {
  const [number, setNumber] = React.useState(0);

  return (
    <div className="counter">
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 3);
        }}
      >
        +3
      </button>
    </div>
  );
}

export default function App() {
  return <Counter />;
}

// react-connection
const root = ReactDOM.createRoot(document.getElementById("rootNode"));
root.render(<App />);
