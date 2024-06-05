import { 
    Cell,
    Slice, 
    Address, 
    Builder, 
    beginCell, 
    ComputeError, 
    TupleItem, 
    TupleReader, 
    Dictionary, 
    contractAddress, 
    ContractProvider, 
    Sender, 
    Contract, 
    ContractABI, 
    ABIType,
    ABIGetter,
    ABIReceiver,
    TupleBuilder,
    DictionaryValue
} from '@ton/core';

export type StateInit = {
    $$type: 'StateInit';
    code: Cell;
    data: Cell;
}

export function storeStateInit(src: StateInit) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeRef(src.code);
        b_0.storeRef(src.data);
    };
}

export function loadStateInit(slice: Slice) {
    let sc_0 = slice;
    let _code = sc_0.loadRef();
    let _data = sc_0.loadRef();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function loadTupleStateInit(source: TupleReader) {
    let _code = source.readCell();
    let _data = source.readCell();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function storeTupleStateInit(source: StateInit) {
    let builder = new TupleBuilder();
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserStateInit(): DictionaryValue<StateInit> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeStateInit(src)).endCell());
        },
        parse: (src) => {
            return loadStateInit(src.loadRef().beginParse());
        }
    }
}

export type Context = {
    $$type: 'Context';
    bounced: boolean;
    sender: Address;
    value: bigint;
    raw: Cell;
}

export function storeContext(src: Context) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounced);
        b_0.storeAddress(src.sender);
        b_0.storeInt(src.value, 257);
        b_0.storeRef(src.raw);
    };
}

export function loadContext(slice: Slice) {
    let sc_0 = slice;
    let _bounced = sc_0.loadBit();
    let _sender = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _raw = sc_0.loadRef();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function loadTupleContext(source: TupleReader) {
    let _bounced = source.readBoolean();
    let _sender = source.readAddress();
    let _value = source.readBigNumber();
    let _raw = source.readCell();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function storeTupleContext(source: Context) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounced);
    builder.writeAddress(source.sender);
    builder.writeNumber(source.value);
    builder.writeSlice(source.raw);
    return builder.build();
}

function dictValueParserContext(): DictionaryValue<Context> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeContext(src)).endCell());
        },
        parse: (src) => {
            return loadContext(src.loadRef().beginParse());
        }
    }
}

export type SendParameters = {
    $$type: 'SendParameters';
    bounce: boolean;
    to: Address;
    value: bigint;
    mode: bigint;
    body: Cell | null;
    code: Cell | null;
    data: Cell | null;
}

export function storeSendParameters(src: SendParameters) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounce);
        b_0.storeAddress(src.to);
        b_0.storeInt(src.value, 257);
        b_0.storeInt(src.mode, 257);
        if (src.body !== null && src.body !== undefined) { b_0.storeBit(true).storeRef(src.body); } else { b_0.storeBit(false); }
        if (src.code !== null && src.code !== undefined) { b_0.storeBit(true).storeRef(src.code); } else { b_0.storeBit(false); }
        if (src.data !== null && src.data !== undefined) { b_0.storeBit(true).storeRef(src.data); } else { b_0.storeBit(false); }
    };
}

export function loadSendParameters(slice: Slice) {
    let sc_0 = slice;
    let _bounce = sc_0.loadBit();
    let _to = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _mode = sc_0.loadIntBig(257);
    let _body = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _code = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _data = sc_0.loadBit() ? sc_0.loadRef() : null;
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function loadTupleSendParameters(source: TupleReader) {
    let _bounce = source.readBoolean();
    let _to = source.readAddress();
    let _value = source.readBigNumber();
    let _mode = source.readBigNumber();
    let _body = source.readCellOpt();
    let _code = source.readCellOpt();
    let _data = source.readCellOpt();
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function storeTupleSendParameters(source: SendParameters) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounce);
    builder.writeAddress(source.to);
    builder.writeNumber(source.value);
    builder.writeNumber(source.mode);
    builder.writeCell(source.body);
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserSendParameters(): DictionaryValue<SendParameters> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeSendParameters(src)).endCell());
        },
        parse: (src) => {
            return loadSendParameters(src.loadRef().beginParse());
        }
    }
}

