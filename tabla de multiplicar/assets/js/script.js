function generateTable(){
	let input = document.getElementById('input').value;
	
	if(input == ""){
	  alert("Enter some number first");
	}else{
	  let digit = 0;
	  if(input <= 0){
		digit = 1;
		document.getElementById('input').value = 1;
	  }else{
		digit = input;
	  }
	  
	
	  
	  let html = "";
	  for(let i = 1; i <= digit; i++) {
	  html += "<tr>";
		for(let j = 1; j <= 10; j++){
		  
		  html += "<td>"+i*j+"</td>";
		}
		html += "</tr>";
	  }
	
	  document.getElementById('result').innerHTML = html;
	  document.getElementById('result').setAttribute('class', 'alert-warning');
	}
  }