import type { NextApiRequest, NextApiResponse } from "next";

// In-memory store for demo purposes. Replace with a database in production.
const videos: any[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const event = req.body;

    // Example: Livepeer sends asset info in event.asset
    if (event && event.asset && event.asset.playbackUrl) {
      // Avoid duplicates
      if (!videos.find((v) => v.assetId === event.asset.id)) {
        videos.unshift({
          assetId: event.asset.id,
          playbackUrl: event.asset.playbackUrl,
          type: "hls", // or "video" if it's an mp4
        });
      }
    }

    res.status(200).json({ received: true });
  } else {
    res.status(405).end();
  }
}

// Export videos for use in other API routes
export { videos };
