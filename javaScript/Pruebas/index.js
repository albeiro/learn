console.log("bien")
function is_my_number_prime(input)
{
    //su código acá
    let result;
    if(Number.isNaN(input)){
        result =  "no es un numero";
    }else{
        result = "PRIMO";
        for(var i = 2; i++; i<input){
            console.log("input:" +input + "  i: "+i)
            if(input ==i*i){
                result = "NO_ES_PRIMO";
            }
        } 
    }
    return result;
}

