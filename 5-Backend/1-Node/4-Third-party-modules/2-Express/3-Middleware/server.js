import express from "express";
const app = express();
const PORT = 5000;

// req (browser) <=> middleware <=> res (server)
// middleware => function => parameters: req, res, next()

// Middleware function
const middlewareOne = (req, res, next) => {
  console.log("Middleware One");
  next();
};

const middlewareTwo = (req, res, next) => {
  console.log("Middleware Two");
  next();
};

const commonMiddleware = (req, res, next) => {
  console.log("commonMiddleware");
  next();
};

const auth = (req, res, next) => {
  const { username } = req.query;
  if (username === "john") {
    req.lastname = "robert";
    next();
  } else {
    res.status(400).json({ success: false, message: "Invalid user" });
  }
};

// app.use(commonMiddleware);

app.get("/", middlewareOne, (req, res) => {
  res.status(200).json({ success: true, message: "Welcome to Middleware" });
});

app.get("/about", [middlewareOne, middlewareTwo], (req, res) => {
  res.status(200).json({ success: true, message: "About page" });
});

app.get("/projects", (req, res) => {
  res.status(200).json({ success: true, message: "Projects page" });
});

app.get("/login", auth, (req, res) => {
  const { username } = req.query;
  const { lastname } = req;
  res
    .status(200)
    .json({ success: true, message: `Welcome, ${username}, ${lastname}` });
});

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
});
