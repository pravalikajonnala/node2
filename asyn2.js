var fs =require ('fs');
fs.readFile('readMe.txt','utf8',function(err,data){
    fs.writeFile('writeIn.txt',data);
});