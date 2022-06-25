import React from 'react'

function Article({ title, date="January 1, 1970", preview, minutes}) {

    const mugImage = "☕️";
    const bentoImage = "🍱"
    let imageCtr = 0;
    let mugString = ""

    if (minutes < 30) {
        imageCtr = Math.ceil(minutes / 5);
        for (let i = 0; i < imageCtr; i++) {
            mugString = mugString + mugImage;
        }
    } else {
        imageCtr = Math.ceil(minutes / 10);
        for (let i = 0; i < imageCtr; i++) {
            mugString = mugString + bentoImage;
        }
    }

    mugString = mugString + " " + minutes + " min read";

  return (
    <article>
        <h3>{title}</h3>
        <small>{date} - {mugString}</small>
        <p>{preview}</p>
    </article>        
  )
}

export default Article;