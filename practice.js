

const secondButton = document.createElement('button');
secondButton.innerText = 'Start Program';
document.body.appendChild(secondButton);
secondButton.addEventListener('click', () => {
	alert('When asked for a percentage, give up to 2 decimals but no more than that otherwise the program will not run. No need for symbols. ex. 12, 9.19, 0.7. enjoy')
	



	function randomNumber(min, max) {  
    	min = Math.ceil(min); 
    	max = Math.floor(max); 
    	return Math.floor(Math.random() * (max - min + 1)) + min; 
	}  
	var lottery = randomNumber(1,10000);
	// summon variable to generate a number

	var liam = window.prompt('What percentage does Liam get?');
	var joseph = window.prompt('What percentage does Joseph get?');
	var milan = window.prompt('What percentage does Milan get?');
	var louie = window.prompt('What percentage does Louie get?');
	var owenH = window.prompt('What percentage does Owen H get?');
	var owenS = window.prompt('What percentage does Owen S get?');
	var max = window.prompt('What percentage does Max get?');
	var emmett = window.prompt('What percentage does Emmett get?');
	var august = window.prompt('What percentage does August get?');

		var liam = liam*100;
		var joseph = joseph*100;
		var owenH = owenH*100;
		var owenS = owenS*100;
		var milan = milan*100;
		var louie = louie*100;
		var emmett = emmett*100;
		var max = max*100;
		var august = august*100;

	function lotteryJackpot(){



		if(lottery >= 0 & lottery <= liam){
			document.write('Liam gets Dave');
		}else if(lottery > liam & lottery <= liam+joseph){
			document.write('Joseph gets Dave');
		}else if(lottery > liam+joseph & lottery <= liam+joseph+milan){
			document.write('Milan gets Dave');
		}else if(lottery > liam+joseph+milan & lottery <= liam+joseph+milan+louie){
			document.write('Louie gets Dave');
		}else if(lottery > liam+joseph+milan+louie & lottery <= liam+joseph+milan+louie+emmett){
			document.write('Emmett gets Dave');
		}else if(lottery > liam+joseph+milan+louie+emmett & lottery <= liam+joseph+milan+louie+emmett+owenS){
			document.write('Owen S gets Dave');
		}else if(lottery > liam+joseph+milan+louie+emmett+owenS & lottery <= liam+joseph+milan+louie+emmett+owenS+owenH){
			document.write('Owen H gets Dave');
		}else if(lottery > liam+joseph+milan+louie+emmett+owenS+owenH & lottery <= liam+joseph+milan+louie+emmett+owenS+owenH+august){
			document.write('August gets Dave');
		}else if(lottery > liam+joseph+milan+louie+emmett+owenS+owenH+august & lottery <= liam+joseph+milan+louie+emmett+owenS+owenH+august+max){
			document.write('Max gets Dave');
	}
	}


	const button = document.createElement('button');
	button.innerText = 'Ready For The Results??';
	document.body.appendChild(button);
	button.addEventListener('click', () => {
		alert('Are you sure you are ready for the results??');
		alert('Just so you know, there is nothing more trustworthy than a computer. So dont get mad or call it a scandal if you dont win. Thanks.')
		alert('After you click ok, another alert will pop up, ignore that, but then on the screen will read who has won the G.O.A.T.. It will happen fast so be prepared. Good Luck!')
		alert(lotteryJackpot());
	});


});





