/*
//OPERADOR TERNARIO

function fatorial(n){
    return n == 1 ? 1 : n * fatorial(n-1)
}
*/

function fatorial(n){
    if(n == 1){
        return 1
    }else{
        return n * fatorial(n- 1)
    }
}



console.log(fatorial(5))