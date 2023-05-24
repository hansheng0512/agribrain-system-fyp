export const getCurrentWeather = async (req, res) => {
    try {
        const response = await fetch('http://api.weatherapi.com/v1/current.json?key=ed6616bf3b1d4d57b7a114539232405&q=cameron highlands&aqi=yes', {
            credentials: 'include',
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
}