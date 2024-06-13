/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "stratos.evm.v1";
/** UpdateImplmentationProposal used to update implemntation for genesis proxies */
export interface UpdateImplmentationProposal {
  /** proxy address where data will be executed */
  proxyAddress: string;
  /** implmentation address as API for a storage */
  implementationAddress: string;
  /** data for execution */
  data: Uint8Array;
  /** value for proxy func call */
  value: string;
}
function createBaseUpdateImplmentationProposal(): UpdateImplmentationProposal {
  return {
    proxyAddress: "",
    implementationAddress: "",
    data: new Uint8Array(),
    value: "",
  };
}
export const UpdateImplmentationProposal = {
  typeUrl: "/stratos.evm.v1.UpdateImplmentationProposal",
  encode(message: UpdateImplmentationProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proxyAddress !== "") {
      writer.uint32(10).string(message.proxyAddress);
    }
    if (message.implementationAddress !== "") {
      writer.uint32(18).string(message.implementationAddress);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    if (message.value !== "") {
      writer.uint32(34).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UpdateImplmentationProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateImplmentationProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proxyAddress = reader.string();
          break;
        case 2:
          message.implementationAddress = reader.string();
          break;
        case 3:
          message.data = reader.bytes();
          break;
        case 4:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UpdateImplmentationProposal {
    const obj = createBaseUpdateImplmentationProposal();
    if (isSet(object.proxyAddress)) obj.proxyAddress = String(object.proxyAddress);
    if (isSet(object.implementationAddress)) obj.implementationAddress = String(object.implementationAddress);
    if (isSet(object.data)) obj.data = bytesFromBase64(object.data);
    if (isSet(object.value)) obj.value = String(object.value);
    return obj;
  },
  toJSON(message: UpdateImplmentationProposal): unknown {
    const obj: any = {};
    message.proxyAddress !== undefined && (obj.proxyAddress = message.proxyAddress);
    message.implementationAddress !== undefined &&
      (obj.implementationAddress = message.implementationAddress);
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<UpdateImplmentationProposal>, I>>(
    object: I,
  ): UpdateImplmentationProposal {
    const message = createBaseUpdateImplmentationProposal();
    message.proxyAddress = object.proxyAddress ?? "";
    message.implementationAddress = object.implementationAddress ?? "";
    message.data = object.data ?? new Uint8Array();
    message.value = object.value ?? "";
    return message;
  },
};
