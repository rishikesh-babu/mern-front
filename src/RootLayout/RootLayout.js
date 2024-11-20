import React from "react";
import "./RootLayout.css";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";

function RootLayout() {
    return (
        <div className="main-container bg-primar">
            <nav>
                <NavBar />
            </nav>

            <main>
                <Outlet />
            </main>

            <footer>
                {/* <h2>footer</h2> */}
            </footer>
        </div>
    );
}

export default RootLayout;