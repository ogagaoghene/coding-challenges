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

    public static void insertionSort(int[] arr) {
        for (int idx = 1; idx < arr.length; idx++) {
            if (arr[idx] < arr[idx-1]) {
                int toInsert = arr[idx];

                int j = idx;
                do {
                    arr[j] = arr[j-1];
                    j = j - 1;
                } while( j > 0 && toInsert < arr[j-1]);     
                arr[j] = toInsert;
            }
        }

    }

    public static void main(String[] argv) {
        int[] list = new int[]{10,2,1,4,12,3,5};
        Sort.insertionSort(list);
        for(int item : list) {
            System.out.print(item + " ");
        }


    }
}