const express = require("express");
const fs = require("fs");
const app = express();

const data = require("./data.json");
app.use(express.json());

app.get("/", (req, res) => {
res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
res.setHeader('Access-Control-Allow-Credentials', true);

  res.json(data);
});

app.post("/add", (req, res) => {
res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
res.setHeader('Access-Control-Allow-Credentials', true);

  const newData = req.body;
  const allData = [...data, newData];
  fs.writeFile("./data.json", JSON.stringify(allData), (err) => {
    if (err) throw err;
    res.send("Data Added!");
  });
});

app.post("/update", (req, res) => {
res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
res.setHeader('Access-Control-Allow-Credentials', true);


  const newData = req.body;
  const allData = data.filter((item) => item.key !== newData.key);
  allData.push(newData);
  fs.writeFile("./data.json", JSON.stringify(allData), (err) => {
    if (err) throw err;
    res.send("Data updated!");
  });
});

app.post("/delete", (req, res) => {
res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
res.setHeader('Access-Control-Allow-Credentials', true);

  const newData = req.body;
  console.log(newData)
  const allData = data.filter((item) => item.key !== newData.key);
  fs.writeFile("./data.json", JSON.stringify(allData), (err) => {
    if (err) throw err;
    res.send("Data updated!");
  });
});

app.listen(80, () => {
  console.log("App listening on port 80!");
});
