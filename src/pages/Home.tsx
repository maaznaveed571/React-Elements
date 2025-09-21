// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

//  librarry
import resume from "/CV.pdf";
// Images
import Design1 from "/assests/3.png";
import Design2 from "/assests/2.jpg";
import Design3 from "/assests/5.png";
import Services1 from "/assests/service_icon/001-options.svg";
import Services2 from "/assests/service_icon/002-chat.svg";
import Services3 from "/assests/service_icon/004-percentage.svg";
import Services4 from "/assests/service_icon/004-percentage.svg";
import Services5 from "/assests/service_icon/006-goal.svg";
import Services6 from "/assests/service_icon/005-line-chart.svg";
import Logo from "/assests/default-removebg-preview.png";
import Profile from "/assests/profile.png";
import "./Home.css";
import { isValidArray } from '../utils/global-functions';
import { cn } from '../lib/utils';
const skills: {
  src: string;
  alt: string,
  class?: string
}[] = [
    { src: "./skills/html.svg", alt: "html" },
    { src: "./skills/css.svg", alt: "css" },
    { src: "./skills/tailwind.svg", alt: "tailwind" },
    { src: "./skills/bootstrap.png", alt: "bootstrap" },
    { src: "./skills/js.svg", alt: "JavaScript" },
    { src: "./skills/react.svg", alt: "React" },
    { src: "./skills/vite.svg", alt: "Vite" },
    { src: "./skills/nextjs.svg", alt: "Next.js" },
    { src: "./skills/angular.svg", alt: "Angular" },
    { src: "./skills/typescript.svg", alt: "TypeScript" },
    { src: "./skills/nest.svg", alt: "nest" },
    { src: "./skills/shopify.svg", alt: "Shopify" },
    { src: "./skills/swiper.svg", alt: "Swiper" },
    { src: "./skills/supabase.svg", alt: "supabase" },
  ]


