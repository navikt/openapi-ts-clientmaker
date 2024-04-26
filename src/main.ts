import { createClient, resolveCliArgs } from "./shared.js";

const main = async () => {
    // Read in command line arguments
    const opts = resolveCliArgs()
    await createClient(opts)
}

main().catch(e => {
    console.error(e)
    process.exit(1)
})