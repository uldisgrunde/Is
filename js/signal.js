function create(source,tableId,rowId1,rowId2){
	let xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			let dati = JSON.parse(this.responseText);
			let cycle=dati.cross[0].cycle*2;
			let yellow=dati.cross[0].yellow;
			let amber=dati.cross[0].amber;
			let title=dati.cross[0].name;
			let signal=dati.signal;
			//tabulas galva
			let table=document.getElementById(tableId);
			let rinda1=document.getElementById(rowId1);
			let rinda2=document.getElementById(rowId2);
			let i=0;
			for(i=1;i<cycle/20;i++){
				rinda1.innerHTML+=`<th colspan="20">${i*10-5}</th>`;
				rinda2.innerHTML+=`<th colspan="20">${(i)*10}</th>`;
			}
			let add=cycle-(i-1)*20;
			if (add>0){
				rinda1.innerHTML+=`<th colspan="${add}"></th>`;
			}
			// end tabulas galva

			table.innerHTML+=`<caption>${title.toUpperCase()}</caption>`;
			//tabulas rindas

			for (x of signal) {
				table.innerHTML+=`<tbody id="${x.name}">
				</tbody>`;
				let tbody=document.getElementById(`${x.name}`);
				for(j=0;j<3;j++){
					let rinda=tbody.insertRow(j);
					if(j==0){
						rinda.innerHTML+=`
						<tr>
							<th rowspan="3">${x.name}</th>
							<th rowspan="3">${x.time}</th>
						</tr>`;
					}
					for(i=0;i<cycle;i++){
						rinda.innerHTML+=`<td class="${(j==0?"nosig":"sig")} ${getClass(i,x.offset,x.time,x.type,j-1,cycle,amber,yellow)}"></td>`;
					}
				}
			}
			//end tabulas rinda
			
		}
	};
	xmlhttp.open("GET", `./../data/${source}.json`, true);
	xmlhttp.send(); 
}
