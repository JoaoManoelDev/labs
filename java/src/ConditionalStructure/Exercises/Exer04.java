package ConditionalStructure.Exercises;

import java.util.Scanner;

/*
  Read the start time and end time of a game. Then, calculate the duration of the game, knowing
  that it can start one day and end on another. With a minimum duration of 1 hour and of maximum
  of 24 hours.
 */

public class Exer04 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int duration;

    System.out.print("Enter the start time: ");
    int startTime = sc.nextInt();

    System.out.print("Enter the end time: ");
    int endTime = sc.nextInt();

    if (startTime < endTime) {
      duration = endTime - startTime;
    } else {
      duration = 24 - startTime + endTime;
    }

    System.out.println("The game lasted " + duration + " hour(s)");
  }
}
