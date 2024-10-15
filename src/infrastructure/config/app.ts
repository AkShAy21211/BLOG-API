import express, { NextFunction, Request, Response } from "express";
import blogRoute from "../routes/blog.route";
import connectToDb from "./db";
class App {
  private app: express.Application;

  constructor() {
    this.app = express();
    this.configureMiddleware();
    this.routes();
    this.errorHandling();
  }

  private configureMiddleware() {
    this.app.use(express.json());
  }

  private routes() {
    this.app.use("/api/blogs", blogRoute);
  }

  private errorHandling() {
    this.app.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        console.error(err.stack);
        res.status(500).send("Something broke!");
      }
    );
  }

  public start(port: number) {
    connectToDb();
    this.app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }
}

export default App;
