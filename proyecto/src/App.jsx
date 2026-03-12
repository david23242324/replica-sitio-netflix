import './App.css'
import NavBar from './DavidSarmiento'
import Principal from './Principal'
import DavidMartinez from './DavidMartinez'
import NetflixFooter from './footerNetflix'
import MatiasRamirez from './MatiasRamirez'
import AndresSoler from './AndresSoler'

function App() {
  return (
    <>
      <header className="cabecera">
        {/* Aquí va la navbar, con position:absolute para que no mueva la imagen */}
        <NavBar />
        <Principal />
      </header>
      <DavidMartinez />
      <MatiasRamirez />
      <AndresSoler />
      <NetflixFooter />
    </>
  )
}

export default App
