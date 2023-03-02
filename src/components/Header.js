import React from 'react';
import '../styles/Header.css';
import Navigation from './Navigation';

// By importing the Header.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  headerStyle: {
    background: 'red',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center'

  },
  headingStyle: {
    fontSize: '40px',
  },
};

// We use JSX curly braces to evaluate the style object

function Header({ currentPage, handlePageChange }) {
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>Anthony Farris</h1>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
  );
}

export default Header;