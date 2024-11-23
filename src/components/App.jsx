import "../styles/App.css";
import Header from "./header.jsx";
import Entry from "./Entry.jsx";
import entryData from "./EntryData.jsx";

function App() {
  const newEntryData = entryData.map((entry) =>
    entry.id < entryData.length ? (
      <>
        <Entry key={entry.id} {...entry} />
        <hr />
      </>
    ) : (
      <Entry key={entry.id} {...entry} />
    )
  );

  return (
    <>
      <Header />
      <div className="entryData">{newEntryData}</div>
    </>
  );
}

export default App;
