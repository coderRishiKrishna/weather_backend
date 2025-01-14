const express = require('express');
const cors = require('cors');
const axios = require('axios');
const config = require('./config');

const app = express();

// Enable CORS - Move this to the top, before any routes
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// Routes
app.get('/weather', async (req, res) => {
    try {
        const { city } = req.query;
        
        if (!city) {
            return res.status(400).json({ message: 'City parameter is required' });
        }

        const response = await axios.get(
            `${config.WEATHER_API_URL}/current.json`,
            {
                params: {
                    key: config.WEATHER_API_KEY,
                    q: city
                }
            }
        );

        const weatherData = {
            name: response.data.location.name,
            region: response.data.location.region,
            country: response.data.location.country,
            temperature: response.data.current.temp_c,
            condition: response.data.current.condition.text,
            conditionIcon: response.data.current.condition.icon,
            humidity: response.data.current.humidity,
            windSpeed: response.data.current.wind_kph,
            feelsLike: response.data.current.feelslike_c,
            lastUpdated: response.data.current.last_updated
        };

        res.json(weatherData);
    } catch (error) {
        if (error.response && error.response.status === 404) {
            res.status(404).json({ message: 'City not found' });
        } else {
            console.error('Weather API Error:', error);
            res.status(500).json({ message: 'Failed to fetch weather data' });
        }
    }
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'OK' });
});

// Start server
app.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`);
}); 