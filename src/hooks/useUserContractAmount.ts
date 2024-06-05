
import { useState } from "react";
import { RetentionUser } from "../../wrappers/RetentionUser";
import { useTonClient } from "./useTonClient";
import { useAsyncInitialize } from "./useAsyncInitialize";
import { useTonConnect } from "./useTonConnect";
import { Address, OpenedContract, toNano } from "ton-core";
import { useQuery } from "@tanstack/react-query";
import { CHAIN } from "@tonconnect/protocol";

export function useUserContractAmount() {
  const { client } = useTonClient();
  const { sender, network } = useTonConnect();

  const mainContract = useAsyncInitialize(async () => {
    if (!client) return;
    const contract = RetentionMain.fromAddress(Address.parse("EQBLaZvlEJYbzIH7-QFCwMaklQFNAXfmyj5a41KmHk--rl6P"));
    return client.open(contract) as OpenedContract<RetentionMain>;
  }, [client]);

  return {
    
  }
}
