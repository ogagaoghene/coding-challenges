import java.util.*;
import java.io.*;

class readBook {

    public static List<String> getFileContent(String filename) {
        List<String> words = new ArrayList<String>();
        try {
            Scanner in = new Scanner(new File(filename));
            while (in.hasNext()) {
            words.add(in.next());
        }
        }
        catch(Exception e) {
            System.out.println(e.getMessage());
        }

        return words;
    }

    public static void main(String[] argv) {
        System.out.print("Your word? ");
        Scanner console = new Scanner(System.in);
        String word = console.nextLine();
        List<String> words = getFileContent("sample.txt");
        int index = words.indexOf(word);
        if (index >= 0) {
            System.out.println(word + " is word #" + index);
        } 
        else {
            System.out.println(word + " is not found.");
        }
    }
}