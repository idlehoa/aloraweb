<script>
  import Header from './Header.svelte';
  import Footer from './Footer.svelte';
  
  let products = [
    { id: 1, name: 'Nô lệ Cấp 0', price: 100 },
    { id: 2, name: 'Nô lệ Cấp 1', price: 200 },
    { id: 3, name: 'Nô lệ Cấp 2', price: 300 },
  ];
</script>

<Header />

<main class="p-4">
  <h1 class="text-3xl font-bold mb-4 text-center">Welcome to Alora Store</h1>
  <p class="text-lg mb-6 text-center">
    Discover the best products at unbeatable prices. Explore our selection and find your perfect match!
  </p>

  <ul class="list-disc pl-5 space-y-4">
    {#each products as product}
      <li class="flex justify-between items-center border-b border-gray-300 py-4">
        <span class="text-lg">{product.name} - ${product.price}</span>
        <a 
          href="https://discord.Alora Store.xyz" 
          class="bg-indigo-600 text-white py-2 px-4 rounded-md font-semibold shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-transform transform hover:scale-105"
        >
          Add to Cart
        </a>
      </li>
    {/each}
  </ul>
</main>

<Footer />
