import java.util.*;

public class swap {

    static int[] swapValues(int[] arr, int first, int second) {
        int temp = arr[first];
        arr[first] = arr[second];
        arr[second] = temp;

        return arr;
    }

    public static void main(String[] arg) {
        int[] arr = {456,2};

        int[] result = swapValues(arr,0,1);
        System.out.println(Arrays.toString(result));
    }
}