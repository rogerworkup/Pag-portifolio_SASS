import MainContent from "./componentes/MainContent.jsx";
import Sidebar from "./componentes/Sidebar.jsx";

import "./styles/components/app.sass";

function App() {
  return (
    <div id="portfolio">
      <h1> Rogério Andrade</h1>
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
