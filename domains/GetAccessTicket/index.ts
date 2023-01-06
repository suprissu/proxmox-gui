import { z } from "zod";

export const GetAccessTicketScheme = z.object({
  username: z.string(),
  password: z.string(),
});

export type GetAccessTicketParams = z.infer<typeof GetAccessTicketScheme>;
