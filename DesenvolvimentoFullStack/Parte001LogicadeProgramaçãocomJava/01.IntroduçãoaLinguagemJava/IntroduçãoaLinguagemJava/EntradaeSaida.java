import java.util.Scanner;

public class EntradaeSaida {
    @SuppressWarnings("resource")
    public static void main(String[] args) {
        System.out.println("Olá Mundo");
        System.out.println("Informe seu nome...");

        String palavra;
        Scanner entrada = new Scanner(System.in);
        palavra = entrada.next();

        System.out.println("Nome: " + palavra);
    }
}
