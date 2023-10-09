import React from 'react'
import style from "./Section1.module.css"
const Section1 = () => {
  return (
    <>
      <div className={style.main}>
        <div className={style.main1}>
          <img
            src="https://priyanshu938.github.io/website-clone/assets/asset%201.png"
            className={style.img1}
            alt="not found"
          />
        </div>
        <div className={style.main2}>
          <ul>
            <a href="#" className={style.aLink}>
              Products
            </a>
            <a href="#" className={style.aLink}>
              Customer
            </a>
            <a href="#" className={style.aLink}>
              Pricing
            </a>
            <button className={style.buttonSignin}>Sign in</button>
            <button className={style.buttonSignup}>Sign Up</button>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Section1