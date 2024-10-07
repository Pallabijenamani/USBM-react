// Question 1:
 let foodprice= 350;
 let drinkprice= 175;
 // calculate total bill
 let totalbill= foodprice + drinkprice;
 console.log("totalbill is:"+totalbill); //525
 let tip= totalbill * 0.10;
 console.log("tip is:"+tip);  //52.5
 //with tip
 let finalamount= totalbill+tip; //577.5
 console.log(`final amount including tip is: ${finalamount}`);


 //Question 2:
  let originalprice= 20000;
  let discount=500;
  let finalprice= originalprice - discount ;
  console.log(`the final price of the product is: ${finalprice}`); //19500

  //Question 3:
  let productprice = 500;
  let salestaxrate = 8;
  let salestax = (productprice * salestaxrate)/100;
  console.log("salestax is: "+ salestax);
  let totalprice = productprice +salestax ;
  console.log(`the total price after adding sales tax is:${totalprice}`); //540