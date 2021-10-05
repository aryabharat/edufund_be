let MongoClient = require('mongodb').MongoClient;
let url = "mongodb+srv://hackerrank:54A7hKscEUanD1m6@cluster0.m0qjo.mongodb.net/edufund?retryWrites=true&w=majority";
const fs = require('fs')

async function ls(path) {
    const dir = await fs.promises.opendir(path)
  for await (const dirent of dir) {
    console.log(dirent.name)
  }
}
const csvFilePath='customers.csv'
const csv=require('csvtojson')

	MongoClient.connect(url, { useNewUrlParser: true },async (err, db) => {
	  if (err) throw err;
	  var dbo = db.db("edufund");
      console.log('connected')

      const dir = await fs.promises.opendir('./etfs')
        let i = 0;
    for await (const dirent of dir) {
        if(i === 500)
        break;
        const p ='./etfs/'+dirent.name;
        csv()
        .fromFile(p)
        .then((jsonObj)=>{
            newJsonObj = {symbol_name:dirent.name.split('.')[0],data:jsonObj}
            
	  dbo.collection("syb_etfs").insertOne(newJsonObj, (err, res) => {
		if (err) console.log('------------error-------------',err)
        else console.log("Number of documents inserted: ");
        console.log(i++);
	  });
    })
    }
	});


