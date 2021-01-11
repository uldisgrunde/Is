function viewstr{
	const file = document.getElementById('file').files[0];
	const reader = new FileReader();
	reader.onload = function(e) {
		let str=e.target.result;
		//str=str.replace(/^( ){2}|\r\n|\r|\n|\n\r/mg, "");
		let fname=array("a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","a10","a11","a12","a13","a14","a15","a16","a17","a18","a19","a20","a21","a22");
		let i=0;
		let mas=[];
			array_splice(str,4,1,explode(" ",str[4]));//sadala datumu no
			array_splice(str,6,1,explode(" ",str[6]));//sadala datumu līdz
			if(str.lenght==$fname.lenght){//ja datu garums sakrīt;
				let data=array_combine(fname,str);
				array_push(mas,data);
			}
		}
		name=Explode("_", target_file);
		car=Explode("[", name[1]);

		period=Explode("]", car[1]);
		period=Explode("--", period[0]);
		return `{"file":[
			{"name":${car[0]}},
			{"name":${period[0]},
			{"name":${period[1]}}
			]
		table:${json_encode(mas)}
		}`;
}

function readCSV(str) {
	let str=data.target.result;
    var record_num = 5;  // or however many elements there are in each row
    var allTextLines = str.split(/\r\n|\n/);
    var entries = allTextLines[0].split(',');
    var lines = [];
    var headings = entries.splice(0,record_num);
    while (entries.length>0) {
        var tarr = [];
        for (var j=0; j<record_num; j++) {
            tarr.push(headings[j]+":"+entries.shift());
        }
        lines.push(tarr);
    }
     alert(lines);
}