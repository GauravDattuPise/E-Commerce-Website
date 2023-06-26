import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/Auth";
import { toast } from "react-hot-toast";


//SHOWS PAGES -- HOME,REGISTER,LOGIN,LOGOUT,CART

export function Header() {

    const [auth, setAuth] = useAuth();

    function handleLogout(){
        setAuth({
            ...auth,
            user : null,
            token : ""
        });
        localStorage.removeItem("auth");
        toast.success("Logout Successfull");
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <Link className="navbar-brand" >Ecommerce Website</Link>
                    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <NavLink to="/" className="nav-link" >Home <span className="sr-only">(current)</span></NavLink>
                        </li>

                        {/* IF USER IS LOGGED IN THEN SHOW LOGOUT BUTTON */}
                        {
                            !auth.user ? (<>
                                <li className="nav-item">
                                    <NavLink to="/register" className="nav-link">Register</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/login" className="nav-link">Login</NavLink>
                                </li>
                            </>)
                                :
                                (<>
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle" style={{border : "none",background : "white", color :"black" }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {auth?.user?.name}
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><NavLink onClick={handleLogout} to="/login" className="dropdown-item">Logout</NavLink></li>
                                            <li><NavLink to = {`/dash-board/${auth?.user?.role === 1 ? "admin" : "user"}`} className="dropdown-item">DashBoard</NavLink></li>
                                        </ul>
                                    </div>
                                </>)
                        }

                        <li className="nav-item">
                            <NavLink to="/cart" className="nav-link">cart (0)</NavLink>
                        </li>
                    </ul>
                </div>
            </nav >
        </div >
    )
}


export default Header;
