
// york
var yorkPlace = 9;
var yorkMinutes = 14;
var yorkSeconds = 34;
//morton
var mortonPlace = 4;
var mortonMinutes = 15;
var mortonSeconds = 22;
//dgn
var dgnPlace =  10;
var dgnMinutes = 16;
var dgnSeconds = 28;
//glenbard west
var glenbardPlace = 19;
var glenbardMinutes = 16;
var glenbardSeconds = 27;
//hinsdale
var hinsdalePlace = 7;
var hinsdaleMinutes = 14;
var hinsdaleSeconds = 51;


var yorkPoints = yorkPlace+yorkMinutes+(yorkSeconds*100/60/100);
var mortonPoints = mortonPlace+mortonMinutes+(mortonSeconds*100/60/100);
var dgnPoints = dgnPlace+dgnMinutes+(dgnSeconds*100/60/100);
var glenbardPoints = glenbardPlace+glenbardMinutes+(glenbardSeconds*100/60/100);
var hinsdalePoints = hinsdalePlace+hinsdaleMinutes+(hinsdaleSeconds*100/60/100);

var totalPoints = yorkPoints+mortonPoints+hinsdalePoints+dgnPoints+glenbardPoints;


document.write('Owen Augustin So.<br><br>York - placed '+yorkPlace+', '+yorkMinutes+':'+yorkSeconds+'<br>'+yorkPoints.toFixed(2)+' pts<br>Morton - placed '+mortonPlace+', '+mortonMinutes+':'+mortonSeconds+'<br>'+mortonPoints.toFixed(2)+' pts<br>DGN - placed '+dgnPlace+', '+dgnMinutes+':'+dgnSeconds+'<br>'+dgnPoints.toFixed(2)+' pts<br>Glenbard West - placed '+glenbardPlace+', '+glenbardMinutes+':'+glenbardSeconds+'<br>'+glenbardPoints.toFixed(2)+' pts<br>Hinsdale Central - placed '+hinsdalePlace+', '+hinsdaleMinutes+':'+hinsdaleSeconds+'<br>'+hinsdalePoints.toFixed(2)+' pts<br><br>Total Points: '+totalPoints.toFixed(2)+'<br><br>Season Team Rank: 1')