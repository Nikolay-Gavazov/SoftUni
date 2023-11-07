import Footer from "./components/Footer";
import Header from "./components/Header";
import UserListComponent from "./components/UserListComponent";
import "./styles.css";

function App() {

  return (
    <>
      <Header/>
      <main className="main">
          {<UserListComponent/>}
      </main>
      <Footer/>
    </>
  )
}

export default App
