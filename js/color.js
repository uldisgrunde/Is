function getClass(Value, offset, time,type,row,cycle,amber,yellow){
	// ${getClass(i,x.offset,x.time,x.type,j-1,cycle,amber,yellow)}
	Value=Value+1;
	offset=offset*2;
	time=time*2;
	type=type.toLowerCase();
	if (row>-1){
		if(Value>offset && Value<offset+1+time){
			if(type=="c"){
				return "Red";
			}else{
				if(type=="p" && Value>offset+time-10 && Value%2==1){
					return "None";
				}else{
					return "Green";
				}
			}
		}else{
			if(type=="c"||type=="a"){
				return "None";
			}else if(type=="v"){
				if(Value>offset-yellow*2 && Value<offset+1 && row){
					return "Yellow";
				}else if(Value>offset && Value<offset+1+time+amber*2){
					return "Yellow";
				}else if(offset==0 && Value>(cycle/2-yellow)*2+1 && Value<cycle+1 && row){
					return "Yellow";
				}else{
					return "Red";
				}
			}else{
				return "Red";
			}
		}
	}
}
