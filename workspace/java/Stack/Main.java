public class Main {
    public static void main(String[] argv) {
        String input = "Banana";
        StringReverser reverser = new StringReverser();
        String output = reverser.recursiveReversal(input);
        System.out.println(output);
    }
}