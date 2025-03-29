const cacheName = "v2";

const cacheAssets = [
    'index.html',
    'src/main.js',
    '/src/index.css'
]

self.addEventListener("install", (e: any) => {
    console.log("install");

    e.waitUntil(
        caches
            .open(cacheName)
            .then((cache: any) => {
                cache.addAll(cacheAssets);
                console.log(cache)}
            )
            .then(() => {(self as unknown as ServiceWorkerGlobalScope).skipWaiting();})
            .catch(err => {
                console.error(err);
            })
    );
})


self.addEventListener("activate", (e: any) => {
    console.log("activate sw");

    e.waitUntil(
        caches.keys().then((cacheKeys: any) => {
            return Promise.all(
                cacheKeys.map((key: any) => {
                    if(key !== cacheName) {
                        console.log(`old keys was`);
                        return caches.delete(key);
                    }
                })
            )
        })
    )
})


self.addEventListener("fetch", async (e: any) => {
    e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
})