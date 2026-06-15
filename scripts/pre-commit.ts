const result = await Bun.$`pnpm lint && pnpm format:check`;
process.exit(result.exitCode);
