import { useState } from 'react';
import { getTransactionHistoryList } from '../api/mockApi';
import './StepCard.css';

export default function Step1RepName({ onHistoryIdFetched }) {
  const [submissionId, setSubmissionId] = useState('');
  const [selectedType, setSelectedType] = useState('submission');
  const [historyList, setHistoryList] = useState(null);
  const [selectedHistoryId, setSelectedHistoryId] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFetch = async () => {
    if (!submissionId.trim()) return;

    setLoading(true);
    setHistoryList(null);
    setSelectedHistoryId(null);
    try {
      const result = await getTransactionHistoryList(submissionId);
      setHistoryList(result.TransactionHistory);
    } catch (error) {
      console.error('Error fetching history:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectRow = (historyId) => {
    setSelectedHistoryId(historyId);
    onHistoryIdFetched?.(historyId);
  };

  return (
    <div className="step-card">
      <div className="step-header">
        <span className="step-number">1</span>
        <h3>Rep Name</h3>
      </div>

      <div className="step-content">
        <div className="form-group">
          <label>Type</label>
          <div className="radio-group">
            <label className="radio-label">
              <input
                type="radio"
                value="submission"
                checked={selectedType === 'submission'}
                onChange={(e) => setSelectedType(e.target.value)}
              />
              Submission
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="submissionId">Submission ID</label>
          <input
            id="submissionId"
            type="text"
            value={submissionId}
            onChange={(e) => setSubmissionId(e.target.value)}
            placeholder="Enter submission ID"
          />
        </div>

        <button
          className="fetch-btn"
          onClick={handleFetch}
          disabled={loading || !submissionId.trim()}
        >
          {loading ? 'Fetching...' : 'Fetch History List'}
        </button>

        {historyList && historyList.length > 0 && (
          <div className="history-list">
            <p className="history-list-hint">Select a row to use its History ID in Step 2</p>
            <table className="result-table">
              <thead>
                <tr>
                  <th>History ID</th>
                  <th>Transaction #</th>
                  <th>Activity</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {historyList.map((item) => (
                  <tr
                    key={item.HistoryID}
                    className={selectedHistoryId === item.HistoryID ? 'row-selected' : 'row-selectable'}
                    onClick={() => handleSelectRow(item.HistoryID)}
                  >
                    <td><code className="result-value">{item.HistoryID}</code></td>
                    <td>{item.TransactionNumber}</td>
                    <td>{item.UserActivity}</td>
                    <td>{item.ActivityDateTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="api-indicator">
        <code>getTransactionHistoryList(submissionId)</code>
      </div>
    </div>
  );
}
