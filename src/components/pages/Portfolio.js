import React from 'react';
import Project from '../Project.js'

const styles = {
  mainContainerStyle: {
    display: "flex",
    // flexDirection: "row",
    justifyContent: "center"
  },
  leftContainerStyle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    width: '50%'
  },
  rightContainerStyle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    width: '50%'
  }
}

const projects = {
  project1: {
    image: '',
    title: 'Test1',
    deployed: '',
    GitHub: ''
  },
  project2: {
    image: '',
    title: 'Test2',
    deployed: '',
    GitHub: ''
  },
  project3: {
    image: '',
    title: 'Test3',
    deployed: '',
    GitHub: ''
  },
  project4: {
    image: '',
    title: 'Test4',
    deployed: '',
    GitHub: ''
  },
  project5: {
    image: '',
    title: 'Test5',
    deployed: '',
    GitHub: ''
  },
  project6: {
    image: '',
    title: 'Test6',
    deployed: '',
    GitHub: ''
  },
}

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div style={styles.mainContainerStyle}>
        <div style={styles.leftContainerStyle}>
          <Project {...projects.project1} />
          <Project {...projects.project2} />
          <Project {...projects.project3} />
        </div>
        <div style={styles.rightContainerStyle}>
          <Project {...projects.project4} />
          <Project {...projects.project5} />
          <Project {...projects.project6} />
        </div>
      </div>
    </div>
  );
}
