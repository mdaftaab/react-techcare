import { useState } from 'react';

const LeftSidebar = ({ patients, onSelectPatient }) => {
  const [activeIndex, setActiveIndex] = useState(0); // Default active is the first patient

  const handleSelectPatient = (patient, index) => {
    setActiveIndex(index); // Update the active patient index
    onSelectPatient(patient); // Notify parent component
  };

  return (
    <aside id="left-sidebar">
      <div className="patients">
        <div className="top-bar">
          <h2>Patients</h2>
          <button className="add-patient">
            <img src="images/icons/search.svg" alt="" />
          </button>
        </div>
        <div className="patients-list">
          <ul>
            {patients.map((patient, index) => (
              <li
                key={index}
                className={index === activeIndex ? 'active' : ''} // Add "active" class for the selected patient
                onClick={() => handleSelectPatient(patient, index)}
              >
                <div className="patient">
                  <div className="patient-img">
                    <img src={patient.profile_picture} alt={patient.name} />
                  </div>
                  <div className="patient-info">
                    <h3>{patient.name}</h3>
                    <p>{patient.gender}, {patient.age}</p>
                  </div>
                </div>
                <span>
                  <img src="images/icons/more_horiz.svg" alt="" />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default LeftSidebar;