import { Link } from "react-router-dom"
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link className='nav-link ' to='/'>Home</Link>
        </li>
        <li class="nav-item">
         <Link className="nav-link" to='/About'>About</Link>
        </li>
        <li class="nav-item">
         <Link className="nav-link" to='/Contact'>Contact</Link>
        </li>
        <li class="nav-item">
         <Link className="nav-link" to='/Signup'>Signup</Link>
        </li>
        <li class="nav-item">
         <Link className="nav-link" to='/Login'>Login</Link>
        </li>
       
        {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}

       <NavDropdown title="Dropdown" id="basic-nav-dropdown">
           <Link className="nav-link" to='/Login'>
              <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
            </Link>

            <Link className="nav-link" to='/Signup'>
              <NavDropdown.Item href="#action/3.2">
                Signup
              </NavDropdown.Item>

              </Link>
            
              <NavDropdown.Divider />
             
            </NavDropdown>

              <Link className="nav-link" to='/Feedback'>
      <button type="button" name="" id="" class="btn btn-danger">Feedback</button>
      </Link>
      </ul>

 
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-dark" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
