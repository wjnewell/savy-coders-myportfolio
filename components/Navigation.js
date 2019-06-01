function buildNavHTML(stateLinks){
    return stateLinks
        .map(
            (link) =>
                `<li><a href="/${link,toLowerCase()}" data-navigo>${link.text}</a></li>`
        )
        .join(' ');
}

export default (state) =>
    `
      <nav class = "menubar">
        <ul class= "display">
        ${buildNavHTML(state.links.primary)}
          <li> <a href="about.html"> About </a></li>
          <li> <a href="contact.html"> Contact </a></li>
          <li>Portfolio
        <ul id="dropdown">
        ${buildNavHTML(state.links.dropdown)}
          <li><a href="showcase.html">Showcase</a></li>
          <li><a href="webstore.html">WebStore</a></li>
          <li><a href="ddaydemo.html">D-DayDemo</a></li>
        </ul>
        </li>
      </ul>
  </nav>
  `;


