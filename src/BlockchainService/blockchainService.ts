import Web3 from "web3";
import logger from "../logger/winston";
import contractAddresses from "../Contracts/ContractAddresses.json";
import { AbiItem } from "web3-utils";

// Stop typescript complaining about the window definition not having ethereum or web3 in it
declare let window: any;

// ABI for the deployed contract
const voteContractAbi: AbiItem = {
  constant: false,
  inputs: [
    {
      name: "billUri",
      type: "string"
    },
    {
      name: "inFavour",
      type: "bool"
    }
  ],
  name: "vote",
  outputs: [],
  payable: false,
  stateMutability: "nonpayable",
  type: "function"
};

/**
 * Class for interacting with the Blockchain
 */
export default class BlockchainService {
  web3Object: Web3;
  constructor() {
    this.web3Object = new Web3(Web3.givenProvider);
    this.getWeb3()
      .then(web3 => {
        this.web3Object = web3;
      })
      .catch(() => {
        this.web3Object = new Web3(Web3.givenProvider);
        logger.error(
          "Failed to get an instance of Web3 while instantiating BlockchainService"
        );
      });
  }
  /**
   * Function to check whether there's an injected web3 in this browser.
   * Returns boolean
   */
  public static isWeb3Injected(): boolean {
    // Modern dapp browsers
    if (window.ethereum) {
      logger.info(`Window.ethereum provided.`);
      return true;
    }
    // Legacy dapp browsers
    else if (window.web3) {
      logger.info("Window.web3 provided");
      return true;
    }
    // Non-dapp browsers
    else {
      logger.warn("No web3 provider detected");
      return false;
    }
  }

  // Function to return the injected web3 object supplied by Metamask.
  public async getWeb3(): Promise<Web3> {
    return new Promise(async function(resolve, reject) {
      // Modern dapp browsers...
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        try {
          // Request account access if needed
          const response = await window.ethereum.enable();
          if (response.length >= 1)
            window.web3.eth.defaultAccount = response[0];
          resolve(window.web3);
        } catch (error) {
          logger.error(
            "Calling window.ethereum.enable() threw an error. Something is probably wrong. "
          );
        }
      }
      // Legacy dapp browsers...
      else if (window.web3) {
        logger.info("Window.web3 provided");
        window.web3 = new Web3(window.web3.currentProvider);
        // Acccounts always exposed
        resolve(window.web3);
      }
      // Non-dapp browsers...
      else {
        logger.warn("No web3 provider detected");
        reject("No web3 provider detected");
      }
    });
  }

  // Function that looks up ContractAddresses.json and returns the address of the vote contract on that network.
  public getVoteContractAddress(networkName: string): string {
    if (networkName === "rinkeby") return contractAddresses.rinkeby.address;
    else if (networkName === "main") {
      return contractAddresses.main.address;
    } else {
      throw new Error("Unknown ethereum network name");
    }
  }

  /**
   * This function calls a simple smart contract that has a vote method, that emits an event.
   * The event emits the callers address, the URI of the bill they are voting on, and in inFavour/against boolean.
   *
   * @param billUri The URI of the bill to be put on chain
   * @param inFavour true = inFavour of bill, false = against bill
   */
  public async castVote(billUri: string, inFavour: boolean): Promise<any> {
    const networkName = await this.web3Object.eth.net.getNetworkType();
    // Get the address of the Vote Smart Contract depending on which network you are connected to
    const contractAddress = this.getVoteContractAddress(networkName);
    const senderAddress = this.web3Object.eth.defaultAccount;
    if (!senderAddress) {
      // There is no default account set. For now just fail as it is likely something has gone wrong.
      throw new Error(
        "No web3.eth.defaultAccount available. Something went wrong. "
      );
    }
    const voteContract = new this.web3Object.eth.Contract(
      voteContractAbi,
      contractAddress
    );

    return new Promise(function(resolve, reject) {
      // Rinkeby contract address 0xc9f0ceebfa12ec7828245375cfb634bd387bbee7

      voteContract.methods
        .vote(billUri, inFavour)
        .send({ from: senderAddress })
        .then((receipt: any) => {
          resolve(receipt);
        })
        .catch((err: any) => {
          logger.error("### web3 call hitting a catch");
          reject(err);
        });
    });
  }
}
