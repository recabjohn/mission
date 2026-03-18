import { useState } from 'react';
import { getTransactionHistoryList, getHistoryDetails } from '../api/mockApi';
import './StepCard.css';

export default function Step1RepName({ onDetailsFetched }) {
  const [idValue, setIdValue] = useState('');
  const [selectedType, setSelectedType] = useState('submission');
  const [historyList, setHistoryList] = useState(null);
  const [loadingList, setLoadingList] = useState(false);
  const [loadingDetail, setLoadingDetail] = useState(null);

  const idLabels = { submission: 'Submission ID', quote: 'Quote ID', policy: 'Policy ID' };
  const idPlaceholders = { submission: 'Enter submission ID', quote: 'Enter quote ID', policy: 'Enter policy ID' };

  const handleFetch = async () => {
    const id = idValue.trim();
    if (!id) return;

    setLoadingList(true);
    setHistoryList(null);
    onDetailsFetched?.(null);
    try {
      const result = await getTransactionHistoryList(id, selectedType);
      setHistoryList(result.TransactionHistory);
    } catch (error) {
      console.error('Error fetching history:', error);
    } finally {
      setLoadingList(false);
    }
  };

  const handleSelectHistory = async (historyId) => {
    setLoadingDetail(historyId);
    try {
      const result = await getHistoryDetails(historyId);
      onDetailsFetched?.(result);
    } catch (error) {
      console.error('Error fetching details:', error);
    } finally {
      setLoadingDetail(null);
    }
  };

  const canFetch = idValue.trim();

  return (
    <div className="step-card">
      <div className="step-header">
        <span className="step-number">1</span>
        <h3>Rep Name</h3>
      </div>

      <div className="step-content">
        <div className="form-group">
          <label htmlFor="type">Type</label>
          <select
            id="type"
            value={selectedType}
            onChange={(e) => { setSelectedType(e.target.value); setIdValue(''); setHistoryList(null); onDetailsFetched?.(null); }}
            className="type-select"
          >
            <option value="submission">Submission</option>
            <option value="quote">Quote</option>
            <option value="policy">Policy</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="idValue">{idLabels[selectedType]}</label>
          <input
            id="idValue"
            type="text"
            value={idValue}
            onChange={(e) => setIdValue(e.target.value)}
            placeholder={idPlaceholders[selectedType]}
          />
        </div>

        <div className="action-buttons">
          <button
            className="action-btn action-btn-reset"
            onClick={() => { setIdValue(''); setHistoryList(null); onDetailsFetched?.(null); }}
            disabled={loadingList}
          >
            Reset
          </button>
          <button
            className="action-btn action-btn-search"
            onClick={handleFetch}
            disabled={loadingList || !canFetch}
          >
            {loadingList ? 'Searching...' : 'Search'}
          </button>
        </div>

        {historyList && historyList.length > 0 && (
          <div className="history-list">
            <p className="history-list-hint">Click a History ID to view its details</p>
            <table className="result-table">
              <thead>
                <tr>
                  <th>History ID</th>
                  <th>Submission #</th>
                  <th>Transaction #</th>
                  <th>Activity</th>
                  <th>Updated By</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {historyList.map((item) => (
                  <tr key={item.HistoryID} className="row-selectable">
                    <td>
                      <a
                        href="#result"
                        className="history-id-link"
                        onClick={(e) => { e.preventDefault(); handleSelectHistory(item.HistoryID); }}
                      >
                        {loadingDetail === item.HistoryID ? 'Loading…' : item.HistoryID}
                      </a>
                    </td>
                    <td>{item.SubmissionNumber}</td>
                    <td>{item.TransactionNumber}</td>
                    <td>{item.UserActivity}</td>
                    <td>{item.UpdatedBy}</td>
                    <td>{item.ActivityDateTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="api-indicator">
        <code>getTransactionHistoryList(id) → getHistoryDetails(historyId)</code>
      </div>
    </div>
  );
}
