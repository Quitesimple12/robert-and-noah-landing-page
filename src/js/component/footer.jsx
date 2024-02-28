import React from "react";

function Footer() {
    return (
    <footer className="footer mt-auto py-3 bg-dark" style={{ position: "fixed", bottom: 0, width: "100%" }}>
            <div className="container text-center">
                <span className="text-light">Copyright © Your Website 1776</span>
            </div>
        </footer>
    );
};

export { Footer };