export type Deploy = {
    $$type: 'Deploy';
    queryId: bigint;
}

export function storeDeploy(src: Deploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2490013878, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2490013878) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function loadTupleDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function storeTupleDeploy(source: Deploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeploy(): DictionaryValue<Deploy> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadDeploy(src.loadRef().beginParse());
        }
    }
}

export type DeployOk = {
    $$type: 'DeployOk';
    queryId: bigint;
}

export function storeDeployOk(src: DeployOk) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2952335191, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeployOk(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2952335191) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function loadTupleDeployOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function storeTupleDeployOk(source: DeployOk) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeployOk(): DictionaryValue<DeployOk> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeDeployOk(src)).endCell());
        },
        parse: (src) => {
            return loadDeployOk(src.loadRef().beginParse());
        }
    }
}

export type FactoryDeploy = {
    $$type: 'FactoryDeploy';
    queryId: bigint;
    cashback: Address;
}

export function storeFactoryDeploy(src: FactoryDeploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1829761339, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.cashback);
    };
}

export function loadFactoryDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1829761339) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _cashback = sc_0.loadAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function loadTupleFactoryDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _cashback = source.readAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function storeTupleFactoryDeploy(source: FactoryDeploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.cashback);
    return builder.build();
}

function dictValueParserFactoryDeploy(): DictionaryValue<FactoryDeploy> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeFactoryDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadFactoryDeploy(src.loadRef().beginParse());
        }
    }
}

export type ChangeOwner = {
    $$type: 'ChangeOwner';
    queryId: bigint;
    newOwner: Address;
}

export function storeChangeOwner(src: ChangeOwner) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2174598809, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.newOwner);
    };
}

export function loadChangeOwner(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2174598809) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _newOwner = sc_0.loadAddress();
    return { $$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner };
}

function loadTupleChangeOwner(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _newOwner = source.readAddress();
    return { $$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner };
}

function storeTupleChangeOwner(source: ChangeOwner) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.newOwner);
    return builder.build();
}

function dictValueParserChangeOwner(): DictionaryValue<ChangeOwner> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeChangeOwner(src)).endCell());
        },
        parse: (src) => {
            return loadChangeOwner(src.loadRef().beginParse());
        }
    }
}

export type ChangeOwnerOk = {
    $$type: 'ChangeOwnerOk';
    queryId: bigint;
    newOwner: Address;
}

export function storeChangeOwnerOk(src: ChangeOwnerOk) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(846932810, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.newOwner);
    };
}

export function loadChangeOwnerOk(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 846932810) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _newOwner = sc_0.loadAddress();
    return { $$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner };
}

function loadTupleChangeOwnerOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _newOwner = source.readAddress();
    return { $$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner };
}

function storeTupleChangeOwnerOk(source: ChangeOwnerOk) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.newOwner);
    return builder.build();
}

function dictValueParserChangeOwnerOk(): DictionaryValue<ChangeOwnerOk> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeChangeOwnerOk(src)).endCell());
        },
        parse: (src) => {
            return loadChangeOwnerOk(src.loadRef().beginParse());
        }
    }
}

export type CreateRetentionContract = {
    $$type: 'CreateRetentionContract';
    contractId: bigint;
    secret: string;
    memo: string;
    expiration: bigint;
}

export function storeCreateRetentionContract(src: CreateRetentionContract) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2340115651, 32);
        b_0.storeUint(src.contractId, 32);
        b_0.storeStringRefTail(src.secret);
        b_0.storeStringRefTail(src.memo);
        b_0.storeUint(src.expiration, 64);
    };
}

export function loadCreateRetentionContract(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2340115651) { throw Error('Invalid prefix'); }
    let _contractId = sc_0.loadUintBig(32);
    let _secret = sc_0.loadStringRefTail();
    let _memo = sc_0.loadStringRefTail();
    let _expiration = sc_0.loadUintBig(64);
    return { $$type: 'CreateRetentionContract' as const, contractId: _contractId, secret: _secret, memo: _memo, expiration: _expiration };
}

