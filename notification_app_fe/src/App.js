import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Chip,
} from "@mui/material";

function App() {
  const [notifications, setNotifications] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/notifications"
      );

      const data = await response.json();

      setNotifications(data.notifications || []);
    } catch (error) {
      console.error(error);
    }
  };

  const filteredNotifications =
    filter === "All"
      ? notifications
      : notifications.filter(
          (notification) => notification.Type === filter
        );

  const topPriority = [...notifications]
    .filter((n) => n.Type === "Placement")
    .slice(0, 3);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Campus Notification System
      </Typography>

      <Typography variant="h6" sx={{ mt: 3, mb: 2 }}>
        ⭐ Top Priority Notifications
      </Typography>

      <Grid container spacing={2} sx={{ mb: 4 }}>
        {topPriority.map((notification) => (
          <Grid item xs={12} md={4} key={notification.ID}>
            <Card sx={{ border: "2px solid green" }}>
              <CardContent>
                <Chip
                  label="TOP PRIORITY"
                  color="success"
                  sx={{ mb: 1 }}
                />

                <Typography variant="h6">
                  {notification.Type}
                </Typography>

                <Typography>
                  {notification.Message}
                </Typography>

                <Typography variant="body2">
                  {notification.Timestamp}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel>Filter</InputLabel>

        <Select
          value={filter}
          label="Filter"
          onChange={(e) => setFilter(e.target.value)}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Placement">Placement</MenuItem>
          <MenuItem value="Result">Result</MenuItem>
          <MenuItem value="Event">Event</MenuItem>
        </Select>
      </FormControl>

      <Grid container spacing={2}>
        {filteredNotifications.map((notification) => (
          <Grid item xs={12} md={6} key={notification.ID}>
            <Card>
              <CardContent>
                <Typography variant="h6">
                  {notification.Type}
                </Typography>

                <Typography>
                  {notification.Message}
                </Typography>

                <Typography variant="body2">
                  {notification.Timestamp}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default App;