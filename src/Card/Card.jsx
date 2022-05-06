import './Card.css'

const Card  = ({ data, title }) => {
  return (
    <div className="card">
      <div className="title">{ title }: { data }</div>
      <div className="content">
        <img className="pic" src={require(`../assets/images/cloudy.png`)} alt="weather-pic"/>
      </div>
    </div>
  )
}

export default Card