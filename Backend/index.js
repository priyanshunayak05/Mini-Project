const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));



// MongoDB Atlas Connection
mongoose.connect("mongodb://127.0.0.1:27017/UserCrediential", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Local MongoDB Connected to UserCrediential DB"))
.catch(err => console.error("❌ Connection Error:", err));


const userSchema = new mongoose.Schema({
  vehicleRegNumber: { type: String, required: true, unique: true },
  vehicleType: { type: String, required: true },
  vehicleMakeModel: { type: String, required: true },
  ownerName: { type: String, required: true },
  ownerAddress: { type: String, required: true },
  ownerContact: { type: String, required: true },
  ownerEmail: { type: String, required: true, unique: true },
  drivingLicenseNumber: { type: String, required: true }
});

// Model
const User = mongoose.model("User", userSchema);

// Routes
app.get("/", (req, res) => {
  res.render("register"); // Show registration form
});

app.post("/register", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.send("<h2>✅ User registered successfully!</h2><a href='/'>Go Back</a>");
  } catch (err) {
    res.status(400).send("<h2>❌ Error: " + err.message + "</h2><a href='/'>Go Back</a>");
  }
});

// View registered users (optional)
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.render("users", { users });
  } catch (err) {
    res.status(500).send("❌ Error fetching users: " + err.message);
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚦 Server running on http://localhost:${PORT}`);
});