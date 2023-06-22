import { Link } from "react-router-dom";

// FOOTER FOR REDIRECT TO about,contact,privacy policy pages.

export function Footer(){
    return(
        <div className="bg-dark text-light p-3">
            <h4 className="text-center">All Rights Reserved &copy; Gaurav Pise </h4>
             <p className="text-center mt-3">
                <Link to="/about">About</Link> | <Link to="/contact">Contact</Link> | <Link to="/policy">Privacy Policy</Link>
             </p>
        </div>
    )
}