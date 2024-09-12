<script>
  import Header from './Header.svelte';
  import Footer from './Footer.svelte';
  
  let products = [
    { id: 1, name: 'Product A', price: 100 },
    { id: 2, name: 'Product B', price: 200 },
    { id: 3, name: 'Product C', price: 300 },
  ];
</script>

<Header />

<main class="p-4">
  <h1 class="text-3xl font-bold mb-4">Welcome to Anitamarket</h1>
  <p class="text-lg mb-6">Find the best products here at affordable prices.</p>

  <ul class="list-disc pl-5 space-y-2">
    {#each products as product}
      <li class="text-lg">{product.name} - ${product.price}</li>
    {/each}
  </ul>
</main>

<Footer />