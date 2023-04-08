public class countSubstrings {
    static int count(final String input, final String valueToFind) {
        // base case or recursive termination
        if (input.length() < valueToFind.length()) {
            return 0;
        }

        int count;
        String remaining;

        if (input.startsWith(valueToFind)) {
            remaining = input.substring(valueToFind.length());
            count     = 1;
        }
        else {
            remaining = input.substring(1);
            count = 0;
        }

        // recursive case or recursive descent
        return countSubstrings.count(remaining, valueToFind) + count;
    }

    public static void main(String[] argv) {
        String input       = "hahahahaha";
        String valueToFind = "ha";
        int output         = countSubstrings.count(input, valueToFind);

        System.out.println(output);
    }
}