const http = require('http')
const config = require('./config.js')
const readline = require('readline').createInterface(process.stdin, process.stdout);
const requestParam = {
    access_key: `access_key=${config.myAPIKey}`,
    query: "query="
}

const url = {
    main: "http://api.weatherstack.com/current",
    param: "?",
    addParam: "&"
}

async function input() {
    while (true) {
        const city = await question("Write a city: ");
        if (city === "exit") {
            readline.close();
            break;
        }
        await getData(city)
            .then(data => {
                console.log(data);
            })
    }
}

function question(city) {
    return new Promise((resolve) => {
        readline.question(city, (data) => {
            resolve(data);
        });
    })
}

async function getData(city) {
    return new Promise((resolve) => {
        http.get(getURL(city), (res) => {
            const {statusCode} = res;
            if (statusCode !== 200) {
                resolve(`statusCode: ${statusCode}`)
            }
            res.setEncoding('utf8')
            let rowData = ''
            res.on('data', (chunk) => rowData += chunk)
            res.on('end', () => {
                resolve(JSON.parse(rowData))
            })
        }).on('error', (err) => {
            resolve(err)
        })
    })
}

function getURL(city) {
    const genUrl = url.main + url.param + requestParam.access_key + url.addParam + requestParam.query + city;
    return genUrl.replace(" ", "%20");
}

input();