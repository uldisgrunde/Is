var data=document.getElementById('dati');

function viewHVI(tableID){
	const file = document.getElementById('file').files[0];
	const reader = new FileReader();
	reader.onload = function(e) {
		openData(e);
	}
	reader.readAsText(file);
	let data=document.getElementById(tableID);
}

function openData(e) {
	let str=e.target.result;
	data=document.getElementById('dati');
	str=str.replace(/^( ){2}|\r\n|\r|\n|\n\r/mg, "");
	let rinda=str.split(":BEGINTABLE");
	rinda=rinda[1].split(":ENDTABLE");
	rinda=rinda[0]
		.split(":D;;")
		.join("\n")
		.replace(/ PLAN/g," _ :PLAN")
		.replace(/(\d{3});(\d{4})(\d{2})(\d{2}):(\d{2})(\d{2})(\d{2}) ([\w-]+)[\. :]{1,2}([\w-]+)([\w-]+)*/gm,"$1;$2-$3-$4;$5:$6:$7;$8;$9;$10")
		.replace(/([abcdef][0-9][abcdef])/g,"")
		.replace(/([abcdef][0-9][0-9])/g,"")
		.replace(/_/g,"")
		.split("\n");

	rinda.shift();
	data.innerHTML="";
	for(i in rinda){
		let row=data.insertRow(i);
		let suna=rinda[i].split(";")
		suna.shift();
		for (item of suna) {
			row.innerHTML+=`<td>${item}</td>`;
		}
	}
		addTablefilter(data);
		modifyTable(data);


}

