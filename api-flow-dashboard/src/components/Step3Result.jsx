import './StepCard.css';

export default function Step3Result({ transactions }) {
  return (
    <div className="step-card">
      <div className="step-header">
        <span className="step-number">3</span>
        <h3>Result</h3>
      </div>
      
      <div className="step-content">
        {!transactions || transactions.length === 0 ? (
          <div className="empty-state">
            No transaction details yet. Complete Steps 1 & 2 to see results.
          </div>
        ) : (
          <table className="result-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx) => (
                <tr key={tx.id}>
                  <td>{tx.id}</td>
                  <td>${tx.amount}</td>
                  <td>
                    <span className={`status-badge status-${tx.status.toLowerCase()}`}>
                      {tx.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className="api-indicator">
        <code>→ Final Output</code>
      </div>
    </div>
  );
}
