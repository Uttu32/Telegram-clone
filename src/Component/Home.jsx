
import LeftSideBar from '../HomeComponent/LeftSideBar'
import React from "react";
import RightSideBar from "../HomeComponent/RightSideBar";
import { useRecoilState } from "recoil";
import Styles from "./Home.module.css";
import MainComponent from '../HomeComponent/MainComponent'
import { isUserLoggedIn } from '../Data/AtomData/Atom'
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import CreateTweet from "../HomeComponent/CreateTweet";



const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isUserLoggedIn)
  const navigate = useNavigate()

  useEffect(() => {
    if(isLoggedIn=== false){
    navigate('/signin')
    }
  },[])
  let Right = [

      {
        id: 1,
        "Title ": "bibendum",
        Content: "luctus",
      },
      {
        id: 2,
        "Title ": "dolor",
        Content: "diam",
      },
      {
        id: 3,
        "Title ": "ac",
        Content: "scelerisque",
      },
      {
        id: 4,
        "Title ": "lacus",
        Content: "ante",
      },
    ];


  return (

    <div className={Styles.mainWrapper}>
    
      
      <div className={Styles.container}>


        <div className={Styles.leftDiv}>
        <LeftSideBar/>
      </div>
      <div className={Styles.centerDiv}>
      <CreateTweet />
          <MainComponent />
          </div>
      <div className={Styles.RightMain}>
        <h3>What's Happening</h3>
        {Right.map((ele) => (
          <RightSideBar Message={ele["Title "]} content={ele.Content} />
        ))}
        <button>Show More</button>
      </div>
     </div>

    </div>
  );
};

export default Home;
