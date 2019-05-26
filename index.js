
import Footer from './components/Footer';import Navigation from './components/Navigation';
import Main from './components/Main';
import img from './Images/Abstract.jpg';

console.log(Navigation); // Test! Should log what's inside navigation

var innerHTML = document.body.innerHTML;

const state = {
    'title': "Welcome to Wendi's Portfolio!"
};

document.querySelector('#root').innerHTML = `
${Navigation(state)}
${Main}
${Footer}
${innerHTML}`;
