import { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Step1RepName from './components/Step1RepName';
import Step3Result from './components/Step3Result';
import './App.css';

function App() {
  const [historyDetails, setHistoryDetails] = useState(null);

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-wrapper">
        <TopBar />
        <main className="main-content">
          <div className="steps-container">
            <Step1RepName onDetailsFetched={setHistoryDetails} />
            <div id="result">
              <Step3Result transactions={historyDetails} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
