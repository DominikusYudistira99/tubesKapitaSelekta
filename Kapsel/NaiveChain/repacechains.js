var replaceChain = (newBlocks) =>{
    if(isValidChain(newBlocks) && newBlocks.length > blockchain.length){
        console.log('Received blockchain is valid. Replacing current blockchain with received blockchain');
        blockchain = newBlocks;
        BroadcastChannel(responseLatestMsg());
    }else{
        console.log('with received blockchain')
    }
};