(function(){
	function rescale(){
		if(document.documentElement.clientWidth<1000){
			document.documentElement.style.fontSize = 20 * document.documentElement.clientWidth / 320 + 'px';
		}else{
			document.documentElement.style.fontSize = 30+'px'; 
//			document.documentElement.style.height=1.5*480+'px';
		}
		 
	
	}
	
	
	window.onresize=rescale;
	
	rescale();
	
	
	
})()
