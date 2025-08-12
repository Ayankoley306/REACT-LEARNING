const container = document.querySelector(".container");
console.log("js initilized....");


function UserInput({ inputName, SetInputName, isSubmitted, setIsSubmitted }) {

  function enterName(event) {
    SetInputName(event.target.value);
  }

  function showName() {
    setIsSubmitted(true);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={enterName}
      />
      <button onClick={showName}>Enter</button>

      {isSubmitted && <Message Name={inputName} />}
    </div>
  );
}

function Message({ Name }) {
  return (
    <>
      <h1>Hello, {Name}!</h1>
    </>
  );
}

function App() {
  const [inputName, SetInputName] = React.useState("");
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  return (
    <>
      <UserInput inputName={inputName} SetInputName={SetInputName} isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted} />
    </>
  )
}


ReactDOM.createRoot(container).render(<App />);