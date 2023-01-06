import { env } from "@/config/Environment.config";
import Http from "./Http.bootstrap";

class Infrastructure {
  httpClient: Http;
  httpServer: Http;

  constructor() {
    this.httpClient = new Http({
      baseURL: env.baseUrl + env.basePath,
      headers: {
        "Content-Type": "application/json",
      },
    });
    this.httpServer = new Http({
      baseURL: env.apiBaseUrl + env.apiBasePath,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  }
}

const infrastructure = new Infrastructure();
export default infrastructure;
