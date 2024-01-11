<script>
    /** @type {import('./$types').PageData} */
    export let data;
    let produkt = data.products

    export async function kupProdukt(id) {
        const requestOptions = {
            method: 'POST',
            credentials: 'include', // Include session cookies
            headers: {
                'Content-Type': 'application/json',
                'connection' : 'keep-alive'
            },
            body: JSON.stringify({id})
        };

        const res = await fetch('http://localhost:8080/user/orders', requestOptions);
        const orders = await res.json();
        console.log(orders);
    }
    function kup() {
        kupProdukt(produkt.id)
    }

</script>


<div>
    <h1>{produkt.nazwa}</h1>
    <div>
        Cena: {produkt.cena}
        <button class="btn variant-filled" on:click={kup}>Zakup produkt</button>
    </div>
    <img src="{`http://localhost:8080/images/${produkt.nazwa}`}">
    <h3 class="h3">{produkt.opis}</h3>
</div>

<style>
    img {
        width: 400px;
        height: 500px;
    }
</style>