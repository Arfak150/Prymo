import ProjectCaseStudy from "../../projectCaseStudyComp/ProjectCaseStudy"
import Portada from '../../../assets/images/bhportada.svg'
import CaseStudy from '../../../assets/images/bhcs.svg'

const Blockhouse = () => {
  return (
    <div>
      <ProjectCaseStudy
      title="Block House"
      tag=" UX/UI Design & Website Development"
      Img1={Portada}
      client="INDIE VIDEOGAMES DEVELOPER"
      text="Block House,
      a multi-space focused on innovation and technology, got a rebranding process, which required updating their website with the new brand style.
      This is how we took their website to the next level."
      tags={[
         <p>
          DIGITAL STRATEGY <br />
          EXPERIENCE STRATEGY  <br />
          CONTENT STRATEGY <br />
          CONTENT GUIDELINES <br />
          CREATIVE DIRECTION <br />
          UI/UX DESIGN <br />
          ART DIRECTION <br />
          ACCESSIBILITY + SEO <br />
          STYLE GUIDE <br />
          TECHNICAL CONSULTING <br />
        </p>
      ]}
      botonUrl="https://upqode.com/work"
      challenge="We analyze your entire brand, your vision and projection, your clients, and your competition to establish priorities and goals in order to create the perfect website."
      approach="We use the most innovative AI to design your website, which is fully responsive and features a visually appealing interface specifically designed to enhance the user experience."
      conclusion="We develope the website using the latest technologies to ensure that your site is modern and meets all the necessary requirements to achieve your business objectives."
      Img2={CaseStudy}
      />
    </div>

  )
}

// title, tag, Img1, client, text, tags, botonUrl, challenge, approach, conclusion, Img2

export default Blockhouse