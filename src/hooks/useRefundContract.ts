import { useState } from "react";
// import RetentionMain from "../../wrappers/RetentionMain";
import { RetentionMain } from "../../wrappers/RetentionMain";
import { useTonClient } from "./useTonClient";
import { useAsyncInitialize } from "./useAsyncInitialize";
import { useTonConnect } from "./useTonConnect";
import { Address, OpenedContract, toNano } from "ton-core";
import { useQuery } from "@tanstack/react-query";
import { CHAIN } from "@tonconnect/protocol";

export function useRefundContract() {
  const { client } = useTonClient();
  const { sender, network } = useTonConnect();

  const mainContract = useAsyncInitialize(async () => {
    if (!client) return;
    const contract = RetentionMain.fromAddress(Address.parse("EQBLaZvlEJYbzIH7-QFCwMaklQFNAXfmyj5a41KmHk--rl6P"));
    return client.open(contract) as OpenedContract<RetentionMain>;
  }, [client]);

  return {
    requestRefund: () => {
        mainContract.send(
            sender, 
            {
                value: toNano("0.5")
            },
            {
                $$type: "RefundIfPossible",
                memo: "171819",
                secret: "GreedIsGood"
            }
        )   
    }
  }
}

function getCurrentTimestamp(): bigint {
    return BigInt(Math.floor(Date.now() / 1000));
}