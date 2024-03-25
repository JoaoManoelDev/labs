package ConditionalStructure;

import java.time.LocalTime;

public class IfElse {
  public static void main (String[] args) {
    LocalTime actualTime = LocalTime.now();
    int hour = actualTime.getHour();

    if (hour < 12) {
      System.out.println("Good morning.");
    } else if (hour < 18) {
      System.out.println("Good afternoon.");
    } else {
      System.out.println("Good evening.");
    }
  }
}
