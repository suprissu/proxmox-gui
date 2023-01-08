// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import infrastructure from "@/bootstrap/Infrastructure.bootstrap";
import { EndpointsAPI } from "services/Endpoints.services";
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
  } = await infrastructure.httpServer.get(EndpointsAPI.GET_NODES, {
    headers: { Cookie: `PVEAuthCookie=${ticket}` },
  });

  return res.status(200).json(result);
}
