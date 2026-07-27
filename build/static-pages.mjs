import { cp, mkdir, rm, writeFile } from "node:fs/promises";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("static", `${process.pid}-${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

await mkdir(new URL("../dist/client/", import.meta.url), { recursive: true });
await rm(new URL("../dist/client/reports/", import.meta.url), { recursive: true, force: true });
await cp(new URL("../public/reports/", import.meta.url), new URL("../dist/client/reports/", import.meta.url), {
  recursive: true,
});

const mobileMenuScript = `<script>
document.addEventListener("click", function (event) {
  var link = event.target.closest && event.target.closest(".mobile-menu a");
  if (!link) return;
  var menu = link.closest(".mobile-menu");
  if (menu) menu.removeAttribute("open");
});
</script>`;

const renderPage = async (path, outputPath) => {
  const response = await worker.fetch(
    new Request(`https://hitotsuyanet.pages.dev${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  if (!response.ok) {
    throw new Error(`Static render failed for ${path} with status ${response.status}`);
  }

  const html = (await response.text())
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<script\b[^>]*><\/script>/gi, "")
    .replace(/<link rel="modulepreload"[^>]*>/gi, "")
    .replace("</body>", `${mobileMenuScript}</body>`);

  await mkdir(new URL(`../dist/client/${outputPath.replace(/\/?index\.html$/, "")}`, import.meta.url), {
    recursive: true,
  });
  await writeFile(new URL(`../dist/client/${outputPath}`, import.meta.url), html);
  return html;
};

const html = await renderPage("/", "index.html");
await renderPage("/reports", "reports/index.html");
await renderPage("/reports/ibasho-stamp-rally", "reports/ibasho-stamp-rally/index.html");
await renderPage("/reports/yorimichi-guide", "reports/yorimichi-guide/index.html");

const cssHref = html.match(/href="([^"]+\.css)"/)?.[1] ?? "";

await writeFile(
  new URL("../dist/client/thanks.html", import.meta.url),
  `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>お問い合わせありがとうございました｜ひとつやねっと</title>
  <meta name="robots" content="noindex">
  <link rel="stylesheet" href="${cssHref}">
</head>
<body>
  <main class="thanks-page">
    <section class="thanks-panel">
      <a class="brand" href="/"><span class="brand-mark">ひ</span><span class="brand-text"><span>ひとつやねっと</span><small>調布・狛江居場所連絡会</small></span></a>
      <p class="eyebrow">THANK YOU</p>
      <h1>お問い合わせありがとうございました。</h1>
      <p>内容を確認のうえ、担当者よりご連絡します。返信まで少しお時間をいただく場合があります。</p>
      <hr>
      <h2>Thank you for your message.</h2>
      <p>We have received your inquiry. A member of our team will review it and get back to you as soon as possible.</p>
      <div class="thanks-actions">
        <a class="button primary" href="/">トップへ戻る <span>→</span></a>
        <a class="text-link" href="/#contact">お問い合わせに戻る</a>
      </div>
    </section>
  </main>
</body>
</html>`,
);
