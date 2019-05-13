import Navigation from './components/Navigation';
import Main from './components/Main';
import Footer from './components/Footer';
import img from './Images/Abstract.jpg';

console.log(Navigation); // Test! Should log what's inside navigation

var innerHTML = document.body.innerHTML;

document.body.innerHTML = `
${Navigation}
${Main}
${Footer}
${innerHTML}`;
