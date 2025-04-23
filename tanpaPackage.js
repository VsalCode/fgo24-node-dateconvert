import readline from "readline"

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// function convertTanggal(input){
//   const pisah = input.split("-")

//   // console.log(pisah);
  
//   if(pisah.length <= 1){
//     console.log("Format Tanggal Anda Salah");
//   }else{
//     const result = pisah.join("/")
//     console.log(result);
//   }
// }

// convertTanggal("10-04-2015")

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
    const pisah = input.split("-")
  // console.log(pisah);
  
  if(pisah.length <= 1){
    console.log("Format Tanggal Anda Salah");
  }else{
    const result = pisah.join("/")
    console.log(result);
  }   
  });
}

menuUtama()