import java.util.TreeSet;

public class TreeSetAula {
    public static void main(String[] args) {
        TreeSet<Integer> numeros = new TreeSet<>();
        numeros.add(8);
        numeros.add(6);
        numeros.add(9);
        numeros.add(1);
        System.out.println("TreeSet: " + numeros);

        boolean result = numeros.remove(6);
        System.out.println("Removeu? " + result);

        System.out.println("TreeSet: " + numeros);
    }
}
