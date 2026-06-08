const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJuaWxlc2hzYWh1MjAyM0Bzc2lwbXQuY29tIiwiZXhwIjoxNzgwOTAzNjA4LCJpYXQiOjE3ODA5MDI3MDgsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiI1NmI1ODcxYS0zN2ZmLTQzZDQtOTU1My1iZDU2N2U5NDYyNTkiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJuaWxlc2ggc2FodSIsInN1YiI6ImQyNzRkNjMzLTJiMmMtNGVmMS1iYWVmLTFiZTYxOTFkY2M1YiJ9LCJlbWFpbCI6Im5pbGVzaHNhaHUyMDIzQHNzaXBtdC5jb20iLCJuYW1lIjoibmlsZXNoIHNhaHUiLCJyb2xsTm8iOiIzMDMzMDIyMjMxNTEiLCJhY2Nlc3NDb2RlIjoiYUdCVEpaIiwiY2xpZW50SUQiOiJkMjc0ZDYzMy0yYjJjLTRlZjEtYmFlZi0xYmU2MTkxZGNjNWIiLCJjbGllbnRTZWNyZXQiOiJiR0JDQ1ZNWnlCVHZ3bUtjIn0.NAVI0R0Q76uYe9Fot9YQABUNBQbW6KQSyWDwahhtfFU";

app.get("/api/notifications", async (req, res) => {
  try {
    const response = await axios.get(
      "http://4.224.186.213/evaluation-service/notifications",
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );

    res.json(response.data);
  } catch (err) {
    res.status(500).json({
      error: err.response?.data || err.message,
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});