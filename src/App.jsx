import Beer from "./Beer"
import Contacto from "./Contacto"
import Home from "./Home"
import { routes } from "./utils/routes"
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path={routes.home} element={<Home />}/>
      <Route path={routes.contacto} element={<Contacto />}/>
      <Route path={`${routes.beer}/:id`} element={<Beer />} />
      <Route path={routes.notFound} element={<h1>Error 404 - Page not Found</h1>} />
    </Routes>
  )
}

export default App
