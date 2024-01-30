const fs = require("fs")

//writing file (Overwrites the file)
// const data = "Shan My Best Friend"
// fs.writeFile("sample.pdf",data,(err)=>{
//  console.log("Completed")
// })

//Task-1
// const quote = "Live More Worry Less..<3"
// for (let i = 1 ; i < 10 ;i++){
// fs.writeFile(`./backup/text-${i}.pdf`,quote,(err)=>{
//     console.log(`Completed Writing text-${i} file`)
// })
// }

//Task-2
// const [,,n] = process.argv
// for (let i = 1 ; i <= n ; i++){
//     fs.writeFileSync(`./backup/note-${i}.ppt`,quote,(err)=>{
//         console.log(`Successfully Created note-${i}.ppt`)
//     })
// }

//Reading the Files
//utf-8 => to support all languages
// fs.readFile("sample.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log(data)
//     }
// })

//Append File (Add String to the end of the File)
// const data2 = "\tFor my Life"
// fs.appendFile("sample.txt",data2,(err)=>{
//     console.log("Successfully Appended")
// })

//deleting file (unlink)
// fs.unlink("sample.pdf",(err)=>{
//     console.log("Deleted")
// })

// Reading Directory
//Reading all files in the Directory
// fs.readdir("./backup",(err,data)=>{
//     console.log(data)
// })

//Deleting All Files in Directory
// fs.readdir("./backup",(err,data)=>{
//     console.log(data)
//     data.forEach((file)=>{
//         fs.unlink(`./backup/${file}`,(err)=>{
//             console.log(`Deleted ${file}`)
//         })
//     })
// })


//writefile(Data Flow)=> call stack=>webapi=>call queue=>event loop=>call stack

//writeFile,readFile,AppendFile,unlinkFile=>async
// writeFileSync, ReadfileSync , appendFileSync , unlinkFileSync => sync

// using sync dont use err 

// for (let i = 1 ; i < 10 ;i++){
// fs.writeFileSync(`./backup/text-${i}.pdf`,quote,
//     console.log(`Completed Writing text-${i} file`)
// )
// }


