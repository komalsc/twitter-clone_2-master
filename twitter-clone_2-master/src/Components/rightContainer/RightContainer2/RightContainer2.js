import React, { useState } from "react";
import { Avatar } from "@mui/material";
import style from "./RightContainer2.module.css";
import CustomButton from "../../../Atom/Button/CustomButton";
import VerifiedIcon from '@mui/icons-material/Verified';

function Righthomebox2() {
  const [state, setState] = useState(false)
  const [toggle, setToggle] = useState(false)

  const handleSeeAll=()=>{
    setToggle(!toggle)
  }
  const handleClick = (id) => {
    const updatedFollowContainer = followContainer.map((item) => {
      if (item.id === id) {
        item.followed = !item.followed;
      }
      return item;
    });
    setFollowContainer(updatedFollowContainer);
  };
  const [followContainer, setFollowContainer] = useState([
    {
      id: 1,
      tag: <i class="far fa-solid fa-badge-check"></i>,
      src: "https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg",
      text: "Mr.Tweet",
      text2: "@elonmusk",
    },
    {
      id: 2,
      tag: <i class="fa fa-solid fa-badge-check"></i>,
      src: "https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg",
      text: "Bill-Gates",
      text2: "@billgates",
    },
    {
      id: 3,
      tag: <i class="fa fa-solid fa-badge-check"></i>,
      src: "https://pbs.twimg.com/profile_images/1511990640753618949/rZMGSR26_400x400.jpg",
      text: "Prof. feynman",
      text2: "@profFynman",
    },
    {
      id: 4,
      tag: <i class="fa fa-solid fa-badge-check"></i>,
      src: "https://pbs.twimg.com/profile_images/1380657780865044480/BBxmnji2_400x400.jpg",
      text: "kamla harris",
      text2: "@kamlaharis",
    },
  ]);
  return (
    <div className={style.container}>
      <h1>Who to follow</h1>
      <div className={style.main}>
        {followContainer.map((menu) => {
          return (
            <div className={style.wrapper}>
              <Avatar alt="Remy Sharp" src={menu.src} />
              <div className={style.img}>
                <h3>
                  {menu.text}
                  <span style={{ color: "black" }}> {menu.tag} </span><VerifiedIcon style={{color:"black",fontSize:"20px"}}/>
                </h3>
                <h6>{menu.text2}</h6>
              </div>
              <div className={style.btntxt}>
                <CustomButton
                  buttonText={menu.followed ? "Following" : "Follow"}
                  btnNext={() => handleClick(menu.id)}
                  key={menu.id}
                  customCss={style.follwButton}
                  disabled={menu.followed}
                />
              </div>
            </div>
          );
        })}
        <div className={style.btn2}>
          {/* <CustomButton
            className={style.btn2}
            buttonText={'see more' ? 'see less' : 'see more'}
            btnNext={() =>setState(!state)}
          /> */}
          <p onClick= {handleSeeAll}>{toggle ? 'Show less' : 'Show more'}</p>
        </div>
      </div>
    </div>
  );
}

export default Righthomebox2;




// const toggle =() =>{
//   setState(!state)
//   console.log('Following')
// }
// const handleClick =() =>{
//  setFollow(!follow)
 
// }