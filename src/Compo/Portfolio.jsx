import React, { useEffect, useState } from "react";
import image from '../Compo/rohit.jpg'

export default function App() {

  const [clients, setClients] = useState(0);
  const [projects, setProjects] = useState(0);
  const [support, setSupport] = useState(0);
  const [workers, setWorkers] = useState(0);


  useEffect(() => {
    let c = 0, p = 0, s = 0, w = 0;

    const interval = setInterval(() => {
      if (c < 232) {
        c++;
        setClients(c);
      }
      if (p < 521) {
        p++;
        setProjects(p);
      }
      if (s < 1453) {
        s += 5;
        setSupport(s);
      }
      if (w < 32) {
        w++;
        setWorkers(w);
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className="d-flex">

      <div className=" text-white p-4 text-center" style={{  background: "linear-gradient(135deg, #141e30, #243b55)",width: "250px",height: "100vh",position: "fixed",overflowY: "auto"}}>
        <img src={image} alt="profile" className="rounded-circle mb-3" style={{ width: "120px", height: "120px", objectFit: "cover", border: "3px solid white" }}/>

        <h4>ROHIT RAVAL</h4>

        <ul className="nav flex-column mt-4 text-start">
          <li className="nav-item"><a href="#" className="nav-link text-white">Home</a></li>
          <li className="nav-item"><a href="#about" className="nav-link text-white">About</a></li>
          <li className="nav-item"><a href="#resume" className="nav-link text-white">Resume</a></li>
          <li className="nav-item"><a href="#Portfilo" className="nav-link text-white">Portfolio</a></li>
          <li className="nav-item"><a href="#servies" className="nav-link text-white">Services</a></li>
          <li className="nav-item"><a href="#contact" className="nav-link text-white">Contact</a></li>
        </ul>
      </div>

      <div style={{ marginLeft: "250px", width: "100%" }}>

        <div className="vh-100 d-flex align-items-center text-white" style={{backgroundImage:"url('https://img.freepik.com/free-photo/workplace-office-with-laptop-coffee-dark-room-night_169016-47422.jpg?semt=ais_incoming&w=740&q=80')", backgroundSize: "cover", backgroundPosition: "center", }}>
          <div className="container">
            <h1 className="display-3 fw-bold animate__animated animate__bounceInDown ">ROHIT RAVAL</h1>
            <h3>I'm <span className="text-danger  ">developer...</span></h3>
          </div>
        </div>

<div className="container py-5 "id="about" style={{ background: "linear-gradient(135deg, #0f172a, #1e293b)", color: "white",boxShadow: "0 10px 40px rgba(0,0,0,0.3)"}}>

  <h2 className="fw-bold text-info"data-aos="fade-up" style={{ fontSize: "45px", letterSpacing: "1px"}}>
    About Me
  </h2>

  <div style={{ width: "90px", height: "4px", background: "linear-gradient(to right,#00c6ff,#0072ff)", borderRadius: "10px"}}data-aos="fade-up" data-aos-delay="100" ></div>

  <p className="mt-4" data-aos="fade-up" data-aos-delay="200" style={{ color: "#cbd5e1", lineHeight: "30px",fontSize: "17px" }}>
    Passionate Frontend Developer creating modern, responsive and
    user-friendly websites with beautiful UI designs.
  </p>

  <div className="row mt-5 align-items-center">
    <div className="col-md-4 text-center" data-aos="zoom-in" data-aos-delay="300">
      <img src={"https://static.vecteezy.com/system/resources/thumbnails/055/236/043/small/smiling-businessman-holds-documents-wearing-a-suit-png.png"} alt="profile" className="img-fluid"
      style={{ borderRadius: "25px",border: "5px solid #0ea5e9",boxShadow: "0 10px 35px rgba(14,165,233,0.4)",transition: "0.4s",maxHeight: "420px",objectFit: "cover"}}
      />
  </div>
  <div className="col-md-8 mt-4 mt-md-0" data-aos="fade-left" data-aos-delay="400">
      <h3 className="fw-bold mb-3" style={{ color: "#38bdf8", fontSize: "32px"}}>
        Frontend Developer & Web Designer
      </h3>

      <p style={{color: "#cbd5e1",fontSize: "16px", lineHeight: "28px"}}>
        I design clean, modern and interactive websites using React JS,
        Bootstrap and JavaScript with smooth animations and responsive layouts.
      </p>

      <div className="row mt-4">

        <div className="col-md-6"data-aos="fade-up" data-aos-delay="500">

          <div className="mb-3 p-3" style={{background: "rgba(255,255,255,0.08)", borderRadius: "15px", border: "1px solid rgba(255,255,255,0.1)",transition: "0.3s"}}>
            <strong className="text-info">› Birthday:</strong> 19 June 2005
          </div>

          <div className="mb-3 p-3" style={{ background: "rgba(255,255,255,0.08)", borderRadius: "15px", border: "1px solid rgba(255,255,255,0.1)"}}>
            <strong className="text-info">› Website:</strong> www.example.com
          </div>

          <div className="mb-3 p-3"style={{ background: "rgba(255,255,255,0.08)",borderRadius: "15px",border: "1px solid rgba(255,255,255,0.1)"}}>
            <strong className="text-info">› Phone:</strong> +91 9510741618
          </div>

          <div className="mb-3 p-3" style={{ background: "rgba(255,255,255,0.08)", borderRadius: "15px", border: "1px solid rgba(255,255,255,0.1)"}}>
            <strong className="text-info">› City:</strong> Ahmedabad, India
          </div>

        </div>

        <div className="col-md-6" data-aos="fade-up" data-aos-delay="600">

          <div className="mb-3 p-3" style={{ background: "rgba(255,255,255,0.08)", borderRadius: "15px", border: "1px solid rgba(255,255,255,0.1)"}}>
            <strong className="text-info">› Age:</strong> 21
          </div>

          <div className="mb-3 p-3" style={{ background: "rgba(255,255,255,0.08)", borderRadius: "15px", border: "1px solid rgba(255,255,255,0.1)"}}>
            <strong className="text-info">› Degree:</strong> Master
          </div>

          <div className="mb-3 p-3"style={{ background: "rgba(255,255,255,0.08)", borderRadius: "15px", border: "1px solid rgba(255,255,255,0.1)"}}>
            <strong className="text-info">› Email:</strong> ravalrohit@gmail.com
          </div>

          <div className="mb-3 p-3" style={{ background: "rgba(255,255,255,0.08)", borderRadius: "15px", border: "1px solid rgba(255,255,255,0.1)"}}>
            <strong className="text-info">› Freelance:</strong> Available
          </div>

        </div>

      </div>

    </div>

  </div>
</div>

       
<div className="container py-5" style={{  background: "linear-gradient(135deg,#0f172a,#1e293b)",padding: "50px", boxShadow: "0 10px 40px rgba(0,0,0,0.35)" }}>

  <h2 className="fw-bold text-info"data-aos="fade-up" style={{ fontSize: "45px", letterSpacing: "1px"}}>
    My Skills
  </h2>

  <div style={{ width: "90px", height: "4px", background: "linear-gradient(to right,#00c6ff,#0072ff)", borderRadius: "20px"}} data-aos="fade-up" data-aos-delay="100"></div>

  <p className="mt-4"data-aos="fade-up" data-aos-delay="200" style={{ color: "#cbd5e1", fontSize: "17px", lineHeight: "30px"}}>
    I create modern responsive websites with attractive UI/UX using
    frontend technologies and powerful frameworks.
  </p>

  <div className="row mt-5">

    <div className="col-md-6" data-aos="fade-right" data-aos-delay="300">

      <div className="mb-4 p-4" style={{ background: "rgba(255,255,255,0.06)", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.08)", transition: "0.4s"}}>
        <div className="d-flex justify-content-between mb-2">
          <span className="fw-bold text-white">HTML</span>
          <span className="text-info fw-bold">100%</span>
        </div>

        <div className="progress" style={{ height: "12px", borderRadius: "20px",  background: "#334155"}}>
          <div className="progress-bar" style={{ width: "100%", background: "linear-gradient(to right,#00c6ff,#0072ff)", borderRadius: "20px"}}></div>
        </div>
      </div>

      <div className="mb-4 p-4" style={{ background: "rgba(255,255,255,0.06)",borderRadius: "20px", border: "1px solid rgba(255,255,255,0.08)"}}>
        <div className="d-flex justify-content-between mb-2">
          <span className="fw-bold text-white">CSS</span>
          <span className="text-success fw-bold">90%</span>
        </div>

        <div className="progress" style={{ height: "12px", borderRadius: "20px", background: "#334155"}}>
          <div className="progress-bar"style={{ width: "90%", background: "linear-gradient(to right,#22c55e,#15803d)", borderRadius: "20px"}}></div>
        </div>
      </div>

      <div className="mb-4 p-4" style={{  background: "rgba(255,255,255,0.06)", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.08)"}}>
        <div className="d-flex justify-content-between mb-2">
          <span className="fw-bold text-white">JAVASCRIPT</span>
          <span className="text-warning fw-bold">75%</span>
        </div>

        <div className="progress" style={{height: "12px", borderRadius: "20px", background: "#334155"}}>
          <div className="progress-bar" style={{ width: "75%", background: "linear-gradient(to right,#facc15,#eab308)", borderRadius: "20px"}}></div>
        </div>
      </div>

    </div>

    <div className="col-md-6" data-aos="fade-left" data-aos-delay="400">

      <div className="mb-4 p-4" style={{ background: "rgba(255,255,255,0.06)", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.08)",}}>
        <div className="d-flex justify-content-between mb-2">
          <span className="fw-bold text-white">PHP</span>
          <span className="text-danger fw-bold">80%</span>
        </div>

        <div className="progress" style={{ height: "12px", borderRadius: "20px",  background: "#334155" }}>
          <div className="progress-bar" style={{width: "80%", background: "linear-gradient(to right,#ef4444,#b91c1c)", borderRadius: "20px"}}></div>
        </div>
      </div>

      <div className="mb-4 p-4"style={{ background: "rgba(255,255,255,0.06)", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.08)"}}>
        <div className="d-flex justify-content-between mb-2">
          <span className="fw-bold text-white">WORDPRESS</span>
          <span className="text-primary fw-bold">90%</span>
        </div>

        <div className="progress"style={{ height: "12px", borderRadius: "20px", background: "#334155"}}>
          <div className="progress-bar" style={{ width: "90%", background: "linear-gradient(to right,#3b82f6,#1d4ed8)", borderRadius: "20px" }}></div>
        </div>
      </div>

      <div className="mb-4 p-4" style={{ background: "rgba(255,255,255,0.06)", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="d-flex justify-content-between mb-2">
          <span className="fw-bold text-white">PHOTOSHOP</span>
          <span className="text-info fw-bold">55%</span>
        </div>

        <div className="progress" style={{ height: "12px", borderRadius: "20px", background: "#334155"}}>
          <div className="progress-bar" style={{ width: "55%", background: "linear-gradient(to right,#06b6d4,#0891b2)", borderRadius: "20px"}}></div>
        </div>
      </div>

    </div>

  </div>
</div>
<div className="container py-5" style={{ background: "linear-gradient(135deg,#0f172a,#1e293b)", boxShadow: "0 10px 40px rgba(0,0,0,0.3)"}}>
  <div className="row text-center">

    <div className="col-md-3 mb-4" data-aos="zoom-in" data-aos-delay="100">
      <div className="p-4 h-100" style={{ background: "rgba(255,255,255,0.08)", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.1)", transition: "0.4s", cursor: "pointer", backdropFilter: "blur(10px)"}}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-10px)";
          e.currentTarget.style.boxShadow =
            "0 10px 30px rgba(0,198,255,0.4)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0px)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        <div className="mx-auto mb-3 d-flex align-items-center justify-content-center" style={{ width: "80px", height: "80px", borderRadius: "50%", background: "linear-gradient(to right,#00c6ff,#0072ff)", fontSize: "35px", color: "white"}}>
          <i className="bi bi-emoji-smile"></i>
        </div>

        <h1 className="fw-bold text-white">{clients}+</h1>

        <p className="fw-semibold mb-0" style={{ color: "#cbd5e1", fontSize: "18px" }}> Happy Clients</p>
      </div>
    </div>


    <div className="col-md-3 mb-4" data-aos="zoom-in" data-aos-delay="200">
      <div className="p-4 h-100" style={{
          background: "rgba(255,255,255,0.08)",
          borderRadius: "20px",
          border: "1px solid rgba(255,255,255,0.1)",
          transition: "0.4s",
          cursor: "pointer",
          backdropFilter: "blur(10px)"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-10px)";
          e.currentTarget.style.boxShadow =
            "0 10px 30px rgba(168,85,247,0.5)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0px)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        <div className="mx-auto mb-3 d-flex align-items-center justify-content-center" style={{ width: "80px", height: "80px", borderRadius: "50%", background: "linear-gradient(to right,#9333ea,#7e22ce)", fontSize: "35px", color: "white" }} >
          <i className="bi bi-journal-richtext"></i>
        </div>

        <h1 className="fw-bold text-white">{projects}+</h1>

        <p className="fw-semibold mb-0" style={{ color: "#cbd5e1", fontSize: "18px" }}> Projects Completed </p>
      </div>
    </div>

   
    <div className="col-md-3 mb-4" data-aos="zoom-in" data-aos-delay="300">
      <div className="p-4 h-100" style={{
          background: "rgba(255,255,255,0.08)",
          borderRadius: "20px",
          border: "1px solid rgba(255,255,255,0.1)",
          transition: "0.4s",
          cursor: "pointer",
          backdropFilter: "blur(10px)"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-10px)";
          e.currentTarget.style.boxShadow =
            "0 10px 30px rgba(34,197,94,0.5)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0px)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        <div className="mx-auto mb-3 d-flex align-items-center justify-content-center" style={{ width: "80px", height: "80px", borderRadius: "50%", background: "linear-gradient(to right,#22c55e,#15803d)", fontSize: "35px", color: "white"}} >
          <i className="bi bi-headset"></i>
        </div>

        <h1 className="fw-bold text-white">{support}+</h1>

        <p className="fw-semibold mb-0" style={{ color: "#cbd5e1", fontSize: "18px" }}>
          Hours Of Support
        </p>
      </div>
    </div>

  

    <div className="col-md-3 mb-4" data-aos="zoom-in" data-aos-delay="400">
      <div className="p-4 h-100" style={{
          background: "rgba(255,255,255,0.08)",
          borderRadius: "20px",
          border: "1px solid rgba(255,255,255,0.1)",
          transition: "0.4s",
          cursor: "pointer",
          backdropFilter: "blur(10px)"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-10px)";
          e.currentTarget.style.boxShadow =
            "0 10px 30px rgba(239,68,68,0.5)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0px)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        <div
          className="mx-auto mb-3 d-flex align-items-center justify-content-center"
          style={{ width: "80px",height: "80px", borderRadius: "50%",background: "linear-gradient(to right,#ef4444,#b91c1c)", fontSize: "35px", color: "white"}}>
          <i className="bi bi-people"></i>
        </div>

        <h1 className="fw-bold text-white">{workers}+</h1>

        <p className="fw-semibold mb-0" style={{ color: "#cbd5e1", fontSize: "18px" }}> Hard Workers </p>
      </div>
    </div>

  </div>
</div>

<div className="container shadow-lg" id="resume" style={{ background: "linear-gradient(135deg,#0f172a,#1e293b)", color: "white", }}>
  
  
  <h2 className="fw-bold text-info"data-aos="fade-up" style={{ fontSize: "45px", letterSpacing: "1px"}}>
    Resume
  </h2>

  <hr style={{ width: "80px", borderTop: "3px solid #0d6efd" }} data-aos="fade-up" data-aos-delay="100"/>

  <p  data-aos="fade-up" data-aos-delay="200" style={{color: "#38bdf8"}}> Magnum dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.</p>

  <div className="row mt-4 ">

    <div className="col-md-5"data-aos="fade-up" data-aos-delay="300">

      <h4 className="fw-bold">Summary</h4>

      <div className="border-start border-3 ps-3 mb-4">
        <h5 className="fw-bold">RAVAL ROHIT</h5>
        <p className="fst-italic"> Innovative and deadline-driven Graphic Designer with 3+ years experience.</p>
        <ul>
          <li>Portland par 127, Orlando, FL</li>
          <li>(123) 456-7891</li>
          <li>alice.barkley@example.com</li>
        </ul>
      </div>

      <h4 className="fw-bold">Education</h4>

      <div className="border-start border-3 ps-3">
        <h6 className="fw-bold">MASTER OF FINE ARTS & GRAPHIC DESIGN</h6>
        <small>2015 - 2016</small>
        <p style={{color: "#38bdf8"}}> Rochester Institute of Technology, Rochester, NY</p>
          <h6 className="fw-bold mt-3">BACHELOR OF FINE ARTS & GRAPHIC DESIGN</h6>
        <small>2010 - 2014</small>
        <p style={{color: "#38bdf8"}}>Rochester Institute of Technology, Rochester, NY</p>
      </div>

    </div>

    <div  className="col-md-7"data-aos="fade-up" data-aos-delay="400">

      <h4 className="fw-bold">Professional Experience</h4>

      <div className="border-start border-3 ps-3 mb-4">
        <h6 className="fw-bold">SENIOR GRAPHIC DESIGN SPECIALIST</h6>
        <small>2019 - Present</small>
        <p  style={{color: "#38bdf8"}}>Experion, New York, NY</p>

        <ul>
          <li>Lead in design and development of graphic materials</li>
          <li>Delegate tasks to team members</li>
          <li>Ensure quality and accuracy of design</li>
          <li>Manage budgets from $2,000 - $25,000</li>
        </ul>
      </div>

      <div className="border-start border-3 ps-3">
        <h6 className="fw-bold">GRAPHIC DESIGN SPECIALIST</h6>
        <small>2017 - 2018</small>
        <p style={{color: "#38bdf8"}}>Stepping Stone Advertising, New York, NY</p>

        <ul>
          <li>Developed marketing programs and designs</li>
          <li>Managed multiple projects under pressure</li>
          <li>Consulted with clients</li>
          <li>Created presentations and proposals</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<div className="container py-5" id="Portfilo" style={{  background: "linear-gradient(135deg,#0f172a,#1e293b)",}}>
  <div className="text-center mb-5">
    <h2 className="fw-bold text-info"data-aos="fade-up" style={{ fontSize: "45px", letterSpacing: "1px"}}>
    My Portfolio
  </h2>
    <div className="mx-auto mt-3" style={{ width: "90px", height: "4px", background: "linear-gradient(to right,#00c6ff,#0072ff)", borderRadius: "20px"}} data-aos="fade-up" data-aos-delay="100"></div>

    <p className="mt-4 text-light opacity-75 fs-5" data-aos="fade-up" data-aos-delay="200"> Here are some of my latest creative works and modern projects.</p>
  </div>

  <div className="d-flex justify-content-center flex-wrap gap-3 mb-5" data-aos="fade-up" data-aos-delay="300">

    <button className="btn btn-primary rounded-pill px-4 py-2 fw-semibold shadow"> ALL </button>
    <button className="btn btn-outline-light rounded-pill px-4 py-2 fw-semibold">  APP </button>
    <button className="btn btn-outline-light rounded-pill px-4 py-2 fw-semibold"> PRODUCT </button>
    <button className="btn btn-outline-light rounded-pill px-4 py-2 fw-semibold"> BRANDING</button>
    <button className="btn btn-outline-light rounded-pill px-4 py-2 fw-semibold"> BOOKS </button>

  </div>

  <div className="row g-4">

    <div className="col-md-4" data-aos="zoom-in" data-aos-delay="100">
      <div className="position-relative overflow-hidden rounded-4 shadow-lg"style={{ cursor: "pointer" }}>

        <img src="https://themewagon.github.io/iPortfolio/assets/img/portfolio/app-1.jpg" className="img-fluid w-100" alt="" style={{ height: "280px", objectFit: "cover", transition: "0.5s" }}/>

        <div className="position-absolute bottom-0 start-0 w-100 p-3" style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(5px)" }}>
          <h5 className="text-white fw-bold mb-1"> Mobile App </h5>

          <p className="text-light mb-0 small">Modern mobile application UI design </p>
        </div>
      </div>
    </div>

    <div className="col-md-4" data-aos="zoom-in" data-aos-delay="200">
      <div className="position-relative overflow-hidden rounded-4 shadow-lg" style={{ cursor: "pointer" }}>

        <img src="https://themewagon.github.io/iPortfolio/assets/img/portfolio/product-1.jpg" className="img-fluid w-100" alt="" style={{ height: "280px", objectFit: "cover"}}/>

        <div className="position-absolute bottom-0 start-0 w-100 p-3" style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(5px)"}} >
          <h5 className="text-white fw-bold mb-1"> Product Design </h5>
          <p className="text-light mb-0 small"> Creative branding and product showcase </p>
        </div>
      </div>
    </div>

    <div className="col-md-4" data-aos="zoom-in" data-aos-delay="300">
      <div className="position-relative overflow-hidden rounded-4 shadow-lg" style={{ cursor: "pointer" }}>

        <img src="https://themewagon.github.io/iPortfolio/assets/img/portfolio/books-2.jpg"className="img-fluid w-100" alt="" style={{ height: "280px", objectFit: "cover" }}/>

        <div className="position-absolute bottom-0 start-0 w-100 p-3" style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(5px)"}}>
          <h5 className="text-white fw-bold mb-1"> Branding</h5>
          <p className="text-light mb-0 small"> Professional identity and branding design</p>
        </div>
      </div>
    </div>

    <div className="col-md-4" data-aos="zoom-in" data-aos-delay="400">
      <div className="position-relative overflow-hidden rounded-4 shadow-lg">

        <img src="https://themewagon.github.io/iPortfolio/assets/img/portfolio/branding-2.jpg" className="img-fluid w-100" alt="" style={{ height: "280px", objectFit: "cover"}}/>

        <div className="position-absolute bottom-0 start-0 w-100 p-3" style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(5px)" }}>
          <h5 className="text-white fw-bold mb-1"> Creative Branding </h5>

          <p className="text-light mb-0 small"> Modern business identity design </p>
        </div>
      </div>
    </div>

    <div className="col-md-4" data-aos="zoom-in" data-aos-delay="500">
      <div className="position-relative overflow-hidden rounded-4 shadow-lg">

        <img src="https://themewagon.github.io/iPortfolio/assets/img/portfolio/product-2.jpg" className="img-fluid w-100" alt="" style={{ height: "280px", objectFit: "cover"}}/>

        <div className="position-absolute bottom-0 start-0 w-100 p-3" style={{ background: "rgba(0,0,0,0.7)",  backdropFilter: "blur(5px)"}}>
          <h5 className="text-white fw-bold mb-1">
            Product Showcase
          </h5>

          <p className="text-light mb-0 small">
            Stylish and elegant product design
          </p>
        </div>

      </div>
    </div>

  
    <div className="col-md-4" data-aos="zoom-in" data-aos-delay="600">
      <div className="position-relative overflow-hidden rounded-4 shadow-lg">

        <img
 src="https://themewagon.github.io/iPortfolio/assets/img/portfolio/books-1.jpg"
          className="img-fluid w-100"
          alt=""
          style={{
            height: "280px",
            objectFit: "cover"
          }}
        />

        <div
          className="position-absolute bottom-0 start-0 w-100 p-3"
          style={{
            background: "rgba(0,0,0,0.7)",
            backdropFilter: "blur(5px)"
          }}
        >
          <h5 className="text-white fw-bold mb-1">
            Books & Ideas
          </h5>

          <p className="text-light mb-0 small">
            Creative publishing and visual concepts
          </p>
        </div>

      </div>
    </div>

  </div>
</div>



    <section
  className="py-5"
  id="servies"
  style={{
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    
  }}
>
  <div className="container">


    <div className="text-center mb-5">
       <h2 className="fw-bold text-info"data-aos="fade-up" style={{ fontSize: "45px", letterSpacing: "1px"}}>
    Services
  </h2>

      <div
        className="mx-auto rounded"
        style={{
          width: 90,
          height: 4,
          background: "linear-gradient(to right,#00c6ff,#0072ff)",
        }}
        data-aos="fade-up"
        data-aos-delay="100"
      />

      <p
        className="text-light mt-4 fs-5"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        I provide modern web development services with clean UI,
        responsive design and fast performance.
      </p>
    </div>


    <div className="row g-4">

 
      <div
        className="col-md-6 col-lg-4"
        data-aos="zoom-in"
        data-aos-delay="300"
      >
        <div
          className="p-4 rounded-4 h-100 service-card"
          style={{
            background: "#1e293b",
            border: "1px solid #334155",
            transition: "0.4s",
          }}
        >
          <div
            className="d-flex align-items-center justify-content-center mb-4"
            style={{
              width: 70,
              height: 70,
              borderRadius: "50%",
              background: "linear-gradient(135deg,#00c6ff,#0072ff)",
              fontSize: 30,
            }}
          >
            💼
          </div>

          <h4 className="fw-bold text-white mb-3">
            Web Development
          </h4>

          <p className="text-light mb-0">
            Modern responsive websites using React, Bootstrap
            and JavaScript with smooth UI.
          </p>
        </div>
      </div>

     
      <div
        className="col-md-6 col-lg-4"
        data-aos="zoom-in"
        data-aos-delay="400"
      >
        <div
          className="p-4 rounded-4 h-100 service-card"
          style={{
            background: "#1e293b",
            border: "1px solid #334155",
            transition: "0.4s",
          }}
        >
          <div
            className="d-flex align-items-center justify-content-center mb-4"
            style={{
              width: 70,
              height: 70,
              borderRadius: "50%",
              background: "linear-gradient(135deg,#ff512f,#dd2476)",
              fontSize: 30,
            }}
          >
            📱
          </div>

          <h4 className="fw-bold text-white mb-3">
            Responsive Design
          </h4>

          <p className="text-light mb-0">
            Mobile friendly responsive layouts for all devices
            with modern UI/UX design.
          </p>
        </div>
      </div>

    
      <div
        className="col-md-6 col-lg-4"
        data-aos="zoom-in"
        data-aos-delay="500"
      >
        <div
          className="p-4 rounded-4 h-100 service-card"
          style={{
            background: "#1e293b",
            border: "1px solid #334155",
            transition: "0.4s",
          }}
        >
          <div
            className="d-flex align-items-center justify-content-center mb-4"
            style={{
              width: 70,
              height: 70,
              borderRadius: "50%",
              background: "linear-gradient(135deg,#11998e,#38ef7d)",
              fontSize: 30,
            }}
          >
            ⚡
          </div>

          <h4 className="fw-bold text-white mb-3">
            Fast Performance
          </h4>

          <p className="text-light mb-0">
            Optimized websites with fast loading speed and
            smooth user experience.
          </p>
        </div>
      </div>

   
      <div
        className="col-md-6 col-lg-4"
        data-aos="zoom-in"
        data-aos-delay="600"
      >
        <div
          className="p-4 rounded-4 h-100 service-card"
          style={{
            background: "#1e293b",
            border: "1px solid #334155",
            transition: "0.4s",
          }}
        >
          <div
            className="d-flex align-items-center justify-content-center mb-4"
            style={{
              width: 70,
              height: 70,
              borderRadius: "50%",
              background: "linear-gradient(135deg,#fc466b,#3f5efb)",
              fontSize: 30,
            }}
          >
            🎨
          </div>

          <h4 className="fw-bold text-white mb-3">
            UI/UX Design
          </h4>

          <p className="text-light mb-0">
            Attractive modern interfaces with clean layouts
            and smooth animations.
          </p>
        </div>
      </div>

      
      <div
        className="col-md-6 col-lg-4"
        data-aos="zoom-in"
        data-aos-delay="700"
      >
        <div
          className="p-4 rounded-4 h-100 service-card"
          style={{
            background: "#1e293b",
            border: "1px solid #334155",
            transition: "0.4s",
          }}
        >
          <div
            className="d-flex align-items-center justify-content-center mb-4"
            style={{
              width: 70,
              height: 70,
              borderRadius: "50%",
              background: "linear-gradient(135deg,#f7971e,#ffd200)",
              fontSize: 30,
            }}
          >
            🔒
          </div>

          <h4 className="fw-bold text-white mb-3">
            Secure Website
          </h4>

          <p className="text-light mb-0">
            Clean and secure coding structure for better
            reliability and safety.
          </p>
        </div>
      </div>

      
      <div
        className="col-md-6 col-lg-4"
        data-aos="zoom-in"
        data-aos-delay="800"
      >
        <div
          className="p-4 rounded-4 h-100 service-card"
          style={{
            background: "#1e293b",
            border: "1px solid #334155",
            transition: "0.4s",
          }}
        >
          <div
            className="d-flex align-items-center justify-content-center mb-4"
            style={{
              width: 70,
              height: 70,
              borderRadius: "50%",
              background: "linear-gradient(135deg,#8e2de2,#4a00e0)",
              fontSize: 30,
            }}
          >
            🚀
          </div>

          <h4 className="fw-bold text-white mb-3">
            Deployment
          </h4>

          <p className="text-light mb-0">
            Deploy your websites online with proper hosting
            and performance setup.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

<div
  className="container py-5"
  id="contact"
  style={{
    background: "linear-gradient(135deg,#0f172a,#1e293b)",
  }}
>


  <div className="text-center mb-5">

    <h2 className="fw-bold text-info"data-aos="fade-up" style={{ fontSize: "45px", letterSpacing: "1px"}}>
    Contact me
  </h2>

    <div
      className="mx-auto mt-3"
      style={{
        width: "90px",
        height: "4px",
        background: "linear-gradient(to right,#00c6ff,#0072ff)",
        borderRadius: "20px"
      }}
      data-aos="fade-up"
      data-aos-delay="100"
    ></div>

    <p
      className="text-light opacity-75 mt-4 fs-5"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      Feel free to contact me anytime for projects, work, or collaborations.
    </p>

  </div>

  <div className="row g-4">

   
    <div
      className="col-lg-5"
      data-aos="fade-right"
      data-aos-delay="300"
    >

      <div
        className="p-4 h-100"
        style={{
          background: "rgba(255,255,255,0.08)",
          borderRadius: "25px",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >

      
        <div
          className="d-flex align-items-start mb-4"
          data-aos="fade-up"
          data-aos-delay="400"
        >

          <div
            className="d-flex align-items-center justify-content-center me-3"
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              background: "linear-gradient(to right,#00c6ff,#0072ff)",
              fontSize: "24px",
              color: "white"
            }}
          >
            📍
          </div>

          <div>
            <h5 className="text-white fw-bold">
              Address
            </h5>

            <p className="text-light opacity-75 mb-0">
              Nikol Gam Road, Near Sardar Mall,
              Ahmedabad, Gujarat, India
            </p>
          </div>

        </div>

     
        <div
          className="d-flex align-items-start mb-4"
          data-aos="fade-up"
          data-aos-delay="500"
        >

          <div
            className="d-flex align-items-center justify-content-center me-3"
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              background: "linear-gradient(to right,#00c6ff,#0072ff)",
              fontSize: "24px",
              color: "white"
            }}
          >
            📞
          </div>

          <div>
            <h5 className="text-white fw-bold">
              Call Me
            </h5>

            <p className="text-light opacity-75 mb-0">
              +91 6354178271
            </p>
          </div>

        </div>

    
        <div
          className="d-flex align-items-start mb-4"
          data-aos="fade-up"
          data-aos-delay="600"
        >

          <div
            className="d-flex align-items-center justify-content-center me-3"
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              background: "linear-gradient(to right,#00c6ff,#0072ff)",
              fontSize: "24px",
              color: "white"
            }}
          >
            ✉️
          </div>

          <div>
            <h5 className="text-white fw-bold">
              Email
            </h5>

            <p className="text-light opacity-75 mb-0">
              ravalrohit@gmail.com
            </p>
          </div>

        </div>

    
        <div
          className="overflow-hidden rounded-4 mt-4"
          data-aos="zoom-in"
          data-aos-delay="700"
        >

          <iframe
            title="map"
            src="https://maps.google.com/maps?q=Ahmedabad%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
            style={{
              border: 0,
              width: "100%",
              height: "250px"
            }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>

        </div>

      </div>
    </div>

    <div
      className="col-lg-7"
      data-aos="fade-left"
      data-aos-delay="400"
    >

      <div
        className="p-5"
        style={{
          background: "rgba(255,255,255,0.08)",
          borderRadius: "25px",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >

        <form>

          <div className="row">

           
            <div
              className="col-md-6 mb-4"
              data-aos="fade-up"
              data-aos-delay="500"
            >

              <label className="form-label text-white fw-semibold">
                Your Name
              </label>

              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                style={{
                  height: "50px",
                  borderRadius: "12px",
                  border: "none",
                  background: "rgba(255,255,255,0.1)",
                  color: "white"
                }}
              />

            </div>

           
            <div
              className="col-md-6 mb-4"
              data-aos="fade-up"
              data-aos-delay="600"
            >

              <label className="form-label text-white fw-semibold">
                Your Email
              </label>

              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                style={{
                  height: "50px",
                  borderRadius: "12px",
                  border: "none",
                  background: "rgba(255,255,255,0.1)",
                  color: "white"
                }}
              />

            </div>

          </div>

       
          <div
            className="mb-4"
            data-aos="fade-up"
            data-aos-delay="700"
          >

            <label className="form-label text-white fw-semibold">
              Subject
            </label>

            <input
              type="text"
              className="form-control"
              placeholder="Enter subject"
              style={{
                height: "50px",
                borderRadius: "12px",
                border: "none",
                background: "rgba(255,255,255,0.1)",
                color: "white"
              }}
            />

          </div>

        
          <div
            className="mb-4"
            data-aos="fade-up"
            data-aos-delay="800"
          >

            <label className="form-label text-white fw-semibold">
              Message
            </label>

            <textarea
              className="form-control"
              rows="6"
              placeholder="Write your message..."
              style={{
                borderRadius: "12px",
                border: "none",
                background: "rgba(255,255,255,0.1)",
                color: "white"
              }}
            ></textarea>

          </div>

      
          <div
            className="text-center"
            data-aos="zoom-in"
            data-aos-delay="900"
          >

            <button
              type="submit"
              className="btn px-5 py-3 fw-bold"
              style={{
                borderRadius: "50px",
                background: "linear-gradient(to right,#00c6ff,#0072ff)",
                border: "none",
                color: "white",
                fontSize: "18px",
                boxShadow: "0 10px 25px rgba(0,114,255,0.4)"
              }}
            >
              Send Message 🚀
            </button>

          </div>

        </form>

      </div>

    </div>

  </div>
</div>



   <footer className=" py-4 text-white text-center" style={{background: "linear-gradient(135deg,#0f172a,#1e293b)"}}>
      <div className="container">
        
        <p className="mb-1">
          © Copyright <strong>iPortfolio</strong> All Rights Reserved
        </p>

        <p className="mb-0">
          Designed by{" "}
          <a href="#" className="text-primary text-decoration-none">
            BootstrapMade
          </a>{" "}
          developed by{" "}
          <a href="#" className="text-primary text-decoration-none">
         RAVAL ROHIT
          </a>
        </p>

      </div>
    </footer>

      </div>
    </div>

 
    
</>
  );
}