

function add(a, b) {
          return a + b;
}

console.log(add(2, 3))
console.log(add(2, 3))


//theory points for interview explanation
//Pure function is a function that does not have side effects and always returns the same result for the same input.
//In the example below, the `add` function is a pure function because it does not have side effects and always returns the same result for the same input.
//Pure functions are a key concept in functional programming and are generally preferred over impure functions.







public class SubsetSumEqualK {
          public static boolean subsetSumToK(int n, int target, int arr[]) {
                    return solve(n - 1, target, arr); // Start from last index
          }

          private static boolean solve(int index, int target, int[] arr) {

                    // Target becomes 0 ? subset found
                    if (target == 0)
                              return true;

                    // Base case: only the 0th element left
                    if (index == 0)
                              return arr[0] == target;

                    // Not pick the current element
                    boolean notPick = solve(index - 1, target, arr);

                    // Pick the current element
                    boolean pick = false;
                    if (arr[index] <= target)
                              pick = solve(index - 1, target - arr[index], arr);

                    return pick || notPick;
          }
}




          //Memoization  - T.C - O(N * target)  S.C - O( N * target) + O(N)


          class XYZ {
public static boolean subsetSumToK(int n, int target, int arr[]) {

          // dp[index][target] ? store -1(not computed), 0(false), 1(true)
          int[][] dp = new int[n][target + 1];
          for (int[] row : dp)
                    Arrays.fill(row, -1);

          return solve(n - 1, target, arr, dp);
}




private static boolean solve(int index, int target, int[] arr, int[][] dp) {

        // Base case 1: target achieved
        if (target == 0) return true;

        // Base case 2: only index 0 left
        if (index == 0) return arr[0] == target;

        // Memoized answer exists?
        if (dp[index][target] != -1) {
            return dp[index][target] == 1;
        }

        // Not pick element
        boolean notPick = solve(index - 1, target, arr, dp);

        // Pick element (only if arr[index] <= target)
        boolean pick = false;
        if (arr[index] <= target) {
            pick = solve(index - 1, target - arr[index], arr, dp);
        }

        // Store in dp: true ? 1, false ? 0
        dp[index][target] = (pick || notPick) ? 1 : 0;

         return pick || notPick;
    }

}


//Tabulation - reduces recursion stck space

// import java.util.*;

// public class Solution {

//     public static boolean subsetSumToK(int n, int target, int arr[]) {

//         // dp[i][t] = whether using first i elements we can form sum t
//         boolean[][] dp = new boolean[n][target + 1];

//         // Base case: target = 0 → always true
//         for (int i = 0; i < n; i++) {
//             dp[i][0] = true;
//         }

//         // Base case: only arr[0] can make sum arr[0]
//         if (arr[0] <= target)
//             dp[0][arr[0]] = true;

//         // Fill dp table
//         for (int index = 1; index < n; index++) {
//             for (int t = 1; t <= target; t++) {

//                 boolean notPick = dp[index - 1][t];

//                 boolean pick = false;
//                 if (arr[index] <= t) {
//                     pick = dp[index - 1][t - arr[index]];
//                 }

//                 dp[index][t] = pick || notPick;
//             }
//         }

//         return dp[n - 1][target];
//     }
// }
