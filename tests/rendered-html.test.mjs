import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
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
}

test("renders the finished project homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Research WeChat Publisher<\/title>/i);
  assert.match(html, /让论文更好读/);
  assert.match(html, /润色表达，不改写事实/);
  assert.match(html, /一分钟安装/);
  assert.match(html, /aria-label="切换语言"/);
  assert.match(html, />EN<\/button>/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
});
