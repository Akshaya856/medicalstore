// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { removeUser } from "../../store/authSlice";
// function Logout() {
//     var user = useSelector(store => store.auth);
//     var navigate = useNavigate();

//     var dispatch = useDispatch();
//     axios.post('https://medicalstore.mashupstack.com/api/logout').then(
//         dispatch(removeUser(user))).catch(() => navigate('/'))

//     return <div className="col">
//         <h3 className="text-success align-center">Logout successful</h3>

//     </div>
// }

// export default Logout;