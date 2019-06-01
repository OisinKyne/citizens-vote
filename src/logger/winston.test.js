import React from "react";
import logger from "./winston";

describe("Winston Logger", () => {
  const OLD_ENV = process.env;
  beforeEach(() => {
    jest.resetModules(); // this is important - it clears the cache
    process.env = { ...OLD_ENV };
    delete process.env.NODE_ENV;
  });

  it("if env variable NODE_ENV is test, winston has 2 transports", async () => {
    process.env.NODE_ENV = "test";
    expect(logger.transports.length).toEqual(2);
    expect(`${process.env.NODE_ENV}`).toEqual("test");
  });

  afterEach(() => {
    process.env = OLD_ENV;
  });
});
