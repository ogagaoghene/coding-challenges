import java.util.HashMap;
import java.util.Arrays;

public class twoSum {

    public static int[] TwoSum(int[] numbers, int target) {
        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
        int[] result = new int[2];

        for (int idx = 0; idx < numbers.length; idx++) {
            if (map.containsKey(numbers[idx])) {
                int index = map.get(numbers[idx]);
                result[0] = index;
                result[1] = idx;
                break;
            } else {
                map.put(target - numbers[idx], idx);
            }
        }
        return result;
    }

    public static void main(String[] argv) {
        int[] arr = {2, 7, 11, 15};
        int target = 9;

        System.out.println(Arrays.toString(TwoSum(arr, target)));
    }
}