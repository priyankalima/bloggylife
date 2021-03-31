import React from 'react';
import '../styles/Blogger.css';
import Data from '../assets/data.json';
import Img from '../assets/myimage.jpeg';
import Svg from '../assets/svg1.svg';
import Article from './Article';
import Quote from './Quote';
import Stories from './Stories';
import Blog from './Blog';
import Img1 from '../assets/no_content.svg';
const Blogger =()=>{
return(
    <>
     {/* this is a navabar */}
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
            <div className="profile">
                <a href="/profile"><img src={Img} width="40" alt="my image is here" 
                style={{borderRadius:'50%',border:'2px solid #f1f1f1',cursor:'pointer'}}/></a>
            </div>
        </div>
     </nav>
     {/* this ia a header */}
     <header className="header-content">
         <div className="row content">
           <div className="col-sm-6 col-md-6 col-lg-6 content-left">
               <img src={Svg} width="300"/>
           </div>
           <div className="col-sm-6 col-md-6 col-lg-6 content-right">
               <h3 style={{color:'#111'}}>Welcome To <span style={{color:'#f72585'}}>Bloggy Life</span></h3>
               <q style={{color:'#111'}}>The Only Source Of  <span style={{color:'#f72585'}}>Knowledge is Experience</span></q><br/><br/>
               <button className="btn btn-primary"><a href="mailto:priyankalima99@gmail.com">Mail Me</a></button>
               <button className="btn btn-primary"><a href="/profile">Learn More</a></button>
               <p style={{paddingTop:'15px',fontSize:'12px',color:'#111'}}>If you want a content writer or website designer</p>
               </div>
        </div>
         
     </header>
     {/* this is an main section */}
     <section className="main-section">
         <Article/>
         <div className="container post-content">
             <button className="posts">Recent Posts</button>
             <div className="line"></div>
             <div className="blog-container">

         {Data.map((posts)=>{
           return <div className="row blog-post ">
               <div className="col-sm-6 col-md-6 col-lg-6 ">
                   <img src={posts.image}  className="image"/>
                </div>
               <div className="col-sm-6 col-md-6 col-lg-6">
                <h3>{posts.name}</h3>
               <p>{posts.text}</p>
               <button className="btn btn-primary"><a href={posts.link}>Go to post</a></button>
               </div>
               
           </div>
         })}
         </div>
         </div>
     </section>
      {/* this is second section for quotes */}
     <section className="main-section">
         <Quote/>
         <div className="container post-content">
             <button className="posts">Recent Posts</button>
             <div className="line"></div>
             <div className="blog-container">
             
         {Data.map((posts)=>{
           return <div className="row blog-post ">
               <div className="col-sm-6 col-md-6 col-lg-6 ">
                   <img src={Img1} width="200"  />
                </div>
               <div className="col-sm-6 col-md-6 col-lg-6">
                <h3 style={{paddingTop:'50px'}}>{posts.noContent}</h3>
               </div>
               
           </div>
         })}
         </div>
         </div>
     </section>
     {/* this is third section for storis */}
     <section className="main-section">
         <Stories/>
         <div className="container post-content">
             <button className="posts">Recent Posts</button>
             <div className="line"></div>
             <div className="blog-container">
             
         {Data.map((posts)=>{
           return <div className="row blog-post ">
               <div className="col-sm-6 col-md-6 col-lg-6 ">
                   <img src={Img1} width="200"  />
                </div>
               <div className="col-sm-6 col-md-6 col-lg-6">
                <h3 style={{paddingTop:'50px'}}>{posts.noContent}</h3>
               </div>
               
           </div>
         })}
         </div>
         </div>
     </section>
     {/* this is forth section for personal blog */}
     <section className="main-section">
         <Blog/>
         <div className="container post-content">
             <button className="posts">Recent Posts</button>
             <div className="line"></div>
             <div className="blog-container">
             
         {Data.map((posts)=>{
           return <div className="row blog-post ">
               <div className="col-sm-6 col-md-6 col-lg-6 ">
                   <img src={Img1} width="200"  />
                </div>
               <div className="col-sm-6 col-md-6 col-lg-6">
                <h3 style={{paddingTop:'50px'}}>{posts.noContent}</h3>
               </div>
               
           </div>
         })}
         </div>
         </div>
     </section>
     
     {/* this is a footer */}
     <footer>

         <div className="footer-content">
             <div className="container">
                  <span style={{color:'#999'}}>All Rights Reserve @Bloggy_Life_2021</span>
                  <span><a href=""><i className="fa fa-facebook"></i></a></span>
                  <span><a href=""><i className="fa fa-linkedin"></i></a></span>
                  <span><a href=""><i className="fa fa-telegram"></i></a></span>
             </div>
            
         </div>
         <nav className="bottom-menu">
            <div className="container">
         <ul className="nav">
                    <li className="navbar-list">
                        <a className="nav-link active" href="/blogger" ><i className="fa fa-home"><br/>home</i></a>
                    </li>
                    <li className="navbar-list">
                        <a className="nav-link" href="https://itsmyarticlelife.blogspot.com/"><i className="fa fa-pencil-square-o"> <br/>articles</i></a>
                    </li>
                    <li className="navbar-list">
                        <a className="nav-link" href="https://itsmyquotelife.blogspot.com/"><i className="fa fa-quote-right"><br/> quotes</i></a>
                    </li>
                    <li className="navbar-list">
                        <a className="nav-link" href="https://itsmystorielife.blogspot.com/"><i className="fa fa-book"> <br/>stories</i></a>
                    </li>
                </ul>
         </div>
         </nav>
     </footer>
    </>
)
}
export default Blogger;
