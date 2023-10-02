import {
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

import "../styles/components/socialnetworks.sass";

const socialNetworks = [
  {
    name: "linkedin",
    way: "https://www.linkedin.com/in/rog%C3%A9rio-andrade-38a755111/",
    icon: <FaLinkedinIn />,
  },
  {
    name: "github",
    way: "https://github.com/rogerworkup",
    icon: <FaGithub />,
  },
  {
    name: "whatsapp",
    way: "https://wa.me/5581986684427?text=Olá,%20vim%20através%20da%20sua%20página%20de%20portifólio.",
    icon: <FaWhatsapp />,
  },
  {
    name: "instagram",
    way: "https://instagram.com/rogeralado",
    icon: <FaInstagram />,
  },
];

const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a
          href={network.way}
          className="social-btn"
          id={network.name}
          key={network.name}
          target="_blank"
        >
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworks;
