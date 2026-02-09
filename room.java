

import java.util.*;
class Room {


          public static boolean isDuplicate(int[] nums) {
                    HashSet<Integer> set = new HashSet<>();
                    for (int num : nums) {
                              if (set.contains(num)) {
                                        return true;
                              } else {
                                        set.add(num);
                              }
                    }
                    return false;
                    
                    
            
          }
          public static void main(String[] args) {
                    int[] nums = {1,2,2,3};
                  

          }
}