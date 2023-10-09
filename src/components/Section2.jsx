import React from 'react'
import style from "./Section2.module.css"

const Section2 = () => {
  return (
    <>
      <div className={style.maincontainer}>
        <div className={style.maincontainer1}>
          <h1 className={style.heading}>Design confidently.</h1>
          <p className={style.para}>
            UsabilityHub is a remote user research platform that takes the
            guesswork out of design decisions by validating them with real
            users.
          </p>
          <button className={style.getstarted}>Get Started</button>
        </div>
        <div className={style.maincontainer2}>
          <img
            src="https://priyanshu938.github.io/website-clone/assets/asset%202.png"
            alt="not found"
          />
        </div>
      </div>
    </>
  );
}

export default Section2