import { BrowserRouter, Routes, Route } from "react-router-dom";

import Path from "./appPaths";

import LoginPage from "./components/LoginPage";
import TablePage from "./components/TablePage";

import "./App.css";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={Path.Home} element={<LoginPage />} />
                    <Route path={Path.TablePage} element={<TablePage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
