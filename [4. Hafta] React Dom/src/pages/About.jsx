import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faDiscord, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h2>Hakkımda</h2>
      <p>
        Merhaba! Ben, yazılım geliştirme ve siber güvenlik konularına büyük bir tutkusu olan bir yazılım geliştiriciyim.
      </p>
      <p>
        Şubat 2021'den beri <a target="_blank" href="https://bionluk.com/kerempy">bionluk.com</a>'da freelancer olarak çalışıyorum. Burada çeşitli alanlardaki müşterilerim için Python ve bot uygulamaları geliştiriyorum.
      </p>
      <p>
        Aynı zamanda Aralık 2021'den beri Papara kullanıcıları için oluşturulan Topluluk Forum ve Discord sunucusunda Papara Lideri olarak moderatörlük yapıyorum. Kullanıcı geri bildirimlerini analiz ediyor ve sorunların çözülmesine yardımcı oluyorum.
      </p>
      <p>
        Bu süreçte Python, ekip çalışması ve liderlik becerileri kazandım. Ayrıca çevrimiçi sızma testi ve Python kurslarında sertifikalar elde ettim.
      </p>
      <p>
        Şu anda Bursa Anadolu Lisesi'nde lise eğitimime devam ediyorum ve 2024 yılında mezun olmayı hedefliyorum. Gelecekte yazılım geliştirme, siber güvenlik ve çevrimiçi topluluklarda daha fazla öğrenmeye ve becerilerimi geliştirmeye devam etmeyi ve bu alanlarda yenilikçiliğe ve büyümeye katkıda bulunmayı amaçlıyorum.
      </p>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/ahmet-kerem-begiç-16653b214/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://discord.gg/papara" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faDiscord} />
        </a>
        <a href="https://www.instagram.com/python" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>
  );
}

export default About;