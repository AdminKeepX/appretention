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

 type RetentionRefund_init_args = {
    $$type: 'RetentionRefund_init_args';
    hash: bigint;
    memo: bigint;
    parent: Address;
}

function initRetentionRefund_init_args(src: RetentionRefund_init_args) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeInt(src.hash, 257);
        b_0.storeInt(src.memo, 257);
        b_0.storeAddress(src.parent);
    };
}

async function RetentionRefund_init(hash: bigint, memo: bigint, parent: Address) {
    const __code = Cell.fromBase64('te6ccgECGwEABbwAART/APSkE/S88sgLAQIBYgIDA3rQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxVFts88uCCFAQFAgFYEBED1AGSMH/gcCHXScIflTAg1wsf3iCCEGmjrEW6jrgw0x8BghBpo6xFuvLggdMf0z/6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIQzBsE9s8f+AgghBbmnq8uuMCghCUapi2uuMCMHAGBwgA1Mj4QwHMfwHKAFVgUHYg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQBCBulTBwAcsBjh4g10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxbiEss/y/8ByMv/E8s/yx/JAczJ7VQBijMzNTX4QW8kE18DggpiWgChggnJw4Chggr68IChJPhCggpiWgB/c/gnbxAjoYIJycOAoYIK+vCAofgoLCBu8tCAECMQLAkBcjDTHwGCEFuaery68uCB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAHT/9P/VSBsE9s8fwoBTtMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8n4QgFwbds8fw0BxshVMIIQSPAMVVAFyx8Tyz+BAQHPAAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxYBINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WyRA0QTAZECQQI21t2zxQBA4BeIIA4g/4QlKwxwXy9IIA4g/4Iym88vQmggDiDwO6EvL0JIIA4g8CuvL0+EKCCcnDgHMpIG7y0ID4KCdZJwsDzshVMIIQ1fci+1AFyx8Tyz8BINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFssfyX9VMG1t2zx/+CdvEIEAoIgQNG1t2zwODA4AFgAAAABTdWNjZXNzATptbSJus5lbIG7y0IBvIgGRMuIQJHADBIBCUCPbPA4ByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsADwCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAIBWBITAgFIGRoCEbOjds82zxscYBQVAJWy9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcJ2XTlqzTstzOg6WbZRm6KSAB8u1E0NQB+GPSAAGOZPpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgB+kAh1wsBwwCOHQEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIkjFt4gHTP9P/1AHQ0//TP9MfMBA3EDYQNRA0bBfg+CjXCwqDCboWAQz4J28Q2zwYAWby4ImBAQHXAIEBAdcA+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiEMwA9FY2zwXABhtcFMAEEYQNRAkECMA3sghwQCYgC0BywcBowHeIYI4Mnyyc0EZ07epqh25jiBwIHGOFAR6qQymMCWoEqAEqgcCpCHAAEUw5jAzqgLPAY4rbwBwjhEjeqkIEm+MAaQDeqkEIMAAFOYzIqUDnFMCb4GmMFjLBwKlWeQwMeLJ0AARsK+7UTQ0gABgAHWybuNDVpcGZzOi8vUW1VVExCRko4NkJrempTRXRrcDR0YWFhelEzaFdodG13SHJQTWdtVFhUMlBIeoIA==');
    const __system = Cell.fromBase64('te6cckECHQEABcYAAQHAAQEFoNErAgEU/wD0pBP0vPLICwMCAWIEEQN60AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8VRbbPPLgghQFEAPUAZIwf+BwIddJwh+VMCDXCx/eIIIQaaOsRbqOuDDTHwGCEGmjrEW68uCB0x/TP/pAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhDMGwT2zx/4CCCEFuaery64wKCEJRqmLa64wIwcAYIDAGKMzM1NfhBbyQTXwOCCmJaAKGCCcnDgKGCCvrwgKEk+EKCCmJaAH9z+CdvECOhggnJw4Chggr68ICh+CgsIG7y0IAQIxAsBwHGyFUwghBI8AxVUAXLHxPLP4EBAc8AASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFgEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxbJEDRBMBkQJBAjbW3bPFAEDgFyMNMfAYIQW5p6vLry4IH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAdP/0/9VIGwT2zx/CQF4ggDiD/hCUrDHBfL0ggDiD/gjKbzy9CaCAOIPA7oS8vQkggDiDwK68vT4QoIJycOAcykgbvLQgPgoJ1knCgPOyFUwghDV9yL7UAXLHxPLPwEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxYBINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8Wyx/Jf1UwbW3bPH/4J28QgQCgiBA0bW3bPA4LDgAWAAAAAFN1Y2Nlc3MBTtMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8n4QgFwbds8fw0BOm1tIm6zmVsgbvLQgG8iAZEy4hAkcAMEgEJQI9s8DgHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAPAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMANTI+EMBzH8BygBVYFB2INdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WUAQgbpUwcAHLAY4eINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8W4hLLP8v/AcjL/xPLP8sfyQHMye1UAgFYEhoCAVgTGQIRs6N2zzbPGxxgFBcB8u1E0NQB+GPSAAGOZPpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgB+kAh1wsBwwCOHQEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIkjFt4gHTP9P/1AHQ0//TP9MfMBA3EDYQNRA0bBfg+CjXCwqDCboVAWby4ImBAQHXAIEBAdcA+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiEMwA9FY2zwWABhtcFMAEEYQNRAkECMBDPgnbxDbPBgA3sghwQCYgC0BywcBowHeIYI4Mnyyc0EZ07epqh25jiBwIHGOFAR6qQymMCWoEqAEqgcCpCHAAEUw5jAzqgLPAY4rbwBwjhEjeqkIEm+MAaQDeqkEIMAAFOYzIqUDnFMCb4GmMFjLBwKlWeQwMeLJ0ACVsvRgnBc7D1dLK57HoTsOdZKhRtmgnCd1jUtK2R8syLTry398WI5gnAgVcAbgGdjlM5YOq5HJbLDgnCdl05as07LczoOlm2UZuikgAgFIGxwAEbCvu1E0NIAAYAB1sm7jQ1aXBmczovL1FtVVRMQkZKODZCa3pqU0V0a3A0dGFhYXpRM2hXaHRtd0hyUE1nbVRYVDJQSHqCB/M8PV');
    let builder = beginCell();
    builder.storeRef(__system);
    builder.storeUint(0, 1);
    initRetentionRefund_init_args({ $$type: 'RetentionRefund_init_args', hash, memo, parent })(builder);
    const __data = builder.endCell();
    return { code: __code, data: __data };
}

