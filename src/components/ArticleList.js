import React from 'react';
import Article from './Article';

function ArticleList({posts}) {

  console.log(posts);   
  const articleData = posts.map((post) => { 
        return (<Article key={post.id} title= {post.title} preview={post.preview} 
               minutes={post.minutes} date={post.date} />);
  });
  return (
    <div>
        <main>
            {articleData}
        </main>        
    </div>
  )
}

export default ArticleList;
