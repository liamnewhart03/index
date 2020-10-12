
// york
var yorkPlace = 2;
var yorkMinutes = 13;
var yorkSeconds = 33;
//morton
var mortonPlace = 1;
var mortonMinutes = 14;
var mortonSeconds = 19;
//dgn
var dgnPlace =  2;
var dgnMinutes = 15;
var dgnSeconds = 50;
//glenbard west
var glenbardPlace = 1;
var glenbardMinutes = 15;
var glenbardSeconds = 11;
//hinsdale
var hinsdalePlace = 2;
var hinsdaleMinutes = 14;
var hinsdaleSeconds = 33;


var yorkPoints = yorkPlace+yorkMinutes+(yorkSeconds*100/60/100);
var mortonPoints = mortonPlace+mortonMinutes+(mortonSeconds*100/60/100);
var dgnPoints = dgnPlace+dgnMinutes+(dgnSeconds*100/60/100);
var glenbardPoints = glenbardPlace+glenbardMinutes+(glenbardSeconds*100/60/100);
var hinsdalePoints = hinsdalePlace+hinsdaleMinutes+(hinsdaleSeconds*100/60/100);

var totalPoints = yorkPoints+mortonPoints+hinsdalePoints+dgnPoints+glenbardPoints;


document.write('Eamon Cavanaugh Sr.<br><br>York - placed '+yorkPlace+', '+yorkMinutes+':'+yorkSeconds+'<br>'+yorkPoints.toFixed(2)+' pts<br>Morton - placed '+mortonPlace+', '+mortonMinutes+':'+mortonSeconds+'<br>'+mortonPoints.toFixed(2)+' pts<br>DGN - placed '+dgnPlace+', '+dgnMinutes+':'+dgnSeconds+'<br>'+dgnPoints.toFixed(2)+' pts<br>Glenbard West - placed '+glenbardPlace+', '+glenbardMinutes+':'+glenbardSeconds+'<br>'+glenbardPoints.toFixed(2)+' pts<br>Hinsdale Central - placed '+hinsdalePlace+', '+hinsdaleMinutes+':'+hinsdaleSeconds+'<br>'+hinsdalePoints.toFixed(2)+' pts<br><br>Total Points: '+totalPoints.toFixed(2)+'<br><br>Season Team Rank: 1')