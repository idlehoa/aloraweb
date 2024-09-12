<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Us</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100">
  <div class="max-w-4xl mx-auto py-12 px-6 bg-white shadow-md rounded-lg mt-12">
    <h1 class="text-4xl font-extrabold text-center text-gray-800 mb-6">Contact Us</h1>
    <p class="text-lg text-gray-600 text-center mb-8">If you have any questions, feel free to reach out to us using the form below!</p>
    <form action="mailto:vanhao294.ts1@gmail.com" method="POST" enctype="text/plain" class="space-y-6">
      <div>
        <label for="name" class="block text-gray-700 font-medium mb-2">Name</label>
        <input type="text" id="name" name="name" required class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
      </div>
      <div>
        <label for="email" class="block text-gray-700 font-medium mb-2">Email</label>
        <input type="email" id="email" name="email" required class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
      </div>
      <div>
        <label for="message" class="block text-gray-700 font-medium mb-2">Message</label>
        <textarea id="message" name="message" rows="4" required class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
      </div>
      <div class="text-center">
        <button type="submit" class="bg-indigo-600 text-white py-2 px-6 rounded-md font-semibold shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">Send Message</button>
      </div>
    </form>
  </div>
</body>
</html>