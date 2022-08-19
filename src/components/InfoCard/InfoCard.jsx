import "./InfoCard.scss";

const InfoCard = (props) => {
    return (
        <div>
      <h2>{props.name}</h2> 
      <h3>{props.tagline}</h3>
      <p>{props.description}</p>
      <p>{props.first_brewed}</p>
    </div>
    )
}

export default InfoCard; 
