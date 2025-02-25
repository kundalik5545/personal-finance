import Head from "next/head";

function MyComponent() {
  const title = "My Awesome Page Title";
  const description =
    "A detailed description of my page content, optimized for search engines.";
  const keywords = "keyword1, keyword2, keyword3, relevant keywords"; // Optional, but can still be helpful
  const ogTitle = "Open Graph Title for Social Sharing"; // For social media
  const ogDescription = "Open Graph Description for Social Sharing";
  const ogImage = "/path/to/social-share-image.jpg"; // Path to your share image
  const canonicalUrl = "https://www.example.com/my-page"; // Important for duplicate content

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />{" "}
        {/* Optional, but some still use it */}
        {/* Open Graph Tags for Social Media */}
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={canonicalUrl} />{" "}
        {/* Important: Include canonical URL */}
        <meta property="og:type" content="website" />{" "}
        {/* Often helpful: specify type */}
        {/* Twitter Card Tags (Similar to Open Graph) */}
        <meta name="twitter:card" content="summary_large_image" />{" "}
        {/* Or "summary" */}
        <meta name="twitter:title" content={ogTitle} />{" "}
        {/* Use same title as OG */}
        <meta name="twitter:description" content={ogDescription} />
        <meta name="twitter:image" content={ogImage} />
        {/* Canonical URL (Important for SEO) */}
        <link rel="canonical" href={canonicalUrl} />
        {/* Other Meta Tags (Less common but sometimes needed) */}
        <meta name="robots" content="index, follow" />{" "}
        {/* Control crawling/indexing */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />{" "}
        {/* For responsiveness */}
        <meta charSet="UTF-8" /> {/* Character set */}
        {/* Example of adding a stylesheet */}
        <link rel="stylesheet" href="/styles.css" />
        {/* Example of adding a favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Rest of your component content */}
      <h1>{title}</h1>
      <p>{description}</p>
      {/* ... */}
    </div>
  );
}

export default MyComponent;
