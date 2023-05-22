const rootDir = require("../util/path");

const fs = require("fs");

const path = require("path");

const Chat = require("../models/chatapp");

exports.getLogin = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "login.html"));
};

exports.postLogin = (req, res, next) => {
  res.redirect("/");
};

exports.getMessage = (req, res, next) => {
  // fs.readFile("message.txt", (err, data) => {
  //   if (err) {
  //     console.log(err);
  //   }
  res.sendFile(path.join(rootDir, "views", "message.html"));
  //   // res.send(`${data}`);
  // });
};

exports.postMessage = (req, res, next) => {
  // fs.writeFile(
  //   "message.txt",
  //   ` ${req.body.username} : ${req.body.message}  `,
  //   { flag: "a" },
  //   (err) => {
  //     //flag: a is added to append the msgs instead od getiing replaced
  //     if (err) {
  //       console.log(err);
  //     }

  const user = req.body.username;
  const msg = req.body.message;

  // const chat = {
  //   user: msg,
  // };

  const chat = new Chat(req.body.username, req.body.message);
  chat.save();
  res.redirect("/store");
};
//   );
// };

exports.getContactus = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contactus.html"));
};

exports.postContactus = (req, res, next) => {
  res.redirect("/success");
};

exports.getSuccess = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "success.html"));
};

exports.getStored = (req, res, next) => {
  // const viewsData = {
  //   chats: Chat.fetchAll(),
  // };
  res.sendFile(path.join(rootDir, "views", "store.html"));
};

// exports.postStored = (req, res, next) => {

//   res.redirect("/");
// };
