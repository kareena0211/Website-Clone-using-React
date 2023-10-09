import React from 'react'
import style from "./Section9.module.css"
const Section9 = () => {
  return (
    <>
      <div className={style.footerSec}>
        <div className={style.mains}>
          <div className={style.boxed}>Start testing today</div>
          <p className={style.paras}>Take the guesswork out of design decision</p>
          <button className={style.getStarteds}>Get started</button>
        </div>
      </div>
    </>
  );
}

export default Section9