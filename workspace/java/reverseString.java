public class reverseString {

    static String reverse(final String input) {
        if(input.length() <= 1) {
            return input;
        }

        final char firstChar   = input.charAt(0);
        final String remaining = input.substring(1);

        return reverse(remaining) + firstChar;
    }

    static String reverse2(final String input) {
        return input.length() <= 1 ? input : 
            reverse2(input.substring(1)) + input.charAt(0);
    }

    public static void main(String[] arg) {
        String str1 = "Hello";
        String str2 = "Plantain";

        String output1 = reverseString.reverse(str1);
        String output2 = reverseString.reverse2(str2);

        System.out.println(output1);
        System.out.println(output2);
    }
}