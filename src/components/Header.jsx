import "../styles/Header.css";
import globeImage from "/src/assets/Globe.png";

function Header() {
  return (
    <div className="header">
      <img src={globeImage} alt="logo" />
      <h1>my travel journal.</h1>
    </div>
  );
}

export default Header;
