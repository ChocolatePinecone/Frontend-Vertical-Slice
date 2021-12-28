const userRoutes = require('./menu-items');
const cors = require("cors")

const appRouter = (app, fs) => {
    app.use(cors());
    app.get('/', (req, res) => {
        res.send('welcome to the Slice restaurant api-server!');
    });

    // run our user route module here to complete the wire up
    userRoutes(app, fs);

};

module.exports = appRouter;