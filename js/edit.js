function modifyTable(table) {
//function addTableEdit(table) {
	data.parentNode.tHead.rows[0].innerHTML+="<th>+/-</th>";
	for (row of data.rows) {
		for(cell of row.cells) {
			/*cell.addEventListener('dblclick', 
				function() {
					cellEdit(this);
				}
			);*/
			cell.ondbclick=function(){
				cellEdit(this);
			};
		}
		let cells = row.insertCell(row.cells.length);
		cells.innerHTML = `<input type="button" onclick="add(this)" value="+"><input type="button" onclick="del(this)" value="x">`;
	}
}

function edit(obj){
	if(obj.getElementsByTagName("input").length > 0){
		return false;   
	}else{
		var preText = obj.innerHTML;
		obj.innerHTML=`<input type="text" value="${preText}" onclick="return false" onkeyup="keyups(event,this,'${preText}');">`;
	}
}

function keyups(key,obj,val){
  if(13 == key.keyCode) { // press ENTER-key
     obj.parentNode.innerHTML=obj.value;
  } else if(27 == key.keyCode) {  // press ESC-key
    obj.parentNode.innerHTML=val;
  }
}

function del(obj) {
	dati.deleteRow(obj.parentNode.parentNode.rowIndex-1);
}

function add(obj){
	let rows=obj.parentNode.parentNode;
	//alert(rows.cells.length);
	let row = dati.insertRow(obj.parentNode.parentNode.rowIndex);
	for(i=0;i<rows.cells.length-1;i++){
		row.innerHTML+=`<td ondblClick="edit(this);"></td>`;
	}
	let cells = row.insertCell(row.cells.length);
	cells.innerHTML = `<input type="button" onclick="add(this)" value="+"><input type="button" onclick="del(this)" value="x">`;

}