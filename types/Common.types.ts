/* eslint-disable no-unused-vars */

export type ErrorType = {
  code: number;
  message: string;
  trace?: unknown;
};

type PromiseCustomDataType<T> = {
  data: T;
  error: null;
};

type PromiseCustomErrorType = {
  data: null;
  error: ErrorType;
};

export type PromiseCustomType<T> = Promise<
  PromiseCustomDataType<T> | PromiseCustomErrorType
>;

export type ConnectDBProps = (cb: () => Promise<unknown>) => PromiseCustomType<unknown>;
