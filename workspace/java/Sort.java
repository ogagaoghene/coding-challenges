public class Sort {
    public static int indexSmallest(int[] arr, int lower, int upper) {
        int indexMin = lower;
        for(int idx = lower+1; idx <= upper; idx++) {
            if (arr[idx] < arr[indexMin]) {
                indexMin = idx;
            }
        }
        return indexMin;
    }

    public static void swap(int[] arr, int num1, int num2) {
        int temp = arr[num1];
        arr[num1] = arr[num2];
        arr[num2] = temp;
    }

    public static void selectionSort(int[] arr) {
        for(int idx = 0; idx < arr.length-1; idx++) {
            int j = indexSmallest(arr, idx, arr.length-1);
            swap(arr, idx, j);
        }
    }

    public static void main(String[] argv) {
        int[] list = new int[]{10,2,1,4,12,3};
        System.out.println("Before Selection Sort"); 
        for (int item : list) {
            System.out.print(item + " ");
        }
        System.out.println();
        Sort.selectionSort(list);
        System.out.println("After Selection Sort");
        for(int item : list) {
            System.out.print(item + " ");
        }
    }
}