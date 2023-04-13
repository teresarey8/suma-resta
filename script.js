import java.util.Scanner;

public class OperacionesAritmeticas {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double num1, num2;
        
        System.out.println("Este programa solicitará dos números y realizará las operaciones de suma, resta, multiplicación y división.\n");
        
        // Solicitar al usuario los dos números
        System.out.print("Por favor, introduce el primer número: ");
        num1 = sc.nextDouble();
        System.out.print("Por favor, introduce el segundo número: ");
        num2 = sc.nextDouble();
        
        // Realizar las operaciones y mostrar los resultados
        System.out.println("\nResultados:\n");
        
        double suma = num1 + num2;
        System.out.println("La suma de " + num1 + " + " + num2 + " es igual a: " + suma);
        
        double resta = num1 - num2;
        System.out.println("La resta de " + num1 + " - " + num2 + " es igual a: " + resta);
        
        double multiplicacion = num1 * num2;
        System.out.println("La multiplicación de " + num1 + " * " + num2 + " es igual a: " + multiplicacion);
        
        // Asegurarse de que el segundo número no sea cero para evitar la división por cero
        if (num2 != 0) {
            double division = num1 / num2;
            System.out.println("La división de " + num1 + " / " + num2 + " es igual a: " + division);
        } else {
            System.out.println("No se puede realizar la división porque el segundo número es cero.");
        }
    }
}
