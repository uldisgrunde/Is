
function add(element){
	let Row = document.getElementById('Table')
				.insertRow(element.parentNode.parentNode.rowIndex+1);
	Row.innerHTML="<td></td>"+
		"<td ondblClick='edit(this);'>"+
			'<input type="text" value="" onclick="return false" onkeyup="keyups(event,this)"/>'+
		'</td>'+
		"<td ondblClick='edit(this);'>"+
			'<input type="text" value="" onclick="return false" onkeyup="keyups(event,this)"/>'+
		'</td>'+
		"<td ondblClick='edit(this);'>"+
			'<input type="text" value="" onclick="return false" onkeyup="keyups(event,this)"/>'+
		'</td>'+
		"<td ondblClick='edit(this);'>"+
			'<input type="text" value="" onclick="return false" onkeyup="keyups(event,this)"/>'+
		'</td>'+
		"<td ondblClick='edit(this);'>"+
			'<input type="text" value="" onclick="return false" onkeyup="keyups(event,this)"/>'+
		'</td>'+
		"<td ondblClick='edit(this);'>"+
			'<input type="text" value="" onclick="return false" onkeyup="keyups(event,this)"/>'+
		'</td>'+
		"<td ondblClick='edit(this);'>"+
			'<input type="text" value="" onclick="return false" onkeyup="keyups(event,this)"/>'+
		'</td>'+
		"<td ondblClick='edit(this);'>"+
			'<input type="text" value="" onclick="return false" onkeyup="keyups(event,this)"/>'+
		'</td>'+
		'<td>'+
			'<input type="button" value="-" onclick="del(this)"/>'+
		'</td>';
}

function del(element) {
	document.getElementById('Table')
		.deleteRow(element.parentNode.parentNode.rowIndex);
}

function edit(obj){
	if(obj.getElementsByTagName("input").length > 0){
		return false;   
	}else{
		let preText = obj.innerHTML;
		obj.innerHTML='<input '+
			'type="text" '+
			'value="'+preText+'" '+
			'onclick="return false" '+
			'onkeyup="keyups(event,this,'+"'"+preText+"'"+' \);"'+
			'/>';
	}
}

function keyups(which,obj){
	let val=obj.parentNode.innerText;
	if(13 == which.keyCode) {// press ENTER-key
		obj.parentNode.innerHTML=obj.value;
	} else if(27 == which.keyCode) { // press ESC-key
		obj.parentNode.innerHTML=val;
	}
}

function tableToJson(obj) {
	table=document.getElementById(obj);
	let headers=["","date_from","time_from","date_to","time_to","addrees_from","address_to","odometer_from","odometer_to"];
	let data = [];
	for (let i=1; i<table.rows.length; i++) {
		let tableRow = table.rows[i];
		let rowData = {};
		for (let j=1; j<tableRow.cells.length-1; j++) {
			if (tableRow.cells[j].children.length==1) {//ja ir input
					rowData[ headers[j] ] = tableRow.cells[j].children[0].value;
			   }else{
					rowData[ headers[j] ] = tableRow.cells[j].innerHTML;
			   }
		} data.push(rowData);
	}
	alert(JSON.stringify(data));
}
