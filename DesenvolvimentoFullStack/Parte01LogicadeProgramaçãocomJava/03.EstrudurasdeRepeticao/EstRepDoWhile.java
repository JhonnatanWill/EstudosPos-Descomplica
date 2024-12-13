import java.util.Scanner;

public class EstRepDoWhile {
    @SuppressWarnings("resource")
    public static void main(String[] args) {
        int opcao;

        do {
            System.out.println("Digite um valor qualquer ou 99 para sair!");
            Scanner entrada = new Scanner(System.in);
            opcao = entrada.nextInt(); 
        } while (opcao != 99);
    }
}
