import java.util.HashSet;
import java.util.Iterator;

public class HashSetAula {
    public static void main(String[] args) {
        HashSet<Integer> numeros = new HashSet<>();
        numeros.add(2);
        numeros.add(5);
        numeros.add(8);

        Iterator<Integer> it = numeros.iterator();
        while (it.hasNext()) {
            System.out.println(it.next());
        }
    }
}
// Aqui ele imprime os valores individuais, fora de um Array, sem os couchetes[].