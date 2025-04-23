import readline from "readline/promises";
import moment from "moment";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/* --------------------------------------------- 
DENGAN PACKAGE
--------------------------------------------- */

const firstMenu =  () => {
  console.clear();
  console.log(`
    ========================================
    |   # Program konversi ke DD/MM/YYY #  |
    |--------------------------------------|
    |        format harus DD-MM-YYY        |
    ========================================
  `);
  rl.question("masukkan angka: ", function(input) {
    if(moment(input, "DD-MM-YYYY").isValid()){
      const result = moment(input, "DD-MM-YYYY").format("DD/MM/YYYY");
      console.log(result);
    }else if(moment(input, "DD-MM-YYYY").isValid()){
      const error = new Error("invalid_format");
      throw error;
    }
    else{
      const error = new Error("invalid_input");
      throw error;
    }
  });
};

try {
  firstMenu();
} catch (error) {
  if(error.message === "invalid_input"){
    console.log("Input tidak Valid !");
  }
}


/* --------------------------------------------- 
TANPA PACKAGE
--------------------------------------------- */

// function firstMenuWithoutPackage() {
//   console.log(`
//     ========================================
//     |   # Program konversi ke DD/MM/YYY #  |
//     |--------------------------------------|
//     |        format harus DD-MM-YYY        |
//     ========================================
//   `);
//   rl.question("masukkan angka: ", function (input) {
//     const pisah = input.split("-");
//     // console.log(pisah);
  
//     if(pisah.length <= 1){
//       console.log("Format Tanggal Anda Salah");
//     }else{
//       const result = pisah.join("/");
//       console.log(result);
//     }   
//   });
// }

// firstMenuWithoutPackage();