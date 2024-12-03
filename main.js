import { readToken, delay } from "./utils/file.js";
import { createConnection } from "./utils/websocket.js";
import { showBanner } from "./utils/banner.js";

async function start() {
    showBanner();
    const tokens = await readToken("providers.txt");

    // Buat koneksi tanpa proxy
    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];

        await createConnection(token); // Tidak ada proxy yang digunakan
        await delay(5000);
    }
}

start();
