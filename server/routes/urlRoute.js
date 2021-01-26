const express = require("express");
const router = express.Router();
const shortId = require("shortid");
const UrlModel = require("../models/url.model");

router.use(express.json());

router.post("/", async (req, res) => {
    let longUrl = req.body.newUrl;
    try {
        let url = await UrlModel.findOne({ longUrl: longUrl });
        if (url) {
            return res.status(200).json(url);
        } else {
            const urlCode = shortId.generate();
            const urlBase = longUrl.replace("https://", "")
                                    .replace("http://", "")
                                    .split('/')[0];
            const shortUrl = urlBase + "/" + urlCode;
            
            url = new UrlModel({
                urlCode,
                shortUrl,
                longUrl
            });

            await url.save()
            return res.status(201).json(url);
        }
    } catch (err) {
        console.error(err.message);
        return res.status(500).json("Internal Server error " + err.message);
    }
});

module.exports = router;