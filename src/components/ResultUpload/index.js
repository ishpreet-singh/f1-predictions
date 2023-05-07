import React, { useState } from "react";
import "./index.css";

const ResultUpload = ({ onUpload }) => {
    const fileInputRef = React.createRef();

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const content = JSON.parse(e.target.result);
                    onUpload(content);
                } catch (error) {
                    alert("Invalid file format. Please upload a valid predictions file.");
                }
            };
            reader.readAsText(file);
        }
    };

    return (
        <div className="result-upload-container">
            <input
                id="result-upload"
                type="file"
                accept=".json"
                ref={fileInputRef}
                onChange={handleFileUpload}
                style={{ display: "none" }}
            />
            <button
                type="button"
                className="result-upload-btn"
                onClick={() => fileInputRef.current.click()}
            >
            Upload Results
            </button>
        </div>
    );
};

export default ResultUpload;
