import express from 'express';

const app = express();
const port = 5000;

app.get("/", (req, res) => {
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>StudyHub Server Status</title>
</head>
<body style="text-align: center; background-color: #f4f4f4; font-family: Arial, sans-serif; padding: 50px;">
    <div style="background: #fff; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); display: inline-block;">
        <h1 style="color: #28a745;">✅ StudyHub Server is Working Properly!</h1>
        <p style="color: #333; font-size: 18px;">The server is running smoothly without any issues.</p>
    </div>
</body>
</html>`);
});

app.listen(port, () => {
    console.log(`StudyHub Server is running on http://localhost:${port}`);
});
