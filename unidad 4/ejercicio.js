var distancia;

distancia = prompt(`Ingrese la distancia a recorrer:`, ``);
if (distancia >= 0 && distancia <= 1000) {
    document.write(`Su medio de transporte corresponde a Pie, ` + distancia + ` metros`);
}

else if (distancia > 1000 && distancia <= 10000) {
    bicicleta = prompt(`Ingrese la distancia a recorrer:`, ``);
    document.write(`Su medio de transporte corresponde en Bicicleta, ` + distancia + ` metros`);
}

else if (distancia > 10000 && distancia <= 30000) {
    document.write(`Su medio de transporte corresponde en Colectivo, ` + distancia + ` metros`);
}

else if (distancia > 30000 && distancia <= 100000) {
    document.write(`Su medio de transporte correspode en Auto, ` + distancia + ` metros`);
}

else if (distancia > 100000) {
    document.write(`Su medio de transporte corresponde en Avion, ` + distancia + ` metros`);
} else {
    document.write(`Error!, no se pudo calcular correctamente su distancia`)
}
