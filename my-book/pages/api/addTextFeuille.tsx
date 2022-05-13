import type { NextApiRequest, NextApiResponse } from "next";

//Component to add a Feuille to the book
export default function addTexte(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ page_num: req.query.id, content: "AddTexte" });
}
