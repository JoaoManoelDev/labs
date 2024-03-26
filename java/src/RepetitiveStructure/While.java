package RepetitiveStructure;

import java.util.Scanner;

public class While {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int sum = 0;

    System.out.print("Enter the number: ");
    int number = sc.nextInt();

    while (number != 0) {
      sum += number;
      System.out.print("Enter other number: ");
      number = sc.nextInt();
    }

    System.out.println("Sum of the numbers: " + sum);
  }
}
