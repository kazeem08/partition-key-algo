const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the literal value of partition key passed", () => {
    const trivialKey = deterministicPartitionKey({
      partitionKey: 1
    });
    expect(trivialKey).toBe("1");
  });

  it("Returns new partition key when key length is less than MAX_PARTITION_KEY_LENGTH", () => {
    const trivialKey = deterministicPartitionKey({
      table: '12334'
    });
    expect(trivialKey).toBe("4c6a31df1c96c06a8bea40e441d0d2dac4b7691c7600c5e28cdb0a6abbe7d7e2e0789467765366d0f4a907102a63a8ead472d4fc02d65adc2e476cc7896e2557");
  });

  it("Returns new partition key when  length is gretaer than MAX_PARTITION_KEY_LENGTH", () => {
    const trivialKey = deterministicPartitionKey({
      table: '12334',
      partitionKey: 'O7G4iugxLaHm1KVnobzzRir4R14gPCbrtZDZN9MhcxeyRadMGWuRQsH1tdHVNitxlGRxwnWxNv0x8yXumQlvCk1QAdYlg8rFwN6VLqvN4aqxKoBPHsFglKIf76Qraby1FaBSBDwEJ1Uzvhzh6kpFZ60ZIInTYNuwARut6ltZprClxaofJswQjoIdfP6Lt8Y57dmfSTegdRQ0UnXwvtQzeT6ydpvy7nxoIwCWBG0hITjSeSVp5X53YOtnP2NequocGS7PKhULtWAo1vx8DbKEIdSgakyx1WypwCY2Z4tAWMPCclfLELQ7DDfAkHmD6WLCkv0xynUt8phPfqUZydPc5UEZz'
  });
    expect(trivialKey).toBe("32812a2bea9d41a00c96b40eeb6a38af300c70fd2501e1d97a3e3ab63fc5f0a26d34dd9c602cd82fcf92f3094c3f83b4d46dc05883da3e4744888f44f8f7418a");
  });
});
