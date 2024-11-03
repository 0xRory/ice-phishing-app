import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { mainnet, sepolia, holesky } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: process.env.REOWN_APP_NAME,
  projectId: process.env.REOWN_PROJECT_ID,
  chains: [
    // mainnet,
    holesky,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [holesky] : []),
  ],
  ssr: true,
});
