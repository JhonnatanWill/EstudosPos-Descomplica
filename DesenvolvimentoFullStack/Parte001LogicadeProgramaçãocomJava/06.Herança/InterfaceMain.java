public class InterfaceMain {
    public static void main(String[] args) {
        InterfaceConta cp = new InterfacePoupanca();
        cp.depositar(732);
        cp.sacar(8);
        cp.getSaldo();
    }
}
