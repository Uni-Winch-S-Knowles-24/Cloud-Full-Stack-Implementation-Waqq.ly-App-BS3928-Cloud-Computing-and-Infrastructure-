/// JavaScript RegAPI.js source code
function regWalker(inputEmail, inputPassword, inputForename, inputSurname, inputPostcode, inputPrice, inputWday, inputWend) {
    import { RestAPIConnectWalkers } from "RestAPIConnect.js";
    RestAPIConnectWalkers();
    import { ErrorHandling } from "ErrorAPI.js";
    ErrorHandling();
    query: "INSERT INTO walkers (Email, Password, Forename, Surname, Postcode, Price, Weekday, Weekend) VALUES (inputEmail, inputPassword, inputForename, inputSurname, inputPostcode, inputPrice, inputWday, inputWend);"
}

function regOwner(inputEmail, inputPassword, inputDogName, inputForename, inputSurname, inputPostcode, inputDogSize, inputDogNeed) {
    import { RestAPIConnectOwners } from "RestAPIConnect.js";
    RestAPIConnectWalkers();
    import { ErrorHandling } from "ErrorAPI.js";
    ErrorHandling();
    query: "INSERT INTO walkers (Email, Password, DogName, Forename, Surname, Postcode, DogSize, Needs) VALUES (inputEmail, inputPassword, inputDogName, inputForename, inputSurname, inputPostcode, inputDogSize, inputDogNeed);"
}

