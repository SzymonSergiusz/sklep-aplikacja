<script>
    /** @type {import('./$types').PageData} */
    export let data;
    let products = data.products
</script>


<div>
    <h1>{products.nazwa}</h1>
    <div>{products.cena}</div>
    <img src="{`http://localhost:8080/images/${products.nazwa}`}">
    <h3 class="h3">{products.opis}</h3>
</div>

<style>
    img {
        width: 400px;
        height: 500px;
    }
</style>