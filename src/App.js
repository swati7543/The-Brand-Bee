// import logo from './logo.svg';
import './App.css'
import BeeEvery from './BeeEvery/BeeEvery'
import Blog from './Blog/Blog'
import Business from './Business/Business'
import Cursor from './Cursor'
import Explore from './Explore/Explore'
import FeaturedWork from './FeaturedWork/FeaturedWork'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'
import OurClient from './OurClient/OurClient'
import Service from './Service/Service'
import Transformation from './Transformation/Transformation'
import ValuableClients from './ValuableClient/ValuableClients'

function App() {
  return (
    <div className="App ">
      <div className="absolute">
        <Cursor />
        <Navbar />
        <BeeEvery />
        <OurClient />
        <Explore />
        <Service />
        <FeaturedWork />
        <Business />
        <ValuableClients />
        <Transformation />
        <Blog />
        <Footer />
      </div>
    </div>
  )
}

export default App
