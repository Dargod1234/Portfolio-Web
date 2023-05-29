// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../assests/EstiloProyectos.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import starfitnessLogo from '../../public/img/starfitness-logo.png'
import marlowesasLogo from '../../public/img/Marlowesas-logo.png'
import amaruchaskiLogo from '../../public/img/amaruchaski-logo.png'
import ganstaLogo from '../../public/img/gansta-logo.png'

const projects = [
  {
    id: 1,
    name: 'Star Fitness',
    image: starfitnessLogo,
    link: 'https://starfitness.store'
  },
  {
    id: 2,
    name: 'Marlowe S.A.S',
    image: marlowesasLogo,
    link: 'https://test.marlowesas.com'
  },
  {
    id: 4,
    name: 'Gangsta',
    image: ganstaLogo,
    link: 'https://gangsta.com.co'
  },
  {
    id: 3,
    name: 'Amaruchaski',
    image: amaruchaskiLogo,
    link: 'https://amaruchaski.com'
  }
]

function ProjectCard (props) {
  // eslint-disable-next-line react/prop-types
  const { name, image, link } = props.project
  // eslint-disable-next-line react/prop-types
  const cardClasses = `project-card project-card-${props.project.id}`
  // eslint-disable-next-line react/prop-types
  const infoClasses = `project-info flex project-info-${props.project.id}`
  return (
    <div className={cardClasses}>
      <a href={link} target="_blank" rel="noreferrer noopener">
        <img className="project-image" src={image} alt={name} />
      </a>
      <div className={infoClasses}>
        <a
          className="project-link"
          href={link}
          target="_blank"
          rel="noreferrer noopener"
        >
          Ver proyecto
        </a>
      </div>
    </div>
  )
}

function ProjectList () {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Slider>
    </div>
  )
}

export default ProjectList
