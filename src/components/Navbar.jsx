import React from 'react'
import '../styles/Blogger.css';
import Img from '../assets/myimage.jpeg';

const Navbar =()=>{
    return(
        <>
       <nav className="navbar">
        <div className="container">
            <div className="style-div">
            <a href="/blogger">
                    <span style={{color:'#f72585',fontSize:'25px',fontWeight:'bolder'}}>Bloggy</span>
                    <span style={{color:'#fec5bb',fontWeight:'bolder'}}>Life</span>
                </a>
            </div>
            <div>
                <ul className="nav">
                    <li className="navbar-list">
                        <a className="nav-link active" href="/blogger"><i className="fa fa-home"></i> Home</a>
                    </li>
                    <li className="navbar-list">
                        <a className="nav-link" href="https://itsmyarticlelife.blogspot.com/"><i className="fa fa-pencil-square-o"></i> Articles</a>
                    </li>
                    <li className="navbar-list">
                        <a className="nav-link" href="https://itsmyquotelife.blogspot.com/"><i className="fa fa-quote-right"></i> Quotes</a>
                    </li>
                    <li className="navbar-list">
                        <a className="nav-link" href="https://itsmystorielife.blogspot.com/"><i className="fa fa-book"></i> Stories</a>
                    </li>
                </ul>
            </div>
            <div>
                <img src={Img} width="40" alt="my image is here" 
                style={{borderRadius:'50%',border:'2px solid #f1f1f1',cursor:'pointer'}}/>
            </div>
        </div>
     </nav>
        </>
    )
}
export default Navbar;