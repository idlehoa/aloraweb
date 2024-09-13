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

  .fade-in-up {
    animation: fadeInUp 1s ease-in-out forwards;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .delay-200 { animation-delay: 200ms; }
  .delay-300 { animation-delay: 300ms; }
  .delay-400 { animation-delay: 400ms; }
  .delay-500 { animation-delay: 500ms; }
  .delay-600 { animation-delay: 600ms; }
</style>

<div class="max-w-4xl mx-auto py-12 px-6 bg-white shadow-2xl rounded-lg mt-16 fade-in">
  <h1 class="text-5xl font-extrabold text-center text-gray-900 mb-8 tracking-wide fade-in">AnitaMarket</h1>
  <p class="text-xl text-gray-700 text-center mb-12 fade-in delay-200">
    Welcome to AnitaMarket Shop, your one-stop destination for quality products and exceptional service. Our mission is to provide a seamless shopping experience with a wide range of high-quality items to meet your needs.
  </p>
  
  <section class="mb-16">
    <h2 class="text-3xl font-semibold text-gray-900 mb-6 fade-in delay-300">Our Mission</h2>
    <p class="text-lg text-gray-700 leading-relaxed fade-in delay-400">
      At AnitaMarket Shop, we are committed to delivering top-notch products and outstanding customer service. Our goal is to make shopping enjoyable and convenient for everyone. We strive to offer a diverse selection of products that cater to your everyday needs and special occasions.
    </p>
  </section>

  <section class="mb-16">
    <h2 class="text-3xl font-semibold text-gray-900 mb-6 fade-in delay-500">Our Services</h2>
    <p class="text-lg text-gray-700 mb-4 fade-in delay-600">AnitaMarket provides a variety of services to enhance your online experience, including:</p>
    <ul class="list-disc list-inside text-lg space-y-3 text-gray-700 fade-in delay-700">
      <li>Discord: Custom bots and management tools</li>
      <li>Netflix: Account management and support</li>
      <li>Spotify: Premium account services</li>
      <li>Minecraft: Game server hosting and management</li>
      <li>Roblox: In-game assets and support</li>
      <li>Hypixel: In-game services and support</li>
      <li>...and more</li>
    </ul>
  </section>

  <section class="mb-16">
    <h2 class="text-3xl font-semibold text-gray-900 mb-6 fade-in delay-800">Manager Team</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <div class="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105 fade-in delay-900">
        <h3 class="text-2xl font-bold text-gray-800 mb-2">AnitaBrijani</h3>
        <p class="text-gray-600">Founder & CEO</p>
        <p class="mt-4 text-gray-700 leading-relaxed">
          AnitaBrijani is the visionary founder of AnitaMarket Shop, driving our mission to provide exceptional products and services. Her leadership and dedication ensure that we consistently deliver the best shopping experience for our customers.
        </p>
      </div>
      <div class="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105 fade-in delay-1000">
        <h3 class="text-2xl font-bold text-gray-800 mb-2">ThamTuRin</h3>
        <p class="text-gray-600">Manager & Trust Seller</p>
        <p class="mt-4 text-gray-700 leading-relaxed">
          ThamTuRin manages day-to-day operations and ensures that all transactions are smooth and secure. With a focus on customer trust and satisfaction, he plays a key role in maintaining the integrity and reliability of our services.
        </p>
      </div>
    </div>
  </section>

  <section class="mb-16">
    <h2 class="text-3xl font-semibold text-gray-900 mb-6 fade-in delay-1100">Admin Team</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <div class="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105 fade-in delay-1200">
        <h3 class="text-2xl font-bold text-gray-800 mb-2">Nguyen Bin</h3>
        <p class="text-gray-600">Admin & Trust Seller</p>
        <p class="mt-4 text-gray-700 leading-relaxed">
          Nguyen Bin oversees various administrative functions and ensures that our services meet high standards of quality and trust.
        </p>
      </div>
      <div class="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105 fade-in delay-1300">
        <h3 class="text-2xl font-bold text-gray-800 mb-2">See Tinh</h3>
        <p class="text-gray-600">Admin & Egirl</p>
        <p class="mt-4 text-gray-700 leading-relaxed">
          See Tinh manages administrative tasks and supports our community with a focus on engagement and customer satisfaction.
        </p>
      </div>
    </div>
  </section>

  <section class="mb-16">
    <h2 class="text-3xl font-semibold text-gray-900 mb-6 fade-in delay-1400">Seller Team</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div class="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105 fade-in delay-1500">
        <h3 class="text-2xl font-bold text-gray-800 mb-2">ƬψƦ</h3>
        <p class="text-gray-600">Nitro, NFA MC, Netflix Seller</p>
        <p class="mt-4 text-gray-700 leading-relaxed">
          ƬψƦ specializes in selling Nitro, NFA MC, and Netflix accounts, ensuring customers get the best deals and services.
        </p>
      </div>
      <div class="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105 fade-in delay-1600">
        <h3 class="text-2xl font-bold text-gray-800 mb-2">Binhandheiskso</h3>
        <p class="text-gray-600">Maker, Seller</p>
        <p class="mt-4 text-gray-700 leading-relaxed">
          Binhandheiskso is responsible for creating and selling various products, offering a diverse range of options for our customers.
        </p>
      </div>
      <div class="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105 fade-in delay-1700">
        <h3 class="text-2xl font-bold text-gray-800 mb-2">Wdym Sakura</h3>
        <p class="text-gray-600">MFA Minecraft Cheapest Seller</p>
        <p class="mt-4 text-gray-700 leading-relaxed">
          Wdym Sakura provides the best deals on MFA Minecraft products, ensuring affordability and quality for our gaming community.
        </p>
      </div>
    </div>
  </section>
</div>
