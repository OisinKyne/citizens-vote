import Web3 from "web3";
import React from "react";
import logger from "../logger/winston";
import voteContractAbi from "../Contracts/NationalVote.abi.json";
import contractAddresses from "../Contracts/ContractAddresses.json";

// Stop typescript complaining about the window definition not having ethereum or web3 in it
declare let window: any; // <--- Declare it like this

/**
 * Service for sending/getting messages from the Blockchain
 *
 *
 */
interface Props {}
interface State {
  web3: any;
}
/**
 * Class for interacting with the Blockchain
 */
export default class BlockchainService extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      web3: this.getWeb3().catch(() => {
        logger.warn(
          "Failed to get a web3 object while instantiating Blockchain Service"
        );
      })
    };
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
  public getVoteContractAddress(networkName: "main" | "rinkeby"): string {
    if (networkName === "rinkeby") return contractAddresses.rinkeby.address;
    else if (networkName === "main") {
      return contractAddresses.main.address;
    } else {
      throw new Error("Unknown ethereum network name");
    }
  }

  public async castVote(billUri: string, inFavour: boolean): Promise<any> {
    const web3 = await this.state.web3;
    const networkName = await web3.eth.net.getNetworkType();
    // Get the address of the Vote Smart Contract depending on which network you are connected to
    const contractAddress = this.getVoteContractAddress(networkName);

    if (!web3.eth.defaultAccount) {
      // There is no default account set. For now just fail as it is likely something has gone wrong.
      throw new Error(
        "No web3.eth.defaultAccount available. Something went wrong. "
      );
    }

    return new Promise(function(resolve, reject) {
      // Rinkeby contract address 0xc9f0ceebfa12ec7828245375cfb634bd387bbee7

      if (web3) {
        const voteContract = new web3.eth.Contract(
          voteContractAbi,
          contractAddress,
          {
            defaultGasPrice: web3.eth.gasPrice * 1.1
          }
        );

        voteContract.methods
          .vote(billUri, inFavour)
          .send({ from: web3.eth.defaultAccount })
          .then((receipt: any) => {
            resolve(receipt);
          })
          .catch((err: any) => {
            reject(err);
          });
      } else {
        reject("No web3 object could be read from state");
      }
    });
  }
}
