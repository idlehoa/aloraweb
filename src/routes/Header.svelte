<script>
	import { base } from '$app/paths';
</script>

<header>
  <h1>anitamarket.xyz</h1>
  <nav>
    <ul>
      <li><a href="{base}/">Home</a></li>
      <li><a href="{base}/about">About</a></li>
      <li><a href="{base}/contact">Contact</a></li>
    </ul>
  </nav>

  <style>
    header {
      background-color: #f1f1f1;
      padding: 1rem;
      text-align: center;
      position: fixed;
      top: 0;
      width: 100%;
      border-bottom: 1px solid #ddd;
      z-index: 1000;
    }

    h1 {
      margin: 0;
      font-size: 1.5rem;
      color: #333;
    }

    nav ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }

    nav ul li {
      display: inline;
      margin: 0 1rem;
    }

    nav ul li a {
      text-decoration: none;
      color: #333;
    }

    nav ul li a:hover {
      text-decoration: underline;
    }
  </style>
</header>