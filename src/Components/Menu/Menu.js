import React from 'react';
import './Menu.css'

const Menu = () => {
    return (
        // <div className="menu d-flex justify-content-between align-items-center">
        //     <span>
        //         <a href="/home">Home</a>
        //         <a href="/courses">Courses</a>
        //         <a href="/favorite">For Students</a>
        //         <a href="/favorite">For Enterprise</a>
        //     </span>
        //     <span>
        //         <a href="/login">Log in</a>
        //         <a href="/signup">Sign up</a>
        //     </span>
        // </div>
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#25252B'}}>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
        
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active ">
                        <a className="nav-link text-primary border border-primary rounded mr-2" href="/home">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-primary border border-primary rounded mr-2" href="/courses">Courses</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-primary border border-primary rounded mr-2" href="/for-students">For Students</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-primary border border-primary rounded" href="/for-enterprise">For Enterprise</a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <button className="btn btn-outline-primary my-2 my-sm-0 mr-2" type="submit">Log in</button>
                    <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Sign up</button>
                </form>
            </div>
        </nav>
    );
};

export default Menu;