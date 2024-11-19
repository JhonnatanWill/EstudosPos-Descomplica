import java.util.Scanner;

public class TratExcMain {
    @SuppressWarnings("resource")
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        try{
            System.out.println("Digite um valor: ");
            int numero1 = s.nextInt();

            System.out.println(numero1);
        } catch (Exception ex){
            System.out.println("Erro - Valor digitado não é um número!");
        }
    }
}
