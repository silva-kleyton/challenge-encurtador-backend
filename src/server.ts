import app from "./App";

app.listen(process.env.SERVER_PORT || 3000, () => {
  console.log(`Server started in port ${process.env.SERVER_PORT || 3000}`);
});
