import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import image from './jim.jpg';
import styles from './index.module.css';
import {Mycomp,Demo1} from './Mycomp';
import {Parent,Column} from './Mycomp1';
import backgroundVideo from './video.mp4';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
   <video autoPlay loop muted id='video'>
    <source src={backgroundVideo} type='video/mp4'/>
  </video> 
   <h1 style={{color:"red",textAlign:"center",backgroundColor:"yellow"}}>BRITANNIA</h1> 
  <h1 className={styles.jim}>JIM JAM</h1>


  <img src={image}></img>
  <Mycomp/>
  <Demo1/>
 <Parent/>
 <iframe width="420" height="315" float="right"
src="https://www.afaqs.com/news/advertising/jimmy-and-jammy-have-grown-up-is-jimjam-no-longer-for-kids">
</iframe>

  </>
);

reportWebVitals();
