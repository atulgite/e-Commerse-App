var mysql=require('mysql');

var dbServer={
    host:'localhost',
    user:'root',
    password:'',
    database:"mystore"
};


var connection=mysql.createConnection(dbServer);
connection.connect(function(err){
    if(err) throw err;
});

var show=function(){
    var selectQuery='select * from customers';
    connection.query(selectQuery,function(err,data){
        if(err){
            console.log(err);
        }
        else 
        {
            console.log(data);
        };
    })
}

// show()

var createTable=function(){
    var createTabQuery='create table flowers()'
}

module.exports=connection;

//every time reading data from file 
    //initializing users array after reading data
    //sending users as response to any calling client application
    // var filename = "./data/users.json";
    // var onFileRead = function (err, data) {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log("Data from File available");
    //     // var strUsers = data.toString();
    //     // users = JSON.parse(strUsers);
    //     response.send(data);
    // };
    // fs.readFile(filename, onFileRead);
