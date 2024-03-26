package ConditionalStructure.Exercises;

/*
  With the information provided in the table below, create a program that reads the item code
  and its quantity. Afterward, calculate and display the total amount to be paid.

  Code    specification    Price
   1        Hot-Dog        $4.00
   2        X-Salad        $4.50
   3        X-Bacon        $5.00
   4        Toast          $2.00
   5        Soda           $1.50
 */

import java.util.Scanner;

public class Exer05 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    double totalPrice;

    System.out.print("Enter the code: ");
    int code = sc.nextInt();

    System.out.print("Enter the quantity: ");
    int quantity = sc.nextInt();

    if (code == 1) {
      totalPrice = 4.00 * quantity;
    } else if (code == 2) {
      totalPrice = 4.50 * quantity;
    } else if (code == 3) {
      totalPrice = 5.00 * quantity;
    } else if (code == 4) {
      totalPrice = 2.00 * quantity;
    } else if (code == 5) {
      totalPrice = 1.50 * quantity;
    } else {
      System.out.println("Invalid code.");
      return;
    }

    System.out.printf("Total price: $%.2f.%n", totalPrice);
  }
}
