// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import infrastructure from "@/bootstrap/Infrastructure.bootstrap";
import { EndpointsAPI } from "@/domains/Endpoints.domains";
import type { NextApiRequest, NextApiResponse } from "next";
import { setCookie } from "cookies-next";

type Data = {
  code: number;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { username, password } = req.body;

  if (!username || !password)
    return res
      .status(400)
      .json({ code: 400, message: "Username or Password should not be empty" });

  const {
    data: { data: result },
  } = await infrastructure.httpServer.post(EndpointsAPI.ACCESS_TICKET, {
    username: `${username}@pam`,
    password,
  });

  setCookie("PVEAuthCookie", result.ticket, { req, res });
  setCookie("csrfpreventiontoken", result.CSRFPreventionToken, { req, res });

  res.status(200).json({ code: 200, message: "You signed in" });
}
