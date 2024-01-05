import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import PostListItem from "./PostListItem";
import { useSelector } from "react-redux";

function ListPosts() {
  const [allPosts, setAllPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearchInputChange = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchTerm.trim() === "") {
      setFilteredPosts(allPosts);
    } else {
      const filteredItems = allPosts.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPosts(filteredItems);
    }
  };

  const user = useSelector((store) => store.auth.user);
  const token = user?.token || "";

  function fetchPosts() {
    axios
      .get("https://medicalstore.mashupstack.com/api/medicine", {
        headers: { Authorization: "Bearer " + token },
      })
      .then((response) => {
        setAllPosts(response.data);
        setFilteredPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);

      });
  }

  useEffect(() => {
    if (user && user.token) {
      fetchPosts();
    } else {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className=" col-md-8">
            <form>
              <label>Search Medicine: &nbsp;</label>
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchInputChange}
              />{" "}
              &nbsp;
              <button
                className="btn btn-small btn-success"
                type="button"
                onClick={handleSearch}
              >
                Search
              </button>
              &nbsp;
            </form>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center my-4">Medicines</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-8 offset-2">
            <Link to="/blog/posts/create" className="btn btn-info mb-2">
              Create Medicine
            </Link>
            {filteredPosts.length === 0 ? (
              <p>No matching posts found.</p>
            ) : (
              filteredPosts.map((post) => (
                <PostListItem key={post.id} post={post} refresh={fetchPosts} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListPosts;










// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Navbar from "../Navbar";
// import PostListItem from "./PostListItem";
// import { useSelector } from "react-redux";

// function ListPosts() {
//   const [allPosts, setAllPosts] = useState([]); // Store all the fetched posts from the API
//   const [filteredPosts, setFilteredPosts] = useState([]); // Store the filtered posts based on search term
//   const [SearchTerm, setSearchTerm] = useState("");
//   let navigate = useNavigate();

//   const handleSearchInputChange = (event) => {
//     event.preventDefault();
//     setSearchTerm(event.target.value);
//   };

//   const handleSearch = (event) => {
//     event.preventDefault();
//     if (SearchTerm.trim() === "") {

//       setFilteredPosts(allPosts);
//     } else {
      
//       var filteredItems = allPosts.filter((item) =>
//         item.title.toLowerCase().includes(SearchTerm.toLowerCase())
//       );
//       setFilteredPosts(filteredItems);
//     }
//  }; 

// var user = useSelector(store=>store.auth.user);
// var token = user?.token;
//   function fetchPosts() {
//     axios
//       .get('https://medicalstore.mashupstack.com/api/medicine/search?keyword=oka' ,{
//              headers:{'Authorization':"Bearer "+ token}})
//       .then((response) => {
//         setAllPosts(response.data);
//       });
//   }

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   return (
//     <div>
//       <Navbar />
//       <br />
//       <br />
//       <div className="container">
//         <div className="row">
//           <div className="col-md-8">
//             <form>
//               <label>Search Blog: </label>
//               <input
//                 type="text"
//                 value={SearchTerm}
//                 onChange={handleSearchInputChange}
//               />{" "}
//               &nbsp;
//               <button
//                 className="btn btn-small btn-success"
//                 type="button"
//                 onClick={handleSearch}
//               >
//                 Search
//               </button>
//               &nbsp;
//             </form>
//           </div>
//         </div>
//       </div>
//       <div className="container">
//         <div className="row">
//           <div className="col-12">
//             <h1 className="text-center my-4">Blog</h1>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-8 offset-2">
//             <Link to="/blog/posts/create" className="btn btn-info mb-2">
//               Create Post
//             </Link>
//             {filteredPosts.length === 0 ? (
//               <p>No matching posts found.</p>
//             ) : (
//               filteredPosts.map((post) => (
//                 <PostListItem key={post.id} post={post} refresh={fetchPosts} />
//               ))
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ListPosts;






// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Navbar from "../Navbar";
// import PostListItem from "./PostListItem";
// import checkAuth from "../auth/checkAuth";
// import { useSelector } from "react-redux";

// function ListPost() {
//     var user = useSelector(store=>store.auth.user);
//     const token = user?.token;
//     let navigate = useNavigate();
//     var [posts, setPosts]=useState([]);
//     function fetchPosts(){
//         if (!user || !user.token) {
//             navigate("/login");
//             return;
//         }
//         axios.get('https://medicalstore.mashupstack.com/api/medicine',{
//             headers:{'Authorization':"Bearer "+ token}} ).then(response=>{
//             setPosts(response.data)
//         })

//     }
//     useEffect(()=>{
//         fetchPosts();
//     },[token]);

//     return (<div>
//         <Navbar></Navbar>
//         <div className="container">
//             <div className="row">
//                 <div className="col-12">
//                     <h1 className="text-center my-4">Medicines</h1>
//                 </div>
//             </div>
//             <div className="row">
//                 <div className="col-8 offset-2">
//                     <Link to="/blog/posts/create" className="btn btn-info mb-2">Create Post</Link>
//                     {posts.map(post =><PostListItem key={post.id} post={post} refresh={fetchPosts}/>)}
//                 </div>
//             </div>
//         </div>
//     </div>)
// }

// export default checkAuth(ListPost);























