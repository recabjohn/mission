import { useState, useEffect } from 'react';
import { getHistoryDetails } from '../api/mockApi';
import './StepCard.css';

export default function Step2History({ initialHistoryId, onDetailsFetched }) {
  const [historyId, setHistoryId] = useState(initialHistoryId || '');
  const [loading, setLoading] = useState(false);

  // Update local state when prop changes
  useEffect(() => {
    if (initialHistoryId) {
      setHistoryId(initialHistoryId);
    }
  }, [initialHistoryId]);

  const handleFetch = async () => {
    if (!historyId.trim()) return;
    
    setLoading(true);
    try {
      const result = await getHistoryDetails(historyId);
      onDetailsFetched?.(result);
    } catch (error) {
      console.error('Error fetching details:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="step-card">
      <div className="step-header">
        <span className="step-number">2</span>
        <h3>History</h3>
      </div>
      
      <div className="step-content">
        <div className="form-group">
          <label htmlFor="historyId">History ID</label>
          <input
            id="historyId"
            type="text"
            value={historyId}
            onChange={(e) => setHistoryId(e.target.value)}
            placeholder="Enter or paste History ID"
          />
        </div>

        <button 
          className="fetch-btn"
          onClick={handleFetch}
          disabled={loading || !historyId.trim()}
        >
          {loading ? 'Fetching...' : 'Fetch Transaction Details'}
        </button>
      </div>

      <div className="api-indicator">
        <code>getHistoryDetails(historyId)</code>
      </div>
    </div>
  );
}
