<script>
    import GameCard from "../../components/GameCard.svelte";
    export let data


</script>


{#each data.products as game}
    <!-- Tworzenie instancji klasy Game z danymi produktu -->
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
    />
{/each}