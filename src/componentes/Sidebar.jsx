import SocialNetworks from "./SocialNetworks"

import Avatar from "../img/eu.jpg"

import '../styles/components/sidebar.sass'
import InformationContainer from "./InformationContainer"


const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Rogerio Andrade" />
      <p className="title">Full Stack Developer</p>
      <SocialNetworks />
      <InformationContainer />

    </aside>
  )
}

export default Sidebar