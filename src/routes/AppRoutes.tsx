import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import Componentes from "../pages/Componentes";
import Administracion from "../pages/Administracion";

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/administracion" element={<Administracion />} />
            <Route path="/componentes" element={<Componentes />} />
        </Routes>
    )
}
export default AppRoutes;