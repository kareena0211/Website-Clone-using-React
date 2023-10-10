import React from 'react'
import style from "./Section8.module.css"
// import image from "./folder/1.png";
const Section8 = () => {
  return (
    <>
      <section>
        <div className={style.sec}>
          <h2 className={style.headg}>One platform, endless possibilities</h2>
          <button className={style.bot}>See more examples</button>
        </div>

        <div className={style.imgSec}>
          <img
            src="/public/folder/1.png"
            className={style.imgSecs}
            alt="not found"
          />

          <img
            src="/public/folder/2.png"
            className={style.imgSecs}
            alt="not found"
          />

          <img
            src="/public/folder/3.png"
            className={style.imgSecs}
            alt="not found"
          />

          <img
            src="/public/folder/4.png"
            className={style.imgSecs}
            alt="not found"
          />
        </div>
      </section>
    </>
  );
}

export default Section8