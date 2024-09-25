"use client";
import React from "react";
const PageWrapper = ({ children }) => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            {children}
        </div>
    )
}

export default PageWrapper;