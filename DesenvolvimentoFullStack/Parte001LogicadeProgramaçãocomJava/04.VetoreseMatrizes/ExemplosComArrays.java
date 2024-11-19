import java.util.ArrayList;

public class ExemplosComArrays {
    public static void main(String[] args) {
        ArrayList<String> bandas = new ArrayList<>();

        bandas.add("Kiss");
        bandas.add("Beatles");
        bandas.add("Iron Maiden");

        System.out.println(bandas);

        bandas.add(bandas.indexOf("Kiss"), "Capital Inicial");

        System.out.println(bandas);

        bandas.remove("Kiss");

        System.out.println(bandas);

        bandas.clear( );

        System.out.println(bandas);
    }
}
