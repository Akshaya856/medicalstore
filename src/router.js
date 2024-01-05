import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AboutUs from "./component/AboutUs";
import CreatePost from "./component/blog/CreatePost";
import ViewPost from "./component/blog/ViewPost";
import EditPost from "./component/blog/EditPost";
import ListPost from "./component/blog/ListPost";
import SignUp from "./component/auth/SignUp";
import Login from "./component/auth/Login";


const router = createBrowserRouter([
    { path: '', element: <App/> },
    { path: 'aboutus', element: <AboutUs/> },
    { path: "blog/posts", element: <ListPost /> },
    { path : 'blog/posts/create' , element : <CreatePost/> },   
    { path: 'blog/posts/:postId', element: <ViewPost/>},
    { path : '/blog/posts/:postId/edit', element: <EditPost/>},
    { path : 'signup', element: <SignUp/>},
    { path : 'login', element: <Login/>}
  
]);

export default router;