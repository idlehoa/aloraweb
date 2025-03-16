<script>
  let isMaintenanceMode = true;

  function redirectToDiscord() {
    window.location.href = 'https://discord.gg/theatlantis';
  }
</script>

<svelte:body on:click={redirectToDiscord} />

{#if !isMaintenanceMode}
  <main class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-pink-100 via-pink-200 to-pink-300">
    <h1 class="text-5xl font-bold mb-4 text-center text-pink-800">Alora Store</h1>
    <p class="text-2xl mb-6 text-center text-pink-700">
      A store by Vietnamese, for Vietnamese!
    </p>
  </main>
{:else}
  <div class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300">
    <div class="bg-white p-8 rounded-lg shadow-lg text-center">
      <h1 class="text-4xl font-bold mb-4 text-red-600">Maintenance</h1>
      <p class="text-lg mb-6 text-gray-700">
        The website is currently under maintenance. We will be back as soon as possible! 🙏
      </p>
      <p class="text-md text-gray-500">
        Please check back later or connect with us on Discord. Thank you!
      </p>
    </div>
  </div>
{/if}