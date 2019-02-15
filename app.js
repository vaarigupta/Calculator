const express = require('express');
const app = express();


// app.use('/',(req,res,next)=>{
//   next();
// })
app.use(express.static(__dirname + '/CALCI'));
// app.get('/',(req,res)=>{
//   res.send("HELLLOOOO");
// })
app.listen(3000,()=>{
  console.log("Server running at Port 3000");
})
