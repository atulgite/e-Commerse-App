var sql = require("./mysqlconnect");


// -------------+------------+-----------+------------+------------+-------------------------------+-------------------+----------+
// | customer_id | first_name | last_name | birth_date | phone      | address                       | emailid           | password
console.log("in customer dal")
var Customer = function (Customer) {
  this.first_name = Customer.first_name;
  this.last_name = Customer.last_name;
  this.birth_date = Customer.birth_date;
  this.address = Customer.address;
  this.phone = Customer.phone;
  this.emailid = Customer.emailid;
  this.password = Customer.password
};

// let first_name=newCustomer.first_name;

Customer.createCustomer = function (newCustomer, result) {
  console.log("New Customer to be added ");
  // let first_name=newCustomer.first_name;
  // let last_name=newCustomer.last_name;
  // let birth_date=newCustomer.birth_date;
  // let phone=newCustomer.phone;
  // let address=newCustomer.address;
  // let email=newCustomer.email;
  // let password=newCustomer.password;

  console.log(newCustomer);
  new_Customer=[newCustomer.first_name,newCustomer.last_name,newCustomer.birth_date,newCustomer.phone,newCustomer.address,newCustomer.emailid,newCustomer.password]
  sql.query("INSERT INTO customers(first_name,last_name,birth_date,phone,address,emailid,password) values(?, ?, ?, ?, ?, ?, ?)", new_Customer, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

Customer.getCustomerById = function (CustomerId, result) {
  sql.query("SELECT first_name,last_name,birth_date,phone,address,emailid FROM customers WHERE customer_id = ? ",CustomerId,function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

Customer.getAllCustomer = function (result) {
  console.log("Invoking dal getall Customers");

  sql.query("SELECT first_name,last_name,birth_date,phone,address,emailid FROM customers", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("Customers : ", res);
      result(null, res);
    }
  });
};

Customer.updateById = function (id, newCustomer, result) {
  let first_name=newCustomer.first_name;
  let last_name=newCustomer.last_name;
  let birth_date=newCustomer.birth_date;
  let phone=newCustomer.phone;
  let address=newCustomer.address;
  let email=newCustomer.email;
  let password=newCustomer.password;

  new_Customer=[first_name,last_name,birth_date,phone,address,email,password]
  sql.query(
    "UPDATE customers SET first_name = ?,last_name = ?, birth_date = ?,phone = ?,  address = ?, emailid = ?, password = ?  WHERE customer_id = ?",
    new_Customer,
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

Customer.remove = function (id, result) {
  sql.query(
    "DELETE FROM customers WHERE customer_id = ?",
    id,
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

module.exports = Customer;
