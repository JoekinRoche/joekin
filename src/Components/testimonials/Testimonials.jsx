import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/Roshitha.jfif";
import AVTR2 from "../../assets/fabian.jfif";
import AVTR3 from "../../assets/Preethi.jfif";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const peers = [
  {
    avatar: AVTR1,
    name: "Roshitha R",
    review:
      "Joekin Roche is one of the best teammates I have ever worked with, he is a very good listener, a fast learner provides help to anyone in the team if needed, and is very committed to the responsibilities that he has.",
  },
  {
    avatar: AVTR2,
    name: "Fabian Ferno",
    review:
      "I had the chance to work with Joekin Roche on different projects. His technical skills were always impressive. He constantly showed professional behaviour and a high level of problem-solving skills.He is always creative with writing codes and shows a nice attitude towards team members. Based on that, I would gladly recommend him as a software developer with his technical and soft skills.",
  },
  {
    avatar: AVTR3,
    name: "Preethi R",
    review: ""
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Peers</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials_container"
        navigation={true}
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={1}
      >
        {peers.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="peer_avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="peer_name">{name}</h5>
              <small className="peer_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
