import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
import dataBase from "../../datas/data-base.json"
import "../../utils/style/card.css"


const Card = () => {
  return (
      <div className="gallery">
          {dataBase.map((record) => {
              const { id, cover, title } = record;
              return (
                  <div className="card-logement" key={id}>
                      <Link to={{ pathname: "/Logement", search: "?_id="+id }} >
                          <img className='cardCover' src={cover} alt={title} />
                          <h3>{title}</h3>
                      </Link>
                  </div>
              )
          })}
      </div>
  )
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
}

Card.defaultProps = {
  label: '',
  title: '',
  cover: '',
}

export default Card