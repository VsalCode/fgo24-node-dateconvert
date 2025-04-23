import readline from "readline/promises";
import moment from "moment";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/* --------------------------------------------- 
DENGAN PACKAGE
--------------------------------------------- */

const firstMenu = async () => {
  console.clear();
  console.log(`
    ========================================
    |   # Program konversi ke DD/MM/YYY #  |
    |--------------------------------------|
    |        format harus DD-MM-YYY        |
    ========================================
  `);
    try{
    const question = await rl.question("masukkan angka: ")

    
    if(moment(question, "DD-MM-YYYY").isValid()){
      const result = moment(question, "DD-MM-YYYY").format("DD/MM/YYYY");
      console.log(result);
    }else if(!moment(question, "DD-MM-YYYY").isValid()){
      const error = new Error("wrong_format")
      throw error
    }else{
      const error = new Error("not_valid")
      throw error
    }

  }catch(err){
    if(err.message === "wrong_format"){
      console.log("tanggal yang dimasukkan salah format");
    }
    if(err.message === "not_valid"){
      console.log("input tidak valid");
    }
  }
};


firstMenu();

/* --------------------------------------------- 
TANPA PACKAGE
--------------------------------------------- */

function firstMenuWithoutPackage() {
  console.log(`
    ========================================
    |   # Program konversi ke DD/MM/YYY #  |
    |--------------------------------------|
    |        format harus DD-MM-YYY        |
    ========================================
  `);
  rl.question("masukkan angka: ", function (input) {
    const pisah = input.split("-"); 
    // console.log(pisah);
  
    if(pisah.length <= 1 || typeof pisah.length !== "number" ){
      console.log("Format Tanggal Anda Salah");
    }else{
      const result = pisah.join("/");
      console.log(result);
    }   
  });
}

firstMenuWithoutPackage();
