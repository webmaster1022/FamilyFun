import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom'

export const Footer = () => {


    return (
        <div className="footer-container">

          

            <div className="footer-content">


                <div className="left">
                    <div className='logo'>    <h2 className="header-h2">Familyfun</h2> </div>
                    <div className="mission">Fantastic fun for our family!</div>
                </div>


                <hr/>
                <hr/>



                <div className="right">
                    <div className="copyright">  © 2018 FamilyFun, Inc. </div>
                    <Link to='/term-of-use'><div className="Terms of use">Terms of use</div></Link>
                    <Link to='/privacy'><div className="Privacy">Privacy</div></Link>
                </div>


            </div>

        </div>
    )
}