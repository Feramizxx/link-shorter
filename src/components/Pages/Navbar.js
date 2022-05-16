import React from 'react'
import Button from '../UI/Button';


const  Navbar=()=> {
  return (
<>
<nav className="navbar navbar-s navbar-expand-lg ml-5 mr-5 py-3 navbar-light">
  <div className="container-fluid ml-5  p-2">
    <a className="navbar-brand  font-weight-bold" href="#">Shortly</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse  navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item ml-3">
          <a className="nav-link" aria-current="page" href="#">Features</a>
        </li>
        <li className="nav-item ml-3">
          <a className="nav-link" href="#">Pricings</a>
        </li>
        <li className="nav-item ml-3">
          <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">Recources</a>
        </li>
      </ul>
      <form className="d-flex  me-0">
        <Button   textContext={'Login'}/>
        <Button textContext={'Sign Up'}/>
      </form>
    </div>
  </div>
</nav>


</>
  )
}
export default Navbar;
