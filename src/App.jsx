// import "../style.css";
import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import "./App.scss";
import json from "./api/db.json";

function App() {
    const data = json;
    return (
        <>
            <Layout />
        </>
    );
}

export default App;
