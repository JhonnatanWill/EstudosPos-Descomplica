import java.util.ArrayList;

public class ListseArrayList {
    public static void main(String[] args) {
        ArrayList<String> estados = new ArrayList<>();

        estados.add("Espirito Santo");
        estados.add("Ceará");
        estados.add("Rio de Janeiro");
        estados.add("Pernambuco");

        estados.remove("Ceará");

        estados.contains("Amazonas");
    }
}
