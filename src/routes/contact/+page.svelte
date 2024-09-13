<script>
  let name = '';
  let email = '';
  let message = '';

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:vanhao294.ts1@gmail.com?subject=Contact Form Submission&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
  };
</script>

<style>
  .fade-in {
    animation: fadeIn 1s ease-in-out forwards;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>

<div class="max-w-4xl mx-auto py-12 px-6 bg-white shadow-md rounded-lg mt-12 fade-in">
  <h1 class="text-4xl font-extrabold text-center text-gray-800 mb-6">Contact Us</h1>
  <p class="text-lg text-gray-600 text-center mb-8 fade-in">
    If you have any questions, feel free to reach out to us using the form below!
  </p>

  <form on:submit={handleSubmit} class="space-y-6">
    <div class="fade-in">
      <label for="name" class="block text-gray-700 font-medium mb-2">Name</label>
      <input type="text" id="name" bind:value={name} required class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
    </div>

    <div class="fade-in">
      <label for="email" class="block text-gray-700 font-medium mb-2">Email</label>
      <input type="email" id="email" bind:value={email} required class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
    </div>

    <div class="fade-in">
      <label for="message" class="block text-gray-700 font-medium mb-2">Message</label>
      <textarea id="message" bind:value={message} rows="4" required class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
    </div>

    <div class="text-center fade-in">
      <button type="submit" class="bg-indigo-600 text-white py-2 px-6 rounded-md font-semibold shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
        Send Message
      </button>
    </div>
  </form>
</div>
