import { BrowserRouter, Route, Routes } from "react-router";
import IndexPage from "./pages/IndexPage.jsx";
import FavoritesPage from "./pages/FavoritesPage.jsx";
import Layout from "./layout/Layout.jsx";

const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                <Route path="/" element={<IndexPage/>} />
                <Route path="/favoritos" element={<FavoritesPage/>} />

                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;