//required dependencies 
var mysql=require('mysql');
var inquirer= require('inquirer');
var table= require('cli-table');

//create connection 
var connectin= mysql.createConnection({
    host:'localhost',
    port:'';
    user:'root',
    password:"",
    database:"bamazon.DB"
})

//connect and run inventory function
connection.connect(function(err){
    if (err) throw err;
    console.log("Connected to Bamazon");
    getInventory();
  });

  //fdisplays inventory
var getInventory = function(){
    connection.query("SELECT * FROM products", function(err,res){
      if (err) throw err;
  
  //create a table to display the inventory via cli table
  var table = new Table(
    {
      head: ["Product ID", "Product Name", "Department Name", "Price", "Stock Quanitity"],
      colWidths: [20,50,20,15,25],
    });
    //loop inventory and push to table
    for (var i = 0; i < res.length; i++) {
      table.push(
        [res[i].item_id, res[i].product_Name, res[i].department_Name, res[i].price, res[i].stock_quantity]
      );
    }
  
    console.log(table.toString());
    purchaseProduct();
    })
  };
 //function to puchase 
 var purchaseProduct = function(){
   inquirer.prompt([
     { 
       type:"number",
       message: "Please enter product ID of item you would like to purchase",
       name: " Product ID"
     },
     {
       type:"number",
       message:"How many would you like to purchase?",
       name:"stock quantity"
     },
    ])
    .then(function(purchase){

      var id= purchase.id;
      var quantity= purchase.quantity 
    })

 }
