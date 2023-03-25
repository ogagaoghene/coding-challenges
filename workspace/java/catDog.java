/** 
  Problem 
  The function catDog takes a string str as its input and returns true
  if the substring "cat" appears in it as often as the substring "dog".
  Otherwise, it returns false. 
 */
public class catDog {

  public static boolean catOrDog(String str) {
    int cats = 0;
    int dogs = 0;

    for(int idx = 0; idx < str.length()-2; idx++) {
      String temp = str.substring(idx, idx+3);
      if (temp.equals("cats")) cats += 1;
      if (temp.equals("dogs")) dogs += 1;
    }
    return cats == dogs; // returns the boolean value of true
  }
  public static void main(String[] args) {
    String inputString = "The cat attacked the dog";
    System.out.println(catDog.catOrDog(inputString));
  }
}