function loadTupleCreateRetentionContract(source: TupleReader) {
    let _contractId = source.readBigNumber();
    let _secret = source.readString();
    let _memo = source.readString();
    let _expiration = source.readBigNumber();
    return { $$type: 'CreateRetentionContract' as const, contractId: _contractId, secret: _secret, memo: _memo, expiration: _expiration };
}

function storeTupleCreateRetentionContract(source: CreateRetentionContract) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.contractId);
    builder.writeString(source.secret);
    builder.writeString(source.memo);
    builder.writeNumber(source.expiration);
    return builder.build();
}

function dictValueParserCreateRetentionContract(): DictionaryValue<CreateRetentionContract> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeCreateRetentionContract(src)).endCell());
        },
        parse: (src) => {
            return loadCreateRetentionContract(src.loadRef().beginParse());
        }
    }
}

export type RefundIfPossible = {
    $$type: 'RefundIfPossible';
    memo: string;
    secret: string;
}

export function storeRefundIfPossible(src: RefundIfPossible) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1985343089, 32);
        b_0.storeStringRefTail(src.memo);
        b_0.storeStringRefTail(src.secret);
    };
}

export function loadRefundIfPossible(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1985343089) { throw Error('Invalid prefix'); }
    let _memo = sc_0.loadStringRefTail();
    let _secret = sc_0.loadStringRefTail();
    return { $$type: 'RefundIfPossible' as const, memo: _memo, secret: _secret };
}

function loadTupleRefundIfPossible(source: TupleReader) {
    let _memo = source.readString();
    let _secret = source.readString();
    return { $$type: 'RefundIfPossible' as const, memo: _memo, secret: _secret };
}

function storeTupleRefundIfPossible(source: RefundIfPossible) {
    let builder = new TupleBuilder();
    builder.writeString(source.memo);
    builder.writeString(source.secret);
    return builder.build();
}

function dictValueParserRefundIfPossible(): DictionaryValue<RefundIfPossible> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeRefundIfPossible(src)).endCell());
        },
        parse: (src) => {
            return loadRefundIfPossible(src.loadRef().beginParse());
        }
    }
}

export type InternalCreateRetentionContract = {
    $$type: 'InternalCreateRetentionContract';
    contractId: bigint;
    secret: bigint;
    memo: bigint;
    expiration: bigint;
}

export function storeInternalCreateRetentionContract(src: InternalCreateRetentionContract) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3193351462, 32);
        b_0.storeInt(src.contractId, 257);
        b_0.storeInt(src.secret, 257);
        b_0.storeInt(src.memo, 257);
        b_0.storeUint(src.expiration, 64);
    };
}

export function loadInternalCreateRetentionContract(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3193351462) { throw Error('Invalid prefix'); }
    let _contractId = sc_0.loadIntBig(257);
    let _secret = sc_0.loadIntBig(257);
    let _memo = sc_0.loadIntBig(257);
    let _expiration = sc_0.loadUintBig(64);
    return { $$type: 'InternalCreateRetentionContract' as const, contractId: _contractId, secret: _secret, memo: _memo, expiration: _expiration };
}

function loadTupleInternalCreateRetentionContract(source: TupleReader) {
    let _contractId = source.readBigNumber();
    let _secret = source.readBigNumber();
    let _memo = source.readBigNumber();
    let _expiration = source.readBigNumber();
    return { $$type: 'InternalCreateRetentionContract' as const, contractId: _contractId, secret: _secret, memo: _memo, expiration: _expiration };
}

function storeTupleInternalCreateRetentionContract(source: InternalCreateRetentionContract) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.contractId);
    builder.writeNumber(source.secret);
    builder.writeNumber(source.memo);
    builder.writeNumber(source.expiration);
    return builder.build();
}

function dictValueParserInternalCreateRetentionContract(): DictionaryValue<InternalCreateRetentionContract> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeInternalCreateRetentionContract(src)).endCell());
        },
        parse: (src) => {
            return loadInternalCreateRetentionContract(src.loadRef().beginParse());
        }
    }
}

export type InternalAskForRefund = {
    $$type: 'InternalAskForRefund';
    toAddress: Address;
    secret: bigint;
    memo: bigint;
}

export function storeInternalAskForRefund(src: InternalAskForRefund) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1536850620, 32);
        b_0.storeAddress(src.toAddress);
        b_0.storeUint(src.secret, 256);
        b_0.storeUint(src.memo, 256);
    };
}

