
for( let j=2; j <=20; j++){
    var prime = true;
    for(var i=2;i<j;i++){
        if(j%i==0){
            prime = false;
        }
    }
    if(prime){
        alert(j);
    }
}