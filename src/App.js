import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ThankYou from "./pages/ThankYou";
import AdminPanel from "./pages/AdminPanel";
import AboutClinic from "./pages/AboutClinic";
import Detox from "./pages/services/Detox";
import Coding from "./pages/services/Coding";
import Rehab from "./pages/services/Rehab";
import Consult from "./pages/services/Consult";
import Contacts from "./pages/Contacts";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="thank-you" element={<ThankYou />} />
          <Route path="admin" element={<AdminPanel />} />
          <Route path="about" element={<AboutClinic />} />
          <Route path="services/detox" element={<Detox />} />
          <Route path="services/coding" element={<Coding />} />
          <Route path="services/rehab" element={<Rehab />} />
          <Route path="services/consult" element={<Consult />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </Router>
  );
}
