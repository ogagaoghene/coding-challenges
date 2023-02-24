public class Swap {
  static void swap(int left, int right) {
    int temp = left;
    left = right;
    right = temp;
    System.out.printf("%d, %d\n", left, right);
  }

  static void swapArray(int[] list) {
    if(list != null && list.length == 2) {
      int temp = list[0];
      list[0] = list[1];
      list[1] = temp;
    }
  }

  public static void main(String[] arg) {
    swap(2,3);
    int[] sample = {10,20};
    swapArray(sample);
    System.out.printf("%d %d\n", sample[0], sample[1]);
  }
}