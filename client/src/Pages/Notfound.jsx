import {FaExclamationTriangle} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Notfound() {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
        <FaExclamationTriangle className='text-danger' size='5em'/>
        <h1>404</h1>
        <p className='lead'>Sorry, You Are Not supposed to be here</p>
        <Link to={'/'}  className="btn btn-primary">
            Go Back To home
    </Link>
    </div>
  )
}

export default Notfound