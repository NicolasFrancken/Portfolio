import "./Proyects.css";

function Proyects() {
  return (
    <section id="projects" className="Proyects-container">
      <div className="Proyects-title">
        <h2>My Projects</h2>
      </div>
      <div className="Proyects-card-container">
        <div className="proyect-1 proyect-container">
          <div className="left">
            <div className="top">
              <h3 className="proyect-title">GYMATE Landing Page &#128170;</h3>
              <p className="proyect-description">
                A personalized landing page for an imaginary client. Beautiful
                and minimalistic.
              </p>
            </div>
            <div className="bottom">
              <h3>Tech used</h3>
              <div className="proyect-skills">
                <div className="skill-a"></div>
                <div className="skill-c"></div>
                <div className="skill-g"></div>
              </div>
            </div>
          </div>
          <div className="right">
            <a
              className="img-link"
              href="https://gymate-site.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="img-proyect-1"></div>
            </a>
            <div className="proyect-links">
              <a
                href="https://gymate-site.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bx-sm bx-globe"></i>
              </a>
              <a
                href="https://github.com/NicolasFrancken/GYMATE"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bx-sm bxl-github"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="proyect-2 proyect-container">
          <div className="right">
            <a className="img-link" href="" target="_blank" rel="noreferrer">
              <div className="img-proyect-2"></div>
            </a>
            <div className="proyect-links">
              <a href="" target="_blank" rel="noreferrer">
                <i className="bx bx-sm bx-globe"></i>
              </a>
              <a
                href="https://github.com/NicolasFrancken/TO-DOs"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bx-sm bxl-github"></i>
              </a>
            </div>
          </div>
          <div className="left">
            <div className="top">
              <h3 className="proyect-title">My TO-DO's 📋</h3>
              <p className="proyect-description">
                A tasks app with User authentication. You can create an account
                and start creating, updating and checking tasks! Multiple pages,
                JWT Authentication and a full server (with a MongoDB database)
              </p>
            </div>

            <div className="bottom">
              <h3>Tech used</h3>
              <div className="proyect-skills">
                <div className="skill-a"></div>
                <div className="skill-d"></div>
                <div className="skill-e"></div>
                <div className="skill-g"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="proyect-3 proyect-container">
          <div className="left">
            <div className="top">
              <h3 className="proyect-title">Songy &#127925;</h3>
              <p className="proyect-description">
                An interactive, with a loading interface, search app. Using
                Deezer's API, I am able to request songs data. You can even
                listen to a preview!
              </p>
            </div>
            <div className="bottom">
              <h3>Tech used</h3>
              <div className="proyect-skills">
                <div className="skill-a"></div>
                <div className="skill-c"></div>
                <div className="skill-g"></div>
              </div>
            </div>
          </div>
          <div className="right">
            <a
              className="img-link"
              href="https://songy-webapp.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="img-proyect-3"></div>
            </a>
            <div className="proyect-links">
              <a
                href="https://songy-webapp.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bx-sm bx-globe"></i>
              </a>
              <a
                href="https://github.com/NicolasFrancken/Songy"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bx-sm bxl-github"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="proyect-4 proyect-container">
          <div className="right">
            <a
              className="img-link"
              href="https://notecloud-webapp.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="img-proyect-4"></div>
            </a>
            <div className="proyect-links">
              <a
                href="https://notecloud-webapp.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bx-sm bx-globe"></i>
              </a>
              <a
                href="https://github.com/NicolasFrancken/NoteCloud"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bx-sm bxl-github"></i>
              </a>
            </div>
          </div>
          <div className="left">
            <div className="top">
              <h3 className="proyect-title">NoteCloud &#128221;</h3>
              <p className="proyect-description">
                An interactive Notes App. With a Node + Express server, I
                simulated a "cloud" experience. You can Create, Update and
                Delete notes.
              </p>
            </div>

            <div className="bottom">
              <h3>Tech used</h3>
              <div className="proyect-skills">
                <div className="skill-a"></div>
                <div className="skill-c"></div>
                <div className="skill-e"></div>
                <div className="skill-g"></div>
                <div className="skill-h"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Proyects;