export function loadInternalAskForRefund(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1536850620) { throw Error('Invalid prefix'); }
    let _toAddress = sc_0.loadAddress();
    let _secret = sc_0.loadUintBig(256);
    let _memo = sc_0.loadUintBig(256);
    return { $$type: 'InternalAskForRefund' as const, toAddress: _toAddress, secret: _secret, memo: _memo };
}

function loadTupleInternalAskForRefund(source: TupleReader) {
    let _toAddress = source.readAddress();
    let _secret = source.readBigNumber();
    let _memo = source.readBigNumber();
    return { $$type: 'InternalAskForRefund' as const, toAddress: _toAddress, secret: _secret, memo: _memo };
}

function storeTupleInternalAskForRefund(source: InternalAskForRefund) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.toAddress);
    builder.writeNumber(source.secret);
    builder.writeNumber(source.memo);
    return builder.build();
}

function dictValueParserInternalAskForRefund(): DictionaryValue<InternalAskForRefund> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeInternalAskForRefund(src)).endCell());
        },
        parse: (src) => {
            return loadInternalAskForRefund(src.loadRef().beginParse());
        }
    }
}

export type InternalCreateRefund = {
    $$type: 'InternalCreateRefund';
    index: bigint;
    expiration: bigint;
    creator: Address;
}

export function storeInternalCreateRefund(src: InternalCreateRefund) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1772334149, 32);
        b_0.storeUint(src.index, 32);
        b_0.storeUint(src.expiration, 64);
        b_0.storeAddress(src.creator);
    };
}

export function loadInternalCreateRefund(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1772334149) { throw Error('Invalid prefix'); }
    let _index = sc_0.loadUintBig(32);
    let _expiration = sc_0.loadUintBig(64);
    let _creator = sc_0.loadAddress();
    return { $$type: 'InternalCreateRefund' as const, index: _index, expiration: _expiration, creator: _creator };
}

function loadTupleInternalCreateRefund(source: TupleReader) {
    let _index = source.readBigNumber();
    let _expiration = source.readBigNumber();
    let _creator = source.readAddress();
    return { $$type: 'InternalCreateRefund' as const, index: _index, expiration: _expiration, creator: _creator };
}

function storeTupleInternalCreateRefund(source: InternalCreateRefund) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.index);
    builder.writeNumber(source.expiration);
    builder.writeAddress(source.creator);
    return builder.build();
}

function dictValueParserInternalCreateRefund(): DictionaryValue<InternalCreateRefund> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeInternalCreateRefund(src)).endCell());
        },
        parse: (src) => {
            return loadInternalCreateRefund(src.loadRef().beginParse());
        }
    }
}

export type RefundRetationDeploy = {
    $$type: 'RefundRetationDeploy';
}

export function storeRefundRetationDeploy(src: RefundRetationDeploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2791734509, 32);
    };
}

export function loadRefundRetationDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2791734509) { throw Error('Invalid prefix'); }
    return { $$type: 'RefundRetationDeploy' as const };
}

function loadTupleRefundRetationDeploy(source: TupleReader) {
    return { $$type: 'RefundRetationDeploy' as const };
}

function storeTupleRefundRetationDeploy(source: RefundRetationDeploy) {
    let builder = new TupleBuilder();
    return builder.build();
}

function dictValueParserRefundRetationDeploy(): DictionaryValue<RefundRetationDeploy> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeRefundRetationDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadRefundRetationDeploy(src.loadRef().beginParse());
        }
    }
}

export type InternalCreateRefundConract = {
    $$type: 'InternalCreateRefundConract';
}

export function storeInternalCreateRefundConract(src: InternalCreateRefundConract) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(761316605, 32);
    };
}

export function loadInternalCreateRefundConract(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 761316605) { throw Error('Invalid prefix'); }
    return { $$type: 'InternalCreateRefundConract' as const };
}

function loadTupleInternalCreateRefundConract(source: TupleReader) {
    return { $$type: 'InternalCreateRefundConract' as const };
}

function storeTupleInternalCreateRefundConract(source: InternalCreateRefundConract) {
    let builder = new TupleBuilder();
    return builder.build();
}