const RetentionRefund_errors: { [key: number]: { message: string } } = {
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
    57871: { message: `Invalid` },
}

const RetentionRefund_types: ABIType[] = [
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

const RetentionRefund_getters: ABIGetter[] = [
    {"name":"contractBalance","arguments":[],"returnType":{"kind":"simple","type":"string","optional":false}},
]

const RetentionRefund_receivers: ABIReceiver[] = [
    {"receiver":"internal","message":{"kind":"typed","type":"InternalCreateRefund"}},
    {"receiver":"internal","message":{"kind":"typed","type":"InternalAskForRefund"}},
    {"receiver":"internal","message":{"kind":"typed","type":"Deploy"}},
]

export class RetentionRefund implements Contract {
    
    static async init(hash: bigint, memo: bigint, parent: Address) {
        return await RetentionRefund_init(hash, memo, parent);
    }
    
    static async fromInit(hash: bigint, memo: bigint, parent: Address) {
        const init = await RetentionRefund_init(hash, memo, parent);
        const address = contractAddress(0, init);
        return new RetentionRefund(address, init);
    }
    
    static fromAddress(address: Address) {
        return new RetentionRefund(address);
    }
    
    readonly address: Address; 
    readonly init?: { code: Cell, data: Cell };
    readonly abi: ContractABI = {
        types:  RetentionRefund_types,
        getters: RetentionRefund_getters,
        receivers: RetentionRefund_receivers,
        errors: RetentionRefund_errors,
    };
    
    private constructor(address: Address, init?: { code: Cell, data: Cell }) {
        this.address = address;
        this.init = init;
    }
    
    async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: InternalCreateRefund | InternalAskForRefund | Deploy) {
        
        let body: Cell | null = null;
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'InternalCreateRefund') {
            body = beginCell().store(storeInternalCreateRefund(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'InternalAskForRefund') {
            body = beginCell().store(storeInternalAskForRefund(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Deploy') {
            body = beginCell().store(storeDeploy(message)).endCell();
        }
        if (body === null) { throw new Error('Invalid message type'); }
        
        await provider.internal(via, { ...args, body: body });
        
    }
    
    async getContractBalance(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('contractBalance', builder.build())).stack;
        let result = source.readString();
        return result;
    }
    
}