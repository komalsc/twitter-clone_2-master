import React from "react";

import style from "./TwitterPost.module.css";

import { Avatar } from "@mui/material";
import { tweetPosts } from "../../ConstData/ConstData";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SyncIcon from "@mui/icons-material/Sync";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PollIcon from "@mui/icons-material/Poll";
import UploadIcon from "@mui/icons-material/Upload";
import VerifiedIcon from '@mui/icons-material/Verified';

import { useState,useEffect } from "react";
import { useRecoilState } from "recoil";
import { isTweetPost ,userProfile} from "../../Recoil/Atom1/Atom";
import { useNavigate } from "react-router-dom";


export default function TwitterPost() {
  const[post,setPost]=useState(tweetPosts)
  const nevigate = useNavigate();
  const [likesCount, setLikesCount] = useState(0);
  //const[lpost,setLpost]=useState(tweetPosts.length)
  const[newPost,setNewPost] = useRecoilState(isTweetPost);
  const[newProfile,setNewProfile] = useRecoilState(userProfile);
 useEffect(() => {
  fetchData()
  
  },[newPost]);

function  fetchData()
  {
    setPost(tweetPosts)
  }
 
  function  fetchData()
  {
    setPost(tweetPosts)
  }

  function handleLike() {
    setLikesCount(likesCount + 1);
  }

  function handleUserProfile() {
    //setNewProfile()
    alert("kkkk")
  }
  
 function xyz (dataName)  {
    console.log(dataName);
   //console.log(dataPic);
    setNewProfile(dataName)
    nevigate("/Profile2")
    
    
    
   
  };
 

  return (
    <>
      {post.map((data) => {
        return (
          <div className={style.wrapper}>
            <div className={style.container1}>
              <div  onClick={ ()=>xyz(({
                name  : data.name,
                handlerName : data.handlerName  ,
                organization : data.organization,
                tweetText : data.tweetText,
                tweetPic : data.tweetPic,
              
                tweetCount : data.tweetCount,
                retweetCount : data.retweetCount,
                likesCount : data.likesCount,
                viewsCount : data.viewsCount,
                followers : data.followers,
                followings : data.followings,
              
                
                
              } )) } >
              
                <Avatar   className={style.avatar} src={data.tweetPic} />
               
              </div>

              <div className={style.innercontainer}>
                <span className={style.text}>
                  <h3>{data.name}<VerifiedIcon style={{color:"blue"}}/></h3>
                  
                </span>
                <h4>{data.handlerName}</h4>
                <h4>{data.tweetText}</h4>
              </div>
            </div>

            <div className={style.img}>
              <img
                style={{ width: "30rem", height: "30rem",borderRadius:"15px" }}
                alt="picture"
                src={data.tweetPic}
              />
            </div>
            <div className={style.icons}>
                  <span>
                    {data.tweetCount}
                    <ChatBubbleOutlineIcon />
                  </span>
                  <span>
                    {data.retweetCount}
                    <SyncIcon />
                  </span>
                  <span>
                    {data.likesCount}{likesCount}
                    <FavoriteBorderIcon />
                  </span>
                  <span>
                    {data.viewsCount}
                    <PollIcon />
                  </span>

                  <UploadIcon />
                </div>
          </div>
        );
      })}

    </>
  );
}
