import React from 'react';
import ReactDOM from 'react-dom';


import App from './App';
import registerServiceWorker from './registerServiceWorker';

let element = React.createElement('h1', { className: 'greeting' }, 'Hello, world!');

const SideNavigaionBar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <span className="d-block d-lg-none">Profile</span>
          <span className="d-none d-lg-block">
            <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="img/profile.jpg" alt="" />
          </span>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#experience">Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#education">Education</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#interests">Interests</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#awards">Awards</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );

};


const AboutComponent = (props) => {
  return (
    <div>    
     <section class="resume-section p-3 p-lg-5 d-flex d-column" id="about">
        <div class="my-auto">
          <h1 class="mb-0">Name &nbsp;
            <span class="text-primary">Suername</span>
          </h1>
          <div class="subheading mb-5">1111 Cross Street · Colombo 9 · 
            <a href="mailto:name@email.com">someone@someware.com</a>
          </div>
          <p class="mb-5">Experienced software engineer with agile framework backend development with solid knowledge in .net framework. Supportive and enthusiastic team player dedicated to streamlined process and efficiently resolving project related issue. Quick learner who is willing to take challenge </p>
          <ul class="list-inline list-social-icons mb-0">
            <li class="list-inline-item">
              <a href="#">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-github fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </section>
         
    </div>
  );
};

const DevelopmentExperiance = (props) => {
  return(
         <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Senior Web Developer</h3>
              <div className="subheading mb-3">Intelitec Solutions </div>
              <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">March 2013 - Present</span>
            </div>
          </div>
  );
};

var devExpData = [
  {
    Title:"Associate Software Engineer",
    TitleDisciption: "ABC Solutions",
    Information: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.",
    TimePeriod: "Jan 2014 - 2015 Jan",
  }
];

var educationData = [
  {
    Title:"University Collage Dublin",
    TitleDisciption: "Bachelor of Science",
    Information: "Computer Science",
    GPA: "3.48",
    TimePeriod: "Jan 2014 - 2015 Jan",
  }
];


const DevelopmentExperianceItemList = (props) => {
  return(
    <div>{props.experiences.map(experience => <DevelopmentExperience {...experience} />)}</div>
  );
}

const EducationDetailList = (props) =>{
  return(
    <div>
      {props.educationdetails.map(educationdetail => <EducationDetails{...educationdetail}/>)}
    </div>
  );
};

const EducationDetails = (props) => {
  return(
    <div className="resume-item d-flex flex-column flex-md-row mb-5">
    <div className="resume-content mr-auto">
      <h3 className="mb-0">{props.Title}</h3>
      <div className="subheading mb-3">{props.TitleDisciption}</div>
      <div>{props.Information}</div>
      <p>{props.GPA}</p>
    </div>
    <div className="resume-date text-md-right">
      <span className="text-primary">{props.TimePeriod}</span>
    </div>
  </div>
  );
}

const DevelopmentExperience = (props)=>{
  return(
    <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">{props.Title}</h3>
              <div className="subheading mb-3">{props.TitleDisciption}</div>
              <p>{props.Information}</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">{props.TimePeriod}</span>
            </div>
          </div>
  );
}

const ExperienceDetail = (props) => {
  return (
    <div>
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
        <div className="my-auto">
          <h2 className="mb-5">Experience</h2>
          <DevelopmentExperianceItemList experiences={devExpData}/>
          </div>
      </section>
    </div>
  );
};

const EducationDetailComponent = (props) => {
  return (
    <div>
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
        <div className="my-auto">
          <h2 className="mb-5">Education</h2>
          <EducationDetailList educationdetails={educationData}/>
        </div>
      </section>
    </div>
  )
};

const SkillsDetailComponent = (props) => {
  return (
    <div>
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
        <div className="my-auto">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">Programming Languages &amp; Tools</div>
          <ul className="list-inline list-icons">
            <li className="list-inline-item">
              <i className="devicon-dot-net-plain"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-csharp-plain"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-visualstudio-plain"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-css3"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-html5-plain"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-javascript-plain"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-jquery-plain"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-react-original"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-css3-plain"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-mysql-plain"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-oracle-original"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-ubuntu-plain"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-windows8-original"></i>
            </li>
          </ul>

          {/* <div className="subheading mb-3">Workflow</div> */}
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
                Programming Languages: C#, Vb.net</li>
            <li>
              <i className="fa-li fa fa-check"></i>
                Database : SQL server, MySQL and Oracle</li>
            <li>
              <i className="fa-li fa fa-check"></i>
                Reporting Tools: Crystal Report , Fast Reports</li>
            <li>
              <i className="fa-li fa fa-check"></i>
                Agile Development &amp; Scrum</li>
                <li>
              <i className="fa-li fa fa-check"></i>
                Mobile Application Development : Xamarin</li>
                
          </ul>
        </div>
      </section>
    </div>
  );
};

const InterestsDetailComponent = (props) => {
  return (
    <div>
      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="interests">
        <div class="my-auto">
          <h2 class="mb-5">Interests</h2>
          <p>Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skiier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.</p>
          <p class="mb-0">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technolgy advancements in the front-end web development world.</p>
        </div>
      </section>
    </div>
  );
};

const awardsDetailComponent = (props) => {
  return (
    <div>
      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="awards">
        <div class="my-auto">
          <h2 class="mb-5">Awards &amp; Certifications</h2>
          <ul class="fa-ul mb-0">
            <li>
              <i class="fa-li fa fa-trophy text-warning"></i>
              Google Analytics Certified Developer</li>
            <li>
              <i class="fa-li fa fa-trophy text-warning"></i>
              Mobile Web Specialist - Google Certification</li>
            <li>
              <i class="fa-li fa fa-trophy text-warning"></i>
              1<sup>st</sup>
              Place - University of Colorado Boulder - Emerging Tech Competition 2009</li>
            <li>
              <i class="fa-li fa fa-trophy text-warning"></i>
              1<sup>nd</sup>
              Place - University of Colorado Boulder - Emerging Tech Competition 2008</li>
            <li>
              <i class="fa-li fa fa-trophy text-warning"></i>
              1<sup>st</sup>
              Place - James Buchanan High School - Hackathon 2006</li>
            <li>
              <i class="fa-li fa fa-trophy text-warning"></i>
              1<sup>rd</sup>
              Place - James Buchanan High School - Hackathon 2005</li>

          </ul>
        </div>
      </section>
    </div>
  );
};

const Page = (props) => {
  return (
    <div>
      <SideNavigaionBar />
      <div className="container-fluid p-0" >
        <AboutComponent />
        <ExperienceDetail />
        {/* <EducationDetails/> */}
         <EducationDetailComponent />
        <SkillsDetailComponent />
        <InterestsDetailComponent />
        {/* <awardsDetailComponent/> */}
      </div>
    </div>
  );
};


// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Page />, document.getElementById('root'));
registerServiceWorker();
