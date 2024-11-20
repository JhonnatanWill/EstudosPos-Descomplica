public class MetodotoString {
    public static void main(String[] args) {
        String primeira = "Java";
        String segunda = "CSharp";
        String terceira = new String("Python");

        System.out.println(primeira);
        System.out.println(segunda);
        System.out.println(terceira);

        System.out.println(primeira.toUpperCase());
        System.out.println(segunda.length());
        System.out.println(terceira);

        //Comparar a primeira com a segunda String
        boolean result = primeira.equals(segunda);
        System.out.println("Primeira é igual a segunda? " + result);

        //Comparar a segunda com a terceira String
        result = segunda.equals(terceira);
        System.out.println("Segunda é igual a terceira? " + result);
    }
}
