const http = require('http');
const path = require('path');
const fs = require('fs');

const port = 3000;
const hostname = "127.0.0.1";

let extension = {
    ".html" : "text/html",
    ".css" : "text/css",
    ".js" : "application/javascript",
    ".png" : "image/png",
    ".jpeg" : "image/jpeg",
    ".jpg" : "image/jpeg",
    ".svg" : "image/svg+xml",
    ".ico" : "image/x-icon"
};

let extension_folder = {
    ".html" : "webpages",
    ".css" : "stylesheets",
    ".js" : "scripts",
    ".png" : "images",
    ".jpeg" : "images",
    ".jpg" : "images",
    ".svg" : "images",
    ".ico" : "images"
}

function log(error){
    console.log(error);
}

function getFile(filePath, res, mime){

    fs.stat(filePath, (error, stat) => {
        if(!error){ // file exists
            fs.readFile(filePath, (err, data) => {
                if(!err){
                    res.writeHead(200, {
                        'content-type' : mime,
                        'content-length' : data.length
                    });
                    res.end(data);
                }
                else{
                    log(err);
                }
            })
        }
        else{ // error in file accessing
            log(error);
        }
    });
    
}

function handler(req, res){
    console.log("------- url requested : " + req.url);
    let fileName = path.basename(req.url) || "index.html";
    let ext = path.extname(fileName);
    // requested file type is not supported
    if(!extension[ext]){
        fileName = "404.html";
        ext = path.extname(fileName);
    }

    let filePath = __dirname + "/" + req.url;
    if(fileName == "index.html" || fileName == "404.html"){
        filePath = __dirname + "/webpages/" + fileName;
    }
    if(fileName == "favicon.ico"){
        filePath = __dirname + "/images/bs_logo.ico";
    }
    
    console.log(filePath);

    getFile(filePath, res, extension[ext]);

}

const server = http.createServer(handler);

server.listen(port, hostname, () => {
    console.log(`Server running at ${hostname}:${port}`);
})