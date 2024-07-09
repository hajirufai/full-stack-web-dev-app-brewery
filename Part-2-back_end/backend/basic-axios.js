import express from "express";
import axios from "axios";

// Create an express app and set the port number.
const app = express();
const port = 3000;

// AXIOS to GET DATA
app.get("/", async (req, res) => {
    try {
      const result = await axios.get("https://secrets-api.appbrewery.com/random");
    //   console.log(result, typeof(result));
    //   console.log(result)
      res.render("index.ejs", {
        secret: result.data.secret,
        user: result.data.username,
      });
    } catch (error) {
      console.log(error.response.data);
      res.status(500);
    }
  });


// Listen on your predefined port and start the server
app.listen(port, () => {
  console.log(`Listening at port ${port}...`);
});


