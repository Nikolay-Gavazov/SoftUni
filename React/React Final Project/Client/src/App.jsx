import { Route, Routes } from "react-router-dom";

import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import NotFound from "./components/NotFound/NotFound";
import { AuthProvider } from "./context/authContext";
import Gallery from "./components/Photos/Gallery";
import AuthGuard from "./guards/Authguard";
import Navbar from "./components/layout/Navbar";
import Topbar from "./components/layout/Topbar";
import Footer from "./components/layout/Footer";
import Login from "./components/User/Login/Login";
import Register from "./components/User/Register/Register";
import Logout from "./components/User/Logout/Logout";
import Details from "./components/Photos/Details";
import Edit from "./components/Photos/Edit";
import Home from "./components/home/Home";
import Create from "./components/photos/Create";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
    <AuthProvider>
      <Navbar />
      {<Topbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/gallery/:id" element={<Details/>}/>
        <Route path="/gallery/:id/edit" element={<Edit/>}/>

        <Route element={<AuthGuard />}>
          <Route path="/logout" element={<Logout />} />
          <Route path="/create" element={<Create />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
