<script>
    let items = [
      { name: "Spotify 3 month", price: "2$ / 50k" },
      { name: "Spotify 1 year", price: "3$ / 75k" },
      { name: "Nitro Boost 1 month", price: "3.8$ / 85k" },
      { name: "Nitro Boost 1 year", price: "18$ / 450k" },
      { name: "Discord Server Boost 1 month", price: "2.5$ / 50k" },
      { name: "Discord Server Boost 3 months", price: "4.5$ / 110k" },
      { name: "Minecraft MFA Account", price: "4$ / 100k" },
      { name: "Minecraft NFA Unbanned / Banned", price: "0.12$ / 0.03$" },
      { name: "Access to our method", price: "20$" },
    ];
  
    let notice = "Last update: 29/10/2024✅";
</script>

<div class="min-h-screen bg-gradient-to-b from-pink-100 to-pink-300 flex justify-center items-start pt-16 mt-10">
  <div class="bg-white/90 rounded-lg shadow-lg p-6 w-full max-w-md h-[80vh] flex flex-col">
    <h1 class="text-3xl font-bold text-pink-500 text-center mb-6">🎀 AloraStore Menu 🎀</h1>

    <ul class="space-y-2 overflow-y-auto flex-grow pr-2">
      {#each items as item}
        <li class="flex justify-between items-center border-2 border-pink-300 bg-pink-100 rounded-lg shadow-md p-4 hover:bg-pink-300 transition duration-300">
          <span class="text-gray-700 font-medium">{item.name}</span>
          <span class="font-bold text-orange-500">{item.price}</span>
        </li>
      {/each}
    </ul>

    <div class="text-center mt-4">
      <p class="text-green-500 font-medium">{notice}</p>
    </div>
  </div>
</div>
