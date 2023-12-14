import { Header, Footer, Navbar } from "./components";
import ScrollToTopButton from "./components/ScrollTop/ScrollTop";
import { HomePage, AboutPage, LibraryPage, RecruitmentPage, GalleryPage, FaciltiesPage, CoScholasticPage, AdmissionPage } from "./pages";
import { Routes, Route } from "react-router-dom";


const App = () => {

  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route exact path="*" element={<HomePage />} />
        <Route exact path="/about/*" element={<AboutPage />} />
        <Route exact path="/admission/*" element={<AdmissionPage />} />
        <Route exact path="/scholastic/*" element={<CoScholasticPage />} />
        <Route exact path="/facilities/*" element={<FaciltiesPage />} />
        <Route exact path="/gallery/*" element={<GalleryPage />} />
        <Route exact path="/recruitment/*" element={<RecruitmentPage />} />
        <Route exact path="/library/*" element={<LibraryPage />} />
      </Routes>
      <Footer />
      <ScrollToTopButton />
    </>
  )
}

export default App
