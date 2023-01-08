// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import infrastructure from "@/bootstrap/Infrastructure.bootstrap";
import { EndpointsAPI } from "services/Endpoints.services";
import type { NextApiRequest, NextApiResponse } from "next";
import { getCookie, setCookie } from "cookies-next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { node } = req.body;
  const ticket = getCookie("PVEAuthCookie", { req, res });
  const csrfpreventiontoken = getCookie("csrfpreventiontoken", { req, res });

  if (!ticket || !csrfpreventiontoken)
    return res.status(401).json({ code: 401, message: "Unauthorized" });

  try {
    await infrastructure.httpServer.post(
      EndpointsAPI.NODE_WOL.replace("{node}", node),
      {},
      {
        headers: { Cookie: `PVEAuthCookie=${ticket}`, csrfpreventiontoken },
      }
    );
    return res.status(200).json({ code: 200, message: "OK" });
  } catch (e) {
    return res
      .status(500)
      .json({ code: 500, message: `Server failed to wake. trace(${e})` });
  }
}
