var five = require("johnny-five"),
  keypress = require("keypress"),
  board, dedos;
 
 keypress(process.stdin);
 
board = new five.Board();
 
board.on("ready", function() {
 
  console.log("Utilice los cursores del teclado para realizar los movimientos en la mano");
 
  //Creacion de los pines de salida para los servos
  five.Servo({pin: 5,range: [0, 140],type: "continuous" }); //Dedo Indice
  five.Servo({pin: 6,range: [0, 140],type: "continuous" }); //Dedo Medio
  five.Servo({pin: 9,range: [0, 140],type: "continuous" }); //Dedo Anular
  five.Servo({pin: 10,range: [0, 140],type: "continuous" }); //Dedo Meñique
  //five.Servo({pin: 11,range: [0, 160] }); //Dedo Pulgar
  
  // Inicializacion de los servos
 
  dedos = new five.Servos();
  
process.stdin.resume();
  process.stdin.setEncoding("utf8");
  process.stdin.setRawMode(true);
 
  process.stdin.on("keypress", function(ch, key) {
 
    if (!key) {
      return;
    }
 
    if (key.name === "e") {
 
      console.log("salida");
      process.exit();
 
    } else if (key.name === "up") {
 
      console.log("Arriba");
      dedos.cw();
 
    } else if (key.name === "down") {
 
      console.log("Abajo");
      dedos.ccw();
 
    } else if (key.name === "space") {
 
      console.log("Detenerse");
      dedos.stop();
 
    }
 
  });
 
});
