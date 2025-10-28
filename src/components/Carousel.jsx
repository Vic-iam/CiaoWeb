import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import "./style/Carousel.css";

function Carousel() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: true,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true,
          centerPadding: "0px",
        },
      },
    ],
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (sliderRef.current) {
        sliderRef.current.slickGoTo(0); // fuerza actualización
        window.dispatchEvent(new Event("resize")); // recalcula posiciones
      }
    }, 300);
    return () => clearTimeout(timer);
  }, []);

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
      <Slider ref={sliderRef} {...settings}>
        {testimonios.map((t) => (
          <div key={t.id} className="SliderStyles">
            <p className="SliderText">{t.test}</p>
            <div className="estrella">
              {[...Array(t.stars)].map((_, i) => (
                <FaStar key={i} />
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
