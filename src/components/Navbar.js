import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className={`navbar bg-${props.mode === 'light'?'light':'dark'} navbar-expand-lg bg-body-tertiary`} data-bs-theme={`${props.mode === 'light'?'light':'dark'}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">{props.aboutText}</a>
          </li>
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
        <span className='greenmode mx-40 me-4' style={{backgroundColor: 'green', width: '20px', minWidth: '20px', height: '20px', borderRadius:'50%', cursor:'pointer'}}  onClick={props.toggleGreenMode}></span>
        <span className='purplenmode mx-40 me-4' style={{backgroundColor: 'purple', width: '20px', minWidth: '20px', height: '20px', borderRadius:'50%',cursor:'pointer'}}  onClick={props.togglePurpleMode}></span>
        <span className='yellowmode mx-40 me-4' style={{backgroundColor: 'yellow', width: '20px', minWidth: '20px', height: '20px', borderRadius:'50%',cursor:'pointer'}}  onClick={props.toggleYellowMode}></span>
        <span className='darkmode mx-40 me-4' style={{backgroundColor: 'black', width: '20px', minWidth: '20px', height: '20px', borderRadius:'50%',cursor:'pointer'}}  onClick={props.toggleMode}></span>
        
        <div className="form-check form-switch">        
  {/* <input className="form-check-input"  onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" /> */}
  <label className={`form-check-label text-${props.mode=='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">{props.mode=='light'?'Enable Dark Mode':'Disable Dark mode'}</label>
  
</div>
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes  = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About us here'
  };