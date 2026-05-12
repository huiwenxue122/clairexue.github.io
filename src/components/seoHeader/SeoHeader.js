import React from "react";
import { Helmet } from "react-helmet";
import {
  greeting,
  seo,
  socialMediaLinks,
  experience,
  contactPageData,
  certifications,
} from "../../portfolio.js";

function absoluteUrl(path) {
  const base = (seo.siteUrl || "https://clairexue.me").replace(/\/$/, "");
  if (!path || path.startsWith("http")) return path || base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

function SeoHeader() {
  const sameAs = socialMediaLinks
    .filter(
      (media) =>
        !(media.link.startsWith("tel") || media.link.startsWith("mailto"))
    )
    .map((media) => media.link);

  const mail = socialMediaLinks
    .find((media) => media.link.startsWith("mailto"))
    .link.substring("mailto:".length);

  const job = experience.sections
    ?.find((section) => section.work)
    ?.experiences?.at(0);

  const credentials = certifications.certifications.map((certification) => ({
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalCredential",
    url: certification.certificate_link,
    name: certification.title,
    description: certification.subtitle,
  }));

  const personUrl = absoluteUrl("/");
  const ogImage = absoluteUrl(seo?.og?.image || "/og-image.png");

  const data = {
    "@context": "https://schema.org/",
    "@type": "Person",
    name: greeting.title,
    url: personUrl,
    email: mail,
    telephone: contactPageData.phoneSection?.subtitle,
    sameAs,
    jobTitle: job?.title,
    worksFor: job
      ? {
          "@type": "Organization",
          name: job.company,
        }
      : undefined,
    address: {
      "@type": "PostalAddress",
      addressLocality: contactPageData.addressSection?.locality,
      addressRegion: contactPageData.addressSection?.region,
      addressCountry: contactPageData.addressSection?.country,
      postalCode: contactPageData.addressSection?.postalCode,
      streetAddress: contactPageData.addressSection?.streetAddress,
    },
    hasCredential: credentials,
  };

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="author" content={seo.author || greeting.title} />
      {seo.keywords ? <meta name="keywords" content={seo.keywords} /> : null}
      <meta name="theme-color" content="#1E7891" />
      <link rel="canonical" href={personUrl} />

      <link rel="icon" href={absoluteUrl("/favicon.ico")} sizes="any" />
      <link rel="shortcut icon" href={absoluteUrl("/favicon.ico")} />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={absoluteUrl("/favicon.png")}
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={absoluteUrl("/apple-touch-icon.png")}
      />

      <meta property="og:title" content={seo?.og?.title} />
      <meta
        property="og:description"
        content={seo?.og?.description || seo.description}
      />
      <meta property="og:type" content={seo?.og?.type || "website"} />
      <meta property="og:url" content={seo?.og?.url || personUrl} />
      <meta property="og:site_name" content={seo?.og?.siteName} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content={seo?.twitter?.card} />
      <meta name="twitter:title" content={seo?.twitter?.title} />
      <meta
        name="twitter:description"
        content={seo?.twitter?.description || seo.description}
      />
      <meta
        name="twitter:image"
        content={absoluteUrl(seo?.twitter?.image || seo?.og?.image)}
      />

      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

export default SeoHeader;
