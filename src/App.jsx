import { Header, Footer, Navbar } from "./components";
import { Home, About, Library, Recruitment, Gallery, Facilties, CoScholastic, Admission } from "./pages";
import { Routes, Route } from "react-router-dom";


const App = () => {

  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route exact path="*" element={<Home />} />
        <Route exact path="/about/*" element={<About />} />
        <Route exact path="/admission/*" element={<Admission />} />
        <Route exact path="/scholastic/*" element={<CoScholastic />} />
        <Route exact path="/facilities/*" element={<Facilties />} />
        <Route exact path="/gallery/*" element={<Gallery />} />
        <Route exact path="/recruitment/*" element={<Recruitment />} />
        <Route exact path="/library/*" element={<Library />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
