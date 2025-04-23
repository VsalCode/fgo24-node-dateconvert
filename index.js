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
  try {
    const question = await rl.question("masukkan angka: ");

    if (moment(question, "DD-MM-YYYY", true).isValid()) {
      const result = moment(question, "DD-MM-YYYY").format("DD/MM/YYYY");
      console.log(result);
    } else {
      const error = new Error("wrong_format");
      throw error;
    }
  } catch (err) {
    if (err.message === "wrong_format") {
      console.log("tanggal yang dimasukkan salah format");
    } else {
      console.log("input tidak valid");
    }
  } 
  rl.close();
};


firstMenu();

/* --------------------------------------------- 
TANPA PACKAGE
--------------------------------------------- */

const firstMenuWithoutPackage = async () => {
  console.log(`
    ========================================
    |   # Program konversi ke DD/MM/YYY #  |
    |--------------------------------------|
    |        format harus DD-MM-YYY        |
    ========================================
  `);
  try {
    const input = await rl.question("masukkan angka: ");

    const pisah = input.split("-");
    if (pisah.length !== 3) {
      throw new Error("not_valid");
    }

    const [tanggal, bulan, tahun] = pisah.map(Number);

    if (tanggal < 1 || tanggal > 31 || bulan < 1 || bulan > 12 || tahun.toString().length !== 4) {
      throw new Error("not_valid");
    }
    const result = pisah.join("/");
    console.log(result);
  } catch (err) {
    if (err.message === "not_valid") {
      console.log("input tidak valid");
    }
  } finally {
    rl.close();
  }
};

firstMenuWithoutPackage();
