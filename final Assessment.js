// create a variable to hold your NFT's
var NFTlist=[];
var counter=0;
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name,val) {
    const newNFT={
        "id":counter,
        "Name":name,
        "val":val,
    }
    NFTlist.push(newNFT);
    console.log('New NFT minted');
    counter++;
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    for(var NFT=0;NFT<NFTlist.length;NFT++){
        console.log("id: "+NFTlist[NFT].id+"\n\tName: "+NFTlist[NFT].Name+"\n\tValue: "+NFTlist[NFT].val+"\n");
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply(){
    console.log("Total Current Supply: "+NFTlist.length)
}

// call your functions below this line
mintNFT('first',10);
listNFTs();
mintNFT('second',20);
listNFTs();
getTotalSupply();
mintNFT('third',30);
listNFTs();
getTotalSupply();