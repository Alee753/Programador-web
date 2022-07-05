var Array_a = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
var numMayor = Array_a[0];

while(numMayor < 1000){
    document.write(numMayor);
    document.write('<br>');
    numMayor = numMayor + 100;
}

if(numMayor >= 10){
    document.write(numMayor + ' Este es el numero mayor')
}else{
    document.write('Error!, no se pudo calcular en numero mayor')
}
