import { Routes, Route } from "react-router-dom";

import LoginPage from "./components/LoginPage";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<LoginPage />} />
            </Routes>
        </>
    );
}

export default App;
