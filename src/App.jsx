import { useEffect, useState } from 'react';
import Header from './components/Header';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import DiagnosisHistory from './components/DiagnosisHistory';
import DiagnosticList from './components/DiagnosticList';
import { fetchPatients } from './services/api';

const App = () => {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPatients = async () => {
      try {
        const data = await fetchPatients();
        setPatients(data);
        setSelectedPatient(data[0]); // Default selection
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getPatients();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <main>
      <Header
        logo="/images/logo.svg"
        profile={{
          name: "Dr. Jose Simmons",
          designation: "General Practitioner",
          image: "/images/senior-woman.png",
        }}
      />
    <div id="main">
      <LeftSidebar patients={patients} onSelectPatient={setSelectedPatient}/>
      <div id="content">
        {selectedPatient && (
          <>
            <DiagnosisHistory data={selectedPatient.diagnosis_history} />
            <DiagnosticList diagnostics={selectedPatient.diagnostic_list} />
          </>
        )}
      </div>
      <RightSidebar patientDetails={selectedPatient} labResults={selectedPatient.lab_results} />
    </div>
    </main>
  );
};

export default App;
