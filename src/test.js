const testString = "<p>Desinfektionsguiden är framtagen för att du på egen hand ska kunna erhålla de grundläggande kunskaperna som krävs. Du kommer att få börja med kunskapsinhämtning, och därefter sätta din kunskap på prov. Utbildningen kan med fördel även genomföras i grupp. Du kan använda utbildningen till att öka på din kunskap och tillsammans diskutera era rutiner på arbetsplatsen.</p>";



const trimString = (str) => {
  if(str.includes('<')){
    return str.substring(3, str.length - 4)
  }
}

const test = trimString(testString)

console.log(test)