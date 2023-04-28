if(isDigit || isUnderscore || isLower){
    continue;
}else{
    console.log('Password must consist at least one uppercase letter!');
}
if(isDigit || isUpper || isUnderscore){
    continue;
}else{
    console.log('Password must consist at least one lowercase letter!');
}
if(isLower || isUpper || isUnderscore){
    continue;
}else{
    console.log('Password must consist at least one digit!');
}