# George Shop

Website for **George Shop – Hair Stylist**, with two salons in Lebanon: Rabieh Mtayleb and Dekwaneh.

## Domain

| | |
|---|---|
| Domain | **georgeshop.co** |
| Live URL | https://georgeshop.co/ (no `www`) |
| Registrar | [Spaceship](https://www.spaceship.com/domain-search/domains/?query=georgeshop.co) |

The site is already set up for `https://georgeshop.co/`: the canonical URL, social sharing tags, structured data, `sitemap.xml` and `robots.txt` all use this address. If the domain ever changes, search the project for `georgeshop.co` and update every match.

## Going live

1. Buy the domain at Spaceship.
2. Upload the site to a static host (Netlify, Cloudflare Pages, Vercel or GitHub Pages) and connect `georgeshop.co` to it, following the host's custom-domain guide. The DNS records are set at Spaceship.
3. Add `www.georgeshop.co` too, as a **301 redirect to `https://georgeshop.co`**. Only one address should ever show the site; otherwise Google sees two copies.
4. Make sure HTTPS is on (all the hosts above do this for free) and that `http://` redirects to `https://`.

## SEO checklist after launch

- [ ] Add the site to [Google Search Console](https://search.google.com/search-console), verify ownership, and submit `https://georgeshop.co/sitemap.xml`.
- [ ] Set the website on **both** Google Business profiles (Rabieh Mtayleb and Dekwaneh) to `https://georgeshop.co/`.
- [ ] Put the same link in the Instagram bio and on the Facebook page.
- [ ] Test the page with Google's [Rich Results Test](https://search.google.com/test/rich-results); it should find both salons.
- [ ] Test sharing a link on WhatsApp/Facebook; it should show the logo preview image.
- [ ] Add the Dekwaneh street address to the structured data in `index.html` (only the area is listed now). A full address helps local search.
- [ ] Update `<lastmod>` in `sitemap.xml` whenever the page content changes.

## Files

```
index.html          Page content, SEO tags and structured data
css/style.css       All styles
js/main.js          Opening-hours status, background video, card hover light
assets/             Logo, icons, background videos and still images
favicon.ico         Browser tab icon
site.webmanifest    App name and icons for "Add to Home Screen"
robots.txt          Search engine crawl rules
sitemap.xml         Page list for search engines
_headers            Security and caching headers (Netlify / Cloudflare Pages)
```

There is no build step. Upload the files as they are to any static host.

## Updating content

Phone numbers, opening hours, addresses and map links appear in two places in `index.html`, and both must match:

- the branch cards in the page body
- the structured data block (`application/ld+json`) in the `<head>`, which Google uses for search results and Maps

Opening hours also live in the `data-open` / `data-close` attributes on each branch (24-hour clock). The "Open Now / Closed" label is worked out from these, using Beirut time.
