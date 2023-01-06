import axios, {
  AxiosHeaders,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  CreateAxiosDefaults,
} from "axios";

import { env } from "@/config/Environment.config";

/**
 * This HTTP class uses `axios` for its HTTP instance.
 * You can learn  more by going this link:
 * https://github.com/sindresorhus/axios
 */
export default class Http {
  instance: AxiosInstance;

  config: CreateAxiosDefaults<unknown>;

  constructor(config?: CreateAxiosDefaults<unknown>) {
    const conf = {
      baseURL: env.baseUrl,
      headers: {
        ...config?.headers,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      ...config,
    } as CreateAxiosDefaults<unknown>;
    this.instance = axios.create(conf);
    this.config = conf;
  }

  /**
   * Updates the configuration of the Http instance, and recreates the http instance with the new config.
   * @param config axios config
   */
  updateConfig(config: AxiosRequestConfig<unknown>): void {
    const newConfig = { ...this.config, ...config };
    this.config = newConfig;
    this.instance = axios.create(newConfig);
  }

  /**
   * GET operation
   * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET)
   * @param url URL to the endpoint
   * @param config Configuration object
   * @returns The response from endpoint
   */
  get(
    url: string,
    config?: AxiosRequestConfig<unknown>
  ): Promise<AxiosResponse> {
    return this.instance.get(url, config);
  }

  /**
   * DELETE operation
   * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/DELETE)
   * @param url URL to the endpoint
   * @param config Configuration object
   * @returns The response from endpoint
   */
  delete(
    url: string,
    config?: AxiosRequestConfig<unknown>
  ): Promise<AxiosResponse> {
    return this.instance.delete(url, config);
  }

  /**
   * POST operation
   * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST)
   * @param url URL to the endpoint
   * @param data Request params to be sent to the endpoint
   * @param config Configuration object
   * @returns The response from endpoint
   */
  post(
    url: string,
    data: unknown = {},
    config?: AxiosRequestConfig<unknown>
  ): Promise<AxiosResponse> {
    return this.instance.post(url, data, config);
  }

  /**
   * PUT operation
   * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT)
   * @param url URL to the endpoint
   * @param data Request params to be sent to the endpoint
   * @param config Configuration object
   * @returns The response from endpoint
   */
  put(
    url: string,
    data: unknown,
    config?: AxiosRequestConfig<unknown>
  ): Promise<AxiosResponse> {
    return this.instance.put(url, data, config);
  }

  /**
   * PATCH operation
   * [Read more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PATCH)
   * @param url URL to the endpoint
   * @param data Request params to be sent to the endpoint
   * @param config Configuration object
   * @returns The response from endpoint
   */
  patch(
    url: string,
    data: unknown,
    config?: AxiosRequestConfig<unknown>
  ): Promise<AxiosResponse> {
    return this.instance.patch(url, data, config);
  }
}
