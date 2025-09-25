import React from "react";
import Newsletter from "./Newsletter";
import { Helmet } from "react-helmet-async";

const Layout = ({ children }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ADNA Naturals",
    "url": "https://adnanaturals.com",
    "logo": "https://adnanaturals.com/public/feviicon.png",
    "description": "Natural and organic baby care products made with love. Safe, gentle, and effective for your baby's delicate skin.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-000-0000",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://www.facebook.com/adnanaturals",
      "https://www.instagram.com/adnanaturals",
      "https://www.twitter.com/adnanaturals"
    ]
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://adnanaturals.com",
    "name": "ADNA Naturals",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://adnanaturals.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(websiteStructuredData)}
        </script>
      </Helmet>
      <main>{children}</main>
      
    </div>
  );
};

export default Layout;
