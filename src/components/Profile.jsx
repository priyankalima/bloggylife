import React from 'react';
import Img from '../assets/myimage.jpeg';
import Data from '../assets/data.json';
import '../styles/Profile.css';
import Navbar from './Navbar';

const Profile =()=>{
   return(
       <>
       <Navbar/>
       <div className="profile-content">
           <div className="container">
           <div className="row p-posts">
               <div className="col-sm-6 col-md-6 col-lg-6 content-left ">
                   <img src={Img} width="100" alt="my image" 
                   style={{border:'3px solid #f1f1f1',borderRadius:'50%'}}/>
               </div>
               <div className="col-sm-6 col-md-6 col-lg-6 ">
                    <div className="card">
                        <div className="row">
                            <div className="col">
                                <span><strong>Posts</strong></span><br/>
                                <span>300</span>
                            </div>
                            <div className="col">
                            <span><strong>Articles</strong></span><br/>
                                <span>300</span>
                            </div>
                            <div className="col">
                            <span><strong>Quotes</strong></span><br/>
                                <span>300</span>
                            </div>
                            <div className="col">
                                <span><strong>Stories</strong></span><br/>
                                <span>300</span></div>
                        </div>
                    </div>
                    <div className="blog-personals">
                        <button className="btn btn-primary"><a href="https://itsmybloggylife.blogspot.com">My Blogs</a></button>
                    <span><a href=""><i className="fa fa-facebook"></i></a></span>
                  <span><a href=""><i className="fa fa-linkedin"></i></a></span>
                  <span><a href=""><i className="fa fa-telegram"></i></a></span></div>
                    
               </div>
           </div>
           <div className="about">
               <p>Hello Everyone,</p>
               <p>I am a Developer,UI/UX designer and content writer.</p>
               <p>Creating New things is my passion</p>
               <p>I love to sing,dance,creating,designing and so on to try.</p>
           </div>
       </div>
       <section className="main-section">
         <div className="container ">
             <button className="posts">posts</button>
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
     <span style={{color:'#999',padding:'20px 0 10px 0'}}>All Rights Reserve @Bloggy_Life_2021</span>
       </div>
       </>
   )
}
export default Profile;
