import { useState } from 'react';
import { getTransactionHistoryList } from '../api/mockApi';
import './StepCard.css';

export default function Step1RepName({ onHistoryIdFetched }) {
  const [submissionId, setSubmissionId] = useState('');
  const [selectedType, setSelectedType] = useState('submission');
  const [historyId, setHistoryId] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFetch = async () => {
    if (!submissionId.trim()) return;
    
    setLoading(true);
    try {
      const result = await getTransactionHistoryList(submissionId);
      setHistoryId(result.historyId);
      onHistoryIdFetched?.(result.historyId);
    } catch (error) {
      console.error('Error fetching history:', error);
    } finally {
      setLoading(false);
    }
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
          {loading ? 'Fetching...' : 'Fetch History ID'}
        </button>

        {historyId && (
          <div className="result-box">
            <span className="result-label">History ID:</span>
            <code className="result-value">{historyId}</code>
          </div>
        )}
      </div>

      <div className="api-indicator">
        <code>getTransactionHistoryList(submissionId)</code>
      </div>
    </div>
  );
}
