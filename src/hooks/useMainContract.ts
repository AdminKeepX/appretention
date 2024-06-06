import { useState, useEffect } from "react";
// import RetentionMain from "../../wrappers/RetentionMain";
import { RetentionMain } from "../wrappers/RetentionMain";
import { useTonClient } from "./useTonClient";
import { useAsyncInitialize } from "./useAsyncInitialize";
import { useTonConnect } from "./useTonConnect";
import { Address, OpenedContract, toNano } from "@ton/core";
import { useQuery } from "@tanstack/react-query";
import { CHAIN } from "@tonconnect/protocol";

export function useMainContract() {
  const { client } = useTonClient();
  const { sender, network } = useTonConnect();

  const mainContract = useAsyncInitialize(async () => {
    if (!client) return;
    const contract = RetentionMain.fromAddress(Address.parse("EQBLaZvlEJYbzIH7-QFCwMaklQFNAXfmyj5a41KmHk--rl6P"));
    return client.open(contract) as OpenedContract<RetentionMain>;
  }, [client]);

  return {
    createRefund: () => {
        mainContract!!.send(
            sender, 
            {
                value: toNano("2.1")
            },
            {
                $$type: "CreateRetentionContract",
                contractId: 101n,
                secret: "GreedIsGood",
                memo: "171819",
                expiration: getCurrentTimestamp() + 100n
            }
        )   
    }
  }
}

export function useMainContractAmount() {
    const { client } = useTonClient();
    const { sender, network } = useTonConnect();
    
    const [ address, setAddress] = useState<null | string>();
    const [ countIndex, setCountIndex] = useState<null | string>();
    const [ currentLocked, setCurrentLocked ] = useState<null | string>();
    const [ allTimeLocked, setAllTimeLocked ] = useState<null | string>();
    const [ allTimeRefunded, setAllTimeRefunded ] = useState<null | string>();
    const [ commission, setCommission ] = useState<null | string>();
  
    const mainContract = useAsyncInitialize(async () => {
      if (!client) return;
      const contract = RetentionMain.fromAddress(Address.parse("EQBLaZvlEJYbzIH7-QFCwMaklQFNAXfmyj5a41KmHk--rl6P"));
      return client.open(contract) as OpenedContract<RetentionMain>;
    }, [client]);

    useEffect( () => {
        async function execute() {
          if (!mainContract) return;
          setAddress(null);
          const value = await mainContract.address.toString();
          setAddress(value);
        }
  
        execute();
    }, [mainContract]);

    useEffect( () => {
        async function execute() {
          if (!mainContract) return;
          setCountIndex(null);
          const value = await mainContract.getNextIndex();
          setCountIndex(value.toString());
        }
  
        execute();
    }, [mainContract]);

    useEffect( () => {
        async function execute() {
          if (!mainContract) return;
          setCurrentLocked(null);
          const value = await mainContract.getCurrentLocked();
          setCurrentLocked(value.toString());
        }
  
        execute();
    }, [mainContract]);
  
    useEffect( () => {
        async function execute() {
          if (!mainContract) return;
          setAllTimeLocked(null);
          const value = await mainContract.getAllTimeLocked();
          setAllTimeLocked(value.toString());
        }
  
        execute();
    }, [mainContract]);

    useEffect( () => {
        async function execute() {
          if (!mainContract) return;
          setAllTimeRefunded(null);
          const value = await mainContract.getAllTimeRefunded();
          setAllTimeRefunded(value.toString());
        }
  
        execute();
    }, [mainContract]);

    useEffect( () => {
        async function execute() {
          if (!mainContract) return;
          setCommission(null);
          const value = await mainContract.getCommission();
          setCommission(value.toString());
        }
  
        execute();
    }, [mainContract]);
    
      return {
        address: address,
        countIndex: countIndex,
        currentLocked: currentLocked,
        allTimeLocked: allTimeLocked,
        allTimeRefunded: allTimeRefunded,
        commission: commission
      };
  }

function getCurrentTimestamp(): bigint {
    return BigInt(Math.floor(Date.now() / 1000));
}