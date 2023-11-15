// Fetch data from SQLite database using Fetch API
fetch('/api/get_data_from_db')
    .then(response => response.json())
    .then(data => {
        // Process the data and create a Plotly chart
        createPlot(data);
    })
    .catch(error => console.error('Error fetching data:', error));

function createPlot(data) {
    // Sample data structure:
    // data = [{x: [1, 2, 3], y: [10, 20, 15], type: 'scatter', mode: 'lines+markers', name: 'Line Chart'}];

    // Layout configuration
    var layout = {
        title: 'SQLite Data Plot',
        xaxis: {
            title: 'X-axis'
        },
        yaxis: {
            title: 'Y-axis'
        }
    };

    // Create the Plotly graph
    Plotly.newPlot('plotlyGraph', data, layout);
}