function dictValueParserInternalCreateRefundConract(): DictionaryValue<InternalCreateRefundConract> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeInternalCreateRefundConract(src)).endCell());
        },
        parse: (src) => {
            return loadInternalCreateRefundConract(src.loadRef().beginParse());
        }
    }
}

export type InternalReplyFromRetentionRefund = {
    $$type: 'InternalReplyFromRetentionRefund';
    locked: bigint;
    index: bigint;
    contractAddress: Address;
    creatorAddress: Address;
}

export function storeInternalReplyFromRetentionRefund(src: InternalReplyFromRetentionRefund) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1223691349, 32);
        b_0.storeUint(src.locked, 64);
        b_0.storeInt(src.index, 257);
        b_0.storeAddress(src.contractAddress);
        b_0.storeAddress(src.creatorAddress);
    };
}

export function loadInternalReplyFromRetentionRefund(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1223691349) { throw Error('Invalid prefix'); }
    let _locked = sc_0.loadUintBig(64);
    let _index = sc_0.loadIntBig(257);
    let _contractAddress = sc_0.loadAddress();
    let _creatorAddress = sc_0.loadAddress();
    return { $$type: 'InternalReplyFromRetentionRefund' as const, locked: _locked, index: _index, contractAddress: _contractAddress, creatorAddress: _creatorAddress };
}

function loadTupleInternalReplyFromRetentionRefund(source: TupleReader) {
    let _locked = source.readBigNumber();
    let _index = source.readBigNumber();
    let _contractAddress = source.readAddress();
    let _creatorAddress = source.readAddress();
    return { $$type: 'InternalReplyFromRetentionRefund' as const, locked: _locked, index: _index, contractAddress: _contractAddress, creatorAddress: _creatorAddress };
}

function storeTupleInternalReplyFromRetentionRefund(source: InternalReplyFromRetentionRefund) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.locked);
    builder.writeNumber(source.index);
    builder.writeAddress(source.contractAddress);
    builder.writeAddress(source.creatorAddress);
    return builder.build();
}

function dictValueParserInternalReplyFromRetentionRefund(): DictionaryValue<InternalReplyFromRetentionRefund> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeInternalReplyFromRetentionRefund(src)).endCell());
        },
        parse: (src) => {
            return loadInternalReplyFromRetentionRefund(src.loadRef().beginParse());
        }
    }
}

export type InternalAskForRefundCompleted = {
    $$type: 'InternalAskForRefundCompleted';
    amount: bigint;
    creator: Address;
    contractAddress: Address;
    index: bigint;
}

export function storeInternalAskForRefundCompleted(src: InternalAskForRefundCompleted) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3589743355, 32);
        b_0.storeUint(src.amount, 64);
        b_0.storeAddress(src.creator);
        b_0.storeAddress(src.contractAddress);
        b_0.storeUint(src.index, 32);
    };
}

export function loadInternalAskForRefundCompleted(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3589743355) { throw Error('Invalid prefix'); }
    let _amount = sc_0.loadUintBig(64);
    let _creator = sc_0.loadAddress();
    let _contractAddress = sc_0.loadAddress();
    let _index = sc_0.loadUintBig(32);
    return { $$type: 'InternalAskForRefundCompleted' as const, amount: _amount, creator: _creator, contractAddress: _contractAddress, index: _index };
}

function loadTupleInternalAskForRefundCompleted(source: TupleReader) {
    let _amount = source.readBigNumber();
    let _creator = source.readAddress();
    let _contractAddress = source.readAddress();
    let _index = source.readBigNumber();
    return { $$type: 'InternalAskForRefundCompleted' as const, amount: _amount, creator: _creator, contractAddress: _contractAddress, index: _index };
}

function storeTupleInternalAskForRefundCompleted(source: InternalAskForRefundCompleted) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.amount);
    builder.writeAddress(source.creator);
    builder.writeAddress(source.contractAddress);
    builder.writeNumber(source.index);
    return builder.build();
}

function dictValueParserInternalAskForRefundCompleted(): DictionaryValue<InternalAskForRefundCompleted> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeInternalAskForRefundCompleted(src)).endCell());
        },
        parse: (src) => {
            return loadInternalAskForRefundCompleted(src.loadRef().beginParse());
        }
    }
}

