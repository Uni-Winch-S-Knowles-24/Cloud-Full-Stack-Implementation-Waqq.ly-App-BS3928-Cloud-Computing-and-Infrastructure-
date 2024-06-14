/// JavaScript RestAPIConnect.js source code

/// function to connect to walkers component of database
export function RestAPIConnectWalkers() {
    // require @azure cosmos
    const cosmos = require('@azure/cosmos');
    const CosmosClient = cosmos.CosmosClient;

    const endpoint = "https://waqnosqldb.documents.azure.com:443/"; /// add database endpoint 
    const masterkey = "s72HVn1ZEDbUZrhDuKB3CtkiOJt0Uzai78TC2G49qmXfjl7z7QCxcL7qaCCNMmwTt4eqD9gRIz1RACDbSY4ncw=="; /// add database masterkey

    /// connect to database usind enpoint and masterkey
    const client = new CosmosClient({ enpoint, auth: { masterkey } });

    /// selecting database component
    const databaseId = "waqnosqldb";
    const containerId = "Walkers";
};

/// function to connect to owners component of database
export function RestAPIConnectOwners() {
    // require @azure cosmos
    const cosmos = require('@azure/cosmos');
    const CosmosClient = cosmos.CosmosClient;

    const endpoint = "https://waqnosqldb.documents.azure.com:443/"; /// add database endpoint 
    const masterkey = "s72HVn1ZEDbUZrhDuKB3CtkiOJt0Uzai78TC2G49qmXfjl7z7QCxcL7qaCCNMmwTt4eqD9gRIz1RACDbSY4ncw=="; /// add database masterkey

    /// connect to database usind enpoint and masterkey
    const client = new CosmosClient({ enpoint, auth: { masterkey } });

    /// selecting database component
    const databaseId = "waqnosqldb";
    const containerId = "Owner";
};

