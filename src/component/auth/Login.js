
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/authSlice";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";

function Login() {
    var [email, setEmail] = useState('');
    var [password, setPassword] = useState('');
    var [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleSignUp = () => {
      navigate("/SignUp");
    };

    
    function attemptLogin() {
        axios.post('https://medicalstore.mashupstack.com/api/login',{
            email:email,
            password:password
        }).then(response=>{
            setErrorMessage('')
            var user = {
                email:email,
                token:response.data.token
            }
            dispatch(setUser(user));
        }).catch(error=>{
            if(error.response.data.errors){
                setErrorMessage(Object.values(error.response.data.errors).join(' '))
            }else if(error.response.data.message){
                setErrorMessage(error.response.data.message)
            }else{
                setErrorMessage('Failed to login user. Please contact admin')
            }
        })
    }
    return (<div>
        <Navbar/>
        <div className="container ">
            <div className="row justify-content-center">
                <div className="col-8 offset-2  bg-light mt-5 pb-4 ">
                    <h1>Login</h1>
                    {errorMessage?<div className="alert alert-danger">{errorMessage}</div>:''}
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="text" placeholder="enter registered email"
                        className="form-control"
                        value={email}
                        onInput={(event)=>setEmail(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input type="password" placeholder="enter registered password"
                        className="form-control"
                        value={password}
                        onInput={(event)=>setPassword(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary float-right" onClick={attemptLogin}>Login</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="row mt-3">
        <div className="col-12 text-center">
          <h6>Don't have an account?&nbsp; Sign up </h6>
          <button
            className="btn btn-success mt-1"
            onClick={handleSignUp}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>)
}

export default Login;

























// import axios from "axios";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { setUser } from "../../store/authSlice";
// import Navbar from "../Navbar";
// import { useNavigate } from "react-router-dom";


// function Login() {
//     var [email, setEmail] = useState('');
//     var [password, setPassword] = useState('');
//     var [errorMessage, setErrorMessage] = useState('');
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const handleSignUpClick = () => {
//     navigate("/signUp");
//   };
//     function attemptLogin() {
//         axios.post('https://medicalstore.mashupstack.com/api/login',{
//             email:email,
//             password:password
//         }).then(response=>{
//             setErrorMessage('')
//             var user = {
//                 email:email,
//                 token:response.data.token
//             }
//             dispatch(setUser(user));
//         }).catch(error=>{
//             if(error.response.data.errors){
//                 setErrorMessage(Object.values(error.response.data.errors).join(' '))
//             }else if(error.response.data.message){
//                 setErrorMessage(error.response.data.message)
//             }else{
//                 setErrorMessage('Failed to login user. Please contact admin')
//             }
//         })
//     }
//     return (<div>
//         <Navbar/>
//         <div className="container mb-4">
//             <div className="row">
//                 <div className="col-8 offset-2  bg-light mt-5">
//                     <h1>Login</h1>
//                     {errorMessage?<div className="alert alert-danger">{errorMessage}</div>:''}
//                     <div className="form-group">
//                         <label>Email:</label>
//                         <input type="text"
//                         className="form-control"
//                         value={email}
//                         onInput={(event)=>setEmail(event.target.value)}
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label>Password:</label>
//                         <input type="password"
//                         className="form-control"
//                         value={password}
//                         onInput={(event)=>setPassword(event.target.value)}
//                         />
//                     </div>
//                     <div className="form-group">
//                         <button className="btn btn-primary float-right" onClick={attemptLogin}>Login</button>
//                     </div>
//                 </div>
//                 </div>
                  
//       </div>
//                 <div className="row mt-1">
//         <div className="col-12 text-center">
//           <h6>Don't have an account? Sign up </h6>
//           <button
//             className="btn btn-warning mt-1"
//             onClick={handleSignUpClick}
//           >
//             Sign up
//           </button>
      
//             </div>
//         </div>
//     </div>)
// }

// export default Login;