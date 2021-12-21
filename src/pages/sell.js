import React from 'react';
import { Container, Typography } from '@material-ui/core';

function Sell() {
  // const [posts, setPosts] = useState([]);
  // const key = 'xMjRSheumFDOR3KhqDuV81Ytp9OZSAhRpQRsZo5A';
  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const response = await fetch(
  //       `http://api.auto.ria.com/categories/2/marks/9/models?api_key=${key}`
  //     );
  //     const postsData = await response.json();
  //     setPosts(postsData);
  //   };
  //   fetchPosts();
  // }, []);
  // const usePosts = posts.map((post, id) => {
  //   return (
  //     <ol key={id}>
  //       <li>
  //         {post.name} {post.value}
  //       </li>
  //     </ol>
  //   );
  // });
  return (
    <Container>
      <Typography>Take the credit of our dream</Typography>
      {/* <div>{posts && usePosts}</div> */}
    </Container>
  );
}

export default Sell;
