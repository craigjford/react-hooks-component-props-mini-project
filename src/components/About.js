import React from 'react'

function About({ about, image="https://via.placeholder.com/215" }) {
  console.log('about = ', about)
  console.log('image = ', image)
    return (
    <aside>
        <img src={image} alt="blog logo" />
        <p>{about}</p>
    </aside>
  )
}

export default About