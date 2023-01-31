import React from "react";
import { useState } from "react";
import style from "./Trends.module.css";

import Dialog2 from "../../Dialog2/Dialog2";
import CustomButton from "../../../Atom/Button/CustomButton"

const Trends = () => {
  const [isNotIntrested, setIsNotIntrested] = useState([
    {
      id: 1,
      isNotIntrested: false,
      country: "Trending in India",
      keyword: "#Elon_Musk",
      totalKeywords: "100000k Tweets",
    },
    {
      id: 2,
      isNotIntrested: false,
      country: "Trending in India",
      keyword: "#Lionel_Messi",
      totalKeywords: "6000k Tweets",
    },
    {
      id: 3,
      isNotIntrested: false,
      country: "Trending in Sports",
      keyword: "#Neymar_Junior",
      totalKeywords: "2560k Tweets",
    },
    {
      id: 4,
      isNotIntrested: true,
      country: "Trending in Sports",
      keyword: "#Cristiano_Ronaldo",
      totalKeywords: "2.5b Tweets",
    },
    {
      id: 5,
      isNotIntrested: false,
      country: "Trending in Sports",
      keyword: "#Ratan_Tata",
      totalKeywords: "2000k Tweets",
    },
  ]);
  const [selectedId, setSelectedId] = useState(null);
  const updateId = (id) => setSelectedId(id);

  const HandleClick = () => {
    const tempArr = [];

    isNotIntrested.forEach((el) => {
      if (el.id !== selectedId) {
        tempArr.push(el);
      }
    });

    console.log("temp arr ", tempArr);
    setIsNotIntrested(tempArr);
  };


  return (
    <div className={style.keywords}>
      <div className={style.key}>
        <div className={style.keyword__heading}>
          <h4 className={style.heading4}>What's happening</h4>
        </div>
        {isNotIntrested.map((keyword) => {
          return (
            <div
              className={style.container}
              onClick={() => {
                updateId(keyword.id);
              }}
            >
              <div key={keyword.id}>
                <div className={style.country}>{keyword.country}</div>
                <div className={style.keyword__name}>
                  <strong>{keyword.keyword}</strong>
                </div>
                <div className={style.keyword__tweets}>
                  {keyword.totalKeywords}
                </div>
              </div>
              <div className={style.btn}>
                <Dialog2 onClick={HandleClick} />
              </div>
           
            </div>
          );
        })}
        <div className={style.btn2}> 
           <CustomButton
           className={style.btn2}
        buttonText={"see more"}
        btnNext={()=>
        alert("see more things")
        }
            />
        </div>
      </div>
    
    </div>
  );
};

export default Trends;