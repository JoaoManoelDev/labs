package ConditionalStructure;

import java.util.Scanner;

public class SwitchCase {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    String dayOfTheWeek;

    System.out.print("Enter the number of day of the week: ");
    int dayOfTheWeekNumber = sc.nextInt();

    switch (dayOfTheWeekNumber) {
      case 1:
        dayOfTheWeek = "Monday";
        break;
      case 2:
        dayOfTheWeek = "Tuesday";
        break;
      case 3:
        dayOfTheWeek = "Wednesday";
        break;
      case 4:
        dayOfTheWeek = "Thursday";
        break;
      case 5:
        dayOfTheWeek = "Friday";
        break;
      case 6:
        dayOfTheWeek = "Saturday";
        break;
      case 7:
        dayOfTheWeek = "Sunday";
        break;
      default:
        dayOfTheWeek = "Invalid value";
    }

    if (dayOfTheWeek.equals("Invalid value")) {
      System.out.println("Invalid day of the week.");
    } else {
      System.out.println("Day of week: " + dayOfTheWeek);
    }
  }
}
