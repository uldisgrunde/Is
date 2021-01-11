function addTablefilter(table) {
	let source=[];
	//for(cell in data.parentNode.rows[0].cells) {
	for (i=0;i<data.parentNode.rows[0].cells.length; i++){
		source.push(data.parentNode.rows[0].cells[i].innerText);
	}
	data.parentNode.tHead.rows[0].innerHTML="";
    for (i=0;i<source.length; i++){
	 data.parentNode.tHead.rows[0].innerHTML+=`<th>
	 <input type="text" size="${source[i].length}" placeholder="${source[i]}" onkeyup="tableFilter(this,${i})">
	 <input type="button" style="padding: 0px 0px;" value="&varr;"  onclick="sortTable(${i})">
	 </th>`;
    }
}

function tableFilter(input,col) {
	let filter= input.value.toUpperCase();
	//let tr = data.getElementsByTagName("tr");
	for (row of data.rows) {
		td = row.cells[col];
		if (td) {
			txtValue = td.textContent || td.innerText;
			alert(txtValue.toUpperCase().indexOf(filter));
			row.style.display = (txtValue.toUpperCase().indexOf(filter) > -1?"":"none");
		}       
	}
}

function tableSort(col) {
	let switching = true;
	let  dir = "asc";
	while (switching) {
		switching = false;
		rows = data.rows;
	    for (i = 0; i < rows.length ; i++) {
			shouldSwitch = false;
		    x = rows[i].cells[col]
				.innerHTML
				.toLowerCase() ;
			y = rows[i + 1].cells[col]
				.innerHTML
				.toLowerCase() ;
			if (dir == "asc") {
				if (x> y) {
					shouldSwitch = true;
					break;
				}
			} else if (dir == "desc") {
				if (x < y) {
					shouldSwitch = true;
					 break;
				 }
			}
		}
		if (shouldSwitch) {
			rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
			switching = true;
			switchcount ++;
		} else {
			if (switchcount == 0 && dir == "asc") {
				dir = "desc";
				switching = true;
			}
		}
	}
}

function sortTable(n) {
  var rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  switching = true;
  dir = "asc";
  while (switching) {
     switching = false;
     for (i =0;i<data.rows.length-1;i++) {
      shouldSwitch = false;
      let x = data.rows[i].cells[n].innerHTML.toLowerCase();
      let y = data.rows[i + 1].cells[n].innerHTML.toLowerCase();
      if (dir == "asc") {
        if (x> y) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x < y) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      data.rows[i].parentNode.insertBefore(data.rows[i + 1], data.rows[i]);
      switching = true;
      switchcount ++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
