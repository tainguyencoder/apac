import Image from "next/image";
import Link from "next/link";
import React from "react";

const TestimonialSlide3 = ({ slide, type }) => {
  const { name, desc, id, desig, img } = slide;
  return (
    <div>
      <div className="testimonial__3__single__inner">
        <div
          className={`testimonial__3__content ${
            type == 2 ? "bg__pink" : ""
          } common__gradient__bg `}
        >
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlide3;
