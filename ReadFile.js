// const admin = require("firebase-admin")
// const serviceAccount = require("./fcm.json")
// const randomString = require('randomstring')
const fs = require('fs')
// const db = getDb()
const dirName = 'JSON_files'


seedData()
async function seedData() {
  // Loading all files in directory
  const dirs = await fs.readdirSync(dirName);

  // Reading each file one by one 
  for (const fileName of dirs) {
    const split = fileName.split('.')

    // Only json file to be seeded
    // if (split[1] == 'json') {

      // Reading file contend
      const a = `${dirName}/${fileName}`
      console.log(a);
  }
}
    //   const data = JSON.parse(await fs.readFileSync(`${dirName}/${fileName}`, 'utf-8'))

//       let ansArr = []
//       const arr = [100, 200, 300]

//       for (let i = 0; i < arr.length; i++) {
//         const index = arr[i]
//         data[index].forEach(answers => {
//           answers.answers.forEach(ans => {
//             ans.id = randomString.generate({
//               length: 10,
//               charset: 'numeric',
//             })
//             ans.isCorrect = 1
//             ansArr.push(ans)
//           })
//         });
//       }

//       // deep cloning ans array
//       let copyAnsArr = JSON.parse(JSON.stringify(ansArr))

//       // Adding wrong answers
//       for (let i = 0; i < arr.length; i++) {
//         const index = arr[i]
//         data[index].forEach(answers => {

//           // Sorting array rondomly
//           copyAnsArr.sort(function () {
//             return .5 - Math.random();
//           });

//           // Getting random top 4 items as wrong answer
//           const wrongAns = copyAnsArr.slice(0, 4)

//           // Pushing wrongs answers into correct answer array
//           wrongAns.forEach(v => {
//             v.isCorrect = 0
//             answers.answers.push(v)
//           })
//         });
//       }

//       // Creating collection referecne
//       const docRef = db.collection(`${split[0]}`).doc()

//       // Getting collection
//       const collection = await db.collection(`${split[0]}`).get()

//       // Seed if collection is empty
//       if (collection.size == 0) {
//         await docRef.set(data)
//         console.log(`* ${fileName} seed done *`)
//       }
//     }

//   }
//   console.log('* All data seed done *')
// }

// function getDb() {
//   admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     storageBucket: `gs://${serviceAccount.project_id}.appspot.com`
//   });
//   return admin.firestore();
// }