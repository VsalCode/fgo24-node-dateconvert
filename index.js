import readline from "readline";
import moment from "moment";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// MENU UTAMA

function menuUtama() {
  console.log(`
    ========================================
    |   # Program konversi ke DD/MM/YYY #  |
    |--------------------------------------|
    |        format harus DD-MM-YYY        |
    ========================================
  `);
  rl.question("masukkan angka: ", function (input) {
    if(moment(input, "DD-MM-YYYY").isValid()){
      const result = moment(input, "DD-MM-YYYY").format("DD/MM/YYYY");
      console.log(result);
    }else{
      console.log("Format Tanggal Salah");
    }   
  });
}

menuUtama();

// TANPA PACKAGE

function menuUtamaWithoutPackage() {
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
  
    if(pisah.length <= 1){
      console.log("Format Tanggal Anda Salah");
    }else{
      const result = pisah.join("/");
      console.log(result);
    }   
  });
}


menuUtamaWithoutPackage();