import { AiFillEnvironment } from "react-icons/ai";

import '../styles/components/informationcontainer.sass'

const InformationContainer = () => {
  return (
    <section id="information">
      <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3>Localização</h3>
          <p>Abreu e Lima / PE</p>
        </div>
      </div>
    </section>
  )
}

export default InformationContainer