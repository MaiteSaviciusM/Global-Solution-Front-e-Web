import { useState } from "react";
import banner from "../assets/banner.jpg";
import pillguardian from "../assets/remedios.jpg";
import {
  BsCalendar2Check,
  BsShieldLock,
  BsFillSafeFill,
} from "react-icons/bs";
const Home = () => {
  const [submit, setSubmit] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
  };
  return (
    <>
      <div className="home-container">
        <nav className="sub-nav">
          <a href="#funcionamento">Sobre</a>
          <a href="#vantagens">Vantagens</a>
        </nav>

        <section className="banner">
          <img src={banner} alt="Banner com um recipiente de compridimidos aberto e caído" />
          <div className="title">
            <h1>PILLGUARDIAN</h1>
            <h5>A SUA DOSE DE TRANQUILIDADE </h5>
            <p>
              Em 2021, dos 91.883 casos de intoxicação relacionados a produtos sujeitos à
              vigilância sanitária, impressionantes 79,7% representaram incidentes associados a
              medicamentos, totalizando 74.123 ocorrências. Esse número reflete uma preocupação
              significativa quanto à administração inadequada ou errônea de medicamentos,
              evidenciando a necessidade crítica de medidas que assegurem a precisão e a segurança
              na ingestão de medicamentos. 
            </p>
            <p>
              Nesse contexto, soluções inovadoras como a PillGuardian se destacam como
              recursos essenciais. Ao oferecer um sistema automatizado de administração de
              medicamentos, a PillGuardian não apenas simplifica o processo, mas também estabelece
              camadas adicionais de segurança, exigindo autenticação para liberar doses e
              monitorando o ambiente interno onde os medicamentos são armazenados.
            </p>
            <p>
              Essa abordagem proativa não só reduz os riscos de overdoses acidentais, mas
              também promove uma administração precisa e controlada de medicamentos,
              contribuindo significativamente para a prevenção de erros e a segurança dos usuários.
            </p>
          </div>
        </section>

        <section className="all-content">
          <section className="funcionamento" id="funcionamento">
            <header>
              <h1>COMO FUNCIONA ?</h1>
            </header>
            <div className="funcionamento-content">
              <div className="funcionamento-passos">
                <div className="imagem">
                  <img src={pillguardian} alt="Ilustração caixa de medicamentos" />
                </div>
                <div className="texto">
                  <p>
                  A solução PillGuardian foi pensada para simplificar a rotina das pessoas que necessitam administrar múltiplos medicamentos diariamente. 
                  Seu propósito é oferecer um sistema de gerenciamento confiável e seguro, proporcionando maior autonomia e conforto ao usuário. 
                  </p>
                  <p>
                  Ao exigir uma senha para editar informações ou acessar os medicamentos e doses antes do horário preestabelecido, a PillGuardian assegura que apenas as doses corretas sejam liberadas no momento apropriado, evitando assim erros ou situações de risco. 
                  </p>
                  <p>
                  Ao fornecer um sistema automatizado e seguro, a PillGuardian visa não apenas simplificar, mas também revolucionar a experiência de gerenciamento de medicamentos, promovendo uma abordagem precisa e segura para a adesão ao tratamento.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="vantagens" id="vantagens">
            <header>
              <h1>VANTAGENS</h1>
            </header>
            <div className="lista">
              <ul>
                <li>
                  <BsFillSafeFill/>
                  <p>Segurança e Prevenção de Erros: Autenticação e monitoramento reduzem overdoses acidentais, assegurando a administração correta de medicamentos.</p>
                </li>
                <li>
                  <BsCalendar2Check />
                  <p>Autonomia e Tranquilidade: Oferece independência aos usuários e maior tranquilidade aos cuidadores, garantindo administração precisa de doses.</p>
                </li>
                <li>
                  <BsShieldLock/>
                  <p>Armazenamento seguro: Por meio de sensores de temperatura e umidade, garantimos que seus medicamentos serão preservados dentro das condições ideais.</p>
                </li>
              </ul>
            </div>
          </section>
          </section>
      </div>
    </>
  );
};

export default Home;
