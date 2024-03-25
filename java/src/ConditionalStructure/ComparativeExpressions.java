package ConditionalStructure;

import java.util.Scanner;

public class ComparativeExpressions {
  public static void main(String[] args) {

    Scanner sc = new Scanner(System.in);

    System.out.print("Enter the first number: ");
    int numberOne = sc.nextInt();

    System.out.print("Enter the second number: ");
    int numberTwo = sc.nextInt();

    if (numberOne == numberTwo) {
      System.out.println("The two numbers are equal.");
    }

    if (!(numberOne > numberTwo)) {
      System.out.println("The number two is greater.");
      return;
    }

    System.out.println("The number one is greater.");
  }
}