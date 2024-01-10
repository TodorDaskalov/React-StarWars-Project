import { Routes, Route } from "react-router-dom";

import LoginPage from "./components/LoginPage";
import TablePage from "./components/TablePage";
import "./App.css";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/table" element={<TablePage />} />
            </Routes>
        </>
    );
}

export default App;
