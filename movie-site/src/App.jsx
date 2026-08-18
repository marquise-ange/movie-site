import './css/App.css'
import Home from "./pages/Home.jsx"
import Favorites from "./pages/Favorites.jsx"
import { Route, Routes } from 'react-router-dom'//importing the route and routes from react-router-dom to use the routing functionality in the app.
import Navbar from "./Components/Navbar"
import { MovieProvider } from './context/MovieContext.jsx'//importing the MovieProvider from the MovieContext.jsx file to use the context API in the app.

// a component is a function in javascript that returns JSX (HTML in JS)(Jsx means JavaScript with html)
//(this is a fragment, it is used to wrap multiple elements without adding an extra node to the DOM(<></>))
//prop=property, it is a way to pass data from a parent component to a child component.

function App() {

  return (
    <MovieProvider>
    
      <Navbar />
      <main className="main-content">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>

      </main>
    </MovieProvider>
  );
}


export default App
