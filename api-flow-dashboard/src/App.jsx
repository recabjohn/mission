import { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Step1RepName from './components/Step1RepName';
import Step2History from './components/Step2History';
import Step3Result from './components/Step3Result';
import './App.css';

function App() {
  const [historyId, setHistoryId] = useState('');
  const [historyDetails, setHistoryDetails] = useState(null);

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-wrapper">
        <TopBar />
        <main className="main-content">
          <div className="flow-indicator">
            <span>Input</span>
            <span className="arrow">→</span>
            <span>API Call</span>
            <span className="arrow">→</span>
            <span>Output</span>
            <span className="arrow">→</span>
            <span>API Call</span>
            <span className="arrow">→</span>
            <span>Final Output</span>
          </div>
          
          <div className="steps-container">
            <Step1RepName onHistoryIdFetched={setHistoryId} />
            <div className="step-connector">
              <div className="connector-line"></div>
              <div className="connector-arrow">↓</div>
            </div>
            <Step2History
              initialHistoryId={historyId}
              onDetailsFetched={setHistoryDetails}
            />
            <div className="step-connector">
              <div className="connector-line"></div>
              <div className="connector-arrow">↓</div>
            </div>
            <Step3Result transactions={historyDetails} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
