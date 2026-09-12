require("dotenv").config();


const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");


const authRoute = require("./routes/AuthRoute");
const { requireAuth } = require("./middlewares/AuthMiddleware");
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 3002;
const url = process.env.MONGODB_URI;

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "https://zerodha-frontend-56tq.onrender.com",
      "https://zerodha-dashboard-x0wa.onrender.com",
    ],
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(cookieParser());


app.use("/api/auth", authRoute); 
app.get("/api/protected", requireAuth, (req, res) => {
  res.json({
    message: "You are authorized!",
    userId: req.userId,
  });
});

//logout 
app.post("/api/auth/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "lax",
    secure: true,
  });

  res.json({ message: "Logout successful" });
});

//  app.get("/addHoldings", async (req, res) => {


//   let tempHoldings = [
//     {
//       name: "BHARTIARTL",
//       qty: 2,
//       avg: 538.05,
//       price: 541.15,
//       net: "+0.58%",
//       day: "+2.99%",
//     },
//     {
//       name: "HDFCBANK",
//       qty: 2,
//       avg: 1383.4,
//       price: 1522.35,
//       net: "+10.04%",
//       day: "+0.11%",
//     },
//     {
//       name: "HINDUNILVR",
//       qty: 1,
//       avg: 2335.85,
//       price: 2417.4,
//       net: "+3.49%",
//       day: "+0.21%",
//     },
//     {
//       name: "INFY",
//       qty: 1,
//       avg: 1350.5,
//       price: 1555.45,
//       net: "+15.18%",
//       day: "-1.60%",
//       isLoss: true,
//     },
//     {
//       name: "ITC",
//       qty: 5,
//       avg: 202.0,
//       price: 207.9,
//       net: "+2.92%",
//       day: "+0.80%",
//     },
//     {
//       name: "KPITTECH",
//       qty: 5,
//       avg: 250.3,
//       price: 266.45,
//       net: "+6.45%",
//       day: "+3.54%",
//     },
//     {
//       name: "M&M",
//       qty: 2,
//       avg: 809.9,
//       price: 779.8,
//       net: "-3.72%",
//       day: "-0.01%",
//       isLoss: true,
//     },
//     {
//       name: "RELIANCE",
//       qty: 1,
//       avg: 2193.7,
//       price: 2112.4,
//       net: "-3.71%",
//       day: "+1.44%",
//     },
//     {
//       name: "SBIN",
//       qty: 4,
//       avg: 324.35,
//       price: 430.2,
//       net: "+32.63%",
//       day: "-0.34%",
//       isLoss: true,
//     },
//     {
//       name: "SGBMAY29",
//       qty: 2,
//       avg: 4727.0,
//       price: 4719.0,
//       net: "-0.17%",
//       day: "+0.15%",
//     },
//     {
//       name: "TATAPOWER",
//       qty: 5,
//       avg: 104.2,
//       price: 124.15,
//       net: "+19.15%",
//       day: "-0.24%",
//       isLoss: true,
//     },
//     {
//       name: "TCS",
//       qty: 1,
//       avg: 3041.7,
//       price: 3194.8,
//       net: "+5.03%",
//       day: "-0.25%",
//       isLoss: true,
//     },
//     {
//       name: "WIPRO",
//       qty: 4,
//       avg: 489.3,
//       price: 577.75,
//       net: "+18.08%",
//       day: "+0.32%",
//     },
//   ];


//    tempHoldings.forEach((item) => {
//     let newHolding = new HoldingsModel({
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//     });

//     newHolding.save();
//   });

//   res.send("Done!");

// });

// app.get("/addPositions", async (req, res) => {
//   let tempPositions = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];

//   tempPositions.forEach((item) => {
//     let newPosition = new PositionsModel({
//       product: item.product,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss: item.isLoss,
//     });

//     newPosition.save();
//   });
//   res.send("Done!");
// });


app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});


app.post("/newOrder", async (req, res) => {

  //order save 
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  await newOrder.save();


  //  Buy
  if (req.body.mode === "BUY") {
    let existingHolding = await HoldingsModel.findOne({
      name: req.body.name,
    });

    if (existingHolding) {
      let newQty = existingHolding.qty + Number(req.body.qty);

      let newAvg =
        (existingHolding.qty * existingHolding.avg +
          Number(req.body.qty) * Number(req.body.price)) /
        newQty;

      existingHolding.qty = newQty;
      existingHolding.avg = newAvg;
      existingHolding.price = Number(req.body.price);

      await existingHolding.save();
    } else {
      let newHolding = new HoldingsModel({
        name: req.body.name,
        qty: Number(req.body.qty),
        avg: Number(req.body.price),
        price: Number(req.body.price),
        net: "0.00%",
        day: "0.00%",
      });

      await newHolding.save();
    }
  }

  // SELL
    if (req.body.mode === "SELL") {
    let existingHolding = await HoldingsModel.findOne({
      name: req.body.name,
    });

    if (!existingHolding) {
      return res.status(400).send("No holdings available!");
    }

    if (Number(req.body.qty) > existingHolding.qty) {
      return res.status(400).send("Insufficient quantity!");
    }

    existingHolding.qty =
      existingHolding.qty - Number(req.body.qty);

    if (existingHolding.qty === 0) {
      await HoldingsModel.deleteOne({
        _id: existingHolding._id,
      });
    } else {
      existingHolding.price = Number(req.body.price);
      await existingHolding.save();
    }
  }

  res.send("Order saved!");
});

app.get("/allOrders", async (req, res) => {
  let allOrders = await OrdersModel.find({});
  res.json(allOrders);
});



app.listen(PORT, () => {
  console.log("App started!");
   mongoose.connect(url);
  console.log("DB started!");
});

