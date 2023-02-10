import java.util.HashMap;

public class firstRepeatingChar {
  public static void main(String[] args) {
    String string = "responsible";
    System.out.println(findFirstRepeatingCharacter(string));
  }

  static char findFirstRepeatingCharacter(String string) {
    for(int outerIndex = 0; outerIndex < string.length(); outerIndex++) {
      for(int innerIndex = 0; innerIndex < outerIndex; innerIndex++) {
        if(string.charAt(outerIndex) == string.charAt(innerIndex)) {
          return string.charAt(outerIndex);
        }
      } 
    }
    return '\0';
  }
}

