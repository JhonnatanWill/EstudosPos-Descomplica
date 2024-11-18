import java.util.Scanner;
import java.util.Random;

public class ExemplosPraticos {
    @SuppressWarnings("resource")
    public static void main(String[] args) {
        Random gerador = new Random();
        int X = gerador.nextInt(10);

        Scanner entrada = new Scanner(System.in);
        System.out.println("Adivinhe o número que estou pensando!");
        int numero = entrada.nextInt();

        if (numero == X) {
            System.out.println("Parabéns, você acertou, eu pensei no " + X);
        } else {
            System.out.println("Você errou, eu pensei no " + X + "!");
        }
    }
}
