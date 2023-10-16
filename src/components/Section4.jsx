import React from 'react'
import style from "./Section4.module.css"


const cardData = [
  {
    id: 1,
    imageLink:
      "https://priyanshu938.github.io/website-clone/assets/asset%2011.svg",
    heading: "Card Sorting",
    content: "Discover how people group and label information.",
    buttonText: "Learn More",
  },

  {
    id: 2,
    imageLink:
      "https://priyanshu938.github.io/website-clone/assets/asset%2013.svg",
    heading: "Card Sorting",
    content: "Discover how people group and label information.",
    buttonText: "Learn More",
  },

  {
    id: 3,
    imageLink:
      "https://priyanshu938.github.io/website-clone/assets/asset%2014.svg",
    heading: "Card Sorting",
    content: "Discover how people group and label information.",
    buttonText: "Learn More",
  },

  {
    id: 4,
    imageLink:
      "https://priyanshu938.github.io/website-clone/assets/asset%2014.svg",
    heading: "Card Sorting",
    content: "Discover how people group and label information.",
    buttonText: "Learn More",
  },

  {
    id: 5,
    imageLink:
      "https://priyanshu938.github.io/website-clone/assets/asset%2016.svg",
    heading: "Card Sorting",
    content: "Discover how people group and label information.",
    buttonText: "Learn More",
  },

  {
    id: 6,
    imageLink:
      "https://priyanshu938.github.io/website-clone/assets/asset%2017.svg",
    heading: "Card Sorting",
    content: "Discover how people group and label information.",
    buttonText: "Learn More",
  },
];



const Section4 = () => {
  return (
    <>
      <div className="important">
        <div className={style.headCase}>
          <h1 className={style.mainHeading}>
            Your user research Swiss Army knife
          </h1>
          <button className={style.btn}>See All features </button>
        </div>

        <div className={style.cardCase}>


          {
            cardData.map(({id, imageLink ,heading , content, buttonText}) => {
              return (
                <div className={style.card} key={id}>
                  <img src={imageLink} className={style.cardImage} />
                  <h2 style ={{ color: "#183b56"}}>{heading}</h2>
                  <p className={style.cardContent}>{content}</p>
                  <button className={style.cardBtn}>{buttonText}</button>
                </div>
              );
            })
          }









        </div>
      </div>
    </>
  );
}

export default Section4