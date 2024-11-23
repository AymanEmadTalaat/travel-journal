import "../styles/Entry.css";
import locationLogo from "../assets/marker.png";

function Entry({
  id,
  locationImg,
  country,
  googleMapsLink,
  locationName,
  date,
  description,
}) {
  return (
    <>
      <div className="group" key={id}>
        <div className="locationImg-container">
          <img className="locationImg" src={locationImg} alt={locationName} />
        </div>

        <div>
          <div>
            <img
              className="locationLogo"
              src={locationLogo}
              alt="location image"
            />
            <span className="country">{country}</span>

            <a target="_blank" href={googleMapsLink}>
              View on Google Maps
            </a>
          </div>

          <h2>{locationName}</h2>
          <span className="date">{date}</span>

          <p>{description}</p>
        </div>
      </div>
    </>
  );
}

export default Entry;
