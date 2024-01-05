import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { NavLink,useNavigate } from "react-router-dom";
import { removeUser } from "../store/authSlice";

function Navbar() {
    var user = useSelector(store=>store.auth.user);
    const dispatch = useDispatch ();
    const navigate= useNavigate();
    function logout(){
        if(user){
            axios.post('https://medicalstore.mashupstack.com/api/logout',{},{
                headers:{'Authorization':"Bearer "+ user.token}
            });
            dispatch(removeUser());
            navigate('/login');
        }
    }
  return <nav className="navbar navbar-expand-sm navbar-dark bg-success">
        <div className="navbar-brand text-warning">
            <h4>MediStore</h4>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse"
data-target="#navbarNav" aria-controls="navbarNav"aria-expanded="false"
           aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mr-auto" id="navbarNav"  style={{ float: "left" }}>
            <ul className="navbar-nav ml-auto" style={{ color: "#ffffff" }}>
                <li className="nav-item mt-2 mr-2 ">
                <NavLink to={"/"} className={'nav-link'+(({isActive})=>(isActive?'active':''))}>
                    Home
                </NavLink>
                </li>
                <li className="nav-item mt-2 mr-2">
                <NavLink to={"/aboutus"} className={'nav-link'+(({isActive})=>(isActive?'active':''))}>
                 AboutUs
                </NavLink>
                </li>


                
 <li className="nav-item mt-2">
                <NavLink to={"/blog/posts"} className={'nav-link'+(({isActive})=>(isActive?'active':''))}>
                  Medicine
                </NavLink>
                </li>



               
 <li className="nav-item ml-3 mt-2 mr-2">
                <NavLink to={"/SignUp"} className={'nav-link'+(({isActive})=>(isActive?'active':''))}>
                  SignUp
                </NavLink>
                </li>
   
                {user?
                <li className="nav-item">
                    <span className="nav-link" onClick={logout}>Logout</span>
                </li>:
                <li className="nav-item">
                <NavLink 
                to={"/login"} 
                className={
                    'nav-link '+
                    (status => status.isActive ? 'active' : '')
                } 
                >
                    Login
                </NavLink>
                </li>
            }
            </ul>
       </div>

    </nav>;
}

export default Navbar;

