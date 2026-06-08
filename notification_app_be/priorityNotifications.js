

const axios = require("axios");

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJuaWxlc2hzYWh1MjAyM0Bzc2lwbXQuY29tIiwiZXhwIjoxNzgwOTAwMjU2LCJpYXQiOjE3ODA4OTkzNTYsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiIyNmM1OWE0YS1iZmVjLTQ1NTAtYWUwMy1hNGNlMDA0YzkwODciLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJuaWxlc2ggc2FodSIsInN1YiI6ImQyNzRkNjMzLTJiMmMtNGVmMS1iYWVmLTFiZTYxOTFkY2M1YiJ9LCJlbWFpbCI6Im5pbGVzaHNhaHUyMDIzQHNzaXBtdC5jb20iLCJuYW1lIjoibmlsZXNoIHNhaHUiLCJyb2xsTm8iOiIzMDMzMDIyMjMxNTEiLCJhY2Nlc3NDb2RlIjoiYUdCVEpaIiwiY2xpZW50SUQiOiJkMjc0ZDYzMy0yYjJjLTRlZjEtYmFlZi0xYmU2MTkxZGNjNWIiLCJjbGllbnRTZWNyZXQiOiJiR0JDQ1ZNWnlCVHZ3bUtjIn0.JVQpKi5tJL_EYWs4WIBpyjR52zvzEbhjAY1phSY72Dk";

const priority = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

async function getTopNotifications() {
  try {
    const response = await axios.get(
      "http://4.224.186.213/evaluation-service/notifications",
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );

    const notifications = response.data.notifications;

    notifications.sort((a, b) => {
      const p1 = priority[a.Type];
      const p2 = priority[b.Type];

      if (p1 !== p2) {
        return p2 - p1;
      }

      return new Date(b.Timestamp) - new Date(a.Timestamp);
    });

    const top10 = notifications.slice(0, 10);

    console.log("===== TOP 10 PRIORITY NOTIFICATIONS =====");

    top10.forEach((n, index) => {
      console.log(
        `${index + 1}. ${n.Type} | ${n.Message} | ${n.Timestamp}`
      );
    });

  } catch (err) {
    console.error(err.response?.data || err.message);
  }
}

getTopNotifications();