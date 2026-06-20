// Cloudflare Pages advanced-mode Worker.
// Bounce the bare *.pages.dev hostnames (e.g. releasemode-com.pages.dev and
// develop.releasemode-com.pages.dev) to the canonical custom domain so the
// pages.dev URLs aren't a public, indexable duplicate. Everything served on a
// real hostname (releasemode.com, dev.releasemode.com) passes straight through.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname.endsWith('.pages.dev')) {
      url.hostname = 'releasemode.com';
      url.protocol = 'https:';
      url.port = '';
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
