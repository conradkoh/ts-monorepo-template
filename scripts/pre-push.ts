const result = await Bun.$`pnpm test`;
process.exit(result.exitCode);
