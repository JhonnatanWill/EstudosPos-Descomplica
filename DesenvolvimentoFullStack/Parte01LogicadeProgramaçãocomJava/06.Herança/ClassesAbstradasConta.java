public abstract class ClassesAbstradasConta {
    private double saldo;

    public void setSaldo(double saldo){
        this.saldo = saldo;
    }
    public double getSaldo(){
        return saldo;
    }
    public abstract void imprimeExtrato();
}
