import * as pages from './pages';
// import img from '../Images/Abstract.jpg';

export default (state) => `
<tag>
  ${pages[state.pageContent](state)}
</tag>`;
