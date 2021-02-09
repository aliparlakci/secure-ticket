const SecureTicket = artifacts.require("SecureTicket");

module.exports = function (deployer) {
  deployer.deploy(SecureTicket);
};
