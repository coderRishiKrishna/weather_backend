module.exports = {
    PORT: process.env.PORT || 3000,
    WEATHER_API_KEY: process.env.WEATHER_API_KEY || '0d74c7b5c4994028921172949251201',
    WEATHER_API_URL: 'https://api.weatherapi.com/v1',
    CORS_OPTIONS: {
        origin: ['http://localhost:5500', 'http://127.0.0.1:5500'],
        methods: ['GET', 'POST', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true
    }
}; 