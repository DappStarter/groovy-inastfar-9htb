require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess nature swift undo name regret ridge common inner credit frame genre'; 
let testAccounts = [
"0xd233a2c7c293994dff0db8a50046a10634d22fb96fd4508862ce42f46d5341e0",
"0x9d6a362e8e253d5ca48619c0df5034a374db65963ade2b78b191e3751aa146a4",
"0xa18b130340bf92ffac482028ed611b377ae1312d0daf737bbbd943ada3ab0e00",
"0x3df8a51223b3c1b6a9f1a233f81cbe6816a2e51a758c7d3eb8cc3201d8de7844",
"0x3df104955ac3ecc1b7bb1db97bc8463832b7bbb74c7ade743c9dfee4eea24603",
"0x744e4489ac4c59b30bd0e208f5b39fe0b955f6955e522289db90e2b51634831d",
"0xaf0969af6e44ac7bb195910d3bc4c3cb70641081a376c117d62fbcd1617889d0",
"0x9ad5d6cdc043bf8b2d669102318190379529b924a31c669d96ad9fc5231c05a9",
"0x1f70ab4de739d430bde463c7d5984e616a770f76af6942bbf6d6bfd718b9e1ef",
"0xb4d3dacf1dc5c85af428ad68f91242a2c999a65fb3d6fecd30583a29d1370902"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

