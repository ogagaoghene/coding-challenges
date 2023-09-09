public class linearSearch {
    public static int linearSearchNum(int[] list, int target) {
        for (int i = 0; i < list.length; i++) {
            if (list[i] == target) {
                return i;
            }
        }
        return -1;

    }
    public static void main(String[] arg) {
        int[] arr = {1,2,3,4,5};
        int target = 5;
        System.out.println("Target " + target + " is found at index: " + linearSearchNum(arr, target));  
    }
}