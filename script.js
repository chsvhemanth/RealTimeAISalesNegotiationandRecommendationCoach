document.addEventListener("DOMContentLoaded", function () {
    // This function will fetch the latest response from the backend
    async function fetchResponse() {
        try {
            // Send a GET request to the Flask backend to get the response
            const response = await fetch("/get-response");
            
            // Convert the response to JSON
            const data = await response.json();

            // If there is a response, display it on the page
            if (data.response) {
                document.getElementById("response-output").innerHTML = `<p><strong>Response from Assistant:</strong><br>${data.response}</p>`;
            } else if (data.error) {
                document.getElementById("response-output").innerHTML = `<p>Error: ${data.error}</p>`;
            }
        } catch (error) {
            console.error("Error fetching response:", error);
            document.getElementById("response-output").innerHTML = `<p>Error occurred: ${error.message}</p>`;
        }
    }

    // Call fetchResponse to get and display the response immediately on page load
    fetchResponse();

    // You can also set an interval to refresh the response every few seconds if required
    setInterval(fetchResponse, 5000);  // Refresh every 5 seconds (optional)
});
