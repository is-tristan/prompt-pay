"use client";

// Styles
import "@/styles/misc/loader.scss";

export default function Loader({ className = "", loadingText = "" }) {

    return (

        <div className={`loader ${className}`}>


            <div className="spinner"></div>

            {loadingText && <p className="loading-text">{loadingText}</p>}

        </div>

    )

}