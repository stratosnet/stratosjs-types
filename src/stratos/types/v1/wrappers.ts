/* eslint-disable */
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "stratos.types.v1";
export interface Int {
  Value: string;
}
export interface Dec {
  Value: string;
}
export interface Coins {
  Value: Coin[];
}
/** ValAddresses defines a repeated set of validator addresses. */
export interface SdsAddresses {
  Addresses: string[];
}
function createBaseInt(): Int {
  return {
    Value: "",
  };
}
export const Int = {
  typeUrl: "/stratos.types.v1.Int",
  encode(message: Int, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.Value !== "") {
      writer.uint32(10).string(message.Value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Int {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Int {
    const obj = createBaseInt();
    if (isSet(object.Value)) obj.Value = String(object.Value);
    return obj;
  },
  toJSON(message: Int): unknown {
    const obj: any = {};
    message.Value !== undefined && (obj.Value = message.Value);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Int>, I>>(object: I): Int {
    const message = createBaseInt();
    message.Value = object.Value ?? "";
    return message;
  },
};
function createBaseDec(): Dec {
  return {
    Value: "",
  };
}
export const Dec = {
  typeUrl: "/stratos.types.v1.Dec",
  encode(message: Dec, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.Value !== "") {
      writer.uint32(10).string(message.Value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Dec {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Dec {
    const obj = createBaseDec();
    if (isSet(object.Value)) obj.Value = String(object.Value);
    return obj;
  },
  toJSON(message: Dec): unknown {
    const obj: any = {};
    message.Value !== undefined && (obj.Value = message.Value);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Dec>, I>>(object: I): Dec {
    const message = createBaseDec();
    message.Value = object.Value ?? "";
    return message;
  },
};
function createBaseCoins(): Coins {
  return {
    Value: [],
  };
}
export const Coins = {
  typeUrl: "/stratos.types.v1.Coins",
  encode(message: Coins, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.Value) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Coins {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCoins();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Value.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Coins {
    const obj = createBaseCoins();
    if (Array.isArray(object?.Value)) obj.Value = object.Value.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: Coins): unknown {
    const obj: any = {};
    if (message.Value) {
      obj.Value = message.Value.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.Value = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Coins>, I>>(object: I): Coins {
    const message = createBaseCoins();
    message.Value = object.Value?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};
function createBaseSdsAddresses(): SdsAddresses {
  return {
    Addresses: [],
  };
}
export const SdsAddresses = {
  typeUrl: "/stratos.types.v1.SdsAddresses",
  encode(message: SdsAddresses, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.Addresses) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SdsAddresses {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSdsAddresses();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Addresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SdsAddresses {
    const obj = createBaseSdsAddresses();
    if (Array.isArray(object?.Addresses)) obj.Addresses = object.Addresses.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: SdsAddresses): unknown {
    const obj: any = {};
    if (message.Addresses) {
      obj.Addresses = message.Addresses.map((e) => e);
    } else {
      obj.Addresses = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SdsAddresses>, I>>(object: I): SdsAddresses {
    const message = createBaseSdsAddresses();
    message.Addresses = object.Addresses?.map((e) => e) || [];
    return message;
  },
};
