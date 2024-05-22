import "./App.css";
import { TonConnectButton } from "@tonconnect/ui-react";
import { useTonConnect } from "./hooks/useTonConnect";
import { CHAIN } from "@tonconnect/protocol";
import "@twa-dev/sdk";

function App() {
  const { network } = useTonConnect();

  return (
    <TonConnectButton />  
  );
}

export default App;

// {network
//   ? network === CHAIN.MAINNET
//     ? "mainnet"
//     : "testnet"
//   : "N/A"}