require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture bread tail tragic educate ranch remain unusual harvest basket furnace tenant'; 
let testAccounts = [
"0xdb0e4be45918b3a0c4195a8e5b322d54b63fc240c1856601eae3c056a357626c",
"0x1bd86eb034920f06bcd0c181bc11096a46a39e44a9e2011f33cb0f45d70c61c6",
"0xac2c08e2715d96b6c7a259769c385f3e28f65d82bf7db5d3de115880b89e0876",
"0x7c510c2e42e26cbe1f8f0c48d585faa05999b1c7156bbc77516f605912527a9c",
"0x50a1d7f15ffdab1dd8a7b895d7b24bb68215107b9fb351b7fdd0b54ef68ed28a",
"0x60960290841b66c6f1a28062876f91f379cc1c656e8223abe1c2e715aa61b2af",
"0xfa9aa3bbdd6201ba36b237a7d90fb9fc01651926802c7a2a030b591b599254e1",
"0xacd9a5fc503d3e0bacf420bb1f8750dd6a7f3d9c942a0d5b461ee68e27f53029",
"0x39c5131b17b43aa2416ee09ca31bcfbeeb3598a1f87e2af28f044664154c1f48",
"0xf59a83dcddf89c419ee8dab5bed7d1a3b38fe1ce0ee97ac44a1aafbed6e03648"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


