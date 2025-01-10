<script>
  let items = [
    { category: "Discord", name: "Nitro Boost 1 month", price: "90.000vnđ", description: "Discord Nitro Boost Gift Link với thời gian 1 tháng" },
    { category: "Discord", name: "Nitro Basic 1 month", price: "40.000vnđ", description: "Discord Nitro Basic Gift Link với thời gian 1 tháng" },
    { category: "Discord", name: "Nitro Boost 1 year", price: "890.000vnđ", description: "Discord Nitro Boost Gift Link với thời gian 1 năm" },
    { category: "Discord", name: "Nitro Basic 1 year", price: "370.000vnđ", description: "Discord Nitro Badic Gift Link với thời gian 1 năm" },
    { category: "Discord", name: "14x Discord Server Boost 1 month", price: "60.000vnđ", description: "14x Nâng cấp máy chủ với thời hạn 1 tháng" },
    { category: "Discord", name: "14x Discord Server Boost 3 months", price: "150.000vnđ", description: "14x Nâng cấp máy chủ với thời hạn 3 tháng" },
    { category: "Discord", name: "Nitro Token 1 month", price: "6.000vnđ", description: "Discord token có nitro thời hạn 1 tháng" },
    { category: "Discord", name: "Nitro Token 3 month", price: "15.000vnđ", description: "Discord token có nitro thời hạn 3 tháng" },
    { category: "Discord", name: "Discord Account 2017", price: "80.000vnđ", description: "Account Discord được tạo vào năm 2017" },
    { category: "Discord", name: "Nitro Discord Account 3m", price: "50.000vnđ", description: "Account Discord có Nitro thời hạn 3 tháng ( Full Access )" },
    { category: "Discord", name: "1000x Discord Server Members Offline", price: "35.000vnđ", description: "1000 Members Discord trạng thái Offline ( Real Account )" },
    { category: "Discord", name: "1000x Discord Server Members Online", price: "45.000vnđ", description: "1000 Members Discord trạng thái Online ( Real Statics & Account )" },
    { category: "Spotify", name: "Spotify 3 month", price: "50.000vnđ", description: "Spotify Premium thời hạn 3 tháng" },
    { category: "Spotify", name: "Spotify 1 year ( Ko Bảo Hành )", price: "100.000vnđ", description: "Spotify Premium 1 năm với không bảo hành" },
    { category: "Spotify", name: "Spotify 1 year ( Full Bảo Hành )", price: "210.000vnđ", description: "Spotify Premium 1 năm với full bảo hành" },
    { category: "Minecraft", name: "Minecraft MFA Trắng Thông Tin", price: "75.000vnđ", description: "Minecraft Full Access và Trắng Thông Tin" },
    { category: "Minecraft", name: "Minecraft NFA Unbanned", price: "6.000vnđ", description: "Minecraft No-Firewall Access Unbanned Account" },
  ];

  let notice = "Last update: 20/01/2025✅";
  let activeCategory = "Discord";
</script>

<div class="min-h-screen bg-gradient-to-b from-pink-200 to-pink-300 flex flex-col">
  <div class="bg-white/90 rounded-lg shadow-lg p-6 w-full flex flex-col flex-grow">
    <h1 class="text-4xl font-bold text-pink-500 text-center mb-6">.</h1>

    <div class="flex justify-center mb-6">
      {#each ['Discord', 'Spotify', 'Minecraft'] as category}
        <button
          class="px-4 py-2 rounded-lg {activeCategory === category ? 'bg-pink-500 text-white' : 'bg-pink-200 text-pink-500'} mr-2 hover:bg-pink-400 hover:text-white transition-colors"
          on:click={() => activeCategory = category}
        >
          {category}
        </button>
      {/each}
    </div>

    <div class="space-y-8 flex-grow overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-pink-400 scrollbar-track-pink-50 hover:scrollbar-thumb-pink-500">
      {#each items as item}
        {#if item.category === activeCategory}
          <div class="item flex flex-col border-2 border-pink-300 bg-pink-50 rounded-lg shadow-md p-4 hover:bg-pink-200 transition-transform transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
            <div class="flex justify-between items-center">
              <div class="flex items-center space-x-4">
                <span class="text-gray-700 font-medium text-lg">{item.name}</span>
              </div>
              <span class="font-bold text-orange-500 text-lg">{item.price}</span>
            </div>
            <p class="text-gray-600 mt-2">{item.description}</p>
          </div>
        {/if}
      {/each}
    </div>

    <div class="text-center mt-6">
      <p class="text-green-500 font-medium text-lg">{notice}</p>
    </div>
  </div>
</div>

<style>
  .flex-grow {
    flex-grow: 1;
  }
</style>
