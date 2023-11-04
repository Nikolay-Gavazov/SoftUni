import Footer from './components/Footer'
import Header from './components/Header'
import TodoListContainer from './components/TodoListContainer'
import './styles.css'

function App() {


  return (
    <>
      <Header/>
      <main className="main">
        <TodoListContainer/>
      </main>
      <Footer/>
    </>
  )
}

export default App
