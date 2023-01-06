// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import infrastructure from "@/bootstrap/Infrastructure.bootstrap";
import { EndpointsAPI } from "@/domains/Endpoints.domains";
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
    console.log(EndpointsAPI.NODES_STATUS.replace("{node}", node));
    const result = await infrastructure.httpServer.post(
      EndpointsAPI.NODES_STATUS.replace("{node}", node),
      {
        command: "shutdown",
      },
      {
        headers: { Cookie: `PVEAuthCookie=${ticket}`, csrfpreventiontoken },
      }
    );
    console.log(result);
    return res.status(200).json({ code: 200, message: "OK" });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ code: 500, message: `Server failed to shutdown. trace(${e})` });
  }
}
