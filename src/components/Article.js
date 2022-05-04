import React from 'react'

function Article({ title, preview, minutes, date="January 1, 1970"}) {
    
    const coffeeIcon = "☕"
    const boxIcon = "🍱";
    //let cupNumber = 0;
    let coffeeStr = "";


    if (minutes > 29) {
        const cupNumber = (minutes / 10) + 1
        for(let i = 1; i < cupNumber + 1; i++) {
            coffeeStr = coffeeStr + boxIcon
        }       
    } else {
        const cupNumber = (minutes / 5) + 1
        for(let i = 1; i < cupNumber + 1; i++) {
            coffeeStr = coffeeStr + coffeeIcon
        }
    }
    console.log('coffee = ', coffeeStr)

  return (
    <article>
        <h3>{ title }</h3>
        <small>{ date } - { coffeeStr } { minutes } min read</small>
        <p>{ preview }</p>
    </article>
  )
}

export default Article