
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while (true) {
    console.log("Microservices rock!");
    console.log(`TEST_ENV value: ${process.env.TEST_ENV}`);
    await sleep(5000);
  }
}

main();
