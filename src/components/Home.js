import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Landing from "./Landing";
import "../css/bootstrap.min.css";
import "../css/style.css";

export default function Home() {
    return (
        <>
            <Header />
            <Navbar />
            <Landing />
            <Footer />
        </>
    );
}
