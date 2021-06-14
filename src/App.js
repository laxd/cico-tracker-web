import './App.css';
import CalendarDisplay from "./Components/CalendarDisplay";
import RecordingsContextProvider from "./Components/RecordingsContextProvider";

function App() {
  return (
      <div className="App">
          <header className="App-header">
              <RecordingsContextProvider>
                  <CalendarDisplay/>
              </RecordingsContextProvider>
          </header>
      </div>
  );
}

export default App;
