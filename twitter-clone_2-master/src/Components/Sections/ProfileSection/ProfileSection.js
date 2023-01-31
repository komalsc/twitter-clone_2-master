import React from "react";
import style from "./ProfileSection.module.css";
// import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import WestIcon from "@mui/icons-material/West";
import CustomButton from "../../../Atom/Button/CustomButton";
import { useNavigate } from "react-router-dom";
import RightContainer2 from "../../rightContainer/RightContainer2/RightContainer2"

function ProfileSection() {
   const nevigate = useNavigate();

  
  let Data = JSON.parse(localStorage.getItem("user0"));
 
  return (
    <>
    <div className={style.wrapper}>
      <div className={style.feed__header}>
        <p onClick={()=> nevigate("/") }><WestIcon /></p>
        <h2>{Data.Name}</h2>
      </div>
        <img className={style.container} src="https://t3.ftcdn.net/jpg/02/85/95/46/360_F_285954627_rjiQEJalQTvAXL9aKrN3pHrbXHYEjSCR.jpg" />
      <div>
        <span className={style.Avatarsection}>
          <img
            className={style.img}
            src="https://www.fashionlady.in/wp-content/uploads/2017/12/mahira-khan-age.jpg"/>
          <CustomButton customCss={style.btn} buttonText={"Edit profile"} />
        </span>
      </div>

      <div className={style.textcontaint}>
        <h4>{`${"Name:-"}${Data.Name}`}</h4>
        <h5>{`${"@"}${Data.Name}`}</h5>
      <div className={style.follow}>
        <h5>Followers :- 2000</h5>
        <h5>Following :- 154</h5>
        </div>
      </div>
    </div>
    <hr style={{border:'2px solid black'}} />

    <RightContainer2
    />
    </>
  );
}

export default ProfileSection;
