public class InterfacePoupanca implements InterfaceConta {
    private double saldo;

    public void depositar(double valor){
        this.saldo += valor;
    }
    public double getSaldo(){
        return this.saldo;
    }
    public void sacar(double valor){
        this.saldo -= valor;
    }
}
