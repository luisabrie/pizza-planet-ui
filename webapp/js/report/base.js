/*
    * Fetches the report from the server
    * @return {Promise} A promise that resolves to the report
    * The report is an object with the following properties:
    *  - month_with_most_revenue: An object with the following properties:
    *     - month: The month with the most revenue
    *     - total: The revenue for that month
    *  -  most_requested_ingredient: An object with the following properties:
    *    - ingredient: The most requested ingredient
    *    - total: The number of times the ingredient was requested
    *  -  top_three_customers: An array of objects with the following properties:
    *   - name: The customer's name
    *   - total: The number of orders the customer has made
*/
function fetchReport() {
    fetch('http://127.0.0.1:5000/report')
        .then(response => response.json())
        .then(data => {
            let template = createReportTemplate(data)
            $("#report").append(template)
        }
    );
}

function createReportTemplate(reports){
    let template = $("#report-template")[0].innerHTML;
    return Mustache.render(template,reports)
}

function main() {
    fetchReport();
}

window.onload = main;
