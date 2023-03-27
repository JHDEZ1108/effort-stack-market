import React from 'react';
import { Helmet } from 'react-helmet';

function MetaData({ title, description, image, url }) {
  return <Helmet>
    {/* Etiquetas para generales */}
    <title>{`ES Market - ${title}`}</title>
    <meta name="description" content={description} />
    <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
    <link rel="canonical" href={url} />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content={`ES Market - ${title}`} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={url} />
    <meta property="og:site_name" content="ES Market" />
    <meta property="og:image" content={image} />
    <meta property="og:image:secure_url" content={image} />
    <meta property="og:image:width" content="1280" />
    <meta property="og:image:height" content="720" />
    <meta name="author" content="Josue Hernandez" />
    <meta name="publisher" content="Effort Stack" />
    
    {/* Etiquetas para twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@jhdez1108" />
    <meta name="twitter:creator" content="@jhdez1108" />
    <meta name="twitter:title" content={`ES Market - ${title}`} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />

    {/* Etiquetas para Facebook */}
    <meta property="fb:app_id" content="Tu ID de Facebook App" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="es_ES" />
    <meta property="og:site_name" content="Effort Stack Market" />

    {/* Etiquetas para Instagram */}
    <meta property="og:type" content="instagram" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="instagram:creator" content="@jhdez1108" />
  </Helmet>
}

export default MetaData;