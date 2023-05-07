import React from "react";
import "./index.css";

const PredictionControls = ({ predictions, onUpload }) => {
    const fileInputRef = React.createRef();

    const handleDownload = () => {
        const data = JSON.stringify(predictions);
        const blob = new Blob([data], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "predictions.json";
        link.click();
        URL.revokeObjectURL(url);
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const uploadedPredictions = JSON.parse(e.target.result);
                    if (Array.isArray(uploadedPredictions) && uploadedPredictions.length === 10) {
                        onUpload(uploadedPredictions);
                    } else {
                        alert("Invalid file format. Please upload a valid predictions file.");
                    }
                } catch (error) {
                    alert("Invalid file format. Please upload a valid predictions file.");
                }
            };
            reader.readAsText(file);
        }
    };

    return (
        <div className="prediction-controls">
            <button type="button" className="download-predictions-btn" onClick={handleDownload}>
                Download Predictions
            </button>
            <div className="file-upload-container">
                <label htmlFor="file-upload" className="file-upload-label">Upload Predictions:</label>
                <input
                    id="file-upload"
                    type="file"
                    accept=".json"
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    style={{ display: "none" }}
                />
                <button
                    type="button"
                    className="file-upload-btn"
                    onClick={() => fileInputRef.current.click()}
                >
                    Choose File
                </button>
            </div>
        </div>
    );
};

export default PredictionControls;
