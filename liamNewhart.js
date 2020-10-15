function liamNewhart(){
	// york
	var yorkPlace = 6;
	var yorkMinutes = 14;
	var yorkSeconds = 26;
	//morton
	var mortonPlace = 9;
	var mortonMinutes = 16;
	var mortonSeconds = 13;
	//dgn
	var dgnPlace =  5;
	var dgnMinutes = 16;
	var dgnSeconds = 17;
	//glenbard west
	var glenbardPlace = 4;
	var glenbardMinutes = 15;
	var glenbardSeconds = 32;
	//hinsdale
	var hinsdalePlace = 21;
	var hinsdaleMinutes = 15;
	var hinsdaleSeconds = 54;


	var yorkPoints = yorkPlace+yorkMinutes+(yorkSeconds*100/60/100);
	var mortonPoints = mortonPlace+mortonMinutes+(mortonSeconds*100/60/100);
	var dgnPoints = dgnPlace+dgnMinutes+(dgnSeconds*100/60/100);
	var glenbardPoints = glenbardPlace+glenbardMinutes+(glenbardSeconds*100/60/100);
	var hinsdalePoints = hinsdalePlace+hinsdaleMinutes+(hinsdaleSeconds*100/60/100);

	var totalPoints = yorkPoints+mortonPoints+hinsdalePoints+dgnPoints+glenbardPoints;


	document.write('Liam Newhart So.<br><br>York - placed '+yorkPlace+', '+yorkMinutes+':'+yorkSeconds+'<br>'+yorkPoints.toFixed(2)+' pts<br>Morton - placed '+mortonPlace+', '+mortonMinutes+':'+mortonSeconds+'<br>'+mortonPoints.toFixed(2)+' pts<br>DGN - placed '+dgnPlace+', '+dgnMinutes+':'+dgnSeconds+'<br>'+dgnPoints.toFixed(2)+' pts<br>Glenbard West - placed '+glenbardPlace+', '+glenbardMinutes+':'+glenbardSeconds+'<br>'+glenbardPoints.toFixed(2)+' pts<br>Hinsdale Central - placed '+hinsdalePlace+', '+hinsdaleMinutes+':'+hinsdaleSeconds+'<br>'+hinsdalePoints.toFixed(2)+' pts<br><br>Total Points: '+totalPoints.toFixed(2)+'<br><br>Season Team Rank: 3')

}