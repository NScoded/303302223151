const axios = require("axios");

const TOKEN =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJuaWxlc2hzYWh1MjAyM0Bzc2lwbXQuY29tIiwiZXhwIjoxNzgwODk1ODI0LCJpYXQiOjE3ODA4OTQ5MjQsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiJiMWU3OGVlNy0wMWViLTRhNTEtYTI5YS1hNzVjMWUxYmVmNzAiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJuaWxlc2ggc2FodSIsInN1YiI6ImQyNzRkNjMzLTJiMmMtNGVmMS1iYWVmLTFiZTYxOTFkY2M1YiJ9LCJlbWFpbCI6Im5pbGVzaHNhaHUyMDIzQHNzaXBtdC5jb20iLCJuYW1lIjoibmlsZXNoIHNhaHUiLCJyb2xsTm8iOiIzMDMzMDIyMjMxNTEiLCJhY2Nlc3NDb2RlIjoiYUdCVEpaIiwiY2xpZW50SUQiOiJkMjc0ZDYzMy0yYjJjLTRlZjEtYmFlZi0xYmU2MTkxZGNjNWIiLCJjbGllbnRTZWNyZXQiOiJiR0JDQ1ZNWnlCVHZ3bUtjIn0.XRw6mG5njGWWvExZRX9QaPlNWkwIPyOYxlncw4IpeoU";

async function Log(stack, level, pkg, message) {
  try {
    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      {
        stack,
        level,
        package: pkg,
        message
      },
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json"
        }
      }
    );

    console.log("Log Success:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Log Failed:",
      error.response?.data || error.message
    );
  }
}

module.exports = Log;