// migrations/2_deploy.js
// SPDX-License-Identifier: MIT
const ERC721PresetMinterPauserAutoId = artifacts.require(
  "ERC721PresetMinterPauserAutoId"
);

module.exports = function (deployer) {
  deployer.deploy(
    ERC721PresetMinterPauserAutoId,
    "ScamPunks",
    "SP",
    "https://gateway.pinata.cloud/ipfs/QmU8Jx2NM3xsELjujt3sLY5abh7rpwjGnGPhS517AGhtBc/"
  );
};
