<script>

    import OrderCard from "../../components/OrderCard.svelte";

    export let data
</script>

{#each data.orders as order}
    <OrderCard
    idZakupu={order.productid}
    cenaZakupu= {order.cenazakupu}
    dataZakupu= {order.datazamowienia}
    />
{/each}