const functions = require("firebase-functions");
const cors = require("cors")({ origin: true });
const request = require("request");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.getVideos = functions.https.onRequest((req, res) => {
  return cors(req, res, () => {
    const url = `https://www.googleapis.com/youtube/v3/search?key=${
      functions.config().youtube.key
    }&channelId=UCuY6ReStZ9NxJQbSM-HC48g&part=snippet&order=date&maxResults=12`;
    request(url, (err, response, body) => {
      res.status(200).send(body);
    });
  });
});
