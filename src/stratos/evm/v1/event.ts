/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact, bytesFromBase64, base64FromBytes } from "../../../helpers";
export const protobufPackage = "stratos.evm.v1";
/** EventEthereumTx defines the event for an Ethereum transaction */
export interface EventEthereumTx {
  /** amount */
  amount: string;
  /** eth_hash is the Ethereum hash of the transaction */
  ethHash: string;
  /** index of the transaction in the block */
  index: string;
  /** gas_used is the amount of gas used by the transaction */
  gasUsed: string;
  /** hash is the Tendermint hash of the transaction */
  hash: string;
  /** recipient of the transaction */
  recipient: string;
  /** eth_tx_failed contains a VM error should it occur */
  ethTxFailed: string;
}
/** EventTxLog defines the event for an Ethereum transaction log */
export interface EventTxLog {
  /** tx_logs is an array of transaction logs */
  txLogs: Uint8Array;
}
/** EventBlockBloom defines an Ethereum block bloom filter event */
export interface EventBlockBloom {
  /** bloom is the bloom filter of the block */
  bloom: Uint8Array;
}
export interface EventBlockGas {
  height: string;
  amount: string;
}
export interface EventFeeMarket {
  baseFee: string;
}
export interface EventTx {
  fee: string;
}
function createBaseEventEthereumTx(): EventEthereumTx {
  return {
    amount: "",
    ethHash: "",
    index: "",
    gasUsed: "",
    hash: "",
    recipient: "",
    ethTxFailed: "",
  };
}
export const EventEthereumTx = {
  typeUrl: "/stratos.evm.v1.EventEthereumTx",
  encode(message: EventEthereumTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    if (message.ethHash !== "") {
      writer.uint32(18).string(message.ethHash);
    }
    if (message.index !== "") {
      writer.uint32(26).string(message.index);
    }
    if (message.gasUsed !== "") {
      writer.uint32(34).string(message.gasUsed);
    }
    if (message.hash !== "") {
      writer.uint32(42).string(message.hash);
    }
    if (message.recipient !== "") {
      writer.uint32(50).string(message.recipient);
    }
    if (message.ethTxFailed !== "") {
      writer.uint32(58).string(message.ethTxFailed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventEthereumTx {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventEthereumTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;
        case 2:
          message.ethHash = reader.string();
          break;
        case 3:
          message.index = reader.string();
          break;
        case 4:
          message.gasUsed = reader.string();
          break;
        case 5:
          message.hash = reader.string();
          break;
        case 6:
          message.recipient = reader.string();
          break;
        case 7:
          message.ethTxFailed = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventEthereumTx {
    const obj = createBaseEventEthereumTx();
    if (isSet(object.amount)) obj.amount = String(object.amount);
    if (isSet(object.ethHash)) obj.ethHash = String(object.ethHash);
    if (isSet(object.index)) obj.index = String(object.index);
    if (isSet(object.gasUsed)) obj.gasUsed = String(object.gasUsed);
    if (isSet(object.hash)) obj.hash = String(object.hash);
    if (isSet(object.recipient)) obj.recipient = String(object.recipient);
    if (isSet(object.ethTxFailed)) obj.ethTxFailed = String(object.ethTxFailed);
    return obj;
  },
  toJSON(message: EventEthereumTx): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount);
    message.ethHash !== undefined && (obj.ethHash = message.ethHash);
    message.index !== undefined && (obj.index = message.index);
    message.gasUsed !== undefined && (obj.gasUsed = message.gasUsed);
    message.hash !== undefined && (obj.hash = message.hash);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.ethTxFailed !== undefined && (obj.ethTxFailed = message.ethTxFailed);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventEthereumTx>, I>>(object: I): EventEthereumTx {
    const message = createBaseEventEthereumTx();
    message.amount = object.amount ?? "";
    message.ethHash = object.ethHash ?? "";
    message.index = object.index ?? "";
    message.gasUsed = object.gasUsed ?? "";
    message.hash = object.hash ?? "";
    message.recipient = object.recipient ?? "";
    message.ethTxFailed = object.ethTxFailed ?? "";
    return message;
  },
};
function createBaseEventTxLog(): EventTxLog {
  return {
    txLogs: new Uint8Array(),
  };
}
export const EventTxLog = {
  typeUrl: "/stratos.evm.v1.EventTxLog",
  encode(message: EventTxLog, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.txLogs.length !== 0) {
      writer.uint32(10).bytes(message.txLogs);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventTxLog {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventTxLog();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txLogs = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventTxLog {
    const obj = createBaseEventTxLog();
    if (isSet(object.txLogs)) obj.txLogs = bytesFromBase64(object.txLogs);
    return obj;
  },
  toJSON(message: EventTxLog): unknown {
    const obj: any = {};
    message.txLogs !== undefined &&
      (obj.txLogs = base64FromBytes(message.txLogs !== undefined ? message.txLogs : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventTxLog>, I>>(object: I): EventTxLog {
    const message = createBaseEventTxLog();
    message.txLogs = object.txLogs ?? new Uint8Array();
    return message;
  },
};
function createBaseEventBlockBloom(): EventBlockBloom {
  return {
    bloom: new Uint8Array(),
  };
}
export const EventBlockBloom = {
  typeUrl: "/stratos.evm.v1.EventBlockBloom",
  encode(message: EventBlockBloom, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bloom.length !== 0) {
      writer.uint32(10).bytes(message.bloom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventBlockBloom {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBlockBloom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bloom = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventBlockBloom {
    const obj = createBaseEventBlockBloom();
    if (isSet(object.bloom)) obj.bloom = bytesFromBase64(object.bloom);
    return obj;
  },
  toJSON(message: EventBlockBloom): unknown {
    const obj: any = {};
    message.bloom !== undefined &&
      (obj.bloom = base64FromBytes(message.bloom !== undefined ? message.bloom : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventBlockBloom>, I>>(object: I): EventBlockBloom {
    const message = createBaseEventBlockBloom();
    message.bloom = object.bloom ?? new Uint8Array();
    return message;
  },
};
function createBaseEventBlockGas(): EventBlockGas {
  return {
    height: "",
    amount: "",
  };
}
export const EventBlockGas = {
  typeUrl: "/stratos.evm.v1.EventBlockGas",
  encode(message: EventBlockGas, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== "") {
      writer.uint32(10).string(message.height);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventBlockGas {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBlockGas();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventBlockGas {
    const obj = createBaseEventBlockGas();
    if (isSet(object.height)) obj.height = String(object.height);
    if (isSet(object.amount)) obj.amount = String(object.amount);
    return obj;
  },
  toJSON(message: EventBlockGas): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = message.height);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventBlockGas>, I>>(object: I): EventBlockGas {
    const message = createBaseEventBlockGas();
    message.height = object.height ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};
function createBaseEventFeeMarket(): EventFeeMarket {
  return {
    baseFee: "",
  };
}
export const EventFeeMarket = {
  typeUrl: "/stratos.evm.v1.EventFeeMarket",
  encode(message: EventFeeMarket, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseFee !== "") {
      writer.uint32(10).string(message.baseFee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventFeeMarket {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventFeeMarket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseFee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventFeeMarket {
    const obj = createBaseEventFeeMarket();
    if (isSet(object.baseFee)) obj.baseFee = String(object.baseFee);
    return obj;
  },
  toJSON(message: EventFeeMarket): unknown {
    const obj: any = {};
    message.baseFee !== undefined && (obj.baseFee = message.baseFee);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventFeeMarket>, I>>(object: I): EventFeeMarket {
    const message = createBaseEventFeeMarket();
    message.baseFee = object.baseFee ?? "";
    return message;
  },
};
function createBaseEventTx(): EventTx {
  return {
    fee: "",
  };
}
export const EventTx = {
  typeUrl: "/stratos.evm.v1.EventTx",
  encode(message: EventTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fee !== "") {
      writer.uint32(10).string(message.fee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventTx {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventTx {
    const obj = createBaseEventTx();
    if (isSet(object.fee)) obj.fee = String(object.fee);
    return obj;
  },
  toJSON(message: EventTx): unknown {
    const obj: any = {};
    message.fee !== undefined && (obj.fee = message.fee);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventTx>, I>>(object: I): EventTx {
    const message = createBaseEventTx();
    message.fee = object.fee ?? "";
    return message;
  },
};
