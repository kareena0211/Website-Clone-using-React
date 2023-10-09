import React from 'react'
import style from "./Section5.module.css"
const Section5 = () => {
  return (
    <>
      <div className={style.featurecont}>
        <div className={style.imgcont}>
          <img
            src="https://priyanshu938.github.io/website-clone/assets/asset%2018.png"
            alt="not found"
          />
        </div>
        <div className={style.data}>
          <h4 className={style.head4data}>Effortless validation for</h4>
          <h3 className={style.head3data}>Design professionals</h3>
          <p className={style.para2}>
            Test interfaces, interaction flows, iconography and more, to help
            you create intuitive and delightful experiences for your users.
          </p>
        </div>
      </div>
    </>
  );
}

export default Section5