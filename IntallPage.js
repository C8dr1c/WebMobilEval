import React from "react";
import ReactDOM from "react-dom";
import ReactPWAInstallProvider, { useReactPWAInstall } from "react-pwa-install";
import myLogo from "img/logo.png";

function App() {
  const { pwaInstall, supported, isInstalled } = useReactPWAInstall();

  const handleClick = () => {
    pwaInstall({
      title: "Installation de l'application",
      logo: myLogo,
      features: (
        <ul>
          <li>En installant notre PWA, vous pourrez :</li>
          <li>- Accéder à l'application plus rapidement depuis votre écran d'accueil.</li>
          <li>- Utiliser l'application hors ligne, même si vous n'êtes pas connecté à Internet.</li>
          <li>- Recevoir des notifications push pour rester informé des dernières mises à jour et des nouvelles fonctionnalités.</li>
        </ul>
      ),
      instructions: (
        <ul>
          <li>Pour installer notre PWA sur votre appareil, suivez ces étapes simples :</li>
          <li>1. Cliquez sur le bouton de partage de votre navigateur (3 petits points).</li>
          <li>2. Sélectionnez "Ajouter à l'écran d'accueil".</li>
          <li>3. Profitez de toutes les fonctionnalités de notre application, même hors ligne !</li>
        </ul>
      ),
      description: "Pour profiter de toutes les fonctionnalités de notre application, nous vous recommandons d'installer notre PWA (Progressive Web App) sur votre appareil.",
    })
      .then(() => alert("Application installée avec succès ou instructions d'installation affichées"))
      .catch(() => alert("L'utilisateur n'a pas voulu faire l'installation"));
  };

  return (
    <div>
      {supported() && !isInstalled() && (
        <button type="button" onClick={handleClick}>
          Install App
        </button>
      )}
    </div>
  );
}

ReactDOM.render(
  <ReactPWAInstallProvider enableLogging>
    <App />
  </ReactPWAInstallProvider>,
  document.querySelector("#root")
);
