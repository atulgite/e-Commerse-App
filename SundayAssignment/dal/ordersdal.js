var sql = require("./mysqlconnect");

// order_id | cust_id | product_id | quantity | total_price

var Order = function (Order) {
  this.customer_id = Order.cust_id;
  this.product_id = Order.product_id;
  this.order_date = Order.order_date;
  this.quantity = Order.quantity;
  this.total_price = Order.total_price;
 
};
Order.createOrder = function (newOrder, result) {
  console.log("New Order to be added ");
  var new_order=[newOrder.cust_id, newOrder.product_id, newOrder.order_date, newOrder.quantity, newOrder.total_price]
  console.log(new_order);
  sql.query("INSERT INTO orders(cust_id,product_id,order_date,quantity,total_price) values(?,?,?,?,?)", new_order, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

Order.getOrderById = function (OrderId, result) {
  sql.query(
    "Select * from Orders where order_id = ? ",
    OrderId,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

Order.getAllOrder = function (result) {
  console.log("Invoking dal getall Orders");

  sql.query("Select * from Orders", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("Orders : ", res);
      result(null, res);
    }
  });
};

Order.updateById = function (id, Order, result) {
  sql.query(
    "UPDATE customers SET customer_id = ?, product_id = ?, order_date = ?, quantity = ?  , total_price = ?  WHERE order_id = ?",
    [Order.customer_id,
      Order.product_id,
      Order.order_date,
      Order.quantity,
      Order.total_price,
      id
    ],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

Order.remove = function (id, result) {
  sql.query("DELETE FROM orders WHERE order_id = ?", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Order;
