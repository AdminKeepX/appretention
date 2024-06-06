
import { RetentionUser } from "../wrappers/RetentionUser";
import { useTonClient } from "./useTonClient";
import { useAsyncInitialize } from "./useAsyncInitialize";
import { useTonConnect } from "./useTonConnect";
import { Address, OpenedContract } from "@ton/core";
import { TonClient } from "@ton/ton";

// const client = new TonClient({
//     endpoint: 'https://testnet.toncenter.com/api/v2/jsonRPC',
//   });

export function useUserContractAmount() {
  const { client } = useTonClient();
  const { sender, network } = useTonConnect();

  const userContract = useAsyncInitialize(async () => {
    if (!client) return;
    const contract = RetentionUser.fromAddress(Address.parse("EQBLaZvlEJYbzIH7-QFCwMaklQFNAXfmyj5a41KmHk--rl6P"));
    return client.open(contract)// as OpenedContract<RetentionUser>;
  }, [client]);

  return {
    
  }
}
