import {
  /*BrowserRouter*/ RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
} from "react-router-dom";

import BlogLayout from "./pages/BlogLayout";
import BlogPostsPage, { loader as blogPostsLoader } from "./pages/BlogPosts";
import NewPostPage from "./pages/NewPost";
import PostDetailPage, { loader as blogPostLoader } from "./pages/PostDetail";
import RootLayout from "./components/RootLayout";
import WelcomePage from "./pages/Welcome";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      {" "}
      {/* 가장 최상위 부모에서 ErrorHandling */}
      {/* 가장 최상 Routes->Route */}
      <Route index element={<WelcomePage />} />
      {/* domain이 /인경우 path가 없는 index의 Route가 실행 */}
      <Route path="/blog" element={<BlogLayout />}>
        <Route index element={<BlogPostsPage />} loader={blogPostsLoader} />
        {/* 🔵loader props */}
        <Route
          path=":id"
          element={<PostDetailPage />}
          loader={blogPostLoader} // dynamic router
          errorElement={<p>An error occured !</p>}
        />
      </Route>
      <Route path="/blog/new" element={<NewPostPage />} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
    // <BrowserRouter>
    //   <RootLayout>
    //     <Routes>
    //       <Route path="/" element={<WelcomePage />} />
    //       <Route path="/blog" element={<BlogLayout />}>
    //         <Route index element={<BlogPostsPage />} loader={blogPostLoader} />
    //         {/* 🔵loader props */}
    //         <Route path=":id" element={<PostDetailPage />} />
    //       </Route>
    //       <Route path="/blog/new" element={<NewPostPage />} />
    //     </Routes>
    //   </RootLayout>
    // </BrowserRouter>
  );
}

export default App;
