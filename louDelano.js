
// york
var yorkPlace = 7;
var yorkMinutes = 14;
var yorkSeconds = 27;
//morton
var mortonPlace = 3;
var mortonMinutes = 15;
var mortonSeconds = '02';
//dgn
var dgnPlace =  3;
var dgnMinutes = 16;
var dgnSeconds = '01';
//glenbard west
var glenbardPlace = 5;
var glenbardMinutes = 15;
var glenbardSeconds = 38;
//hinsdale
var hinsdalePlace = 8;
var hinsdaleMinutes = 14;
var hinsdaleSeconds = 54;


var yorkPoints = yorkPlace+yorkMinutes+(yorkSeconds*100/60/100);
var mortonPoints = mortonPlace+mortonMinutes+(mortonSeconds*100/60/100);
var dgnPoints = dgnPlace+dgnMinutes+(dgnSeconds*100/60/100);
var glenbardPoints = glenbardPlace+glenbardMinutes+(glenbardSeconds*100/60/100);
var hinsdalePoints = hinsdalePlace+hinsdaleMinutes+(hinsdaleSeconds*100/60/100);

var totalPoints = yorkPoints+mortonPoints+hinsdalePoints+dgnPoints+glenbardPoints;


document.write('Lou Delano Jr.<br><br>York - placed '+yorkPlace+', '+yorkMinutes+':'+yorkSeconds+'<br>'+yorkPoints.toFixed(2)+' pts<br>Morton - placed '+mortonPlace+', '+mortonMinutes+':'+mortonSeconds+'<br>'+mortonPoints.toFixed(2)+' pts<br>DGN - placed '+dgnPlace+', '+dgnMinutes+':'+dgnSeconds+'<br>'+dgnPoints.toFixed(2)+' pts<br>Glenbard West - placed '+glenbardPlace+', '+glenbardMinutes+':'+glenbardSeconds+'<br>'+glenbardPoints.toFixed(2)+' pts<br>Hinsdale Central - placed '+hinsdalePlace+', '+hinsdaleMinutes+':'+hinsdaleSeconds+'<br>'+hinsdalePoints.toFixed(2)+' pts<br><br>Total Points: '+totalPoints.toFixed(2)+'<br><br>Season Team Rank: 2')