# Weather Dashboard Backend

This repository contains the backend API for the **Weather Dashboard** application, which handles weather data requests from the frontend. It integrates with the [WeatherAPI](https://www.weatherapi.com/) to fetch weather information for a given city.

## Overview

The backend API provides a route to search for weather information by city name and returns the current weather conditions, including temperature, humidity, wind speed, and other relevant data. It also handles error cases for invalid city searches and includes a health check endpoint for monitoring.

## Features

- **Weather Search**: Allows users to get the current weather for a specified city.
- **Error Handling**: Handles errors like missing city parameters, invalid city names, and API failures.
- **Health Check**: A simple health check endpoint to ensure the server is running correctly.
- **CORS Support**: Configured to accept requests from specific origins for frontend communication.

## API Endpoints

### 1. **GET `/weather`**

Fetches the weather data for a specific city.

**Query Parameters:**
- `city` (required): The name of the city for which the weather data is requested.

**Example Request:**
#
