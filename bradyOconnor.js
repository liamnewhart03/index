
// york
var yorkPlace = 26;
var yorkMinutes = 17;
var yorkSeconds = '00';
//morton
var mortonPlace = 8;
var mortonMinutes = 16;
var mortonSeconds = '05';
//dgn
var dgnPlace =  20;
var dgnMinutes = 17;
var dgnSeconds = 21;
//glenbard west
var glenbardPlace = 9;
var glenbardMinutes = 16;
var glenbardSeconds = '03';
//hinsdale
var hinsdalePlace = 14;
var hinsdaleMinutes = 15;
var hinsdaleSeconds = 18;

var lyonsPlace = 32;
var lyonsMinutes = 20;
var lyonsSeconds = '00';


var yorkPoints = yorkPlace+yorkMinutes+(yorkSeconds*100/60/100);
var mortonPoints = mortonPlace+mortonMinutes+(mortonSeconds*100/60/100);
var dgnPoints = dgnPlace+dgnMinutes+(dgnSeconds*100/60/100);
var glenbardPoints = glenbardPlace+glenbardMinutes+(glenbardSeconds*100/60/100);
var hinsdalePoints = hinsdalePlace+hinsdaleMinutes+(hinsdaleSeconds*100/60/100);
var lyonsPoints = lyonsPlace+lyonsMinutes+(lyonsSeconds*100/60/100);
var totalPoints = yorkPoints+mortonPoints+hinsdalePoints+dgnPoints+glenbardPoints+lyonsPoints;


document.write('Brady OConnor So.<br><br>York - placed '+yorkPlace+', '+yorkMinutes+':'+yorkSeconds+'<br>'+yorkPoints.toFixed(2)+' pts<br>Morton - placed '+mortonPlace+', '+mortonMinutes+':'+mortonSeconds+'<br>'+mortonPoints.toFixed(2)+' pts<br>DGN - placed '+dgnPlace+', '+dgnMinutes+':'+dgnSeconds+'<br>'+dgnPoints.toFixed(2)+' pts<br>Glenbard West - placed '+glenbardPlace+', '+glenbardMinutes+':'+glenbardSeconds+'<br>'+glenbardPoints.toFixed(2)+' pts<br>Hinsdale Central - placed '+hinsdalePlace+', '+hinsdaleMinutes+':'+hinsdaleSeconds+'<br>'+hinsdalePoints.toFixed(2)+' pts<br>Lyons Township - placed '+lyonsPlace+', '+lyonsMinutes+':'+lyonsSeconds+'<br>'+lyonsPoints.toFixed(2)+' pts<br><br>Total Points: '+totalPoints.toFixed(2)+'<br><br>Season Team Rank: 2')