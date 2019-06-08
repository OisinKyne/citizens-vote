import Web3 from "web3";
import logger from "../logger/winston";

// Stop typescript complaining about the window definition not having ethereum or web3 in it
declare let window: any; // <--- Declare it like this

/**
 * Service for sending/getting messages from the Blockchain
 *
 *
 */
export default class BlockchainService {
  // Function to return the injected web3 object supplied by Metamask.
  public async getWeb3(): Promise<Web3> {
    return new Promise(async function(resolve, reject) {
      // Modern dapp browsers...
      if (window.ethereum) {
        logger.info("Window.ethereum provided");
        window.web3 = new Web3(window.ethereum);
        try {
          // Request account access if needed
          await window.ethereum.enable();
          // Acccounts now exposed
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
        logger.info("No web3 provider detected");
        reject("No web3 provider detected");
      }
    });
  }

  // Function to prepare a JSON string for broadcasting to the blockchain.
  public prepareMessage(
    bill_status = "Current",
    date_start = "2019-05-01",
    date_end = "2019-06-08",
    result_limit = "50",
    chamber_id = "",
    language = "en"
  ) {
    return `https://api.oireachtas.ie/v1/legislation?bill_status=${bill_status}&bill_source=Government,Private%20Member&date_start=${date_start}&date_end=${date_end}&limit=${result_limit}&chamber_id=${chamber_id}&lang=${language}`;
  }
}
