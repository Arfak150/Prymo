import ProjectCaseStudy from "../../projectCaseStudyComp/ProjectCaseStudy"
import Portada from '../../../assets/images/hportada.svg'
import CaseStudy from '../../../assets/images/hcs.svg'

const Handidact = () => {
  return (
  <div>
    <ProjectCaseStudy
    title="Handidact"
    tag=" Branding, UX / UI Design, Web Development, Social Media Content"
    Img1={Portada}
    client="INDIE VIDEOGAMES DEVELOPER"
    text="Handidact, an indie videogame developer startup,
    needed a website
    that captures the user's attention to
    showcase their proposals. We realized that
    Handidact's strongest point was their distinctive art,
    so our challenge was to use it while also
    seeking a minimalist design."
    tags={[
       <p>
        BRANDING <br />
        BRAND IMPROVEMENT  <br />
        CONTENT DESIGN <br />
        CREATIVE DIRECTION <br />
        UI/UX DESIGN <br />
        ART DIRECTION <br />
        STYLE GUIDE <br />
        WEB DEVELOPMENT <br />
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

export default Handidact