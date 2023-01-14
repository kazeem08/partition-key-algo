const crypto = require("crypto");

const cryptoHelper = (data) =>
  crypto.createHash("sha3-512").update(data).digest("hex");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let newPartitionKey;

  // check if no event was passed
  if (!event) return TRIVIAL_PARTITION_KEY;

  newPartitionKey = event.partitionKey
    ? JSON.stringify(event.partitionKey)
    : cryptoHelper(JSON.stringify(event));

  if (newPartitionKey.length > MAX_PARTITION_KEY_LENGTH) {
    newPartitionKey = cryptoHelper(newPartitionKey);
  }

  return newPartitionKey;
};
