function UserInput({ guestName, setGuestName }) {
  const [inputName, setInputName] = React.useState("");

  function savename(event) {
    setInputName(event.target.value)
  }

  function updateGuestList() {

    if (inputName === '') {
      alert("Please Enter a name first");
      return;
    }

    const newGuest = [
      ...guestName, {
        Name: inputName,
        id: crypto.randomUUID()
      }
    ]

    setGuestName(newGuest);

    setInputName('')
  }

  function clearAllGuest() {
    const emptyList = [];
    setGuestName(emptyList);
  }

  return (
    <div className="header">
      <input
        type="text"
        placeholder="Enter Guests Name"
        onChange={savename}
        value={inputName}
        autoFocus
        className="input"
      />
      <button
        onClick={updateGuestList}
        disabled={!inputName.trim()}
        className="add">ADD</button>
      <button
        onClick={clearAllGuest}
        className="clear-all">Clear All</button>
    </div>
  );
}


function List({ Name, onDelete, index }) {
  return (
    <p className="list">
      <span
        className="index"
      >{index + 1}.</span>
      <span
        className="guest-name"
      >{Name}</span>
      <button
        onClick={onDelete}
        className="delete"
      >X</button>
    </p>
  );
}


function ShowGuestList({ guestName, setGuestName }) {
  function handleDelete(id) {
    const updatedList = guestName.filter(guest => guest.id !== id);
    setGuestName(updatedList)
  }
  return (
    <>
      {guestName.map((guest, index) => {
        return (
          <List
            key={guest.id}
            Name={guest.Name}
            index={index}
            onDelete={() => { handleDelete(guest.id) }}
          />
        );
      })}
    </>
  );
}


function App() {
  const [guestName, setGuestName] = React.useState([{ Name: 'Ayan koley', id: crypto.randomUUID() }]);

  return (
    <>
      <UserInput guestName={guestName} setGuestName={setGuestName} />
      <h1 className="guest-list">Guest List</h1>
      {guestName.length === 0 && <p className="list">Empty List</p>}
      <ShowGuestList guestName={guestName} setGuestName={setGuestName} />
    </>
  );
}

const container = document.querySelector(".container");
ReactDOM.createRoot(container).render(<App />);