import { Footer } from "./Footer"
import { Header } from "./Header"
import { Helmet } from "react-helmet";
import { Toaster } from 'react-hot-toast';

export function Layout({ children, title }) {
    return (
        <div>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <Header />
            <main style={{ minHeight: "80vh" }}> {children}</main>
            <Toaster />
            <Footer />
        </div>
    )
}
