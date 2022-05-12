import type { NextApiRequest, NextApiResponse } from "next";

export default function addTexte(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ page_num: req.query.id, content: "AddTexte" });
}
