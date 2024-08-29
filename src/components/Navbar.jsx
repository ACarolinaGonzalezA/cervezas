import { Link, useNavigate  } from 'react-router-dom'
import { routes } from '../utils/routes'


const Navbar = () => {
  return (
    <nav>
      <Link to={routes.home}>
        <h4>Home</h4>
      </Link>
      <Link to={routes.contacto}>
        <h4>Contacto</h4>
      </Link>
    </nav>
  )
}

export default Navbar