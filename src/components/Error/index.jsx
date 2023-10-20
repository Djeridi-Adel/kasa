import ErrorLogo from '../../assets/404.png'
import '../../utils/style/error.css'
import { Link } from 'react-router-dom'


function Error() {
    return (
      <div className='ErrorWrapper'>
        <img className='ErrorLogo' src={ErrorLogo} alt=''></img>
        <h1 className='ErrorTitle'>Oups! Il semblerait que la page que vous cherchez n'existe pas.</h1>
        <Link to="/">
        <div className='ErrorSubtitle'>Retournez sur la page d'accueil</div>
      </Link>
      </div>
    )
  }
  
  export default Error