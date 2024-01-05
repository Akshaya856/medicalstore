import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import checkAuth from "../auth/checkAuth";
import { useSelector } from "react-redux";

function CreatePost() {
    var user = useSelector(store=>store.auth.user);
    var token = user?.token
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [expiry_date, setExpiry_date] = useState('');
    var navigate = useNavigate()
    function addPost() {
        axios.post('https://medicalstore.mashupstack.com/api/medicine',{
            name: name,
            company: company,
           expiry_date : expiry_date
        },{
            headers:{'Authorization':"Bearer "+ token}}).then(response=>{
            navigate('/blog/posts')
        })
    }
    return (<div>
        <Navbar></Navbar>
        <div className="container">
            <div className="row">
                <div className="col-8 offset-2 bg-secondary mt-5 pb-4">
                   
                    <h1 className="text-center text-warning">Create Medicine</h1>
                    <div className="form-group text-light">
                       <br/> <label>Name:</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        value={name} 
                        onChange={(event)=>{setName(event.target.value)}}
                        />
                    </div>
                    <div className="form-group text-light">
                        <label>company:</label>
                        <textarea 
                        className="form-control" 
                        value={company} 
                        onChange={(event)=>{setCompany(event.target.value)}}
                        />
                    </div>
                    <div className="form-group text-light">
                        <label>ExpiryDate:</label>
                        <input 
                        type="date" 
                        className="form-control" 
                        value={expiry_date} 
                        onChange={(event)=>{setExpiry_date(event.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary float-right " onClick={addPost}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default checkAuth(CreatePost);














// import axios from "axios";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../Navbar";
// import checkAuth from "../auth/checkAuth";

// function CreatePost() {
//     const [title, setTitle] = useState('');
//     const [content, setContent] = useState('');
//     var navigate = useNavigate()
//     function addPost() {
//         axios.post('https://medicalstore.mashupstack.com/api/medicine',{
//             title: title,
//             content: content
//         }).then(response=>{
//             navigate('/blog/posts')
//         })
//     }
//     return (<div>
//         <Navbar></Navbar>
//         <div className="container">
//             <div className="row">
//                 <div className="col-8 offset-2">
//                     <h1 className="text-center">Create Medicine</h1>
//                     <div className="form-group">
//                         <label>Title:</label>
//                         <input 
//                         type="text" 
//                         className="form-control" 
//                         value={title} 
//                         onChange={(event)=>{setTitle(event.target.value)}}
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label>Content:</label>
//                         <textarea 
//                         className="form-control" 
//                         value={content} 
//                         onChange={(event)=>{setContent(event.target.value)}}
//                         />
//                     </div>
//                     <div className="form-group">
//                         <button className="btn btn-primary float-right" onClick={addPost}>Submit</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>)
// }

// export default checkAuth(CreatePost);