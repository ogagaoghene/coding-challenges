import java.util.Arrays;

public class twoSum2 {

    public static int[] twoSum(int[] numbers, int target) {
        if (numbers == null || numbers.length == 0)
            return null;

        int first = 0;
        int last  = numbers.length - 1;

        while (first < last) {
            int sum = numbers[first] + numbers[last];
            if (sum < target) {
                first++;
            } else if (sum > target) {
                last--;
            } else {
                return new int[] { first + 1, last + 1 };
            }
        }
        return null;
    }

    public static void main(String[] arg) {
        int[] arr = {2, 7, 11, 15};
        int target = 9;

        System.out.println(Arrays.toString(twoSum(arr, target)));
    }
}