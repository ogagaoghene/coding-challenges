public class Swap {
  static void swap(int left, int right) {
    int temp = left;
    left = right;
    right = temp;
    System.out.printf("%d, %d", left, right);
  }
  public static void main(String[] arg) {
    swap(2,3);
  }
}