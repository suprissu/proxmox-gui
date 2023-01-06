export const EndpointsClient = {
  ACCESS_TICKET: "/access/ticket",
  GET_NODES: "/nodes",
  NODES_SHUTDOWN: "/nodes/shutdown",
} as const;

export const EndpointsAPI = {
  ACCESS_TICKET: "/access/ticket",
  GET_NODES: "/nodes",
  NODES_STATUS: "/nodes/{node}/status",
} as const;
