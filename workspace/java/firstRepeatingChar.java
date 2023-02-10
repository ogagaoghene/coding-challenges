import java.util.HashMap;

public class firstRepeatingChar {
  public static void main(String[] args) {
    String string = "responsible";
    System.out.println(findFirstRepeatingCharacter(string));
    System.out.println(findFirstRepeatingCharacter2(string));
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

  static char findFirstRepeatingCharacter2(String string){
    HashMap<Character,Boolean> visited = new HashMap<Character, Boolean>();
    char[] characters = string.toCharArray(); // Converts the string to a character array
    for(char character : characters){
      if(visited.containsKey(character)) return character;
      else visited.put(character, true);
    }
    return '\0';
  }
}

