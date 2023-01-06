// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import infrastructure from "@/bootstrap/Infrastructure.bootstrap";
import Endpoints from "@/domains/Endpoints.domains";
import type { NextApiRequest, NextApiResponse } from "next";
import { getCookie, setCookie } from "cookies-next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const ticket = getCookie("PVEAuthCookie", { req, res });

  if (!ticket)
    return res.status(401).json({ code: 401, message: "Unauthorized" });

  const {
    data: { data: result },
  } = await infrastructure.httpServer.get(Endpoints.GET_NODES, {
    headers: { Cookie: `PVEAuthCookie=${ticket}` },
  });

  return res.status(200).json(result);
}
