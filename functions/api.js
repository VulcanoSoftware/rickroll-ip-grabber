export async function onRequest(context) {
  return new Response(`
    window.API = "${context.env.API}";
    window.WEBHOOK = "${context.env.WEBHOOK}";
  `, {
    headers: {
      "content-type": "application/javascript",
    },
  });
} 