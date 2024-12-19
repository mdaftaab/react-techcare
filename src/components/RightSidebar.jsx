

const RightSidebar = ({ patientDetails, labResults }) => (
  <aside id="right-sidebar">
    <div className="patient-card-box">
      <div className="patient-card-img">
        <img src={patientDetails.profile_picture} alt={patientDetails.name} />
        <h4 className="name">{patientDetails.name}</h4>
      </div>
        <div className="patient-card-info">
          <div className="patient-details-list">
              <ul>
                  <li>
                      <div className="icon">
                          <img src="images/icons/BirthIcon.svg" alt=""/> 
                      </div>
                      <div className="patient-info">
                          <h3>Date Of Birth</h3>
                          <p>{patientDetails.date_of_birth}</p>
                      </div>
                  </li>
                  <li>
                      <div className="icon">
                          <img src="images/icons/FemaleIcon.svg" alt=""/> 
                      </div>
                      <div className="patient-info">
                          <h3>Gender</h3>
                          <p>{patientDetails.gender}</p>
                      </div>
                  </li>
                  <li>
                      <div className="icon">
                          <img src="images/icons/PhoneIcon.svg" alt=""/> 
                      </div>
                      <div className="patient-info">
                          <h3>Contact Info.</h3>
                          <p>{patientDetails.phone_number}</p>
                      </div>
                  </li>
                  <li>
                      <div className="icon">
                          <img src="images/icons/PhoneIcon.svg" alt=""/> 
                      </div>
                      <div className="patient-info">
                          <h3>Emergency Contacts</h3>
                          <p>{patientDetails.emergency_contact}</p>
                      </div>
                  </li>
                  <li>
                      <div className="icon">
                          <img src="images/icons/InsuranceIcon.svg" alt=""/> 
                      </div>
                      <div className="patient-info">
                          <h3>Insurance Provider</h3>
                          <p>{patientDetails.insurance_type}</p>
                      </div>
                  </li>
              </ul>
          </div>
      </div>
      <div className="patient-card-action">
          <button className="btn-show">Show All Information</button>
      </div>
    </div>

    <div className="lab-results">
      <h2>Lab Results</h2>
      <div className="lab-results-list">
        <ul>
          {labResults.map((result, index) => (
            <li key={index}>
                <p>{result}</p>
                <img src="images/icons/download.svg" alt="Download" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  </aside>
);

export default RightSidebar;
