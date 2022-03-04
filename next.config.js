/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'upload.wikimedia.org',
      'www.orbit.co.nz',
      'jsonkeeper.com',
      'links.papareact.com',
    ],
  },
  env: {
    mapbox_key:
      'pk.eyJ1IjoiYTJkZXYiLCJhIjoiY2wwYmp0amtrMHdnMDNpbGd5cXlmY3I2NiJ9.iwX0tU5YM1PIv4fw9jTz3Q',
  },
}
