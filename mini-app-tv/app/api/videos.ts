import type { NextApiRequest, NextApiResponse } from "next";
import videos from "./livepeer-webhook";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(videos);
  } else {
    res.status(405).end();
  }
}
