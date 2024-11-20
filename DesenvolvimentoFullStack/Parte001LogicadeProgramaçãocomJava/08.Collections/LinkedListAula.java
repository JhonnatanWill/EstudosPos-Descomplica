import java.util.LinkedList;

//O nome do arquivo e da classe ficou LinkedListAula, por que ao tentar criar uma instancia da biblioteca, estava dando conflito com o mesmo nome na classe que criei.
public class LinkedListAula {
    public static void main(String[] args) {
        LinkedList<String> animais = new LinkedList<>();

        animais.add("Cachorro");
        animais.add("Cavalo");
        animais.add("Vaca");
        System.out.println("Linkedlist: " + animais);

        animais.add(1, "Gato");
        System.out.println("Linkedlist: " + animais);
    }
}
