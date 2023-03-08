import Head from 'next/head';

function MyPage() {
  return (
    <div>
      <Head>
        {/* Open Graph Protocol (OGP) meta tags */}
        <meta property="og:title" content="My Portfolio Web" />
        <meta property="og:description" content="Check out my awesome portfolio web!" />
        <meta property="og:image" content="https://example.com/my-portfolio-image.jpg" />
        <meta property="og:url" content="https://example.com/my-portfolio-web" />
        <meta property="og:type" content="website" />

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="My Portfolio Web" />
        <meta name="twitter:description" content="Check out my awesome portfolio web!" />
        <meta name="twitter:image" content="https://example.com/my-portfolio-image.jpg" />
        <meta name="twitter:url" content="https://example.com/my-portfolio-web" />

        {/* Facebook meta tags */}
        <meta property="fb:app_id" content="{your-facebook-app-id}" />
      </Head>
      {/* Rest of your page content */}
    </div>
  );
}
