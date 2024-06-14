// JavaScript ErrorAPI.js source code

function ErrorHandling() {
    run().catch(handleError);
};
async function handleError(error) {
    alert("error");
};
