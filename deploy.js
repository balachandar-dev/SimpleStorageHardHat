const ethers = require("ethers");
const fs = require("fs-extra");

async function main() {
  const overrides = {
    gasPrice: ethers.parseUnits("20000000000", "wei"), // Can set this >= to the number read from Ganache window
    gasLimit: 6721975, // Use the same gasLimit as read from Ganache window (or a bit higher if still having issue)
  };
  const provider = new ethers.JsonRpcProvider("http://127.0.0.1:7545");
  const wallet = new ethers.Wallet(
    "0x63eb318c8c346bffb269bae08b44de08217e0c4389a8dbac2f2431000d0c435f",
    provider
  );
  const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8");
  const binary = fs.readFileSync(
    "./SimpleStorage_sol_SimpleStorage.bin",
    "utf8"
  );
  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
  console.log("deploying");
  const contract = await contractFactory.deploy(overrides);
  console.log(contract);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
