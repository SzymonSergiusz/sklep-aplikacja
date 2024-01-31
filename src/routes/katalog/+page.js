/** @type {import('./$types').PageLoad} */
export async function load({fetch}) {
    const res = await fetch(`http://localhost:8080/products`);
    const products = await res.json();
    console.log(products)

    return {products}
}