
// york
var yorkPlace = 26;
var yorkMinutes = 17;
var yorkSeconds = '00';
//morton
var mortonPlace = 31;
var mortonMinutes = 20;
var mortonSeconds = '00';
//dgn
var dgnPlace =  11;
var dgnMinutes = 16;
var dgnSeconds = 40;
//glenbard west
var glenbardPlace = 11;
var glenbardMinutes = 16;
var glenbardSeconds = 11;
//hinsdale
var hinsdalePlace = 23;
var hinsdaleMinutes = 16;
var hinsdaleSeconds = '06';


var yorkPoints = yorkPlace+yorkMinutes+(yorkSeconds*100/60/100);
var mortonPoints = mortonPlace+mortonMinutes+(mortonSeconds*100/60/100);
var dgnPoints = dgnPlace+dgnMinutes+(dgnSeconds*100/60/100);
var glenbardPoints = glenbardPlace+glenbardMinutes+(glenbardSeconds*100/60/100);
var hinsdalePoints = hinsdalePlace+hinsdaleMinutes+(hinsdaleSeconds*100/60/100);

var totalPoints = yorkPoints+mortonPoints+hinsdalePoints+dgnPoints+glenbardPoints;


document.write('Leo Rooney Jr.<br><br>York - placed '+yorkPlace+', '+yorkMinutes+':'+yorkSeconds+'<br>'+yorkPoints.toFixed(2)+' pts<br>Morton - placed '+mortonPlace+', '+mortonMinutes+':'+mortonSeconds+'<br>'+mortonPoints.toFixed(2)+' pts<br>DGN - placed '+dgnPlace+', '+dgnMinutes+':'+dgnSeconds+'<br>'+dgnPoints.toFixed(2)+' pts<br>Glenbard West - placed '+glenbardPlace+', '+glenbardMinutes+':'+glenbardSeconds+'<br>'+glenbardPoints.toFixed(2)+' pts<br>Hinsdale Central - placed '+hinsdalePlace+', '+hinsdaleMinutes+':'+hinsdaleSeconds+'<br>'+hinsdalePoints.toFixed(2)+' pts<br><br>Total Points: '+totalPoints.toFixed(2)+'<br><br>Season Team Rank: 4')