export type InternalRefundContractCreated = {
    $$type: 'InternalRefundContractCreated';
    contract: Address;
    amount: bigint;
    index: bigint;
}

export function storeInternalRefundContractCreated(src: InternalRefundContractCreated) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1255266380, 32);
        b_0.storeAddress(src.contract);
        b_0.storeUint(src.amount, 64);
        b_0.storeUint(src.index, 32);
    };
}

export function loadInternalRefundContractCreated(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1255266380) { throw Error('Invalid prefix'); }
    let _contract = sc_0.loadAddress();
    let _amount = sc_0.loadUintBig(64);
    let _index = sc_0.loadUintBig(32);
    return { $$type: 'InternalRefundContractCreated' as const, contract: _contract, amount: _amount, index: _index };
}

function loadTupleInternalRefundContractCreated(source: TupleReader) {
    let _contract = source.readAddress();
    let _amount = source.readBigNumber();
    let _index = source.readBigNumber();
    return { $$type: 'InternalRefundContractCreated' as const, contract: _contract, amount: _amount, index: _index };
}

function storeTupleInternalRefundContractCreated(source: InternalRefundContractCreated) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.contract);
    builder.writeNumber(source.amount);
    builder.writeNumber(source.index);
    return builder.build();
}

function dictValueParserInternalRefundContractCreated(): DictionaryValue<InternalRefundContractCreated> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeInternalRefundContractCreated(src)).endCell());
        },
        parse: (src) => {
            return loadInternalRefundContractCreated(src.loadRef().beginParse());
        }
    }
}

export type InternalRefundContractClosed = {
    $$type: 'InternalRefundContractClosed';
    contract: Address;
    amount: bigint;
    index: bigint;
}

export function storeInternalRefundContractClosed(src: InternalRefundContractClosed) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2840063567, 32);
        b_0.storeAddress(src.contract);
        b_0.storeUint(src.amount, 64);
        b_0.storeUint(src.index, 32);
    };
}

export function loadInternalRefundContractClosed(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2840063567) { throw Error('Invalid prefix'); }
    let _contract = sc_0.loadAddress();
    let _amount = sc_0.loadUintBig(64);
    let _index = sc_0.loadUintBig(32);
    return { $$type: 'InternalRefundContractClosed' as const, contract: _contract, amount: _amount, index: _index };
}

function loadTupleInternalRefundContractClosed(source: TupleReader) {
    let _contract = source.readAddress();
    let _amount = source.readBigNumber();
    let _index = source.readBigNumber();
    return { $$type: 'InternalRefundContractClosed' as const, contract: _contract, amount: _amount, index: _index };
}

function storeTupleInternalRefundContractClosed(source: InternalRefundContractClosed) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.contract);
    builder.writeNumber(source.amount);
    builder.writeNumber(source.index);
    return builder.build();
}

function dictValueParserInternalRefundContractClosed(): DictionaryValue<InternalRefundContractClosed> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeInternalRefundContractClosed(src)).endCell());
        },
        parse: (src) => {
            return loadInternalRefundContractClosed(src.loadRef().beginParse());
        }
    }
}

 type RetentionMain_init_args = {
    $$type: 'RetentionMain_init_args';
    val: bigint;
    owner: Address;
}

function initRetentionMain_init_args(src: RetentionMain_init_args) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeInt(src.val, 257);
        b_0.storeAddress(src.owner);
    };
}

async function RetentionMain_init(val: bigint, owner: Address) {
    const __code = Cell.fromBase64('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');
    const __system = Cell.fromBase64('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');
    let builder = beginCell();
    builder.storeRef(__system);
    builder.storeUint(0, 1);
    initRetentionMain_init_args({ $$type: 'RetentionMain_init_args', val, owner })(builder);
    const __data = builder.endCell();
    return { code: __code, data: __data };
}

