public class MetodosMain {
    public static void main(String[] args) {
        MetodosCao cachorro = new MetodosCao();
        cachorro.setIdade(5);

        if (cachorro.VerificarIdade() == true) {
            System.out.println("Ele é idoso!");
        } else {
            System.out.println("Ele é novinho!");
        }
    }
}
