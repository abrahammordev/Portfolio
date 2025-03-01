import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import './i18n/i18n';
import { Analytics } from "@vercel/analytics/react"
import Navbar from "./components/GlobalComponents/Navbar";
import SocialLinks from "./components/GlobalComponents/SocialLinks";

function App() {
  return (
    <Router>
      <Analytics />
      <Navbar />
      <SocialLinks />
      <div style={{ paddingTop: '60px' }}>
        <AppRoutes />
      </div>
    </Router >


  );
}

export default App;
