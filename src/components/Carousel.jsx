import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import  "./style/Carousel.css"

function Carousel() {

var settings = {
  dots: true,
  infinite: true,
  speed: 3000,
  autoplay: true, 
  autoplaySpeed: 300,
  slidesToShow: 4,
  slidesToScroll: 1, 
  pauseOnHover: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

    const testimonios = [
    {
      id: 1,
      nombre: "Sthefania Vitriago",
      test: "Un trabajo excelente ya tienen a una clienta más fijas!! Unas genias totales, la chica Mica que me atendió un amor!! Súper recomendable",
      stars: 5,
    },
    {
      id: 2,
      nombre: "Donna Martinez",
      test: "Excelente atención y un trabajo impecable, quedé justo como esperaba.",
      stars: 5,
    },
    {
      id: 3,
      nombre: "Nil Martinez",
      test: "Excelente trabajo. Muy recomendable. Las chicas super amables.",
      stars: 5,
    },
    {
      id: 4,
      nombre: "Julia Prestia",
      test: "Lindo trabajan bien.",
      stars: 4,
    },
    {
      id: 5,
      nombre: "Luisana Rodriguez",
      test: "Excelente lugar, buena atención, trabajan muy bien y son muy amables.",
      stars: 5,
    },
    {
      id: 6,
      nombre: "Andrea Becerra",
      test: "Me encantó la atención, el trabajo excelente!! 100% recomendado.",
      stars: 5,
    },
    {
      id: 7,
      nombre: "Juan Carlos Guzman",
      test: "Fui a hacerme la pedicure y la chica Rocío muy amable y trabajo excelente. Súper recomendable!",
      stars: 5,
    },
    {
      id: 8,
      nombre: "Pilar Fernandez Montero",
      test: "Trabajan muy bien, son puntuales y tenés garantía de 1 semana. Me atiendo siempre con Daiana, una genia y super talentosa!!",
      stars: 5,
    },
  ];


   return (
    <div className="SliderContainer">
        <h2>Testimonios de nuestras clientes</h2>
      <Slider {...settings}>
      {testimonios.map((t) => (
        <div key={t.id} className="SliderStyles"> 
         <p className="SliderText"> {t.test} </p>
          <div className="estrella">
            {[...Array(t.stars)].map((_,i) => (
                <FaStar key={i} className="styleEstrella" />
            ))}
          </div>
          <h4 className="textNombre">{t.nombre}</h4>
        </div>
      ))}


      </Slider>
    </div>
  );
}

export default Carousel;