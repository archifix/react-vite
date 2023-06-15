import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Home from "./Pages/Home/Home"
import Document from "./Pages/Document/Document"
import NotFound from "./Pages/NotFound/NotFound"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/document" element={<Document />} />
        <Route path="/admin" element={<Document />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
