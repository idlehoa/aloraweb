<script>
  let items = [
    { name: "Spotify 3 month", price: "2$" },
    { name: "Spotify 1 year", price: "3$" },
    { name: "Nitro Boost 1 month", price: "3.8$" },
    { name: "Nitro Boost 1 year", price: "18$" },
    { name: "Discord Server Boost 1 month", price: "2.5$" },
    { name: "Discord Server Boost 3 months", price: "4.5$" },
    { name: "Minecraft MFA Account", price: "4$" },
    { name: "Minecraft NFA Unbanned", price: "0.12$" },
    { name: "Access to our method", price: "20$" },
  ];

  let notice = "Last update: 29/10/2024✅";
</script>

<div class="min-h-screen bg-gradient-to-b from-pink-200 to-pink-300 flex justify-center items-start pt-16 mt-10">
  <div class="bg-white/90 rounded-lg shadow-lg p-6 w-full max-w-md h-[80vh] flex flex-col">
    <h1 class="text-4xl font-bold text-pink-500 text-center mb-6">🎀 AloraStore Menu 🎀</h1>

    <ul class="space-y-4 overflow-y-auto flex-grow pr-2 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-pink-400 scrollbar-track-pink-50 hover:scrollbar-thumb-pink-500">
      {#each items as item}
        <li class="item flex justify-between items-center border-2 border-pink-300 bg-pink-50 rounded-lg shadow-md p-4 hover:bg-pink-200 transition-transform transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
          <div class="flex items-center space-x-4">
            <div class="h-10 w-10 rounded-full bg-pink-200 flex items-center justify-center text-pink-600 font-bold">
              🛒
            </div>
            <span class="text-gray-700 font-medium">{item.name}</span>
          </div>
          <span class="font-bold text-orange-500">{item.price}</span>
        </li>
      {/each}
    </ul>

    <div class="text-center mt-6">
      <p class="text-green-500 font-medium text-lg">{notice}</p>
    </div>
  </div>
</div>