const Home = () => {
  return (
    <>
      <div className="main_container">
        <div className="about">
          <div className="about_row">
            <div
              className="image"
            >
              <img src={Profile} alt="" />
            </div>
            <div
              className="content"
            >
              <h1>We can make it together</h1>
              <p>
                I am a passionate <span>Full Stack Developer</span> with hands-on experience working in diverse companies, where I have contributed to building and scaling web applications from front-end to back-end. I hold a Bachelor’s degree in Software Engineering, which has provided me with a solid foundation in software development and problem-solving. Over the years, I have mastered modern technologies, frameworks, and tools to deliver high-quality, efficient, and user-friendly solutions.
              </p>
              <p>
                I am always eager to take on new challenges, collaborate with teams, and contribute to impactful projects. If you’re looking for someone reliable, skilled, and dedicated to driving success through technology, <strong>let’s connect—I am ready to get started!</strong>
              </p>

              <div className="download_button flex gap-2">
                <a href={'#tel:03363017225'}>
                  <button>Call Now</button>
                </a>
                <a href={resume} download="CV">
                  <button>Download your CV</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main_container">
        <Swiper
          slidesPerView="auto"
          spaceBetween={40}
          freeMode
          modules={[FreeMode]}
          className="!ml-0 !pl-[2rem] !mt-[1rem]"
        >
          {isValidArray(skills) && skills.map((item) => (
            <SwiperSlide key={item?.alt} className={cn("max-w-[50px]", item?.class)}>
              <img
                className="w-full h-full object-contain"
                src={item?.src}
                alt={item?.alt}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="heading" id="portfolio">
        <h1
        // data-aos="fade-right"
        >
          Portfolio
        </h1>
      </div>
      <div className="main_container">
        <div className="portfolio">
          <div className="row">
            <div className="item">
              <a href="/">
                <div className="img">
                  <img src={Design2} alt="" />
                </div>
                <div className="content">
                  <p>E-Commerce shopping store </p>
                  <span>MERN</span>
                </div>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="item">
              <a href="/">
                <div className="img">
                  <img src={Design1} alt="" />
                </div>
                <div className="content">
                  <p>Business website </p>
                  <span>Express App</span>
                </div>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="item">
              <a href="/">
                <div className="img">
                  <img src={Design3} alt="" />
                </div>
                <div className="content">
                  <p>Proceesing </p>
                  <span>MERN</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="main_container" id="socials">
        <div className="socials">
          <div className="socials_row">
            <div className="socials_item">
              <a
                href="https://github.com/MuhammadMaazNaveed"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github"></i>
                <div className="text">
                  <p>Github</p>
                </div>
              </a>
            </div>
            <div className="socials_item">
              <a
                href="https://twitter.com/Maaz_Naveed_dev"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-square-twitter"></i>
                <div className="text">
                  <p>Twitter</p>
                </div>
              </a>
            </div>
            <div className="socials_item">
              <a
                href="https://www.instagram.com/maaz_web_dev/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
                <div className="text">
                  <p>instagram</p>
                </div>
              </a>
            </div>
            <div className="socials_item">
              <a
                href="https://www.facebook.com/MaazNaveeddev"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-facebook"></i>
                <div className="text">
                  <p>Facebook</p>
                </div>
              </a>
            </div>
            <div className="socials_item">
              <a
                href="https://www.linkedin.com/in/maaz-naveed-0a6451219/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
                <div className="text">
                  <p>Linkedin</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="heading" id="about">
        <h1
        // data-aos="fade-right"
        // data-aos-easing="linear"
        // data-aos-duration="1500"
        >
          About Me
        </h1>
      </div>

      <div className="heading" id="services">
        <h1
        // data-aos="fade-right"
        // data-aos-easing="linear"
        // data-aos-duration="1500"
        >
          Services
        </h1>
      </div>
      <div className="main_container">
        <div className="Service">
          <div className="Service_row">
            <div className="item">
              <img src={Services1} alt="" />
              <h1 className="heading_item">
                Digital <br />
                Strategy
              </h1>
              <p className="para_item">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>
            <div className="item">
              <img src={Services2} alt="" />
              <h1 className="heading_item">
                Web <br />
                Design
              </h1>
              <p className="para_item">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>
            <div className="item">
              <img src={Services3} alt="" />
              <h1 className="heading_item">
                Website
                <br />
                Development
              </h1>
              <p className="para_item">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>
            <div className="item">
              <img src={Services4} alt="" />
              <h1 className="heading_item">
                Web <br />
                Development
              </h1>
              <p className="para_item">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>
            <div className="item">
              <img src={Services5} alt="" />
              <h1 className="heading_item">
                WordPress <br />
                Solutions
              </h1>
              <p className="para_item">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>
            <div className="item">
              <img src={Services6} alt="" />
              <h1 className="heading_item">
                Mobile <br />
                Applications
              </h1>
              <p className="para_item">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="heading" id="skills">
        <h1
        // data-aos="fade-right"
        // data-aos-easing="linear"
        // data-aos-duration="1500"
        >
          My Skills
        </h1>
      </div>
      <div className="heading" id="client">
        <h1
        // data-aos="fade-right"
        // data-aos-easing="linear"
        // data-aos-duration="1500"
        >
          My Happy Clients
        </h1>
      </div>
      <div className="main_container">
        <div className="clients">
          <div className="container">
            <input type="radio" name="dot" id="one" />
            <input type="radio" name="dot" id="two" />
            <div className="main-card">
              <div className="cards">
                <div className="wrapper">
                  <div className="card front-face">
                    <img
                      src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/c0b841de4b0644caa14f1384eb3aca2a-1658826858046/09f7ca89-1844-4f6b-bcba-b4fadec52edf.jpg"
                      alt="Flip Card"
                    />
                  </div>
                  <div className="card back-face">
                    <img
                      src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/c0b841de4b0644caa14f1384eb3aca2a-1658826858046/09f7ca89-1844-4f6b-bcba-b4fadec52edf.jpg"
                      alt="Flip Card"
                    />
                    <div className="info">
                      <div className="title">neareden</div>
                      <p>Great..Thanks</p>
                    </div>
                  </div>
                </div>
                <div className="wrapper">
                  <div className="card front-face">
                    <img
                      src="https://pbs.twimg.com/profile_images/1463207615194750976/YloZTWZ7_400x400.jpg"
                      alt="Flip Card"
                    />
                  </div>
                  <div className="card back-face">
                    <img
                      src="https://pbs.twimg.com/profile_images/1463207615194750976/YloZTWZ7_400x400.jpg"
                      alt="Flip Card"
                    />
                    <div className="info">
                      <div className="title">CodingLab</div>
                      <p>"You did an amazing job on my app - thank you!"</p>
                    </div>
                    <ul>
                      <a href="https://twitter.com/deepnkrahlawt">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="https://www.instagram.com/svintmvrcus/">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="https://www.youtube.com/channel/UCpih6dQQqtGm0kauNsMRfBw">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </ul>
                  </div>
                </div>
                <div className="wrapper">
                  <div className="card front-face">
                    <img
                      src="https://pbs.twimg.com/profile_images/1562683979400040448/FzuNaKPx_400x400.jpg"
                      alt="Flip Card"
                    />
                  </div>
                  <div className="card back-face">
                    <img
                      src="https://pbs.twimg.com/profile_images/1562683979400040448/FzuNaKPx_400x400.jpg"
                      alt="Flip Card"
                    />
                    <div className="info">
                      <div className="title">Svint </div>
                      <p>
                        "Excellent website development - impressive design,
                        functionality, and user experience."
                      </p>
                    </div>
                    <ul>
                      <a href="https://www.facebook.com/svintmvrcus/">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="https://www.instagram.com/dpnkr.ahlawat/">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="https://www.facebook.com/deepankar.ahlawat">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="cards">
                <div className="wrapper">
                  <div className="card front-face">
                    <img
                      src="https://pbs.twimg.com/profile_images/1522074284499288064/l0Qcz2RW_400x400.jpg"
                      alt="Flip Card"
                    />
                  </div>
                  <div className="card back-face">
                    <img
                      src="https://pbs.twimg.com/profile_images/1522074284499288064/l0Qcz2RW_400x400.jpg"
                      alt="Flip Card"
                    />
                    <div className="info">
                      <div className="title">Aizk</div>
                      <p>
                        "Fantastic website development! Exceeded expectations in
                        every way possible."
                      </p>
                    </div>
                    <ul>
                      <a href="https://twitter.com/Aizkmusic">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="https://www.instagram.com/isaacgemal/">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </ul>
                  </div>
                </div>
                <div className="wrapper">
                  <div className="card front-face">
                    <img
                      src="https://cdn.beacons.ai/user_content/3UTvYbjIuDVEK9JVYkOVJyZs2Cs1/profile_ariquxeen.png?t=1649657586589"
                      alt="Flip Card"
                    />
                  </div>
                  <div className="card back-face">
                    <img
                      src="https://cdn.beacons.ai/user_content/3UTvYbjIuDVEK9JVYkOVJyZs2Cs1/profile_ariquxeen.png?t=1649657586589"
                      alt="Flip Card"
                    />
                    <div className="info">
                      <div className="title">Ariquxeen</div>
                      <p>
                        "Thank you for developing our website! The design is
                        modern and user-friendly, and we've received positive
                        feedback from our clients."
                      </p>
                    </div>
                    <ul>
                      <a href="https://www.facebook.com/AriQuxeen">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="https://twitter.com/AriQuxeen">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="https://www.instagram.com/Ariquxeen/">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </ul>
                  </div>
                </div>
                <div className="wrapper">
                  <div className="card front-face">
                    <img
                      src="https://thronecdn.com/users/twitch:166480635.jpg.jpeg?version=1677479134077"
                      alt="Flip Card"
                    />
                  </div>
                  <div className="card back-face">
                    <img
                      src="https://thronecdn.com/users/twitch:166480635.jpg.jpeg?version=1677479134077"
                      alt="Flip Card"
                    />
                    <div className="info">
                      <div className="title">blaine</div>
                      <p>
                        "The website exceeded my expectations with its design
                        and functionality."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="button">
              <label htmlFor="one" className="active one"></label>
              <label htmlFor="two" className="two"></label>
            </div>
          </div>
        </div>
      </div>
      <div className="main_container3">
        <footer className="footer">
          <div className="footer_container">
            <div className="logo">
              <img src={Logo} alt="logo" />
            </div>
            <div className="list">
              <ul>
                <li>
                  <a href="https://www.facebook.com/MaazNaveeddev">Facebook</a>
                </li>
                <li>
                  <a href="https://twitter.com/Maaz_Naveed_dev">Twitter</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/maaz_web_dev/">
                    instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.fiverr.com/maaz_naveed">Fiver</a>
                </li>
                <li>
                  <a href="https://github.com/MuhammadMaazNaveed">Github</a>
                </li>
                <li>
                  <a href="https://legiit.com/maaz_web_dev">legiit</a>
                </li>
                <li>
                  <a href="https://contra.com/maaznaveed5712_edrrg2d6">
                    Contra
                  </a>
                </li>
              </ul>
            </div>
            <div className="copy_right">
              <p>©2023 All rights reserved | Muhammad Maaz Naveed</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
