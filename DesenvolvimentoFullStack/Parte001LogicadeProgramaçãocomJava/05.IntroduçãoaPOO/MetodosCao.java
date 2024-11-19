public class MetodosCao {
    private int idade;
    double peso;

    public void setIdade(int i){
        idade = i;
    }

    public int getIdade(){
        return idade;
    }

    public void Anda(){
        System.out.println("Estou andando... ");
    }

    public boolean VerificarIdade(){
        if (idade > 10){
            return true;
        } else {
            return false;
        }
    }
    
}
