<script>
  import Header from './Header.svelte';
  import Footer from './Footer.svelte';

  let products = [
    { id: 1, name: 'Nole Khoa', price: 100 },
    { id: 2, name: 'Nole Khoa', price: 200 },
    { id: 3, name: 'Nole Khoa', price: 300 },
  ];
</script>

<Header />

<main class="pt-24 p-4 bg-gradient-to-b from-pink-100 via-pink-200 to-pink-300 min-h-screen">
  <h1 class="text-3xl font-bold mb-4 text-center text-pink-800">Welcome to Alora Store</h1>
  <p class="text-lg mb-6 text-center text-pink-700">
    Discover the best products at unbeatable prices. Explore our selection and find your perfect match!
  </p>

  <ul class="list-none space-y-4">
    {#each products as product}
      <li class="flex justify-between items-center border-b border-pink-400 py-4">
        <span class="text-lg text-pink-800 font-medium">{product.name} - ${product.price}</span>
        <a 
          href="https://discord.alorastore.xyz" 
          class="bg-pink-600 text-white py-2 px-4 rounded-md font-semibold shadow-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-transform transform hover:scale-105"
        >
          Add to Cart
        </a>
      </li>
    {/each}
  </ul>
</main>

