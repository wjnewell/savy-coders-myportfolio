import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Main from './components/Main';


import * as states from './store';

import { capitalize } from 'lodash';

import Navigo from 'navigo';

const router = new Navigo(window.location.origin);
const root = document.querySelector('#root');

function render(state){
    root.innerHTML = `
${Navigation(state)}
${Main(state)}
${Footer(state)}
`;
    router.updatePageLinks();
}

router
    .on(':path',(params) => {
        render(states[capitalize(params.path)]);
    })
    .on('/', () => render(states.Home))
    .resolve();
