import Nav from '../components/Nav'
import data from '../data.json';

const Header = ({ logo, profile }) => (
  <header>
    <div id="logo">
      <img src={logo} alt="Logo" />
    </div>
    <Nav menuItems={data.menuItems} />
    <div id="profile-menu">
        <div className="profile">
            <div className="patient-img">
                <img src={profile.image} alt={profile.name} />
            </div>
            <div className="patient-info">
              <h3>{profile.name}</h3>
              <p>{profile.designation}</p>
            </div>
        </div>
        <div className="menu">
            <img src="images/icons/settings.svg" alt="Setting" />
            <img src="images/icons/more_vert.svg" alt="More" />
        </div>
    </div>
  </header>
);

export default Header;
