import {
    Route,
    Routes
} from  'react-router-dom';
import {Clientes, Compras, Home, Ventas} from '../pages'

const CfgRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/clientes" element={<Clientes/>}/>
            <Route exact path="/compras" element={<Compras/>}/>
            <Route exact path="/ventas" element={<Ventas/>}/>
        </Routes>
    )
}

export default CfgRoutes;