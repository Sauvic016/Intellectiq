import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Logo from "./components/Logo/Logo";
import Navigation from "./components/Navigation/Navigation";

import "./App.css";
import Rank from "./components/Rank/Rank";
import ParticleBackground from "./components/Particle/ParticleBackground";

function App() {
  return (
    <div className="App">
      <ParticleBackground className="particles" />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      <FaceRecognition />
    </div>
  );
}

export default App;
