const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ANJU-XPRO~yZsxAS6Z#gcjgCkja9YBb36i7gfFdSL_EQvS83-aAqIEw8kk87qg",
};
