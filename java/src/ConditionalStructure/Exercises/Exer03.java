package ConditionalStructure.Exercises;

import java.util.Scanner;

/*
  Read two integer values (A e B). Then, the program should display a message: "Are multiples" or
  "Are not multiples", indicating whether the values read are multiples of each other.
 */

public class Exer03 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.print("Enter the first number: ");
    int numberOne = sc.nextInt();

    System.out.print("Enter the second number: ");
    int numberTwo = sc.nextInt();

    if (numberOne % numberTwo == 0 || numberTwo % numberOne == 0) {
      System.out.println("Are multiples.");
    } else {
      System.out.println("Are not multiples.");
    }
  }
}
