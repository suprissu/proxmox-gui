export const EndpointsClient = {
  ACCESS_TICKET: "/access/ticket",
  GET_NODES: "/nodes",
  NODES_SHUTDOWN: "/nodes/shutdown",
  NODES_WAKE: "/nodes/wake",
} as const;

export const EndpointsAPI = {
  ACCESS_TICKET: "/json/access/ticket",
  GET_NODES: "/json/nodes",
  NODES_STATUS: "/json/nodes/{node}/status",
  NODE_WOL: "/extjs/nodes/{node}/wakeonlan",
} as const;
