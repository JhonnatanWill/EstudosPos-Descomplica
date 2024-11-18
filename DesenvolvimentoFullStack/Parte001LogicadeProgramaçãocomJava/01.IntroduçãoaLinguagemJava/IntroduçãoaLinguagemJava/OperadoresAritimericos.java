import java.util.Scanner;

public class OperadoresAritimericos {
    @SuppressWarnings("resource")
    public static void main(String[] args) {
        double numA, numB, total;

        numA = 8;
        numB = 3;

        total = numA + numB;
        System.out.println(total);

        total = numA * numB;
        System.out.println(total);

        total = numA % 2;
        System.out.println(total);

        total = numA / numB;
        System.out.println(total);

        total = numA - numB;
        System.out.println(total);
    }
}
