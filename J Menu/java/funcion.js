function calcularCategoria() 
{
    var promedio = parseFloat(document.getElementById("promedio").value);
    var categoria = "";
    
    if (promedio >= 17) {
        categoria = "A";
    } else if (promedio >= 14 && promedio < 17) {
        categoria = "B";
    } else if (promedio >= 12 && promedio < 14) {
        categoria = "C";
    }else if (isNaN(promedio) || promedio < 0 || promedio > 20) {
            document.getElementById("resultado").innerHTML = "Nota no válida";
    } else {
        categoria = "D";
        document.getElementById("resultado").innerHTML = "La categoría correspondiente es: " + categoria;
    }
}
          
function calcularSueldo() 
{
    var totalVendido = parseFloat(document.getElementById("totalVendido").value);
    var hijosEnEdadEscolar = parseInt(document.getElementById("hijosEnEdadEscolar").value);
    var bonificacion = hijosEnEdadEscolar * 50;
    var comision = totalVendido * 0.075;
    var sueldoBruto = 600 + comision + bonificacion;
    var descuento = sueldoBruto * 0.11;
    var sueldoNeto = sueldoBruto - descuento;

    document.getElementById("comision").innerHTML = "Comisión: S/. " + comision.toFixed(2);
    document.getElementById("bonificacion").innerHTML = "Bonificación: S/. " + bonificacion.toFixed(2);
    document.getElementById("sueldoBruto").innerHTML = "Sueldo bruto: S/. " + sueldoBruto.toFixed(2);
    document.getElementById("descuento").innerHTML = "Descuento: S/. " + descuento.toFixed(2);
    document.getElementById("sueldoNeto").innerHTML = "Sueldo neto: S/. " + sueldoNeto.toFixed(2);
}
function calcularPeso() 
{
    var edad = parseInt(document.getElementById("edad").value);
    var peso = 3 * edad + 7;
    document.getElementById("resultado").innerHTML = "El peso del niño es: " + peso + " kg";
}
function convertirTemperatura() 
{
    var celsius = parseFloat(document.getElementById("celsius").value);
    var fahrenheit = 9 * celsius / 5 + 32;
    var kelvin = fahrenheit + 459.67;
    var rankine = celsius + 273.15 + 1.8;
    document.getElementById("fahrenheit").innerHTML = "Grados Fahrenheit: " + fahrenheit + " °F";
    document.getElementById("kelvin").innerHTML = "Grados Kelvin: " + kelvin + " K";
    document.getElementById("rankine").innerHTML = "Grados Rankine: " + rankine + " °R";
}
