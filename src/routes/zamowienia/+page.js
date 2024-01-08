/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    const requestOptions = {
        method: 'GET',
        credentials: 'include', // Include session cookies
        headers: {
            'Content-Type': 'application/json',
            'connection' : 'keep-alive'
        },
        // Include body data if required
        // body: JSON.stringify({ /* your request body */ })
    };

    // Adjust the URL and other request options as needed
    const res = await fetch('http://localhost:8080/user/orders', requestOptions);
    const orders = await res.json();
    console.log(orders);

    return { orders };
}
