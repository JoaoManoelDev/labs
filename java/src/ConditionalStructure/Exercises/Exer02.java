package ConditionalStructure.Exercises;

import java.util.Scanner;

// A program to read an integer, and then determine if this number is even or odd.

public class Exer02 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.print("Enter a number: ");
    int number = sc.nextInt();

    if (number % 2 == 0) {
      System.out.println("This number is even.");
    } else {
      System.out.println("This number is odd.");
    }
  }
}
