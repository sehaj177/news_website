import React, { Component } from 'react'
import { Link } from 'react-router-dom'


import './Navbar.css'

export class Navbar extends Component {



    render() {
        return (
            <nav className={`navbar navbar-expand-lg navbar-${this.props.mode} bg-${this.props.mode} fixed-top`} >
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/General" >Sach News</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">General</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="Entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="Sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="Business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="Health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="Science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="Sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="Technology">Technology</Link>
                            </li> */}

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categories
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/Entertainment">Entertainment</Link></li>
                                    <li><Link className="dropdown-item" to="/Business">Business</Link></li>
                                    <li><Link className="dropdown-item" to="/General">General</Link></li>
                                    <li><Link className="dropdown-item" to="/Health">Health</Link></li>
                                    <li><Link className="dropdown-item" to="/Science">Science</Link></li>
                                    <li><Link className="dropdown-item" to="/Sports">Sports</Link></li>
                                    <li><Link className="dropdown-item" to="/Technology">Technology</Link></li>
                                    {/* {/* <li><hr className="dropdown-divider"/></li> */}
                                    
                                </ul>
                            </li>
                            {/* ADD COUNTRY SELECTOR AS  A PROP */}
                        </ul>
                        <div className={`form-check form-switch text-${this.props.mode==='light'?'dark':'light'}`}>
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={this.props.onToggle}/>
                                <label className="form-check-label" forhtml="flexSwitchCheckDefault">Dark/Light Mode</label>
                        </div>

                    </div>
                </div>
            </nav>
        )
    }


}
