import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/shopping-time.png";
import projImg2 from "../assets/img/yot-clone.png";
import projImg3 from "../assets/img/imdp.png";
import projImg4 from "../assets/img/crypto.png";
import projImg5 from "../assets/img/admin-dash.png";
import projImg6 from "../assets/img/gym.png";
import projImg7 from "../assets/img/makaan.png";
import projImg8 from "../assets/img/e-Commerce.png";
import nomad from "../assets/img/nomaed.png";
import rather from "../assets/img/ratherApp.jpeg";
import wonder from "../assets/img/wonderTour.jpeg";
import special from "../assets/img/SpecialDesign.png";
import hexa from "../assets/img/hexaShop.png";
import apiCurr from "../assets/img/apiCur.png";
import getRepo from "../assets/img/getRepo.png";
import memory from "../assets/img/memoryGame.png";
import snake from "../assets/img/snake.png";
import dino from "../assets/img/dino.png";
import quiz from "../assets/img/quizGame.png";
import hungman from "../assets/img/hungmanGame.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Shopping time",
      description: "Design & Development",
      imgUrl: projImg1,
      proUrl: "https://shopping-time-zeta.vercel.app/",
    },
    {
      title: "Youtube Clone",
      description: "Design & Development",
      imgUrl: projImg2,
      proUrl: "https://youtube-clone-three-azure.vercel.app/",
    },
    {
      title: "IMDB Clone",
      description: "Design & Development",
      imgUrl: projImg3,
      proUrl: "https://movix-master.vercel.app/",
    },
    {
      title: "Cryo Multipurpose",
      description: "Design & Development",
      imgUrl: projImg4,
      proUrl: "https://cryo-navy.vercel.app/",
    },
    {
      title: "Admin Dashboard",
      description: "Design & Development",
      imgUrl: projImg5,
      proUrl: "https://dashboard-rho-ebon.vercel.app/",
    },
    {
      title: "GYM App",
      description: "Design & Development",
      imgUrl: projImg6,
      proUrl: "https://gym-app-flax-phi.vercel.app/",
    },
    {
      title: "Makaan",
      description: "Design & Development",
      imgUrl: projImg7,
      proUrl: "https://tarek-98.github.io/Makaan/",
    },
    {
      title: "E-Commerce app",
      description: "Design & Development",
      imgUrl: projImg8,
      proUrl: "https://e-commerce-7d3bc.web.app/",
    },
  ];
  const secendProjects = [
    {
      title: "Nomad",
      description: "Design & Development",
      imgUrl: nomad,
      proUrl:
        "https://tarek-98.github.io/Project-9-html-css-responsive-bootstrap/",
    },
    {
      title: "Rather app",
      description: "Design & Development",
      imgUrl: rather,
      proUrl: "https://tarek-98.github.io/Rqther-app/",
    },
    {
      title: "Wonder tour",
      description: "Design & Development",
      imgUrl: wonder,
      proUrl: "https://tarek-98.github.io/Wonder-Tour/",
    },
    {
      title: "Special Design",
      description: "Design & Development",
      imgUrl: special,
      proUrl: "https://tarek-98.github.io/special-design/",
    },
    {
      title: "Hexa Shop",
      description: "Design & Development",
      imgUrl: hexa,
      proUrl: "https://tarek-98.github.io/Hexa-company/",
    },
    {
      title: "Api currency",
      description: "Design & Development",
      imgUrl: apiCurr,
      proUrl: "https://tarek-98.github.io/Api-Currency/",
    },
    {
      title: "Repo github",
      description: "Design & Development",
      imgUrl: getRepo,
      proUrl: "https://get-repo-from-git-hub.vercel.app/",
    },
  ];

  const games = [
    {
      title: "Memory game",
      description: "Design & Development",
      imgUrl: memory,
      proUrl: "https://tarek-98.github.io/memory-game/",
    },
    {
      title: "Snake game",
      description: "Design & Development",
      imgUrl: snake,
      proUrl: "https://snake-game-six-zeta.vercel.app/",
    },
    {
      title: "Dino game",
      description: "Design & Development",
      imgUrl: dino,
      proUrl: "https://dino-game-bay.vercel.app/",
    },
    {
      title: "Quiz App",
      description: "Design & Development",
      imgUrl: quiz,
      proUrl: "https://tarek-98.github.io/quiz-game/",
    },
    {
      title: "Hungman game",
      description: "Design & Development",
      imgUrl: hungman,
      proUrl: "https://tarek-98.github.io/hungman-game/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2 className="mb-5">Projects</h2>
                 
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Games</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {secendProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {games.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
