import BlockchainService from "./blockchainService";
import logger from "../logger/winston";

describe("Blockchain Service ", () => {
  let service: BlockchainService;
  beforeEach(() => {
    const props = {};
    service = new BlockchainService(props);
  });

  it("getWeb3 fails to return a web3 object in a test, because a test browser doesn't have metamask injecting web3 ", async function() {
    expect(service.getWeb3().catch(() => {})).rejects;
  });

  it("returns false for isWeb3Injected due to being in a test runner ", async function() {
    expect(BlockchainService.isWeb3Injected()).toBeFalsy();
  });
});
