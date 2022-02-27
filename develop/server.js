// Import required dependencies
const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
// ------------------------------------------------------------------------------
// Set Up Server
const app = express();
const PORT = process.env.PORT || 3001;
// ------------------------------------------------------------------------------
// Express Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// ------------------------------------------------------------------------------
// Start Server
app.use(routes);
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
})