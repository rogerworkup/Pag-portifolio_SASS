import SocialNetworks from "./SocialNetworks"

import Avatar from "../img/eu.jpg"

import '../styles/components/sidebar.sass'


const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Rogerio Andrade" />
      <p className="title">Full Stack Developer</p>
      <SocialNetworks />
      <p>informações de contato</p>
      <a href="" className="btn">
        Download Currículo
        </a>

    </aside>
  )
}

export default Sidebar