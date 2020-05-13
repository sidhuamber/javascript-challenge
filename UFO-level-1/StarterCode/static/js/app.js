// from data.js
var tableData = data;

// Get reference to table body

tbody = d3.select("tbody");


// Uploading the data on webpage
// YOUR CODE HERE!
tableData.forEach((dset) => {
    var row = tbody.append("tr");
    Object.entries(dset).forEach(([key,values]) =>{
        var cell = row.append("td");
        cell.text(values)
    });
});

// Filtering the data through date filter
// Select the button

var button = d3.select("#filter-btn");

//Select the form

var form = d3.select("form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form

function runEnter(){
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    //console.log(tableData);

    let filteredData=tableData

    if (inputValue){


    filteredData = tableData.filter(ufo=>ufo.datetime === inputValue);
    console.log(filteredData);
    }

    tbody.html("");

    filteredData.forEach((dset) => {
        var row = tbody.append("tr");
        Object.entries(dset).forEach(([key,values]) =>{
            var cell = row.append("td");
            cell.text(values)
        });
    });

    
    

};
