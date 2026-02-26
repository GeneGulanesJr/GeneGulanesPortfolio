/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
// Send initial page_view (plugin sets send_page_view: false and only sends on route change)
exports.onInitialClientRender = () => {
  const sendInitialPageView = () => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_path: window.location.pathname + window.location.search + window.location.hash,
      });
    }
  };
  if (typeof requestAnimationFrame !== 'undefined') {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setTimeout(sendInitialPageView, 0));
    });
  } else {
    setTimeout(sendInitialPageView, 32);
  }
};
