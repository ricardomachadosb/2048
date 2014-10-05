
window.onload = function(){
	var input1 = document.getElementById("field1");
	var input2 = document.getElementById("field2");
	var input3 = document.getElementById("field3");
	var input4 = document.getElementById("field4");
	var input5 = document.getElementById("field5");
	var input6 = document.getElementById("field6");
	var input7 = document.getElementById("field7");
	var input8 = document.getElementById("field8");
	var input9 = document.getElementById("field9");
	var input10 = document.getElementById("field10");
	var input11 = document.getElementById("field11");
	var input12 = document.getElementById("field12");
	var input13 = document.getElementById("field13");
	var input14 = document.getElementById("field14");
	var input15 = document.getElementById("field15");
	var input16 = document.getElementById("field16");
	
	//Função para popular 2 e 4 randomicamente depois de cada movimento	
	var randomize = function(){
		setTimeout(function() {
		var field = Math.floor((Math.random() * 16) + 1); 
		var selectedField = document.getElementById("field" + field);
		var hasContent = selectedField.getAttribute("has-content");
		if(hasContent == "true"){
			randomize();
		}else {
			var randomValue = Math.floor((Math.random() * 3) + 1); 
			if(randomValue <= 2){
				randomValue = 2;
			}else {
				randomValue = 4;
			}
			selectedField.innerHTML = randomValue;
			selectedField.setAttribute("has-content", "true");
		}
		}, 20);
	}
	
	
	var cleanField = function(input){
		input.setAttribute("has-content", "false");
		input.innerHTML = "";
	}
	
	var atualizaField = function(input, value){
		input.setAttribute("has-content", "true");
		input.innerHTML = value;
	}
	
	var magica = function(firstInput, secondInput, thirdInput, fourthInput){
		var moveu = false
		var value1 = firstInput.innerHTML;
		var value2 = secondInput.innerHTML;
		var value3 = thirdInput.innerHTML;
		var value4 = fourthInput.innerHTML;
		
		
		if(fourthInput.getAttribute("has-content") == "true"){
			var atualizado  = false
			if(thirdInput.getAttribute("has-content") == "true"){
				value3 = parseInt(value3);
				if(value3 == parseInt(value4)){
					atualizaField(fourthInput, parseInt(value4) * 2);
					cleanField(thirdInput);
					
					atualizado = true;
					moveu = true;
					//if(secondInput.getAttribute("has-content") == "true"){
						//atualizaField(thirdInput, secondInput.innerHTML);
						//cleanField(secondInput);
					//}
				}
				//bkcp 1
			}
			if(!atualizado){
				if(secondInput.getAttribute("has-content") == "true" && thirdInput.getAttribute("has-content") == "false"){
					value2 = parseInt(value2);
					if(value2 == parseInt(value4)){
						atualizaField(fourthInput, parseInt(value4) * 2);
						cleanField(secondInput);
						
						atualizado = true
						moveu = true;
					}
				}
			}
			
			if(!atualizado){
				if(secondInput.getAttribute("has-content") == "false" && thirdInput.getAttribute("has-content") == "false" && firstInput.getAttribute("has-content") == "true"){
					value1 = parseInt(value1);
					if(value1 == parseInt(value4)){
						atualizaField(fourthInput, parseInt(value4) * 2);
						cleanField(firstInput);
						moveu = true;
					}
				}
			}
		}
		
		if(thirdInput.getAttribute("has-content") == "true"){
			var atualizado = false;
			if(fourthInput.getAttribute("has-content") == "false"){
				atualizaField(fourthInput, thirdInput.innerHTML);
				cleanField(thirdInput);
				atualizado = true;
				moveu = true;
			}
			if(!atualizado){
				if(secondInput.getAttribute("has-content") == "true"){
					value2 = parseInt(value2);
					if(value2 == parseInt(value3)){
						atualizaField(thirdInput, parseInt(value3) * 2);
						cleanField(secondInput);
						
						atualizado = true
						moveu = true;
					}
				}
			}
			
			if(!atualizado){
				if(secondInput.getAttribute("has-content") == "false" && firstInput.getAttribute("has-content") == "true"){
					value1 = parseInt(value1);
					if(value1 == parseInt(value3)){
						atualizaField(thirdInput, parseInt(value3) * 2);
						cleanField(firstInput);
						
						atualizado = true
						moveu = true;
					}
				}
			}
		}
		
		if(secondInput.getAttribute("has-content") == "true"){
			var atualizado = false;
			if(fourthInput.getAttribute("has-content") == "false"){
				atualizaField(fourthInput, secondInput.innerHTML);
				cleanField(secondInput);
				atualizado = true;
				moveu = true;
			}
			if(!atualizado){
				if(thirdInput.getAttribute("has-content") == "false"){
					atualizaField(thirdInput, secondInput.innerHTML);
					cleanField(secondInput);
					atualizado = true;
					moveu = true;
				}
			}
			
			if(!atualizado){
				if(firstInput.getAttribute("has-content") == "true"){
					value1 = parseInt(value1);
					if(value1 == parseInt(value2)){
						atualizaField(secondInput, parseInt(value2) * 2);
						cleanField(firstInput);
						
						atualizado = true
						moveu = true;
					}
				}
			}
		}
		
		if(firstInput.getAttribute("has-content") == "true"){
			var atualizado = false;
			if(fourthInput.getAttribute("has-content") == "false"){
				atualizaField(fourthInput, firstInput.innerHTML);
				cleanField(firstInput);
				atualizado = true;
				moveu = true;
			}
			if(!atualizado){
				if(thirdInput.getAttribute("has-content") == "false"){
					atualizaField(thirdInput, firstInput.innerHTML);
					cleanField(firstInput);
					atualizado = true;
					moveu = true;
				}
			}
			if(!atualizado){
				if(secondInput.getAttribute("has-content") == "false"){
					atualizaField(secondInput, firstInput.innerHTML);
					cleanField(firstInput);
					atualizado = true;
					moveu = true;
				}
			}
		}
		
		return moveu;
	}
	
	var keyDown = function(){
		var moveu1 = magica(input1, input5, input9, input13);
		var moveu2 = magica(input2, input6, input10, input14);
		var moveu3 = magica(input3, input7, input11, input15);
		var moveu4 = magica(input4, input8, input12, input16);
		if(moveu1 || moveu2 || moveu3 || moveu4){
			randomize();
		}
	}
	
	var keyUp = function(){
		var moveu1 = magica(input13, input9, input5, input1);
		var moveu2 = magica(input14, input10, input6, input2);
		var moveu3 = magica(input15, input11, input7, input3);
		var moveu4 = magica(input16, input12, input8, input4);
		if(moveu1 || moveu2 || moveu3 || moveu4){
			randomize();
		}
	}
	
	var keyRight = function(){
		var moveu1 = magica(input1, input2, input3, input4);
		var moveu2 = magica(input5, input6, input7, input8);
		var moveu3 = magica(input9, input10, input11, input12);
		var moveu4 = magica(input13, input14, input15, input16);

		if(moveu1 || moveu2 || moveu3 || moveu4){
			randomize();
		}
	}
	
	var keyLeft = function(){
		var moveu1 = magica(input4, input3, input2, input1);
		var moveu2 = magica(input8, input7, input6, input5);
		var moveu3 = magica(input12, input11, input10, input9);
		var moveu4 = magica(input16, input15, input14, input13);

		if(moveu1 || moveu2 || moveu3 || moveu4){
			randomize();
		}
	}
	
	
	function checkKey(e) {
		if (e.keyCode == '38') {
			keyUp();
		}else if (e.keyCode == '40') {
			keyDown();
		}else if (e.keyCode == '37') {
			keyLeft();
		}else if (e.keyCode == '39') {
			keyRight();
		}
	}
	
	
	document.onkeydown = checkKey;
	randomize();
	randomize();
}
