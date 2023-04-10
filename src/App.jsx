import { useState } from 'react'
import './components/nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import react3 from '../src/assets/imgs/react3.png';
import js from '../src/assets/imgs/js.png';
import node from '../src/assets/imgs/node.png';
import sql from '../src/assets/imgs/sql.png';
import html5 from '../src/assets/imgs/html5.png';
import css3 from '../src/assets/imgs/css3.png';
import c from '../src/assets/imgs/c.png';
import vitrinedev from '../src/assets/imgs/vitrinedev.png';
import avaliae from '../src/assets/imgs/avaliae.png';
import codificador from '../src/assets/imgs/codificador.png';
import logistica2 from '../src/assets/imgs/logistica2.png';
import tag from '../src/assets/imgs/tag.png';
import eu from '../src/assets/imgs/eu.jpg';

function App() {
  return (
    <div>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css"></link>
      <div className='body'>
        <div className='container'>
          <nav className='mennu'>
            <div className='btn-expansao'>
              <i class="bi bi-list"></i>
            </div>
            <ul>
              <li className='item-menu'>
                <a href='/'>
                  <span className='icon'><i class="bi bi-house"></i></span>
                  <span className='txt-link'> HOME</span>
                </a>
              </li>
              <li className='item-menu'>
                <a href='#tecnologias'>
                  <span className='icon'><i class="bi bi-file-person"></i></span>
                  <span className='txt-link'> SOBRE</span>
                </a>
              </li>
              <li className='item-menu'>
                <a href='#projetos'>
                  <span className='icon'><i class="bi bi-cast"></i></span>
                  <span className='txt-link'> PROJETOS</span>
                </a>
              </li>
            </ul>

          </nav>
          <div className='portfolio'>
            <h1>Tallyson Silva - <strong>Dev full-stack.</strong></h1><br></br><br></br>
            <figure><img src={tag} width='100px' /><br></br></figure>
          </div>

        </div>
      </div>
      <div className='corpo2'>
        <div className='sobre'>
          <h1 id='tecnologias'>SOBRE</h1>
          <div id='eu'>
            <figure><img className='eu1' src={eu} width='200px' /><br></br></figure>
          </div>
          <h5 className='texto1'><p className='about-grid' id='about-paragraph'>Olá me chamo Tallyson e sou estudante do Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas pela FAETERJ-RIO (Faculdade
            de Educação Tecnológica do Estado do Rio de Janeiro). Possuo certificação de Desenvolvimento web full-stack pelo SENAC/RESILIA através do bootcamp Programadores Cariocas realizado pela Prefeitura do Rio.<br></br>Meu objetivo é ingressar no mercado de tecnologia como Estagiário de Desenvolvimento a fim de aprimorar meus conhecimentos e sobretudo aprender muito mais sobre desenvolvimento como um todo.</p>
          </h5>

          <h3 id='tecnologias'>Tecnologias conhecidas:</h3><br></br>
          <div id='tecnologias2'>
            <div>
              <figure><img src={react3} width='90px' /><br></br></figure>
            </div>
            <div>
              <figure><img src={js} width='90px' /><br></br></figure>
            </div>
            <div>
              <figure><img src={node} width='90px' /><br></br></figure>
            </div>
            <div>
              <figure><img src={sql} width='90px' /><br></br></figure>
            </div>
          </div>
          <div id='tecnologias3'>
            <div>
              <figure><img src={html5} width='90px' /><br></br></figure>
            </div>
            <div>
              <figure><img src={css3} width='90px' /><br></br></figure>
            </div>
            <div>
              <figure><img src={c} width='90px' /><br></br></figure>
            </div>
          </div>
        </div>
        <div className='corpo3'>
          <div id='projetos'>
            <h1>Projetos:</h1>
          </div>
          <div className='projetoflex' id='projetos1'>
            <div>
              <figure><img className='borda' id='borda' src={vitrinedev} width='400px' height='300px' /><br></br></figure>
              <h6><p id='txt-projeto'>O projeto VitrineDev é uma plataforma de postagens de projetos desenvolvido com proposta de trabalho final do bootcamp de programação web.O objetivo é realizar um CRUD ao cadastrar os projetos no App, com link do repositório e de hospedagem.</p>
              </h6>
            </div>
            <div>
              <figure ><a href='https://avaliaereact.netlify.app/' target='_blank'><img className='borda' id='borda' src={avaliae} width='400px' height='300px' /></a><br></br></figure>
              <h6 id='txt-projeto'><p>O AvaliAê é um projeto com a proposta de ser uma plataforma de avaliações voltado para Empresas e usuários. As Empresas postam seus produtos no site e os usuário podem dar notas a esses produtos das Empresas.</p></h6>
            </div>
            <div>
              <figure ><a href={"https://tallyson95.github.io/projeto_individual2/html/form.html"} target='_blank'><img className='borda' id='borda' src={codificador} width='400px' height='300px' /></a><br></br></figure>
              <h6><p id='txt-projeto'>O codificador online é uma aplicação desenvolvida no módulo II do bootcamp e tinha como objetivo criar uma page com scripts capazes de criar criptografias. Utilizei o conceito de base 64 e cifra de césar para realizar as codificações.</p>
              </h6>
            </div>
          </div>
          <div id='projetos1' className='projeto1'>
            <div>
              <figure ><a href='https://tallyson95.github.io/foxfivelogistica/' target='_blank'><img className='borda' id='borda' src={logistica2} width='400px' height='300px' /></a><br></br></figure>
              <h6><p id='txt-projeto'>Este projeto foi realizado como proposta de trabalho em grupo em que foi necessário pensar em um produto inovador. Meu squad e eu então criamos a Fox Five Logistica, uma empresa fictícia que trabalha com logística em grandes escalas.
              </p></h6>
            </div>
          </div>
        </div>
      </div>
      <footer className="caixafooter2">
        <div className="caixafooter">
          <div class="containerfooter">
            <div class="row" id='row'>
              <div class="col-md-4inicio">
                <h3>ACESSO RÁPIDO</h3>
                <br />
                <p>
                  <a class='k' href="/">Início</a>
                  <br />
                  <a class="k" href="login">Login</a>
                  <br />
                  <a class="k" href="#contact">Contato</a>
                  <br />
                  <a class="k" href="projetos">Projetos</a>
                </p>
              </div>


            </div>
          </div>
          <div>
            <div class="col-md-4">
              <div class="fid_box">
                <div className="contactfooter">
                  <h3>ENTRE EM CONTATO CONOSCO</h3>
                  <ul id='location_icon' class="location_icon">
                    <li>
                      <a class="k" href="#">
                        <i class="fa-fa-map-marker" aria-hidden="true"></i>
                      </a><br />Rua Barcelo Domingos, 58<br />Campo Grande - RJ
                    </li>
                    <li><a href="#"><i class="fa fa-phone" aria-hidden="true"></i></a><br />(21) 912345678<br /> (21) 912345678</li>
                  </ul>
                </div>
              </div>
            </div>


          </div>
          <div>
            <div class="col-md-4">
              <div class="fid_box">
                <div className='boxemail'>
                  <h3>RECEBA NOVIDADES POR EMAIL:</h3>
                  <form class="news_form">
                    <input class="letter_form" placeholder=" Email" type="text" name="Email" />
                    <button class="btnfooter">Inscrever-se</button>
                  </form>
                  <ul class="social_icon">
                    <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div class="copyright">
          <div class="copycontainer">
            <div class="row">
              <div class="col-md-12">
                <p>© 2023 TODOS OS DIREITOS RESERVADOS.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App;


