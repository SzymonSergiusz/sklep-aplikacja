<script>
    export let id;
    export let nazwa;
    export let cena;
    export let datawydania;
    export let gatunekid;

    export let ilosc;

    export let opis;
    export let platformaid;
    export let wydawcaid;
    export let src = "http://localhost:8080/images/"+nazwa
</script>


<div class="card card-hover p-4 inline-block" onclick="console.log('{id}')" >
    <a href="/produkt/{id}">


    <img class = "game_logo" src = {src} alt = {nazwa}/>

    <h4 class="h4">{nazwa}</h4>
    <h5 class="h5">{cena}</h5>
    </a>

</div>

<style>
    .game_logo {
        width: 150px;
        height: 200px;
    }
    .card {
        margin: 5px;
    }
</style>