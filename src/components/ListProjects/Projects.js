import React from "react"

import ImageBurguer from "../../assets/assets-projects/image-burguer.png"
import ImageConvertMoney2 from "../../assets/assets-projects/image-convert-money-2.0.png"
import ImageConvertMoney from "../../assets/assets-projects/image-convert-money.png"
import ImageInterfaceApple from "../../assets/assets-projects/image-interface-apple.png"
import ImageLoginScreen from "../../assets/assets-projects/image-login-screen.png"
import ImageLoginYoga from "../../assets/assets-projects/image-login.png"
import ImageStopwatch from "../../assets/assets-projects/image-stopwatch.png"
import ImageToDoList2 from "../../assets/assets-projects/image-to-do-list-2.0.png"
import ImageToDoList from "../../assets/assets-projects/image-to-do-list.png"
import { TitleSection, SectionProjects } from "./ProjectsStyles"

const Projects = () => {
  return (
    <div className="album py-5 bg-light" id="projects">
      <TitleSection>Projetos</TitleSection>
      <SectionProjects className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4 box-shadow">
              <img
                className="card-img-top"
                data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                alt="Imagem Exemplo Comversor de Moeda"
                src={ImageConvertMoney}
                data-holder-rendered="true"
              />
              <div className="card-body">
                <p className="card-text">
                  Aplicação desenvolvida com HTML, CSS e JavaScript. Um
                  conversor de moedas, Dólar para Real e vice-versa. Cotação do
                  Dólar em tempo real.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <a
                      href="https://kaua-marangoni.github.io/conversor-moeda/"
                      target="blank"
                    >
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-success"
                      >
                        Ver Projeto
                      </button>
                    </a>
                    <a
                      href="https://github.com/Kaua-Marangoni/conversor-moeda/"
                      target="blank"
                    >
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                        Ver Código
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 box-shadow">
              <img
                className="card-img-top"
                data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                alt="Imagem Exemplo Tela de Login"
                src={ImageLoginYoga}
                data-holder-rendered="true"
              />
              <div className="card-body">
                <p className="card-text">
                  Tela de Login desenvolvida com HTML, CSS e uma pitada de
                  JavaScript. Caso não possua login, é possível se cadastrar.
                  Apenas Front-End.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <a
                      href="https://kaua-marangoni.github.io/login-yoga/"
                      target="blank"
                    >
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-success"
                      >
                        Ver Projeto
                      </button>
                    </a>
                    <a
                      href="https://github.com/Kaua-Marangoni/login-yoga/"
                      target="blank"
                    >
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                        Ver Código
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 box-shadow">
              <img
                className="card-img-top"
                data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                alt="Imagem Exemplo Lista de Tarefas"
                src={ImageToDoList}
                data-holder-rendered="true"
              />
              <div className="card-body">
                <p className="card-text">
                  Lista de tarefa desenvolvida com HTML, CSS e JavaScript. Os
                  dados ficam armazenados no Local Storage, sendo assim, não são
                  perdidos.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <a
                      href="https://kaua-marangoni.github.io/to-do-list/"
                      target="blank"
                    >
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-success"
                      >
                        Ver Projeto
                      </button>
                    </a>
                    <a
                      href="https://github.com/Kaua-Marangoni/to-do-list/"
                      target="blank"
                    >
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                        Ver Código
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mb-4 box-shadow">
              <img
                className="card-img-top"
                data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                alt="Imagem Exemplo Lista de Tarefas 2"
                src={ImageToDoList2}
                data-holder-rendered="true"
              />
              <div className="card-body">
                <p className="card-text">
                  Lista de tarefas usando HTML, CSS e JavaScript. Dados
                  armazenados no Local Storage. Podendo marcar tarefas como
                  concluída.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <a
                      href="https://kaua-marangoni.github.io/to-do-p5d/"
                      target="blank"
                    >
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-success"
                      >
                        Ver Projeto
                      </button>
                    </a>
                    <a
                      href="https://github.com/Kaua-Marangoni/to-do-p5d/"
                      target="blank"
                    >
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                        Ver Código
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 box-shadow">
              <img
                className="card-img-top"
                data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                alt="Imagem Exemplo Interface Apple"
                src={ImageInterfaceApple}
                data-holder-rendered="true"
              />
              <div className="card-body">
                <p className="card-text">
                  Um projeto utilizando HTML e CSS. Clonando uma tela do site da
                  Apple. Apple Watch. Apenas Front-End. No site há mais
                  conteúdo.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <a
                      href="https://kaua-marangoni.github.io/interface-apple/"
                      target="blank"
                    >
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-success"
                      >
                        Ver Projeto
                      </button>
                    </a>
                    <a
                      href="https://github.com/Kaua-Marangoni/interface-apple/"
                      target="blank"
                    >
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                        Ver Código
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 box-shadow">
              <img
                className="card-img-top"
                data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                alt="Imagem Exemplo Conversor de Moedas 2"
                src={ImageConvertMoney2}
                data-holder-rendered="true"
              />
              <div className="card-body">
                <p className="card-text">
                  Conversor de Moedas, usado HTML, CSS e JavaScript. Dólar em
                  tempo real. Converte de Real para Dólar, Euro e Bitcoin.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <a
                      href="https://kaua-marangoni.github.io/conversor-de-moedas/"
                      target="blank"
                    >
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-success"
                      >
                        Ver Projeto
                      </button>
                    </a>
                    <a
                      href="https://github.com/Kaua-Marangoni/conversor-de-moedas/"
                      target="blank"
                    >
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                        Ver Código
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mb-4 box-shadow">
              <img
                className="card-img-top"
                data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                alt="Imagem Exemplo Cronômetro"
                src={ImageStopwatch}
                data-holder-rendered="true"
              />
              <div className="card-body">
                <p className="card-text">
                  Um projeto simples, utilizando HTML, CSS e JavaScript. Um
                  Cronômetro, onde você inicia e pode pausar, bem como
                  redefinir.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <a
                      href="https://kaua-marangoni.github.io/stopwatch/"
                      target="blank"
                    >
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-success"
                      >
                        Ver Projeto
                      </button>
                    </a>
                    <a
                      href="https://github.com/Kaua-Marangoni/stopwatch/"
                      target="blank"
                    >
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                        Ver Código
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 box-shadow">
              <img
                className="card-img-top"
                data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                alt="Imagem Exemplo Hamburgueria"
                src={ImageBurguer}
                data-holder-rendered="true"
              />
              <div className="card-body">
                <p className="card-text">
                  Projeto de Pedidos de Hamburgueria. Desenvolvido em React e
                  implantado Back-End, desenvolvido com Node.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <a href>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-success"
                      >
                        Projeto Em Breve
                      </button>
                    </a>
                    <a
                      href="https://github.com/Kaua-Marangoni/burguer-react/"
                      target="blank"
                    >
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                        Ver Código
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 box-shadow">
              <img
                className="card-img-top"
                data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                alt="Imagem Exemplo Tela de Login 2"
                src={ImageLoginScreen}
                data-holder-rendered="true"
              />
              <div className="card-body">
                <p className="card-text">
                  Projeto de Tela de Login. Onde você faz Login, e caso não
                  possua login, é possível se cadastrar. Apenas Front-End.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <a
                      href="https://kaua-marangoni.github.io/login-screen-2.0/"
                      target="blank"
                    >
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-success"
                      >
                        Ver Projeto
                      </button>
                    </a>
                    <a
                      href="https://github.com/Kaua-Marangoni/login-screen-2.0/"
                      target="blank"
                    >
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                        Ver Código
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionProjects>
    </div>
  )
}

export default Projects
