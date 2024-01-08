<script lang="ts">
    import GameCard from "../components/GameCard.svelte";


    /** @type {import('./$types').PageData} */
    export let data = []
    console.log(data.products)

    let elemMovies: HTMLDivElement;

    function multiColumnLeft() {
        let x = elemMovies.scrollWidth;
        if (elemMovies.scrollLeft !== 0) x = elemMovies.scrollLeft - elemMovies.clientWidth;
        elemMovies.scroll(x, 0);
    }

    function multiColumnRight() {
        let x = 0;
        // -1 is used because different browsers use different methods to round scrollWidth pixels.
        if (elemMovies.scrollLeft < elemMovies.scrollWidth - elemMovies.clientWidth - 1) x = elemMovies.scrollLeft + elemMovies.clientWidth;
        elemMovies.scroll(x, 0);
    }
</script>
<div class="grid grid-cols-[auto_1fr_auto] gap-4 items-center">
    <!-- Button: Left -->
    <button type="button" class="btn-icon variant-filled" on:click={multiColumnLeft}>
        <i class="fa-solid fa-arrow-left" />
    </button>
    <!-- Carousel -->
    <div bind:this={elemMovies} class="snap-x snap-mandatory scroll-smooth flex gap-2 pb-2 overflow-x-auto">
        {#each data.products as game}
            <div class="shrink-0 w-[24%] snap-start">
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
            </div>
        {/each}

    </div>
    <!-- Button-Right -->
    <button type="button" class="btn-icon variant-filled" on:click={multiColumnRight}>
        <i class="fa-solid fa-arrow-right" />
    </button>
</div>