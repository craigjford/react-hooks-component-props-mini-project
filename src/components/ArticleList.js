import React from 'react'
import Article from './Article';

function ArticleList({ posts }) {

    console.log('in ArticleList - posts = ', {posts})

    const articlePosts = posts.map((post) => {
        return (<Article key={post.id} title={post.title} preview={post.preview}
            minutes={post.minutes} date={post.date} />)
    })

  return (
    <main>
        {articlePosts}
    </main>
  )
}

export default ArticleList
