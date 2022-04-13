import { useEffect, useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { SlideData } from "./SlideShowData";
import "./SlideShow.css";
import { Link } from "react-router-dom";

const SlideShow = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  let timeOut = null;
  useEffect(() => {
    timeOut = setTimeout(nextSlide, 4000);
  }, [current]);
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    clearTimeout(timeOut);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    clearTimeout(timeOut);
  };

  if (!Array.isArray(slides) || length <= 0) return null;
  return (
    <>
      <section className="slider">
        <FaAngleLeft className="leftArrow" onClick={prevSlide} />
        <FaAngleRight className="rightArrow" onClick={nextSlide} />
        {SlideData.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && <img src={slide.image} alt={slide.alt} />}
            </div>
          );
        })}
      </section>
      <section className="backGrondImg">
        <img src={SlideData[0].image} alt="image" />
        <div className="backGrondDesk">
          <h2>Enjoy shopping with Easy Store</h2>
          <button className="btn">
            <Link to="/shop"> Go to shop</Link>
          </button>
        </div>
      </section>
    </>
  );
};

export default SlideShow;
