// import logo from './logo.svg';
import './App.css';
import Demo from './Components/Demo';
import DemoContext from './DemoContext';
import ErrorBoundry from './Components/ErrorBoundry';


function App() {
  return (
    <DemoContext.Provider value={{value:"this is demoContext"}}>
      <div className="App">
      <ErrorBoundry>
        <Demo name="shani">thiskprops</Demo>
      </ErrorBoundry>
      </div>
    </DemoContext.Provider>
  );
}

export default App;
