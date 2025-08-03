import "./Projects.css";
import { FiLink } from "react-icons/fi";
export const Projects = () => {
  return (
    <div className="pro_container">
      <h1 className="title"><span>my</span> Projects</h1>
      <div className="projects">
        <div className="project_item">
           <img src="https://static.vecteezy.com/system/resources/previews/035/198/647/non_2x/ai-generated-online-shopping-representation-with-people-on-digital-devices-surrounded-by-gifts-and-icons-of-products-photo.jpg" alt="...." />
           <h3 className="projects_title">Fully e-commerce</h3>
           <p>fully responsive e-commerce web application using React.js and Firebase.
Includes user authentication,and admin product management.</p>
           <a href="https://admirable-panda-253329.netlify.app" ><span><FiLink /></span>Vist Project</a>
        </div>

            <div className="project_item">
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjIXLWEkngnLVSW6UzDcuV6nGSLnMc-eIMpA&s" alt="...." />
           <h3 className="projects_title">E-commerce web application</h3>
           <p>fully responsive e-commerce web application using React.js,real-time product listing, cart functionality.</p>
           <a href="https://ornate-flan-5693f1.netlify.app/" ><span><FiLink /></span>Vist Project</a>
        </div>


    <div className="project_item">
           <img src="https://www.nicepng.com/png/detail/247-2474974_e-commerce-e-commerce-development.png" alt="...." />
           <h3 className="projects_title">E-commerce web application</h3>
           <p>responsive e-commerce web application using js,real-time product listing, cart functionality</p>
           <a href="https://ebraheemhany.github.io/pro_hema200/" ><span><FiLink /></span>Vist Project</a>
        </div>

    <div className="project_item">
           <img src="https://clickable.agency/wp-content/uploads/2023/04/bez-nazvaniya-1.png" alt="...." />
           <h3 className="projects_title">clink web application</h3>
           <p>responsive web application to Clink using js</p>
           <a href="https://ebraheemhany.github.io/pro_hema200/" ><span><FiLink /></span>Vist Project</a>
        </div>
    <div className="project_item">
           <img src="https://www.tutorialspoint.com/basics_of_computer_science/images/software_programming.jpg" alt="...." />
           <h3 className="projects_title">Portoflio</h3>
           <p>responsive web portoflio using react js</p>
           <a href="https://my-react-pro-1f067.web.app/" ><span><FiLink /></span>Vist Project</a>
        </div>

    <div className="project_item">
           <img src="https://www.sender.net/wp-content/uploads/2025/04/Landing-page-vs-homepage-small-1024x658.webp" alt="...." />
           <h3 className="projects_title">Landing Page</h3>
           <p>responsive Landing PAge using html and css</p>
           <a href="https://my-react-pro-1f067.web.app/" ><span><FiLink /></span>Vist Project</a>
        </div>

      </div>
    </div>
  )
}
