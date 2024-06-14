/// JavaScript SearchAPI.js source code

/// import function to connect to walkers component of database
import { RestAPIConnectWalkers } from "RestAPIConnect.js";
RestAPIConnectWalkers();

/// import function to protect code against potential errors
import { ErrorHandling } from "ErrorAPI.js";
ErrorHandling();

/// temporarily store data from the database container into an array for processing.
const querySpec = {
    query: "SELECT * FROM c"
};

async function run() {
    const { result: results } = await client.database(databaseID).container(containerID).items.query(querySpec, { enableCrossPartitionQuery: true }).toArray();
    for (var queryResult of results) {
        let resultString = JSON.stringify(queryResult);
        array_append(resultsString)
    }

}

/// removing the last 4 characters of the inputted postcode
inputPostcode = inputPostcode.substring(0, inputPostcode.length - 4);


/// getting information for matching postcode
let count = 5;
let tempPostcode = "";
let tempCount = 0;
let tempForename = "";
let tempSurname = "";
let constructName = "";
const tempName = [];
const tempPostcode = [];
const tempPrice = [];
const tempWday = [];
const tempWend = [];
while (count < resultsString.length) {
    let tempPostcode = resultsString.at(count);
    tempPostcode = tempPostcode.substring(0, tempPostcode.length - 4);
    if (inputPostcode == tempPostcode) {
        tempPostcode.push(resultsString.at(Count));
        tempCount = count - 2;
        tempForename = resultsString.at(tempCount);
        tempCount = count + 1;
        tempSurname = resultsString.at(tempCount);
        constructName = tempForename.concat(" ", tempSurname);
        tempName.push(constructName);
        tempCount = count + 2;
        tempPrice.push(resultsString.at(tempCount));
        tempCount = count + 1;
        tempWday.push(resultsString.at(tempCount));
        tempCount = count + 1;
        tempWend.push(resultsString.at(tempCount));
    };
    count = count + 14;
};

/// assigning website content variables
let name1 = tempName.at(0);
let postcode1 = tempPostcode.at(0);
let price1 = tempPrice.at(0);
let wday1 = tempWday.at(0);
let wend1 = tempWend.at(0);

let name2 = tempName.at(1);
let postcode2 = tempPostcode.at(1);
let price2 = tempPrice.at(1);
let wday2 = tempWday.at(1);
let wend2 = tempWend.at(1);

let name3 = tempName.at(2);
let postcode3 = tempPostcode.at(2);
let price3 = tempPrice.at(2);
let wday3 = tempWday.at(2);
let wend3 = tempWend.at(2);

let name4 = tempName.at(3);
let postcode4 = tempPostcode.at(3);
let price4 = tempPrice.at(3);
let wday4 = tempWday.at(3);
let wend4 = tempWend.at(3);

let name5 = tempName.at(4);
let postcode5 = tempPostcode.at(4);
let price5 = tempPrice.at(4);
let wday5 = tempWday.at(4);
let wend5 = tempWend.at(4);