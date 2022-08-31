const data = require('./assets/json/sv.json');

const generateCategories = () => {
  const categories = []
  const keyValuePairs = Object.entries(data);
  const s03 = keyValuePairs.filter(([key, value]) => key.startsWith('s03'));
  const arrayOfObjects = s03.map(([key, value]) => ({[key]: value}));
  const categoryTitles = arrayOfObjects.filter((item) => Object.keys(item)[0].startsWith('s03_h3'));


  return categoryTitles ;
}

const foundCategories = generateCategories()

console.log(foundCategories)