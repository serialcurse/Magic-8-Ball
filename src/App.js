import { useState } from "react";
import "./styles.css";

export default function App() {
  const [cevap, setCevap] = useState(null);

  const mesajlar = [
    "Kesinlikle",
    "Kesinlikle öyle",
    "Kuşkusuz",
    "Evet - elbette",
    "Bana güvenebilirsin",
    "Gördüğüm kadarıyla, evet",
    "Çoğunlukla",
    "Dışarıdan iyi görünüyor",
    "Evet",
    "Belirtiler olduğu yönünde",
    "Biraz belirsiz, tekrar dene",
    "Sonra tekrar dene",
    "Şimdi söylemesem daha iyi",
    "Şimdi kehanette bulunamam",
    "Konsantre ol ve tekrar sor",
    "Bana öyle bakma",
    "Yanıtım hayır",
    "Kaynaklarım hayır diyor",
    "Pek iyi görünmüyor",
    "Çok şüpheli"
  ];

  function cevapVer() {
    const sayi = Math.floor(Math.random() * 20);
    setCevap(mesajlar[sayi]);
  }

  return (
    <div className="App">
      <div className="arkaplan">
        <h1 contentEditable>Selamlar!</h1>
        <h2>Magic 8-Ball'a Hoşgeldiniz.</h2>
        <h3> Aklınızdan bir soru geçirin ve topa tıklayın. </h3>
      </div>
      <div className="buyuk-top ortala" onClick={cevapVer}>
        <div className="kucuk-top ortala">
          {cevap ? <div>{cevap}</div> : <div className="sekiz">8</div>}
        </div>
      </div>

      <a className="logo" href="https://github.com/serialcurse">
        <img
          src="https://w7.pngwing.com/pngs/758/111/png-transparent-discord-mika-iwakura-internet-bot-computer-servers-lain-face-black-hair-experiment.png"
          width="5%"
          height="5%"
        />
      </a>

      <a className="logo" href="https://github.com/serialcurse">
        <img
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          width="5%"
          height="5%"
        />
      </a>
      <a className="log" href="https://twitter.com/serialcurse">
        <img
          src="https://seeklogo.com/images/T/twitter-x-logo-101C7D2420-seeklogo.com.png?v=638258862800000000"
          width="5%"
          height="5%"
        />
      </a>
    </div>
  );
}
