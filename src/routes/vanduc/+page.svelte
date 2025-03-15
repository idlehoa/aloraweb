<script>
    import { fade, fly } from 'svelte/transition';

    // Danh sách lời chúc cá nhân hóa cho Đức
    let wishes = [
        { category: "Chúc Thi Tốt", message: "Đức ơi, thi giữa kỳ rinh điểm 10 về nhé, bạn thân!", icon: "📝", color: "bg-gradient-to-r from-blue-100 to-cyan-100" },
        { category: "Chúc Thi Tốt", message: "Đức cố lên, tự tin làm bài, bạn tài năng lắm!", icon: "✍️", color: "bg-gradient-to-r from-blue-200 to-cyan-200" },
        { category: "Chúc Thư Giãn", message: "Đức nghỉ ngơi chút đi, thư giãn để thi cho đỉnh nhé!", icon: "🧘", color: "bg-gradient-to-r from-purple-100 to-pink-100" },
        { category: "Chúc Thư Giãn", message: "Đức ngáp một cái, bạn sẽ tràn đầy năng lượng!", icon: "💤", color: "bg-gradient-to-r from-purple-200 to-pink-200" },
        { category: "Chúc May Mắn", message: "Chúc Đức may mắn ngập tràn, bạn thân ơi!", icon: "🍀", color: "bg-gradient-to-r from-green-100 to-emerald-100" },
        { category: "Chúc May Mắn", message: "Ngôi sao sáng dẫn lối cho Đức, điểm cao nhé!", icon: "⭐", color: "bg-gradient-to-r from-green-200 to-emerald-200" },
    ];

    // Danh mục và trạng thái
    let categories = ["Chúc Thi Tốt", "Chúc Thư Giãn", "Chúc May Mắn"];
    let categoryIcons = {
        "Chúc Thi Tốt": "📖",
        "Chúc Thư Giãn": "🧘",
        "Chúc May Mắn": "🌈",
    };
    let activeCategory = "Chúc Thi Tốt";
    let hoveredWish = null;
</script>

<div class="min-h-screen bg-gradient-to-br from-green-50 via-pink-50 to-purple-50 p-6 flex items-center justify-center">
    <div class="bg-white/90 rounded-2xl shadow-2xl p-8 w-full max-w-3xl flex flex-col flex-grow transform transition-all duration-500 hover:scale-105">
        <!-- Tiêu đề cá nhân hóa -->
        <h2 class="text-4xl font-bold text-gradient bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent text-center mb-6" in:fly={{ y: -50, duration: 600 }}>
            🎉 Thi tốt! 🎉
        </h2>

        <!-- Danh mục -->
        <div class="flex justify-center mb-8 space-x-6">
            {#each categories as category}
                <button
                    class="px-6 py-3 rounded-full text-xl font-semibold transition-all duration-300 flex items-center space-x-3 shadow-md hover:shadow-lg"
                    class:bg-gradient-to-r={true}
                    class:from-pink-400={activeCategory === category}
                    class:to-orange-400={activeCategory === category}
                    class:text-white={activeCategory === category}
                    class:from-purple-200={activeCategory !== category}
                    class:to-pink-200={activeCategory !== category}
                    class:text-purple-700={activeCategory !== category}
                    class:hover:from-pink-300={activeCategory !== category}
                    class:hover:to-orange-300={activeCategory !== category}
                    class:hover:text-white={activeCategory !== category}
                    on:click={() => activeCategory = category}
                    in:fade={{ duration: 500, delay: 100 }}
                >
                    <span class="text-2xl">{categoryIcons[category]}</span>
                    <span>{category}</span>
                </button>
            {/each}
        </div>

        <!-- Danh sách lời chúc cá nhân -->
        <div class="space-y-6 flex-grow overflow-y-auto max-h-[60vh] pr-4 scrollbar-thin scrollbar-thumb-gradient from-pink-400 to-orange-400 scrollbar-track-purple-50">
            {#each wishes as wish}
                {#if wish.category === activeCategory}
                    <div
                        class="flex items-center space-x-6 p-6 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl {wish.color}"
                        in:fly={{ x: -30, duration: 400, delay: 50 }}
                        on:mouseenter={() => hoveredWish = wish.message}
                        on:mouseleave={() => hoveredWish = null}
                    >
                        <span class="text-4xl">{wish.icon}</span>
                        <p class="text-xl text-gray-800 font-medium">{wish.message}</p>
                    </div>
                {/if}
            {/each}
        </div>

        <!-- Thông báo chân trang cá nhân hóa -->
        <div class="text-center mt-8" in:fade={{ duration: 800 }}>
            <p class="text-2xl text-gradient bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent font-semibold">
                🌸 Thi tốt nhé cu! 🌸
            </p>
        </div>
    </div>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

    :global(body) {
        font-family: 'Poppins', sans-serif;
    }

    .text-gradient {
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .scrollbar-thin {
        scrollbar-width: thin;
    }
    .scrollbar-thumb-gradient {
        scrollbar-color: #f472b6 #fce7f3;
    }
    .scrollbar-track-purple-50 {
        background: #f3e8ff;
    }
</style>