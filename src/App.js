import "./styles/App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Header from "./components/Header";
import About from "./components/About";
import ProjectCard from "./components/ProjectCard";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

// projects data
const projects = [
  {
    imageUrl:
      "https://ericnguyen23.github.io/Module-2-Challenge/assets/images/projects/proj---films.png",
    title: "Project Films",
    desc: "Working with a team of four, we were able to build a fully functional CRUD application using a number of technologies including Express, MySQL, Node, Bulma. This app allows users to create an account, create, edit and remove movies and also like movies.",
    githubUrl: "https://github.com/ericnguyen23/Project-Films",
    deployedUrl: "https://uciprojfilms.herokuapp.com/",
  },
  {
    imageUrl:
      "https://ericnguyen23.github.io/Module-2-Challenge/assets/images/projects/proj---trivia-game.png",
    title: "Trivia Game",
    desc: "Working with a team of five, we were able to build a fully functional trivia game, calling the Trivia Time and Giphy API. This game surfaces random questions from the Trivia Time API, scores the player and ultimately displays the results on a leaderboard. The player then has the option of playing again or clearing the leaderboard.",
    githubUrl: "https://github.com/ericnguyen23/Trivia-Giphy",
    deployedUrl: "https://jakedish.github.io/trivia-time/",
  },
  {
    imageUrl:
      "https://ericnguyen23.github.io/Module-2-Challenge/assets/images/projects/proj---cheatsheet.png",
    title: "CSS Cheatsheet",
    desc: "Using HTML and CSS, a cheatsheet page was built with helpful css tips. Other technologies include css transitions and media queries.",
    githubUrl: "https://github.com/ericnguyen23/Trivia-Giphy",
    deployedUrl: "https://ericnguyen23.github.io/css-cheatsheet/",
  },
];

function App() {
  return (
    <Container fluid>
      <Row>
        <Header />
        <About />
        <ProjectCard projectsData={projects} />
        <Contact />
        <Resume />
        <Footer />
      </Row>
    </Container>
  );
}

export default App;
