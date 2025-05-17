import type { NextApiRequest, NextApiResponse } from "next";
import { redis } from "../../lib/redis";

const VIDEOS_KEY = "videos";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const event = req.body;

    if (event && event.asset && event.asset.playbackUrl) {
      const assetId = event.asset.id;
      // Check for duplicates
      const videos = await redis?.lrange(VIDEOS_KEY, 0, -1);
      const exists = videos?.some(
        (v) => v && JSON.parse(v).assetId === assetId,
      );

      if (!exists) {
        await redis?.lpush(
          VIDEOS_KEY,
          JSON.stringify({
            assetId,
            playbackUrl: event.asset.playbackUrl,
            type: "hls",
          }),
        );
      }
    }

    res.status(200).json({ received: true });
  } else {
    res.status(405).end();
  }
}
