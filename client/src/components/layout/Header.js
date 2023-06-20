import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/Auth";
import { toast } from "react-hot-toast";

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
                    <Link className="navbar-brand" >Hidden brand</Link>
                    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <NavLink to="/" className="nav-link" >Home <span className="sr-only">(current)</span></NavLink>
                        </li>
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
                                    <li className="nav-item">
                                        <NavLink onClick={handleLogout} to="/login" className="nav-link">Logout</NavLink>
                                    </li>
                                </>)
                        }
                        <li className="nav-item">
                            <NavLink to="/cart" className="nav-link">cart (0)</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}