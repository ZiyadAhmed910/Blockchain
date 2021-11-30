const Blockchain = require("./blockchain");

const bitcoin = new Blockchain();

const bc1 = {
  chain: [
    {
      index: 1,
      timestamp: 1638256574117,
      transactions: [],
      nonce: 100,
      hash: "0",
      previousBlockHash: "0",
    },
    {
      index: 2,
      timestamp: 1638256655413,
      transactions: [],
      nonce: 18140,
      hash: "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
      previousBlockHash: "0",
    },
    {
      index: 3,
      timestamp: 1638256657100,
      transactions: [
        {
          amount: 12.5,
          sender: "00",
          recipient: "7c2697a8ee6141469189b1c0ec1f892f",
          transactionId: "9b72f55122f645daad39a378870c36ef",
        },
      ],
      nonce: 56736,
      hash: "0000ac14e996af63ca14d15b94742fa02aca3f4e58f040cfd6e9aecffe385bdd",
      previousBlockHash:
        "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
    },
    {
      index: 4,
      timestamp: 1638256658190,
      transactions: [
        {
          amount: 12.5,
          sender: "00",
          recipient: "7c2697a8ee6141469189b1c0ec1f892f",
          transactionId: "ea704b53cc78415fbcbc073c05149d5e",
        },
      ],
      nonce: 46469,
      hash: "0000e5a2088f10e32f6b3835688ed980a85ca6f33e9b3839a9cb719c5ce090fc",
      previousBlockHash:
        "0000ac14e996af63ca14d15b94742fa02aca3f4e58f040cfd6e9aecffe385bdd",
    },
    {
      index: 5,
      timestamp: 1638256659111,
      transactions: [
        {
          amount: 12.5,
          sender: "00",
          recipient: "7c2697a8ee6141469189b1c0ec1f892f",
          transactionId: "f8e7704c46644dc8b4110f421efba1ef",
        },
      ],
      nonce: 34373,
      hash: "00002c14ede27490d3e1497a02515fa6375524f422919ad00879b9bf2b1d90db",
      previousBlockHash:
        "0000e5a2088f10e32f6b3835688ed980a85ca6f33e9b3839a9cb719c5ce090fc",
    },
    {
      index: 6,
      timestamp: 1638256708781,
      transactions: [
        {
          amount: 12.5,
          sender: "00",
          recipient: "7c2697a8ee6141469189b1c0ec1f892f",
          transactionId: "8824df42d526421c88700495f5baae5b",
        },
        {
          amount: 0.1,
          sender: "Z48910FFFF",
          recipient: "N523510000",
          transactionId: "344a1038e6fa4b21a34764d6efc9ea30",
        },
        {
          amount: 1,
          sender: "Z48910FFFF",
          recipient: "N523510000",
          transactionId: "d02d383dd11e48a3934dcc16d092a2c0",
        },
        {
          amount: 10,
          sender: "Z48910FFFF",
          recipient: "N523510000",
          transactionId: "3c3a24ffff834c50918e0142f691c32a",
        },
      ],
      nonce: 119329,
      hash: "00003c7417d730388e56e4e58ae131a210d16115891adfd474042c9fd4b95a3f",
      previousBlockHash:
        "00002c14ede27490d3e1497a02515fa6375524f422919ad00879b9bf2b1d90db",
    },
  ],
  currentNodeUrl: "http://localhost:3002",
  networkNodes: [],
  pendingTransactions: [
    {
      amount: 100,
      sender: "00",
      recipient: "7c2697a8ee6141469189b1c0ec1f892fa",
      transactionId: "1f555df035344d28b6038cdc5b39bc18",
    },
  ],
};

// console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData));

//  console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce));

// bitcoin.createNewBlock(2321, "A34234234234FFF3423", "A34234234234576FFF3423");

// bitcoin.createNewTransaction(100, "Z48910", "N52351");
// bitcoin.createNewTransaction(10, "Z48910", "N52351");

// bitcoin.createNewBlock(2341, "A34234234234FFF3423", "A34234234234576FFF3423");

// bitcoin.createNewTransaction(400, "Z48910", "N52351");
// bitcoin.createNewTransaction(40, "Z48910", "N52351");

// bitcoin.createNewBlock(234122, "A34234234234FFF3423", "A34234234234576FFF3423");

console.log(bitcoin.chainIsValid(bc1.chain));

// console.log(bitcoin.chain[1]);
//  console.log(bitcoin.chain[2]);
