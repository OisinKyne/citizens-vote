import React from "react";
import logger from "./winston";
import format from "winston";

describe("Winston Logger", () => {
  const OLD_ENV = process.env;
  beforeEach(() => {
    jest.resetModules(); // this is important - it clears the cache
    process.env = { ...OLD_ENV };
    delete process.env.NODE_ENV;
  });

  it("if env variable NODE_ENV is test, winstons format is colorize", async () => {
    process.env.NODE_ENV = "test";
    expect(logger.transports.length).toEqual(1);
    expect(`${process.env.NODE_ENV}`).toEqual("test");
    expect(logger.format === format.colorize);
  });

  it("if env variable NODE_ENV is production, winstons format is json", async () => {
    process.env.NODE_ENV = "production";
    expect(logger.transports.length).toEqual(1);
    expect(`${process.env.NODE_ENV}`).toEqual("production");
    expect(logger.format === format.json);
  });

  afterEach(() => {
    process.env = OLD_ENV;
  });
});
