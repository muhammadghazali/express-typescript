import { Router, RouterOptions } from "express";
import { Request, Response, NextFunction } from "express";
import axios from "axios";
import { AxiosResponse } from "axios";

const router = Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  axios
    .get("https://jsonplaceholder.typicode.com/photos")
    .then((response: AxiosResponse) => {
      res.send(response.data);
    });
});

export default router;
