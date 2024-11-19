public class ExemploHerancaMain {
    public static void main(String[] args) {
        ExemploHerancaCachorro c = new ExemploHerancaCachorro();
        c.setNome("Bidu");

        ExemploHerancaGato g = new ExemploHerancaGato();
        g.setNome("Lola");

        c.mostrar();
        g.mostrar();
    }
}
