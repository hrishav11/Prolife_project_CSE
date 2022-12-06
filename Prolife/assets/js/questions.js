const { async } = require("@firebase/util");
const { map } = require("lodash");
// Object with RapidAPI authorization headers and Content-Type header
const ourHeaders = {
    'X-RapidAPI-Key': '7xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
    , 'Content-Type': 'application/json'
};

async function myFunction(){
    var ids = new Array();
    ids = ques.keys();
    let ans = new Map();

    for (var i = 0; i < ids.length; i++) {
        ans[ids[i]] = document.getElementById(ids[i]).value;
    }
    // Making a POST request using an axios instance from a connected library
    await axios.post(baseUrl, ans, { headers: ourHeaders })
        // Handle a successful response from the server
        .then(response => {
            // Getting a data object from response that contains the necessary data from the server
            return response.Map;
        })
        // Catch and print errors if any
        .catch(error => console.error('On create patient error', error));
}
