import './packs.css'
import Titulo from '../Titulo'
import PackCard from './packCard/PackCard'
import PackCardLight from './packCard/PackCardLight'
import icon1 from '../../assets/icons/pack1.svg';
import icon2 from '../../assets/icons/pack2.svg';
import icon3 from '../../assets/icons/pack3.svg';
import PackItem from './packCard/PackItem'
import React, { useEffect } from 'react';


const Packs = () => {

  useEffect(() => {

    ScrollReveal().reveal('.packCard', {delay: 800, duration: 2200, distance:'-150px', origin:'bottom',  });
    ScrollReveal().reveal('.light', {delay: 100, duration: 2000, distance:'-150px', origin:'bottom', scale: 1.2});



  }, []);




  return (
    <section className='packsSection'>
      <div className="packsContent">
         <Titulo pretitle="CHOOSE YOUR IDEAL PACK" title="Our Packs"/>
         <div className="packsRow">
          <PackCard id='asd' icon={icon1} packname="Website Design" price="$400.00" packtext="Embrace a professional, attractive, and efficient design that reflects your brand and entices new clients."
          items={[
            <PackItem key={1} itemtext="Complete Brand Analysis" />,
            <PackItem key={2} itemtext="Competitor Research" />,
            <PackItem key={3} itemtext="Visual Mockups and Prototypes" />,
            <PackItem key={4} itemtext="Copywriting" />,
            <PackItem key={5} itemtext="Content Strategy and Web Marketing" />,
            <PackItem key={6} itemtext="Web Design" />,
            <PackItem key={7} itemtext="Responsiveness across all devices and screens" />,
          ]}
          />

          <PackCardLight icon={icon2} packname="Full Website" price="$499.00" packtext="The best solution to create the perfect website for your business. From Design to Full Development, all at HALF the PRICE!"
          items={[
            <b>
            <PackItem key={1} itemtext="
              All from the Web Design pack" />
            </b>,
            <PackItem key={2} itemtext="Website Development" />,
            <PackItem key={3} itemtext="Integration of web analytics tools" />,
            <PackItem key={4} itemtext="Security seal and SSL certificates" />,
            <PackItem key={5} itemtext="SEO" />,
            <PackItem key={6} itemtext="Performance and Speed Optimization" />,
            <PackItem key={7} itemtext="Monthly Maintenance" />,
          ]}
          />


          <PackCard id='asdd' icon={icon3} packname="Brand Boost" price="$1,099.00" packtext="The ultimate solution to stand out in the competitive digital world! Get your complete ideal website, enhance your social media, and let's work together on a sales-boosting campaign!"
          items={[
            <b>
            <PackItem key={1} itemtext="All from the Website Design pack" />
            </b>,
            <b>
            <PackItem key={1} itemtext="All from the Full Website pack" />
            </b>,
            <PackItem key={2} itemtext="Hosting" />,
            <PackItem key={3} itemtext="Complete Brand Design" />,
            <PackItem key={4} itemtext="Social Media Content Design" />,
            <PackItem key={5} itemtext="Banners and Promotional Graphics" />,
            <PackItem key={6} itemtext="Digital Marketing Campaigns" />,
            <PackItem key={7} itemtext="3 Months of Free Maintenance" />,
          ]}
          />
         </div>
      </div>
    </section>
  )
}

export default Packs