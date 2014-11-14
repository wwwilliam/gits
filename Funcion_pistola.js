var five = require("johnny-five");
 
five.Board().on("ready", function() {
  console.log("Funcion Pistola");
 
  // Initialize the servo
  var servo1 = new five.Servo({id:"uno", pin: 10,});
  var servo2 = new five.Servo({id:"dos", pin: 9,});
  var servo3 = new five.Servo({id:"dos", pin: 6,});
  var servo4 = new five.Servo({id:"dos", pin: 5,});
 
  this.repl.inject({
    servo1: servo1
  
  });
 
  servo1.to(0);
  servo2.to(0);
  servo3.to(0);
  servo4.to(90);
});
