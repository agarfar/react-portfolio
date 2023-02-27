import React from 'react';
import { BsGithub, BsLinkedin } from "react-icons/bs";
// import '../styles/Footer.css';

// By importing the Header.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
    footerStyle: {
        background: 'purple',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    },
    ulStyle: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '40%'
    },
    anchorStyle: {
        color: 'white',
        // width: '.3rem',
        // height:'.3rem',
        fontSize: '40px'
    },
    listStyle: {
        listStyleType: 'none'
    }
};

// We use JSX curly braces to evaluate the style object

function Footer() {
    return (
        <footer style={styles.footerStyle} className="footer">
            <ul style={styles.ulStyle}>
                {/* {Insert Icons to Github, LinkedIn, } */}
                <li style={styles.listStyle}>
                    <a style={styles.anchorStyle} href="https://github.com/agarfar" >
                        <BsGithub />
                    </a>
                </li>
                <li style={styles.listStyle}>
                    <a style={styles.anchorStyle} href="https://www.linkedin.com/in/anthonyfarris/">
                        <BsLinkedin />
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
