import { Footer } from "./Footer"
import { Header } from "./Header"
import {Helmet} from "react-helmet";

import toast, { Toaster } from 'react-hot-toast';

export function Layout({children, title, description, keywords, author}){
    return(
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
                <title>{title}</title>
            </Helmet>
            <Header />
            <main style={{minHeight : "80vh"}}> {children}</main>
            <Toaster/>
           <Footer />
        </div>
    )
}

Layout.defaultProrps = {
    title : "E-Commerce Website",
    description : "mern stack project",
    keywords : "mern, js, node, react, mongodb, bootstrap, express",
    author : "Gaurav Pise"
}