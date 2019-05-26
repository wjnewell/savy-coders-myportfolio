export default function Navigation(state){
    return `
      <nav class = "menubar">
        <ul class= "display">
          <li> <a href="about.html"> About </a></li>
          <li> <a href="contact.html"> Contact </a></li>
          <li>Portfolio
        <ul id="dropdown">
          <li><a href="showcase.html">Showcase</a></li>
          <li><a href="webstore.html">WebStore</a></li>
          <li><a href="ddaydemo.html">D-DayDemo</a></li>
        </ul>
        </li>
      </ul>
  </nav>
  `;
}

