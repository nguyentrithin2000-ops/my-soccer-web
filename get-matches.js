// api/get-matches.js
export default async function handler(req, res) {
    try {
        const response = await fetch("https://api-ls.cdnokvip.com/api/get-livestream-group", {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
                "Referer": "https://nccsc.net/"
            }
        });
        const data = await response.json();
        
        // Cho phép web của bạn truy cập thoải mái
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Lỗi lấy dữ liệu" });
    }
}