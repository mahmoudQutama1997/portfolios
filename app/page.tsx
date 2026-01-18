import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="header">
        <h1>Eng.Mahmoud Qutama</h1>
        <div className="list">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact Me</li>
        </ul>
        </div>
        
       
      </div>
      <div className="hero">
      <p>Hi. I am Mahmoud Qutama, Full Stack Developer from Palestine ,28 years .Mechatronics engineer and software developer.interesting in buiding real web application</p>
      <img src="/mahmoud.jpg" alt="Mahmoud" />
</div>
 <div className="hero-project">
  <h2>My Projects as a Full stack Developer</h2>

   <div className="carousel">
    <button className="arrow left">‹</button>

    <div className="carousel-track">

      <div className="project-poster">
        <img src="sand1.jpg" />
        <div className="overlay">
          <span className="rank">1</span>
          <h3>Saned</h3>
          <p className="project-email">mahmudqutami@gmail.com</p>

        </div>
      </div>

      <div className="project-poster">
        <img src="doctor.jpg" />
        <div className="overlay">
          <span className="rank">2</span>
          <h3>Doctor Booking System</h3>
          <p className="project-email">mahmudqutami@gmail.com</p>
        </div>
      </div>

      <div className="project-poster">
        <img src="doctor2.jpg" />
        <div className="overlay">
          <span className="rank">2</span>
          <h3>Doctor Booking System</h3>
          <p className="project-email">mahmudqutami@gmail.com</p>
        </div>
      </div>



      <div className="project-poster">
        <img src="doctor3.jpg" />
        <div className="overlay">
          <span className="rank">2</span>
          <h3>Doctor Booking System</h3>
          <p className="project-email">mahmudqutami@gmail.com</p>
        </div>
      </div>


      <div className="project-poster">
        <img src="park.jpg" />
        <div className="overlay">
          <span className="rank">3</span>
          <h3>ParkRamallah</h3>
           <p className="project-email">mahmudqutami@gmail.com</p>
        </div>
      </div>

    </div>

    <button className="arrow right">›</button>
  </div>
  
</div>
</div>
  );
}
