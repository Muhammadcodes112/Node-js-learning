// import file system module
const { clear } = require('console');
const fs = require('fs');


//reading files
// fs.readFile('./blog1.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });



//writing files
// fs.writeFile('./blog2.txt', 'hello brother', () => {
//     console.log('file was written')
// })




//create and delete directories (folders)
// if (!fs.existsSync('./asset')){
//     fs.mkdir('./asset', (err) => {
//         if (err) {
//             console.log(err)
//         }
//         console.log('Folder Created');
//     });
// }else{
//    fs.rmdir('./asset', (err) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log('folder deleted');
//    })
// }





//deleting files
// if (fs.existsSync('./newlycreatedfile.txt')){
//     fs.unlink('./newlycreatedfile.txt', (err) => {
//         if (err) {
//             console.log(err)
//         }
//      console.log('file deleted');
// })}else{
//     fs.writeFile('./newlycreatedfile.txt' , 'Welcome aboard', () => {
//         console.log('Created');
//     }) 
// };
