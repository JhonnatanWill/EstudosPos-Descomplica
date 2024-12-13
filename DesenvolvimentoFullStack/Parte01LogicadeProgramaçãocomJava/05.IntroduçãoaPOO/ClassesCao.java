public class ClassesCao {
    String nome;
    String cor;
    int idade;
    double peso;

    public ClassesCao(){
        cor = "Caramelo!";
    }

    public ClassesCao(String nome, int idade){
        this.nome = nome;
        this.idade = idade;
    }

    public void Anda(){
        System.out.println("Estou andando... " + cor);
    }

    public void DadosClassesCao(){
        System.out.println(nome + " " + idade);
    }
    
}
