const mongoose = require("mongoose");

let mongoURI;

if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
} else {
    mongoURI = process.env.Local_DB;
}

module.exports = async function() {
    mongoose.Promise = global.Promise;

    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        });
        console.log("Connected to database: " + mongoURI);
    } catch (error) {
        console.log("Error connnecting to DB: " + error);
    }
};