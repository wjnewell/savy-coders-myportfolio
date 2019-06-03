export default function(state){
    return `

<h1>Keep In Touch</h1>
<h2>We'll Email You With All the Latest ...</h2>
<form id="fieldbox" action="https://formspree.io/wendijnewell@yahoo.com" method="POST">
    <fieldset>
    <legend id="fboxtitle">
      Personal Info
    </legend>
<div ><label class='info'>First Name: <input type="text" name= 'fname'/> </label></div>
<div ><label class='info'>Last Name: <input type="text" name='lname' </label></div>
<div ><label class='info'>Email Address: <input type='email' name='email'</input> </label></div>
</fieldset>
<div>
  <fieldset>
  <legend id="fboxtitle">Areas of Interest</legend>
  <div id="interest">
  <input  type="checkbox" name="interests" value="sports" checked="checked" /> Sports
  <input type="checkbox" name="interests" value="home and garden"  /> Home and Garden
  <input type="checkbox" name="interests" value="technology"  /> Technology
  <input type="checkbox" name="interests" value="pop culture"  /> Pop Culture
</div>
</fieldset>
</div>
<div>
  <textarea id='comments' name='comments'> Comments...  </textarea>
</div>
<div id='send'>
  <p id='send1'>Send
  <input id='mailbox' type="image" src='${state.image}'>
</p>
</div>
</form>`;
}
