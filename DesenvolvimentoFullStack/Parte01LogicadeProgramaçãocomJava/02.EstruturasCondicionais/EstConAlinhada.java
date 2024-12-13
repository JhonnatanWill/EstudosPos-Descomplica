public class EstConAlinhada {
    public static void main(String[] args) {
        int nota = 4;
    
        if (nota >= 5) {
            System.out.println("Aprovado!");
        } else if (nota >= 3 && nota < 5) {
            System.out.println("Recuperação!");
        } else {
            System.out.println("Reprovado!");
        }
    }
}
