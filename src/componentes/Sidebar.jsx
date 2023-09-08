import Avatar from "../img/eu.jpg"

import '../styles/components/sidebar.sass'

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Rogerio Andrade" />
      <p className="title">Desenvolvedor</p>
      <p>redes sociais</p>
      <p>informações de contato</p>
      <a href="" className="btn">
        Download Currículo
        </a>

    </aside>
  )
}

export default Sidebar