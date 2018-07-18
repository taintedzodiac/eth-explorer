var LinkHelper = (function() {
  function linkForAddress(address) {
    return `https://etherscan.io/address/${address}`;
  }

  function linkForTx(txHash) {
    return `https://etherscan.io/tx/${txHash}`;
  }
  
  return {
    linkForAddress: linkForAddress,
    linkForTx: linkForTx,
  }
})();