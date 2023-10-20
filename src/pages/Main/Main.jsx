import React, { useEffect, useState, useRef } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./main.scss";
import { Link, useLocation } from "react-router-dom";
import Github from "../../assets/Main/github-white.svg";
import ProgramGuy from "../../assets/Main/programming-guy.svg";
import Chill from "../../assets/Main/chill.svg";

const value = [
  "je m'appelle Zoubheir",
  "j'ai 17 ans",
  "je suis developpeur full-stack",
];
// let cout1 = 0;
// let cout2 = 0;

const randtime = () => {
  let time = Math.floor(Math.random() * (1000 - 500 + 1) + 200);
  return time;
};

const traitment = (text) => {
  let textSplit = [...text];
  textSplit.pop();
  return textSplit.join("");
};

const Main = (props) => {
  let cout1 = props.co;
  let cout2 = props.cu;
  const location = useLocation();
  const [prenom, setPrenom] = useState("");
  const oui = useRef("");
  const time = useRef(200);

  const animateText = () => {
    if (value[cout1][cout2] !== undefined) {
      oui.current += value[cout1][cout2];
      setPrenom(oui.current);
      cout2++;
      time.current = randtime();
    } else {
      oui.current = traitment(oui.current);
      setPrenom(oui.current);
      if (oui.current === "") {
        cout1 === 2 ? (cout1 = 0) : cout1++;
        cout2 = 0;
      }
    }
  };

  useEffect(() => {
    let intervalt = setInterval(() => {
      if (location.pathname === "/") {
        animateText();
      }
    }, time.current);
  }, []);

  return (
    <>
      <Navbar />
      <main className="main-page">
        <div className="top-page">
          <section className="presentation">
            <div className="titre-presentation">
              <h1>
                Bonjour,
                <span className="prenom-presentation"> {prenom}</span>
              </h1>
            </div>
            <div className="description-presentation">
              <h2>
                Je suis un développeur full-stack passionné, capable de
                travailler sur tous les aspects d'une application web, de la
                partie front-end à la partie back-end.
              </h2>
            </div>
            <div className="button-presentation">
              <Link to="/#bottom-page" className="about-more" >
                En savoir plus
              </Link>
              <a
                href="https://github.com/VeroniDeev"
                target="_BLANK"
                className="github"
                rel="noopener noreferrer"
              >
                <img src={Github} alt="" />
                <p>Github</p>
              </a>
            </div>
          </section>
          <section className="image-presentation">
            <img src={ProgramGuy} alt="" />
          </section>
        </div>
        <div className="bottom-page" id="bottom-page">
          <div className="bottom-contain">
            <h3>À propos de moi</h3>
            <section className="img-bottom">
              <img src={Chill} alt="" width={717} height={490} />
            </section>
            <section className="text-bottom">
              <p>
                Bonjour, je suis <span>Zoubheir</span>, un développeur{" "}
                <span>full-stack</span> passionné par la création de sites web
                et d'applications. J'ai une grande expérience en utilisant des
                technologies telles que{" "}
                <span>
                  HTML, CSS, JavaScript, React, Python, Django, et MySQL
                </span>
                . J'aime travailler avec ces outils pour créer des sites web et
                des applications robustes et innovantes.
                <br />
                <br />
                En dehors du développement web, j'aime explorer d'autres
                domaines de la technologie tels que{" "}
                <span>l'IA, l'espace et la réalité virtuelle</span>. Je suis
                également inspiré par{" "}
                <span>
                  la musique synthwave, les films rétros, l'art et le design
                </span>{" "}
                pour créer des interfaces utilisateur créatives et uniques.
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
