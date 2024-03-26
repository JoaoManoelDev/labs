package ConditionalStructure.Exercises;

import java.util.Scanner;

// A program to read an integer, and then determine if this number is negative or not.

public class Exer01 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.print("Enter a number: ");
    int number = sc.nextInt();

    if (number > 0) {
      System.out.println("This number is positive.");
    } else if (number == 0) {
      System.out.println("0 is neutral number.");
    } else {
      System.out.println("This number is negative.");
    }
  }
}
