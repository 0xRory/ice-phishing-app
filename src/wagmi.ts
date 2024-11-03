import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { holesky } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: process.env.NEXT_PUBLIC_REOWN_APP_NAME,
  projectId: process.env.NEXT_PUBLIC_REOWN_PROJECT_ID,
  chains: [
    // mainnet,
    holesky,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [holesky] : []),
  ],
  ssr: true,
});
