import app from "./app";
import "./database";
import './config'

app.set("port", process.env.PORT || 443);

app.listen(app.get("port"), () => {
  console.log("server on port", app.get("port"));
});
