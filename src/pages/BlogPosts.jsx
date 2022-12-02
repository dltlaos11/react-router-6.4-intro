// import { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";
import Posts from "../components/Posts";
import { getPosts } from "../util/api";

function BlogPostsPage() {
  // const [error, setError] = useState();
  // const [posts, setPosts] = useState();
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   async function loadPosts() {
  //     setIsLoading(true);
  //     try {
  //       const posts = await getPosts();
  //       setPosts(posts);
  //     } catch (err) {
  //       setError(err.message);
  //     }
  //     setIsLoading(false);
  //   }

  //   loadPosts();
  // }, []);

  const loaderData = useLoaderData(); // loader function이 promise를 retrun하면 promise를 resolve하는 data

  return (
    <>
      <h1>Our Blog Posts</h1>
      {/* {isLoading && <p>Loading posts...</p>}
      {error && <p>{error}</p>} */}
      {/*!error && posts && */ <Posts blogPosts={/*posts*/ loaderData} />}
      {/* react hooks들이 불필요, 데이터가 존재후 페이지가 render됨 */}
    </>
  );
}

export default BlogPostsPage;

export function loader() {
  return getPosts(); // BlogPostsPage에서 이용가능하도록 data를 가져옴,
}
