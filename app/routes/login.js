var data = require("../data.json");
/*
 * GET login page.
 */

exports.login = function(req, res){
  
  /*capture name and password entered*/
  var usr = req.query.username;
  var pword = req.query.password;
  console.log(usr);
  console.log(pword);

  /*check userid & password*/
      /*checks whether the entered userid and password are matching*/
     if( usr == "Sam" && pword == "password") {
          /*create new var to push to data.json*/
          var newUser = {
            "name": usr,
            "password": pword,
          }
          data.users.push(newUser);
          /*direct user to home page*/
          res.render('index', data);
      }
      else {
          res.render('login');
      }

};
