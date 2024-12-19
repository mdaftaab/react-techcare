

const DiagnosticList = ({ diagnostics }) => (
  <div className="diagnostic-list">
      <h2>Diagnostic List</h2>
      <div className="diagnostic-list-table">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {diagnostics.map((diagnosis, index) => (
              <tr key={index}>
                <td>{diagnosis.name}</td>
                <td>{diagnosis.description}</td>
                <td>{diagnosis.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  </div>
);

export default DiagnosticList;
