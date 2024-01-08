<script>
    export let idZakupu;
    export let cenaZakupu;
    export let dataZakupu;

</script>

<div class="card card-hover p-4 inline-block" onclick="console.log('{idZakupu}')" >
    <a href="/produkt/{idZakupu}">
        <h4 class="h4">ID Zakupu: {idZakupu}</h4>
        <h4 class="h4">Cena zakupu: {cenaZakupu}</h4>
        <h5 class="h5">Data zamówienia: {dataZakupu}</h5>
    </a>

</div>

<style>
    .card {
        margin: 5px;
    }
</style>