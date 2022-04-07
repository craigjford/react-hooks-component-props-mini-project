import React from 'react';

function Article({id, title, preview, minutes, date="January 1, 1970"}) {
//  const beverageCup ="☕";
//  const bentoBox = "🍱";
//  const readMinutes = {minutes};
//  let minuteStr = ""
//  emojiArr = [];
//  if (minutes > 29) {
//    let cupNumber = ({minutes} / 10) + 1;
//    
//    for (let ii = 0, ii <= cupNumber; ii++) {
//        minuteStr = minuteStr + bentoBox;
//    }
//    minuteStr = minuteStr + readMinutes.toString() + " min read";
//  }  else {
//      let cupNumber = ({minutes} / 5) + 1;
//      for (let jj = 0, jj <= cupNumber; jj++) {
//          minuteStr = minuteStr + beverageCup;
//      }
//  }
//  minuteStr = minuteStr + readMinutes.toString() + " min read";
  return (
    <div key={id}>
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
        </article>
    </div>
  )
}

export default Article;
