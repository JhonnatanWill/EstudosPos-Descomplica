public class ClassesAbstradasMain {
    public static void main(String[] args) {
        ClassesAbstradasConta cp = new ClassesAbstradasPoupanca();
        cp.setSaldo(5000);
        cp.imprimeExtrato();
    }
}
