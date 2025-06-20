import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation,Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import header from '../../../assets/customer-top.png';
import coate from '../../../assets/reviewQuote.png';

const testimonials = [
  {
    name: "Awlad Hossin",
    role: "Senior Product Designer",
    text: "A posture corrector works by providing support and gentle alignment...",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Rasel Ahamed",
    role: "CTO",
    text: "Posture Pro is a game-changer for my back pain and productivity.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Nasir Uddin",
    role: "CEO",
    text: "I never realized posture could affect mood until I used this.",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Mariam Khatun",
    role: "UX Specialist",
    text: "Finally a comfortable posture solution that blends into my workday.",
    avatar: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Tanvir Rahman",
    role: "Project Manager",
    text: "It’s lightweight, effective, and keeps me upright all day.",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Farzana Yasmin",
    role: "Data Analyst",
    text: "Wearing this daily has improved my posture and confidence.",
    avatar: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Zahid Hasan",
    role: "Marketing Lead",
    text: "Our team productivity went up after using posture correctors!",
    avatar: "https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Sabrina Noor",
    role: "HR Consultant",
    text: "So sleek and supportive, I barely notice I’m wearing it.",
    avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Mohammad Ali",
    role: "Software Engineer",
    text: "Neck pain gone. Back pain reduced. Worth every penny.",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Sharmeen Sultana",
    role: "Product Owner",
    text: "I wear it during meetings and it keeps me focused.",
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Rayhan Chowdhury",
    role: "QA Tester",
    text: "I use it daily and it reminds me to sit properly.",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Anika Mahmud",
    role: "Fitness Coach",
    text: "Highly recommend for posture correction and daily back support.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  },
];

const TestimonialCarousel = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 text-center pt-28 relative overflow-hidden">
      <div className="pb-10">
        <img
          src={header}
          alt="posture"
          className="mx-auto mb-6 w-40 h-auto"
        />
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          What our customers are sayings
        </h2>
        <p className="mt-4 text-base-content max-w-2xl mx-auto">
          Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!
        </p>
      </div>

      <Swiper
        modules={[Autoplay, Navigation,Pagination]}
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        loop
       
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        className="testimonial-swiper  my-20"
        style={{ overflow: "visible" }} 
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <div
                className={`relative transition-all duration-500 rounded-3xl p-10 
                   bg-white/70 shadow-xl mx-auto h-70 py-20 
                ${isActive ? "md:scale-[1.5] z-20 opacity-100" : " md:scale-85 opacity-50 mt-4"}`}
              >
                <img
                  src={coate}
                  alt="quote"
                  className="w-8 absolute top-4 left-4 opacity-50"
                />
                <p className="text-gray-700 mb-4">{testimonial.text}</p>
                <div className="flex items-center gap-4 justify-center mt-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 object-cover rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold text-teal-700">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialCarousel;