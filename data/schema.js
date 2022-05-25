export default (url) => {
  return {
    type: "application/ld+json",
    json: {
      "@context": "https://schema.org/",
      "@type": "Website",
      "@url": url,
      name: "Vepaar",
      author: {
        "@type": "Person",
        name: "Kaushal Gajjar",
      },
      datePublished: "",
      description: "Online business app like WhatsApp business app",
    },
  };
};
