import logo from './logo.svg';
import './App.css';
import First from './components/First';
import { DataProvider } from './context/context';
import { useState } from 'react';

function App() {
  const [data, setdata] = useState("Hello")
  return (
    <div className="App">
      <DataProvider value={data}>
        <First />
      </DataProvider>
    </div>
  );
}

export default App;
