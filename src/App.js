import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import Aos from "aos";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import "bootstrap/dist/js/bootstrap.bundle.min";
import Nav from "./Components/NavBar";
import Footer from "./Components/Footer";
import Modals from "./Components/Modals";
import Entries from "./Pages/Entries";
import EntriesDetails from "./Pages/EntriesDetails";
import SubmitFeedBack from "./Pages/SubmitFeedBack";
import Sidebar from "./Components/Sidebar";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Error from "./Pages/Error";
import "./App.css";


function App() {
  const queryClient = new QueryClient();

  useEffect(() => {
    Aos.init({ duration: 900 });
  }, []);

  return (
    <main id="main" className="main">

    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Nav/>
      <Sidebar />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/entries-page" element={<Entries />} />
        <Route path="/fetures-decription-page/:id" element={<EntriesDetails/>} />
        <Route path="/about" element={<About />} />
        <Route path="/submit-feedback" element={<SubmitFeedBack />} />

        <Route path="*" element={<Error />} />
      </Routes>
      <Modals/>
      <Footer/>
      <ReactQueryDevtools initialIsOpen={false} position="top-right" />
        </QueryClientProvider>
    </BrowserRouter>
    </main>

  );
}

export default App;
