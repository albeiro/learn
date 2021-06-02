function is_my_number_prime(input)
{
    //su código acá
    let result;
    if( (input/input)!=1 ){
        result =  "no es un numero";
    }else{
        result = "PRIMO";
        for(var i = 2; i<input;i++){
            if(input ==i*i){
                result = "NO_ES_PRIMO";
            }
        } 
    }
    return result;
}