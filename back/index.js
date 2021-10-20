const http = require("http");
const fs = require("fs");
const {validStudent} = require('./db');
const cors = require('cors')


function checkName(body){
    const name = JSON.parse(body).name;
    for(const badname of validStudent.nameNotEqual){
        if(badname.toLowerCase() === name.toLowerCase()){
            return false;
        }
    }
    return true;
}

function checkAge(body){
    const age = JSON.parse(body).age;
    if(age>validStudent.minAge && age<validStudent.maxAge){
        return true;
    } else return false;
}

function checkAbilities(body){
    const abilities = JSON.parse(body).abilities;
    for(const neededAbilities of validStudent.ability){
        if(abilities.toLowerCase().includes(neededAbilities.toLowerCase())){
            return true;
        }
    }
    return false;
}


const server = http.createServer((req, res) => {
    let body = "";
    res.writeHead(200, {
    'Access-Control-Allow-Origin': '*',
    'content-type': 'application/json'
    })
    if(req.method === "POST"){
        req.on("data", (data)=>{
            body +=data;
        })
        req.on('end', () => {
            if(checkName(body) && checkAge(body) && checkAbilities(body)){
                res.write("true");
            } else {
                res.write("false");
            }
            res.end();
        })
    } else {
        res.end();
    }
})

const port = 3000;

server.listen(port, ()=>{
 console.log("listening")
})