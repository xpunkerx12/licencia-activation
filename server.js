const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.get("/app/wm/demo/lic/", (req, res) => {
    console.log("Solicitud recibida desde la extensión:", req.query);
    
    res.json({
        "status": "success",
        "message": "",
        "data": {
            "remainingdays": 365,   // Puedes cambiar esto a 730 o más si quieres
            "expires_on": "2026-02-15",  // Fecha de expiración falsa
            "mobile": req.query.phonenumber || "573046384844"
        },
        "set": "set",
        "SOAP": "KzkxOTA0OTc0MDQzMQ==",
        "reviewlink": "https://chrome.google.com/webstore/detail/wa-biz-free-bulk-sender/njlokjfmljicmjpongdkpgkpcemppmbn/review",
        "deactivated": false  // Nos aseguramos de que la licencia no se desactive
    });
});

app.listen(port, () => {
    console.log(`✅ Servidor corriendo en http://localhost:${port}`);
});