const RetentionMain_errors: { [key: number]: { message: string } } = {
    2: { message: `Stack undeflow` },
    3: { message: `Stack overflow` },
    4: { message: `Integer overflow` },
    5: { message: `Integer out of expected range` },
    6: { message: `Invalid opcode` },
    7: { message: `Type check error` },
    8: { message: `Cell overflow` },
    9: { message: `Cell underflow` },
    10: { message: `Dictionary error` },
    13: { message: `Out of gas error` },
    32: { message: `Method ID not found` },
    34: { message: `Action is invalid or not supported` },
    37: { message: `Not enough TON` },
    38: { message: `Not enough extra-currencies` },
    128: { message: `Null reference exception` },
    129: { message: `Invalid serialization prefix` },
    130: { message: `Invalid incoming message` },
    131: { message: `Constraints error` },
    132: { message: `Access denied` },
    133: { message: `Contract stopped` },
    134: { message: `Invalid argument` },
    135: { message: `Code of a contract was not found` },
    136: { message: `Invalid address` },
    137: { message: `Masterchain support is not enabled for this contract` },
    7184: { message: `only owner has access` },
    40368: { message: `Contract stopped` },
    53296: { message: `Contract not stopped` },
    57871: { message: `Invalid` },
}

const RetentionMain_types: ABIType[] = [
    {"name":"StateInit","header":null,"fields":[{"name":"code","type":{"kind":"simple","type":"cell","optional":false}},{"name":"data","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"Context","header":null,"fields":[{"name":"bounced","type":{"kind":"simple","type":"bool","optional":false}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"raw","type":{"kind":"simple","type":"slice","optional":false}}]},
    {"name":"SendParameters","header":null,"fields":[{"name":"bounce","type":{"kind":"simple","type":"bool","optional":false}},{"name":"to","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"mode","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"body","type":{"kind":"simple","type":"cell","optional":true}},{"name":"code","type":{"kind":"simple","type":"cell","optional":true}},{"name":"data","type":{"kind":"simple","type":"cell","optional":true}}]},
    {"name":"Deploy","header":2490013878,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"DeployOk","header":2952335191,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"FactoryDeploy","header":1829761339,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"cashback","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ChangeOwner","header":2174598809,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"newOwner","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ChangeOwnerOk","header":846932810,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"newOwner","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"CreateRetentionContract","header":2340115651,"fields":[{"name":"contractId","type":{"kind":"simple","type":"uint","optional":false,"format":32}},{"name":"secret","type":{"kind":"simple","type":"string","optional":false}},{"name":"memo","type":{"kind":"simple","type":"string","optional":false}},{"name":"expiration","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"RefundIfPossible","header":1985343089,"fields":[{"name":"memo","type":{"kind":"simple","type":"string","optional":false}},{"name":"secret","type":{"kind":"simple","type":"string","optional":false}}]},
    {"name":"InternalCreateRetentionContract","header":3193351462,"fields":[{"name":"contractId","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"secret","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"memo","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"expiration","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"InternalAskForRefund","header":1536850620,"fields":[{"name":"toAddress","type":{"kind":"simple","type":"address","optional":false}},{"name":"secret","type":{"kind":"simple","type":"uint","optional":false,"format":256}},{"name":"memo","type":{"kind":"simple","type":"uint","optional":false,"format":256}}]},
    {"name":"InternalCreateRefund","header":1772334149,"fields":[{"name":"index","type":{"kind":"simple","type":"uint","optional":false,"format":32}},{"name":"expiration","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"creator","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"RefundRetationDeploy","header":2791734509,"fields":[]},
    {"name":"InternalCreateRefundConract","header":761316605,"fields":[]},
    {"name":"InternalReplyFromRetentionRefund","header":1223691349,"fields":[{"name":"locked","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"index","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"contractAddress","type":{"kind":"simple","type":"address","optional":false}},{"name":"creatorAddress","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"InternalAskForRefundCompleted","header":3589743355,"fields":[{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"creator","type":{"kind":"simple","type":"address","optional":false}},{"name":"contractAddress","type":{"kind":"simple","type":"address","optional":false}},{"name":"index","type":{"kind":"simple","type":"uint","optional":false,"format":32}}]},
    {"name":"InternalRefundContractCreated","header":1255266380,"fields":[{"name":"contract","type":{"kind":"simple","type":"address","optional":false}},{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"index","type":{"kind":"simple","type":"uint","optional":false,"format":32}}]},
    {"name":"InternalRefundContractClosed","header":2840063567,"fields":[{"name":"contract","type":{"kind":"simple","type":"address","optional":false}},{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"index","type":{"kind":"simple","type":"uint","optional":false,"format":32}}]},
]

const RetentionMain_getters: ABIGetter[] = [
    {"name":"nextIndex","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"currentLocked","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"allTimeLocked","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"allTimeRefunded","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"commission","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"stopped","arguments":[],"returnType":{"kind":"simple","type":"bool","optional":false}},
    {"name":"owner","arguments":[],"returnType":{"kind":"simple","type":"address","optional":false}},
]

const RetentionMain_receivers: ABIReceiver[] = [
    {"receiver":"internal","message":{"kind":"typed","type":"CreateRetentionContract"}},
    {"receiver":"internal","message":{"kind":"typed","type":"InternalReplyFromRetentionRefund"}},
    {"receiver":"internal","message":{"kind":"typed","type":"RefundIfPossible"}},
    {"receiver":"internal","message":{"kind":"typed","type":"InternalAskForRefundCompleted"}},
    {"receiver":"internal","message":{"kind":"text","text":"withdraw safe"}},
    {"receiver":"internal","message":{"kind":"text","text":"decrease price"}},
    {"receiver":"internal","message":{"kind":"text","text":"increase price"}},
    {"receiver":"internal","message":{"kind":"empty"}},
    {"receiver":"internal","message":{"kind":"typed","type":"Deploy"}},
    {"receiver":"internal","message":{"kind":"text","text":"Resume"}},
    {"receiver":"internal","message":{"kind":"text","text":"Stop"}},
]

export class RetentionMain implements Contract {
    
    static async init(val: bigint, owner: Address) {
        return await RetentionMain_init(val, owner);
    }
    
    static async fromInit(val: bigint, owner: Address) {
        const init = await RetentionMain_init(val, owner);
        const address = contractAddress(0, init);
        return new RetentionMain(address, init);
    }
    
    static fromAddress(address: Address) {
        return new RetentionMain(address);
    }
    
    readonly address: Address; 
    readonly init?: { code: Cell, data: Cell };
    readonly abi: ContractABI = {
        types:  RetentionMain_types,
        getters: RetentionMain_getters,
        receivers: RetentionMain_receivers,
        errors: RetentionMain_errors,
    };
    
    private constructor(address: Address, init?: { code: Cell, data: Cell }) {
        this.address = address;
        this.init = init;
    }
    
    async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: CreateRetentionContract | InternalReplyFromRetentionRefund | RefundIfPossible | InternalAskForRefundCompleted | 'withdraw safe' | 'decrease price' | 'increase price' | null | Deploy | 'Resume' | 'Stop') {
        
        let body: Cell | null = null;
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'CreateRetentionContract') {
            body = beginCell().store(storeCreateRetentionContract(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'InternalReplyFromRetentionRefund') {
            body = beginCell().store(storeInternalReplyFromRetentionRefund(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'RefundIfPossible') {
            body = beginCell().store(storeRefundIfPossible(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'InternalAskForRefundCompleted') {
            body = beginCell().store(storeInternalAskForRefundCompleted(message)).endCell();
        }
        if (message === 'withdraw safe') {
            body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
        }
        if (message === 'decrease price') {
            body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
        }
        if (message === 'increase price') {
            body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
        }
        if (message === null) {
            body = new Cell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Deploy') {
            body = beginCell().store(storeDeploy(message)).endCell();
        }
        if (message === 'Resume') {
            body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
        }
        if (message === 'Stop') {
            body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
        }
        if (body === null) { throw new Error('Invalid message type'); }
        
        await provider.internal(via, { ...args, body: body });
        
    }
    
    async getNextIndex(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('nextIndex', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getCurrentLocked(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('currentLocked', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getAllTimeLocked(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('allTimeLocked', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getAllTimeRefunded(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('allTimeRefunded', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getCommission(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('commission', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getStopped(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('stopped', builder.build())).stack;
        let result = source.readBoolean();
        return result;
    }
    
    async getOwner(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('owner', builder.build())).stack;
        let result = source.readAddress();
        return result;
    }
    
}