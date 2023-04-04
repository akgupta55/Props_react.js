import './App.css'

function App({ name, interest, skill, EduDetails, grade, experience1, experience2, experience3 }) {

  return (
    <>
      <div id="header"></div>
      <div class="left"></div>
      <div class="stuff">
        <br /><br />
        <h1>Resume</h1>
        <h2>{name}</h2>
        <hr />
        <br />
        <p class="head">Interests</p>
        <ul>
          <li>{interest[0]}</li>
          <li>{interest[1]}</li>
          <li>{interest[2]}</li>
        </ul>
        <p class="head">Skills</p>
        <ul>
          <li>{skill}</li>
        </ul>
        <p class="head">Education</p>
        <ul>
          <li>{EduDetails[0]}</li>
          <ul><li>Grade:{grade[0]}</li></ul>
          <li>{EduDetails[1]}</li>
          <ul><li>Grade:{grade[1]}</li></ul>
        </ul>
        <p class="head">Experience</p>
        <ul>
          <li>{experience1.company}</li>
          <ul><li>Year : {experience1.year}</li><li>Role : {experience1.role}</li></ul>
        </ul>
        <ul>
          <li>{experience2.company}</li>
          <ul><li>Year : {experience2.year}</li><li>Role : {experience2.role}</li></ul>
        </ul>
        <ul>
          <li>{experience3.company}</li>
          <ul><li>Year : {experience3.year}</li><li>Role : {experience3.role}</li></ul>
        </ul>
        <p class="head">Extracurriculars</p>
        <ul>
          <li>Recycling Club</li>
          <li>Gardening Club</li>
          <li>Book Club</li>
        </ul>
      </div>
      <div class="right"></div>
      <div id="footer">
        <h2 id="name">{name}</h2></div>
    </>
  )
}

export default App
