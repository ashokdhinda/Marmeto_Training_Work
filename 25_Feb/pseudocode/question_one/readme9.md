# Write pseudocode for a program that simulates a simple banking system allowing users to deposit, withdraw, and check their account balance with appropriate error handling

Start

1. Initialize balance = 0
2. Loop indefinitely until user chooses to exit
3. While True DO
4. Display menu with options to deposit.1, withdraw.2, check balance.3, or exit.4
5. Input user choice
6. if choice == 1 then
7. Display "Enter deposit amount"
8. Input deposit amount
   if amount > 0 then
   balance = balance + amount
   Display "Deposit successful": blance
   else
   Display "Invalid deposit amount"
   else if choice ==2
   Display "Enter withdrawal amount"
   Input amount
   if amount > 0 and amount <= balance then
   balance = balance - amount
   Display "Withdrawal successful": balance
   else
   Display "Invalid withdrawal amount"
   else if choice == 3 then
   Display "Your current balance is: " + balance
   else if choice == 4 then
   Display "Thank you for using the banking system"
   Break
   else
   Display "Invalid choice"
   End
