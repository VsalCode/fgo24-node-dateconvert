
function convertTanggal(input){
  const pisah = input.split("-")

  // console.log(pisah);
  
  if(pisah.length <= 1){
    console.log("Format Tanggal Anda Salah");
  }else{
    const result = pisah.join("/")
    console.log(result);
  }
}

convertTanggal("10-04-2015")