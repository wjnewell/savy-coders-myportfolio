export default function(state){
    return `

<div class ="container">
  <div id ="box1">What We're About<br>The Wide World of Web Applications</div>
  <div id ="box2"><img src="${state.images.globe}" width="300" height= "217" /></div>
  <div id ="box3">Do you like sports stats?</div>
<div id ="box4"><img src="${state.images.stats}" width="200" height="149"style="border:1px solid black"/></div>
<div id ="box5">Want to display 3D art in a digital gallery?</div>
<div id ="box6"><img src="${state.images.buddha}" width="200" height="200"style="border:1px solid black"/></div>
<div id ="box7">Want to create an online seed catalog?</div>
<div id ="box8"><img src="${state.images.tomatoes}" width="150" height="231"style="border:1px solid black"/></div>
<div id ="box9">Want to learn how AI apps work?</div>
<div id ="box10"><img src="${state.images.ai}" width="200" height="112"style="border:1px solid black"/></div>
 </div>`;
}

