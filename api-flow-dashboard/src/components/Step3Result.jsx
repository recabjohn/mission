import './StepCard.css';

export default function Step3Result({ transactions }) {
  const account = transactions?.Account;

  return (
    <div className="step-card">
      <div className="step-header">
        <span className="step-number">2</span>
        <h3>Result</h3>
      </div>

      <div className="step-content">
        {!account ? (
          <div className="empty-state">
            No details yet. Complete Steps 1 &amp; 2 to see results.
          </div>
        ) : (
          <div className="account-details">
            <section className="detail-section">
              <h4 className="detail-section-title">Account</h4>
              <table className="result-table">
                <tbody>
                  <tr>
                    <td className="detail-key">Name</td>
                    <td>{[account.FirstName1, account.MiddleName3, account.LastName2].filter(Boolean).join(' ')}</td>
                  </tr>
                  <tr>
                    <td className="detail-key">Account ID</td>
                    <td><code className="result-value">{account.AccountID}</code></td>
                  </tr>
                  <tr>
                    <td className="detail-key">Change Type</td>
                    <td>
                      <span className={`status-badge status-${account.ChangeType?.toLowerCase().replace(' ', '-')}`}>
                        {account.ChangeType}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="detail-key">Effective Date</td>
                    <td>{account.ChangeEffectiveDate}</td>
                  </tr>
                  <tr>
                    <td className="detail-key">Added Date</td>
                    <td>{account.AddedDt}</td>
                  </tr>
                  <tr>
                    <td className="detail-key">Written Premium</td>
                    <td>${account.WrittenPremium}</td>
                  </tr>
                  <tr>
                    <td className="detail-key">Last Modified</td>
                    <td>{account.LastModifiedDate}</td>
                  </tr>
                </tbody>
              </table>
            </section>

            {account.AccountAddress?.length > 0 && (
              <section className="detail-section">
                <h4 className="detail-section-title">Address</h4>
                <table className="result-table">
                  <tbody>
                    <tr>
                      <td className="detail-key">Full Address</td>
                      <td>{account.AccountAddress[0].FullAddress}</td>
                    </tr>
                    <tr>
                      <td className="detail-key">City</td>
                      <td>{account.AccountAddress[0].City}</td>
                    </tr>
                    <tr>
                      <td className="detail-key">State</td>
                      <td>{account.AccountAddress[0].StateRegionCode}</td>
                    </tr>
                    <tr>
                      <td className="detail-key">Country</td>
                      <td>{account.AccountAddress[0].Country}</td>
                    </tr>
                  </tbody>
                </table>
              </section>
            )}

            {account.SelectedLineOfBusiness?.length > 0 && (
              <section className="detail-section">
                <h4 className="detail-section-title">Line of Business</h4>
                <table className="result-table">
                  <thead>
                    <tr>
                      <th>LOB</th>
                      <th>Product</th>
                      <th>Version</th>
                      <th>Change Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {account.SelectedLineOfBusiness.map((lob) => (
                      <tr key={lob.ID}>
                        <td>{lob.LOBName}</td>
                        <td>{lob.ProductNumber}</td>
                        <td>{lob.ProductVerNumber}</td>
                        <td>{lob.ChangeType}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
            )}

            {account.Insured?.length > 0 && (
              <section className="detail-section">
                <h4 className="detail-section-title">Insured</h4>
                <table className="result-table">
                  <tbody>
                    <tr>
                      <td className="detail-key">Name</td>
                      <td>{account.Insured[0].InsuredName}</td>
                    </tr>
                    <tr>
                      <td className="detail-key">DOB</td>
                      <td>{account.Insured[0].Dob || '—'}</td>
                    </tr>
                    <tr>
                      <td className="detail-key">Address</td>
                      <td>{account.Insured[0].InsuredFullAddress}</td>
                    </tr>
                    <tr>
                      <td className="detail-key">Existing Insured</td>
                      <td>{account.Insured[0].ExistingInsuredYN}</td>
                    </tr>
                  </tbody>
                </table>
              </section>
            )}
          </div>
        )}
      </div>

      <div className="api-indicator">
        <code>→ Final Output</code>
      </div>
    </div>
  );
}
