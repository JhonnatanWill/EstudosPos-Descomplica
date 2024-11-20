public class SobrecargaMetodos {
    public static void main(String[] args) {
        Desenho d1 = new Desenho();
        d1.mostrar();
        d1.mostrar('#');
        d1.mostrar('$', 3);
    }
}

class Desenho {
    //Método sem parametro
    public void mostrar (){
        for (int i=0; i<10; i++){
            System.out.println("*");
        }
    }
    //Método com um parametro
    public void mostrar (char simb){
        for (int i=0; i<10; i++){
            System.out.println(simb);
        }
    }
    //Método com dois parametros
    public void mostrar (char simb, int n){
        for (int i=0; i<n; i++){
            System.out.println(simb);
        }
    }
}
