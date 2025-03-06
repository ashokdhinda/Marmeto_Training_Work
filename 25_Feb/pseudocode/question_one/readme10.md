10. Write pseudocode for a shopping cart program that allows users to:
    1. Add items to their cart, specifying the item name, price, and quantity.
    2. Update the quantity of existing items in their cart.
    3. Remove items from their cart.
    4. View the total price of all items in their cart.
    5. Checkout and clear their cart.
       START
1. Initialize value: empty shopping cart
1. Display menu: "1. Add Item 2. Update Item 3. Remove Item 4. View Total 5. Checkout 6. Exit"
1. Input choice: user choice
1. if choice ==1 then
   input item name, price, quantity
   add item to cart
1. elseif choice == 2 then
   input item name
   if item exists in cart then
   input new quantity
   update item quantity in cart
   else
   Display "item not found"

1. else if choice == 3 then
   input item name
   remove item from cart

1. else if choice == 4 then
   calculate and display total price of all items in cart

1. else if choice == 5 then
   Display "checkout Complete"
   clear cart

1. else if choice == 6 then
   Display "goodbye"
   braek

1. else
   Display "Invalid Choice"

   End
