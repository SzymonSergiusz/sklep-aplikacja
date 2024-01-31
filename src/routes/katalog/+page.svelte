<script>
    import GameCard from "../../components/GameCard.svelte";
    export let data
    export let searched = ""
    async function szukaj() {
        console.log(searched)
        const url = searched ? `http://localhost:8080/products?szukane=${searched}` : 'http://localhost:8080/products';
        const res = await fetch(url);
        const products = await res.json();
        console.log(products)
        data =  {products}
    }

</script>


<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
    <div class="input-group-shim">Szukaj</div>
    <input type="search" placeholder="Wpisz nazwę..." bind:value={searched}/>
    <button class="variant-filled-secondary" on:click="{szukaj}">Wyszukaj</button>
</div>

{#each data.products as game}
    <GameCard
            cena={game.cena}
            datawydania={game.datawydania}
            gatunekid={game.gatunekid}
            id={game.id}
            ilosc={game.ilosc}
            nazwa={game.nazwa}
            opis={game.opis}
            platformaid={game.platformaid}
            wydawcaid={game.wydawcaid}
            src= 'http://localhost:8080/images/{game.nazwa}'
    />
{/each}