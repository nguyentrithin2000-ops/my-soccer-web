export default async function handler(req, res) {
    try {
        const response = await fetch("https://api-ls.cdnokvip.com/api/get-livestream-group", {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
                "Referer": "https://nccsc.net/"
            }
        });
        const data = await response.json();
        
        // Cho phép Frontend của bạn lấy data mà không bị lỗi CORS
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Lỗi kết nối API gốc" });
    }
}
