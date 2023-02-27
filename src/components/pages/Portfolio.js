import React from 'react';
import Project from '../Project.js'

const styles = {
  containerStyle: {

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
}

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div style={styles.containerStyle}>
        <Project {...projects.project1} />
        <Project {...projects.project2} />
        <Project {...projects.project3} />
        <Project {...projects.project4} />
        <Project {...projects.project5} />
      </div>
    </div>
  );
}
