/** @type {import('./$types').PageLoad} */
export async function load({fetch, params} ) {
    const res = await fetch(`http://localhost:8080/products/${params.id}`);
    const products = await res.json();
    console.log(products)

    return {products}
}


