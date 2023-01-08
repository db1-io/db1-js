import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace item_cr_0v1. */
export namespace item_cr_0v1 {
  /** Properties of a CommonRequest. */
  interface ICommonRequest {
    /** CommonRequest token */
    token?: string | null;

    /** CommonRequest usageContext */
    usageContext?: string | null;
  }

  /** Represents a CommonRequest. */
  class CommonRequest implements ICommonRequest {
    /**
     * Constructs a new CommonRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: item_cr_0v1.ICommonRequest);

    /** CommonRequest token. */
    public token: string;

    /** CommonRequest usageContext. */
    public usageContext: string;

    /**
     * Creates a new CommonRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CommonRequest instance
     */
    public static create(
      properties?: item_cr_0v1.ICommonRequest
    ): item_cr_0v1.CommonRequest;

    /**
     * Encodes the specified CommonRequest message. Does not implicitly {@link item_cr_0v1.CommonRequest.verify|verify} messages.
     * @param message CommonRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: item_cr_0v1.ICommonRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified CommonRequest message, length delimited. Does not implicitly {@link item_cr_0v1.CommonRequest.verify|verify} messages.
     * @param message CommonRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: item_cr_0v1.ICommonRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a CommonRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CommonRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): item_cr_0v1.CommonRequest;

    /**
     * Decodes a CommonRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CommonRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): item_cr_0v1.CommonRequest;

    /**
     * Verifies a CommonRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a CommonRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CommonRequest
     */
    public static fromObject(object: {
      [k: string]: any;
    }): item_cr_0v1.CommonRequest;

    /**
     * Creates a plain object from a CommonRequest message. Also converts values to other types if specified.
     * @param message CommonRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: item_cr_0v1.CommonRequest,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this CommonRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CommonRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a CommonResponse. */
  interface ICommonResponse {
    /** CommonResponse message */
    message?: string | null;

    /** CommonResponse debugMessage */
    debugMessage?: string | null;

    /** CommonResponse status */
    status?: item_cr_0v1.CommonResponse.Status | null;
  }

  /** Represents a CommonResponse. */
  class CommonResponse implements ICommonResponse {
    /**
     * Constructs a new CommonResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: item_cr_0v1.ICommonResponse);

    /** CommonResponse message. */
    public message: string;

    /** CommonResponse debugMessage. */
    public debugMessage: string;

    /** CommonResponse status. */
    public status: item_cr_0v1.CommonResponse.Status;

    /**
     * Creates a new CommonResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CommonResponse instance
     */
    public static create(
      properties?: item_cr_0v1.ICommonResponse
    ): item_cr_0v1.CommonResponse;

    /**
     * Encodes the specified CommonResponse message. Does not implicitly {@link item_cr_0v1.CommonResponse.verify|verify} messages.
     * @param message CommonResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: item_cr_0v1.ICommonResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified CommonResponse message, length delimited. Does not implicitly {@link item_cr_0v1.CommonResponse.verify|verify} messages.
     * @param message CommonResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: item_cr_0v1.ICommonResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a CommonResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CommonResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): item_cr_0v1.CommonResponse;

    /**
     * Decodes a CommonResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CommonResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): item_cr_0v1.CommonResponse;

    /**
     * Verifies a CommonResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a CommonResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CommonResponse
     */
    public static fromObject(object: {
      [k: string]: any;
    }): item_cr_0v1.CommonResponse;

    /**
     * Creates a plain object from a CommonResponse message. Also converts values to other types if specified.
     * @param message CommonResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: item_cr_0v1.CommonResponse,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this CommonResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CommonResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  namespace CommonResponse {
    /** Status enum. */
    enum Status {
      INTERNAL_ERROR = 0,
      BAD_REQUEST = 1,
      OK_REQUEST = 2,
    }
  }

  /** Properties of a CreateRequest. */
  interface ICreateRequest {
    /** CreateRequest common */
    common?: item_cr_0v1.ICommonRequest | null;

    /** CreateRequest resourceId */
    resourceId?: string | null;
  }

  /** Represents a CreateRequest. */
  class CreateRequest implements ICreateRequest {
    /**
     * Constructs a new CreateRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: item_cr_0v1.ICreateRequest);

    /** CreateRequest common. */
    public common?: item_cr_0v1.ICommonRequest | null;

    /** CreateRequest resourceId. */
    public resourceId: string;

    /**
     * Creates a new CreateRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CreateRequest instance
     */
    public static create(
      properties?: item_cr_0v1.ICreateRequest
    ): item_cr_0v1.CreateRequest;

    /**
     * Encodes the specified CreateRequest message. Does not implicitly {@link item_cr_0v1.CreateRequest.verify|verify} messages.
     * @param message CreateRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: item_cr_0v1.ICreateRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified CreateRequest message, length delimited. Does not implicitly {@link item_cr_0v1.CreateRequest.verify|verify} messages.
     * @param message CreateRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: item_cr_0v1.ICreateRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a CreateRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CreateRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): item_cr_0v1.CreateRequest;

    /**
     * Decodes a CreateRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CreateRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): item_cr_0v1.CreateRequest;

    /**
     * Verifies a CreateRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a CreateRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CreateRequest
     */
    public static fromObject(object: {
      [k: string]: any;
    }): item_cr_0v1.CreateRequest;

    /**
     * Creates a plain object from a CreateRequest message. Also converts values to other types if specified.
     * @param message CreateRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: item_cr_0v1.CreateRequest,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this CreateRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CreateRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a CreateResponse. */
  interface ICreateResponse {
    /** CreateResponse common */
    common?: item_cr_0v1.ICommonResponse | null;

    /** CreateResponse status */
    status?: item_cr_0v1.CreateResponse.Status | null;
  }

  /** Represents a CreateResponse. */
  class CreateResponse implements ICreateResponse {
    /**
     * Constructs a new CreateResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: item_cr_0v1.ICreateResponse);

    /** CreateResponse common. */
    public common?: item_cr_0v1.ICommonResponse | null;

    /** CreateResponse status. */
    public status: item_cr_0v1.CreateResponse.Status;

    /**
     * Creates a new CreateResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CreateResponse instance
     */
    public static create(
      properties?: item_cr_0v1.ICreateResponse
    ): item_cr_0v1.CreateResponse;

    /**
     * Encodes the specified CreateResponse message. Does not implicitly {@link item_cr_0v1.CreateResponse.verify|verify} messages.
     * @param message CreateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: item_cr_0v1.ICreateResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified CreateResponse message, length delimited. Does not implicitly {@link item_cr_0v1.CreateResponse.verify|verify} messages.
     * @param message CreateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: item_cr_0v1.ICreateResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a CreateResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CreateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): item_cr_0v1.CreateResponse;

    /**
     * Decodes a CreateResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CreateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): item_cr_0v1.CreateResponse;

    /**
     * Verifies a CreateResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a CreateResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CreateResponse
     */
    public static fromObject(object: {
      [k: string]: any;
    }): item_cr_0v1.CreateResponse;

    /**
     * Creates a plain object from a CreateResponse message. Also converts values to other types if specified.
     * @param message CreateResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: item_cr_0v1.CreateResponse,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this CreateResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CreateResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  namespace CreateResponse {
    /** Status enum. */
    enum Status {
      ALREADY_EXISTS = 0,
      CREATED = 1,
    }
  }

  /** Properties of a GetRequest. */
  interface IGetRequest {
    /** GetRequest common */
    common?: item_cr_0v1.ICommonRequest | null;

    /** GetRequest resourceId */
    resourceId?: string | null;

    /** GetRequest withoutMetavaribles */
    withoutMetavaribles?: boolean | null;

    /** GetRequest withoutItemValue */
    withoutItemValue?: boolean | null;

    /** GetRequest maxSizeBytes */
    maxSizeBytes?: number | Long | null;
  }

  /** Represents a GetRequest. */
  class GetRequest implements IGetRequest {
    /**
     * Constructs a new GetRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: item_cr_0v1.IGetRequest);

    /** GetRequest common. */
    public common?: item_cr_0v1.ICommonRequest | null;

    /** GetRequest resourceId. */
    public resourceId: string;

    /** GetRequest withoutMetavaribles. */
    public withoutMetavaribles: boolean;

    /** GetRequest withoutItemValue. */
    public withoutItemValue: boolean;

    /** GetRequest maxSizeBytes. */
    public maxSizeBytes: number | Long;

    /**
     * Creates a new GetRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetRequest instance
     */
    public static create(
      properties?: item_cr_0v1.IGetRequest
    ): item_cr_0v1.GetRequest;

    /**
     * Encodes the specified GetRequest message. Does not implicitly {@link item_cr_0v1.GetRequest.verify|verify} messages.
     * @param message GetRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: item_cr_0v1.IGetRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified GetRequest message, length delimited. Does not implicitly {@link item_cr_0v1.GetRequest.verify|verify} messages.
     * @param message GetRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: item_cr_0v1.IGetRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a GetRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): item_cr_0v1.GetRequest;

    /**
     * Decodes a GetRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): item_cr_0v1.GetRequest;

    /**
     * Verifies a GetRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a GetRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetRequest
     */
    public static fromObject(object: {
      [k: string]: any;
    }): item_cr_0v1.GetRequest;

    /**
     * Creates a plain object from a GetRequest message. Also converts values to other types if specified.
     * @param message GetRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: item_cr_0v1.GetRequest,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this GetRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for GetRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a GetResponse. */
  interface IGetResponse {
    /** GetResponse common */
    common?: item_cr_0v1.ICommonResponse | null;

    /** GetResponse status */
    status?: item_cr_0v1.GetResponse.Status | null;

    /** GetResponse itemValue */
    itemValue?: Uint8Array | null;

    /** GetResponse metavaribles */
    metavaribles?: item_cr_0v1.GetResponse.IMetavarible[] | null;

    /** GetResponse sizeBytesBiggerThanMax */
    sizeBytesBiggerThanMax?: boolean | null;

    /** GetResponse sizeBytes */
    sizeBytes?: number | Long | null;

    /** GetResponse createdMs */
    createdMs?: number | Long | null;

    /** GetResponse updatedMs */
    updatedMs?: number | Long | null;
  }

  /** Represents a GetResponse. */
  class GetResponse implements IGetResponse {
    /**
     * Constructs a new GetResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: item_cr_0v1.IGetResponse);

    /** GetResponse common. */
    public common?: item_cr_0v1.ICommonResponse | null;

    /** GetResponse status. */
    public status: item_cr_0v1.GetResponse.Status;

    /** GetResponse itemValue. */
    public itemValue: Uint8Array;

    /** GetResponse metavaribles. */
    public metavaribles: item_cr_0v1.GetResponse.IMetavarible[];

    /** GetResponse sizeBytesBiggerThanMax. */
    public sizeBytesBiggerThanMax: boolean;

    /** GetResponse sizeBytes. */
    public sizeBytes: number | Long;

    /** GetResponse createdMs. */
    public createdMs: number | Long;

    /** GetResponse updatedMs. */
    public updatedMs: number | Long;

    /**
     * Creates a new GetResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetResponse instance
     */
    public static create(
      properties?: item_cr_0v1.IGetResponse
    ): item_cr_0v1.GetResponse;

    /**
     * Encodes the specified GetResponse message. Does not implicitly {@link item_cr_0v1.GetResponse.verify|verify} messages.
     * @param message GetResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: item_cr_0v1.IGetResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified GetResponse message, length delimited. Does not implicitly {@link item_cr_0v1.GetResponse.verify|verify} messages.
     * @param message GetResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: item_cr_0v1.IGetResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a GetResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): item_cr_0v1.GetResponse;

    /**
     * Decodes a GetResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): item_cr_0v1.GetResponse;

    /**
     * Verifies a GetResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a GetResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetResponse
     */
    public static fromObject(object: {
      [k: string]: any;
    }): item_cr_0v1.GetResponse;

    /**
     * Creates a plain object from a GetResponse message. Also converts values to other types if specified.
     * @param message GetResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: item_cr_0v1.GetResponse,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this GetResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for GetResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  namespace GetResponse {
    /** Status enum. */
    enum Status {
      NOT_FOUND = 0,
      FOUND = 1,
    }

    /** Properties of a Metavarible. */
    interface IMetavarible {
      /** Metavarible key */
      key?: string | null;

      /** Metavarible value */
      value?: string | null;
    }

    /** Represents a Metavarible. */
    class Metavarible implements IMetavarible {
      /**
       * Constructs a new Metavarible.
       * @param [properties] Properties to set
       */
      constructor(properties?: item_cr_0v1.GetResponse.IMetavarible);

      /** Metavarible key. */
      public key: string;

      /** Metavarible value. */
      public value: string;

      /**
       * Creates a new Metavarible instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Metavarible instance
       */
      public static create(
        properties?: item_cr_0v1.GetResponse.IMetavarible
      ): item_cr_0v1.GetResponse.Metavarible;

      /**
       * Encodes the specified Metavarible message. Does not implicitly {@link item_cr_0v1.GetResponse.Metavarible.verify|verify} messages.
       * @param message Metavarible message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: item_cr_0v1.GetResponse.IMetavarible,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified Metavarible message, length delimited. Does not implicitly {@link item_cr_0v1.GetResponse.Metavarible.verify|verify} messages.
       * @param message Metavarible message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: item_cr_0v1.GetResponse.IMetavarible,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a Metavarible message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Metavarible
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): item_cr_0v1.GetResponse.Metavarible;

      /**
       * Decodes a Metavarible message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Metavarible
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): item_cr_0v1.GetResponse.Metavarible;

      /**
       * Verifies a Metavarible message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a Metavarible message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Metavarible
       */
      public static fromObject(object: {
        [k: string]: any;
      }): item_cr_0v1.GetResponse.Metavarible;

      /**
       * Creates a plain object from a Metavarible message. Also converts values to other types if specified.
       * @param message Metavarible
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: item_cr_0v1.GetResponse.Metavarible,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this Metavarible to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      /**
       * Gets the default type url for Metavarible
       * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns The default type url
       */
      public static getTypeUrl(typeUrlPrefix?: string): string;
    }
  }

  /** Properties of a SetRequest. */
  interface ISetRequest {
    /** SetRequest common */
    common?: item_cr_0v1.ICommonRequest | null;

    /** SetRequest resourceId */
    resourceId?: string | null;

    /** SetRequest itemValue */
    itemValue?: Uint8Array | null;
  }

  /** Represents a SetRequest. */
  class SetRequest implements ISetRequest {
    /**
     * Constructs a new SetRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: item_cr_0v1.ISetRequest);

    /** SetRequest common. */
    public common?: item_cr_0v1.ICommonRequest | null;

    /** SetRequest resourceId. */
    public resourceId: string;

    /** SetRequest itemValue. */
    public itemValue: Uint8Array;

    /**
     * Creates a new SetRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SetRequest instance
     */
    public static create(
      properties?: item_cr_0v1.ISetRequest
    ): item_cr_0v1.SetRequest;

    /**
     * Encodes the specified SetRequest message. Does not implicitly {@link item_cr_0v1.SetRequest.verify|verify} messages.
     * @param message SetRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: item_cr_0v1.ISetRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified SetRequest message, length delimited. Does not implicitly {@link item_cr_0v1.SetRequest.verify|verify} messages.
     * @param message SetRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: item_cr_0v1.ISetRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a SetRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SetRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): item_cr_0v1.SetRequest;

    /**
     * Decodes a SetRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SetRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): item_cr_0v1.SetRequest;

    /**
     * Verifies a SetRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a SetRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SetRequest
     */
    public static fromObject(object: {
      [k: string]: any;
    }): item_cr_0v1.SetRequest;

    /**
     * Creates a plain object from a SetRequest message. Also converts values to other types if specified.
     * @param message SetRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: item_cr_0v1.SetRequest,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this SetRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for SetRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a SetResponse. */
  interface ISetResponse {
    /** SetResponse common */
    common?: item_cr_0v1.ICommonResponse | null;

    /** SetResponse status */
    status?: item_cr_0v1.SetResponse.Status | null;
  }

  /** Represents a SetResponse. */
  class SetResponse implements ISetResponse {
    /**
     * Constructs a new SetResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: item_cr_0v1.ISetResponse);

    /** SetResponse common. */
    public common?: item_cr_0v1.ICommonResponse | null;

    /** SetResponse status. */
    public status: item_cr_0v1.SetResponse.Status;

    /**
     * Creates a new SetResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SetResponse instance
     */
    public static create(
      properties?: item_cr_0v1.ISetResponse
    ): item_cr_0v1.SetResponse;

    /**
     * Encodes the specified SetResponse message. Does not implicitly {@link item_cr_0v1.SetResponse.verify|verify} messages.
     * @param message SetResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: item_cr_0v1.ISetResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified SetResponse message, length delimited. Does not implicitly {@link item_cr_0v1.SetResponse.verify|verify} messages.
     * @param message SetResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: item_cr_0v1.ISetResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a SetResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SetResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): item_cr_0v1.SetResponse;

    /**
     * Decodes a SetResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SetResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): item_cr_0v1.SetResponse;

    /**
     * Verifies a SetResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a SetResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SetResponse
     */
    public static fromObject(object: {
      [k: string]: any;
    }): item_cr_0v1.SetResponse;

    /**
     * Creates a plain object from a SetResponse message. Also converts values to other types if specified.
     * @param message SetResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: item_cr_0v1.SetResponse,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this SetResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for SetResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  namespace SetResponse {
    /** Status enum. */
    enum Status {
      NOT_FOUND = 0,
      UPDATED = 1,
    }
  }

  /** Properties of an UpdateMetavariblesRequest. */
  interface IUpdateMetavariblesRequest {
    /** UpdateMetavariblesRequest common */
    common?: item_cr_0v1.ICommonRequest | null;

    /** UpdateMetavariblesRequest resourceId */
    resourceId?: string | null;

    /** UpdateMetavariblesRequest metavaribles */
    metavaribles?: item_cr_0v1.UpdateMetavariblesRequest.IMetavarible[] | null;
  }

  /** Represents an UpdateMetavariblesRequest. */
  class UpdateMetavariblesRequest implements IUpdateMetavariblesRequest {
    /**
     * Constructs a new UpdateMetavariblesRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: item_cr_0v1.IUpdateMetavariblesRequest);

    /** UpdateMetavariblesRequest common. */
    public common?: item_cr_0v1.ICommonRequest | null;

    /** UpdateMetavariblesRequest resourceId. */
    public resourceId: string;

    /** UpdateMetavariblesRequest metavaribles. */
    public metavaribles: item_cr_0v1.UpdateMetavariblesRequest.IMetavarible[];

    /**
     * Creates a new UpdateMetavariblesRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UpdateMetavariblesRequest instance
     */
    public static create(
      properties?: item_cr_0v1.IUpdateMetavariblesRequest
    ): item_cr_0v1.UpdateMetavariblesRequest;

    /**
     * Encodes the specified UpdateMetavariblesRequest message. Does not implicitly {@link item_cr_0v1.UpdateMetavariblesRequest.verify|verify} messages.
     * @param message UpdateMetavariblesRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: item_cr_0v1.IUpdateMetavariblesRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified UpdateMetavariblesRequest message, length delimited. Does not implicitly {@link item_cr_0v1.UpdateMetavariblesRequest.verify|verify} messages.
     * @param message UpdateMetavariblesRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: item_cr_0v1.IUpdateMetavariblesRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes an UpdateMetavariblesRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UpdateMetavariblesRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): item_cr_0v1.UpdateMetavariblesRequest;

    /**
     * Decodes an UpdateMetavariblesRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UpdateMetavariblesRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): item_cr_0v1.UpdateMetavariblesRequest;

    /**
     * Verifies an UpdateMetavariblesRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates an UpdateMetavariblesRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UpdateMetavariblesRequest
     */
    public static fromObject(object: {
      [k: string]: any;
    }): item_cr_0v1.UpdateMetavariblesRequest;

    /**
     * Creates a plain object from an UpdateMetavariblesRequest message. Also converts values to other types if specified.
     * @param message UpdateMetavariblesRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: item_cr_0v1.UpdateMetavariblesRequest,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this UpdateMetavariblesRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for UpdateMetavariblesRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  namespace UpdateMetavariblesRequest {
    /** Properties of a Metavarible. */
    interface IMetavarible {
      /** Metavarible key */
      key?: string | null;

      /** Metavarible value */
      value?: string | null;

      /** Metavarible delete */
      delete?: boolean | null;
    }

    /** Represents a Metavarible. */
    class Metavarible implements IMetavarible {
      /**
       * Constructs a new Metavarible.
       * @param [properties] Properties to set
       */
      constructor(
        properties?: item_cr_0v1.UpdateMetavariblesRequest.IMetavarible
      );

      /** Metavarible key. */
      public key: string;

      /** Metavarible value. */
      public value: string;

      /** Metavarible delete. */
      public delete: boolean;

      /**
       * Creates a new Metavarible instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Metavarible instance
       */
      public static create(
        properties?: item_cr_0v1.UpdateMetavariblesRequest.IMetavarible
      ): item_cr_0v1.UpdateMetavariblesRequest.Metavarible;

      /**
       * Encodes the specified Metavarible message. Does not implicitly {@link item_cr_0v1.UpdateMetavariblesRequest.Metavarible.verify|verify} messages.
       * @param message Metavarible message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: item_cr_0v1.UpdateMetavariblesRequest.IMetavarible,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified Metavarible message, length delimited. Does not implicitly {@link item_cr_0v1.UpdateMetavariblesRequest.Metavarible.verify|verify} messages.
       * @param message Metavarible message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: item_cr_0v1.UpdateMetavariblesRequest.IMetavarible,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a Metavarible message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Metavarible
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): item_cr_0v1.UpdateMetavariblesRequest.Metavarible;

      /**
       * Decodes a Metavarible message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Metavarible
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): item_cr_0v1.UpdateMetavariblesRequest.Metavarible;

      /**
       * Verifies a Metavarible message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a Metavarible message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Metavarible
       */
      public static fromObject(object: {
        [k: string]: any;
      }): item_cr_0v1.UpdateMetavariblesRequest.Metavarible;

      /**
       * Creates a plain object from a Metavarible message. Also converts values to other types if specified.
       * @param message Metavarible
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: item_cr_0v1.UpdateMetavariblesRequest.Metavarible,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this Metavarible to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      /**
       * Gets the default type url for Metavarible
       * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns The default type url
       */
      public static getTypeUrl(typeUrlPrefix?: string): string;
    }
  }

  /** Properties of an UpdateMetavariblesResponse. */
  interface IUpdateMetavariblesResponse {
    /** UpdateMetavariblesResponse common */
    common?: item_cr_0v1.ICommonResponse | null;

    /** UpdateMetavariblesResponse status */
    status?: item_cr_0v1.UpdateMetavariblesResponse.Status | null;
  }

  /** Represents an UpdateMetavariblesResponse. */
  class UpdateMetavariblesResponse implements IUpdateMetavariblesResponse {
    /**
     * Constructs a new UpdateMetavariblesResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: item_cr_0v1.IUpdateMetavariblesResponse);

    /** UpdateMetavariblesResponse common. */
    public common?: item_cr_0v1.ICommonResponse | null;

    /** UpdateMetavariblesResponse status. */
    public status: item_cr_0v1.UpdateMetavariblesResponse.Status;

    /**
     * Creates a new UpdateMetavariblesResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UpdateMetavariblesResponse instance
     */
    public static create(
      properties?: item_cr_0v1.IUpdateMetavariblesResponse
    ): item_cr_0v1.UpdateMetavariblesResponse;

    /**
     * Encodes the specified UpdateMetavariblesResponse message. Does not implicitly {@link item_cr_0v1.UpdateMetavariblesResponse.verify|verify} messages.
     * @param message UpdateMetavariblesResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: item_cr_0v1.IUpdateMetavariblesResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified UpdateMetavariblesResponse message, length delimited. Does not implicitly {@link item_cr_0v1.UpdateMetavariblesResponse.verify|verify} messages.
     * @param message UpdateMetavariblesResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: item_cr_0v1.IUpdateMetavariblesResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes an UpdateMetavariblesResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UpdateMetavariblesResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): item_cr_0v1.UpdateMetavariblesResponse;

    /**
     * Decodes an UpdateMetavariblesResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UpdateMetavariblesResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): item_cr_0v1.UpdateMetavariblesResponse;

    /**
     * Verifies an UpdateMetavariblesResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates an UpdateMetavariblesResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UpdateMetavariblesResponse
     */
    public static fromObject(object: {
      [k: string]: any;
    }): item_cr_0v1.UpdateMetavariblesResponse;

    /**
     * Creates a plain object from an UpdateMetavariblesResponse message. Also converts values to other types if specified.
     * @param message UpdateMetavariblesResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: item_cr_0v1.UpdateMetavariblesResponse,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this UpdateMetavariblesResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for UpdateMetavariblesResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  namespace UpdateMetavariblesResponse {
    /** Status enum. */
    enum Status {
      NOT_FOUND = 0,
      UPDATED = 1,
    }
  }

  /** Properties of a DeleteRequest. */
  interface IDeleteRequest {
    /** DeleteRequest common */
    common?: item_cr_0v1.ICommonRequest | null;

    /** DeleteRequest resourceId */
    resourceId?: string | null;
  }

  /** Represents a DeleteRequest. */
  class DeleteRequest implements IDeleteRequest {
    /**
     * Constructs a new DeleteRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: item_cr_0v1.IDeleteRequest);

    /** DeleteRequest common. */
    public common?: item_cr_0v1.ICommonRequest | null;

    /** DeleteRequest resourceId. */
    public resourceId: string;

    /**
     * Creates a new DeleteRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DeleteRequest instance
     */
    public static create(
      properties?: item_cr_0v1.IDeleteRequest
    ): item_cr_0v1.DeleteRequest;

    /**
     * Encodes the specified DeleteRequest message. Does not implicitly {@link item_cr_0v1.DeleteRequest.verify|verify} messages.
     * @param message DeleteRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: item_cr_0v1.IDeleteRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified DeleteRequest message, length delimited. Does not implicitly {@link item_cr_0v1.DeleteRequest.verify|verify} messages.
     * @param message DeleteRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: item_cr_0v1.IDeleteRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a DeleteRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DeleteRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): item_cr_0v1.DeleteRequest;

    /**
     * Decodes a DeleteRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DeleteRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): item_cr_0v1.DeleteRequest;

    /**
     * Verifies a DeleteRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a DeleteRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DeleteRequest
     */
    public static fromObject(object: {
      [k: string]: any;
    }): item_cr_0v1.DeleteRequest;

    /**
     * Creates a plain object from a DeleteRequest message. Also converts values to other types if specified.
     * @param message DeleteRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: item_cr_0v1.DeleteRequest,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this DeleteRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DeleteRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a DeleteResponse. */
  interface IDeleteResponse {
    /** DeleteResponse common */
    common?: item_cr_0v1.ICommonResponse | null;

    /** DeleteResponse status */
    status?: item_cr_0v1.DeleteResponse.Status | null;
  }

  /** Represents a DeleteResponse. */
  class DeleteResponse implements IDeleteResponse {
    /**
     * Constructs a new DeleteResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: item_cr_0v1.IDeleteResponse);

    /** DeleteResponse common. */
    public common?: item_cr_0v1.ICommonResponse | null;

    /** DeleteResponse status. */
    public status: item_cr_0v1.DeleteResponse.Status;

    /**
     * Creates a new DeleteResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DeleteResponse instance
     */
    public static create(
      properties?: item_cr_0v1.IDeleteResponse
    ): item_cr_0v1.DeleteResponse;

    /**
     * Encodes the specified DeleteResponse message. Does not implicitly {@link item_cr_0v1.DeleteResponse.verify|verify} messages.
     * @param message DeleteResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: item_cr_0v1.IDeleteResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified DeleteResponse message, length delimited. Does not implicitly {@link item_cr_0v1.DeleteResponse.verify|verify} messages.
     * @param message DeleteResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: item_cr_0v1.IDeleteResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a DeleteResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DeleteResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): item_cr_0v1.DeleteResponse;

    /**
     * Decodes a DeleteResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DeleteResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): item_cr_0v1.DeleteResponse;

    /**
     * Verifies a DeleteResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a DeleteResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DeleteResponse
     */
    public static fromObject(object: {
      [k: string]: any;
    }): item_cr_0v1.DeleteResponse;

    /**
     * Creates a plain object from a DeleteResponse message. Also converts values to other types if specified.
     * @param message DeleteResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: item_cr_0v1.DeleteResponse,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this DeleteResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DeleteResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  namespace DeleteResponse {
    /** Status enum. */
    enum Status {
      NOT_FOUND = 0,
      DELETED = 1,
    }
  }

  /** Properties of a GetLogRequest. */
  interface IGetLogRequest {
    /** GetLogRequest common */
    common?: item_cr_0v1.ICommonRequest | null;

    /** GetLogRequest timestampH */
    timestampH?: number | Long | null;

    /** GetLogRequest startTimestampMs */
    startTimestampMs?: number | Long | null;

    /** GetLogRequest limit */
    limit?: number | Long | null;
  }

  /** Represents a GetLogRequest. */
  class GetLogRequest implements IGetLogRequest {
    /**
     * Constructs a new GetLogRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: item_cr_0v1.IGetLogRequest);

    /** GetLogRequest common. */
    public common?: item_cr_0v1.ICommonRequest | null;

    /** GetLogRequest timestampH. */
    public timestampH: number | Long;

    /** GetLogRequest startTimestampMs. */
    public startTimestampMs: number | Long;

    /** GetLogRequest limit. */
    public limit: number | Long;

    /**
     * Creates a new GetLogRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetLogRequest instance
     */
    public static create(
      properties?: item_cr_0v1.IGetLogRequest
    ): item_cr_0v1.GetLogRequest;

    /**
     * Encodes the specified GetLogRequest message. Does not implicitly {@link item_cr_0v1.GetLogRequest.verify|verify} messages.
     * @param message GetLogRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: item_cr_0v1.IGetLogRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified GetLogRequest message, length delimited. Does not implicitly {@link item_cr_0v1.GetLogRequest.verify|verify} messages.
     * @param message GetLogRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: item_cr_0v1.IGetLogRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a GetLogRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetLogRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): item_cr_0v1.GetLogRequest;

    /**
     * Decodes a GetLogRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetLogRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): item_cr_0v1.GetLogRequest;

    /**
     * Verifies a GetLogRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a GetLogRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetLogRequest
     */
    public static fromObject(object: {
      [k: string]: any;
    }): item_cr_0v1.GetLogRequest;

    /**
     * Creates a plain object from a GetLogRequest message. Also converts values to other types if specified.
     * @param message GetLogRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: item_cr_0v1.GetLogRequest,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this GetLogRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for GetLogRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a GetLogResponse. */
  interface IGetLogResponse {
    /** GetLogResponse common */
    common?: item_cr_0v1.ICommonResponse | null;

    /** GetLogResponse events */
    events?: item_cr_0v1.GetLogResponse.IEvent[] | null;

    /** GetLogResponse nextStartTimestampMs */
    nextStartTimestampMs?: number | Long | null;
  }

  /** Represents a GetLogResponse. */
  class GetLogResponse implements IGetLogResponse {
    /**
     * Constructs a new GetLogResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: item_cr_0v1.IGetLogResponse);

    /** GetLogResponse common. */
    public common?: item_cr_0v1.ICommonResponse | null;

    /** GetLogResponse events. */
    public events: item_cr_0v1.GetLogResponse.IEvent[];

    /** GetLogResponse nextStartTimestampMs. */
    public nextStartTimestampMs: number | Long;

    /**
     * Creates a new GetLogResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetLogResponse instance
     */
    public static create(
      properties?: item_cr_0v1.IGetLogResponse
    ): item_cr_0v1.GetLogResponse;

    /**
     * Encodes the specified GetLogResponse message. Does not implicitly {@link item_cr_0v1.GetLogResponse.verify|verify} messages.
     * @param message GetLogResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: item_cr_0v1.IGetLogResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified GetLogResponse message, length delimited. Does not implicitly {@link item_cr_0v1.GetLogResponse.verify|verify} messages.
     * @param message GetLogResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: item_cr_0v1.IGetLogResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a GetLogResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetLogResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): item_cr_0v1.GetLogResponse;

    /**
     * Decodes a GetLogResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetLogResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): item_cr_0v1.GetLogResponse;

    /**
     * Verifies a GetLogResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a GetLogResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetLogResponse
     */
    public static fromObject(object: {
      [k: string]: any;
    }): item_cr_0v1.GetLogResponse;

    /**
     * Creates a plain object from a GetLogResponse message. Also converts values to other types if specified.
     * @param message GetLogResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: item_cr_0v1.GetLogResponse,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this GetLogResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for GetLogResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  namespace GetLogResponse {
    /** Properties of an Event. */
    interface IEvent {
      /** Event resourceId */
      resourceId?: string | null;

      /** Event eventType */
      eventType?: string | null;

      /** Event sizeBytes */
      sizeBytes?: number | Long | null;

      /** Event timestampMs */
      timestampMs?: number | Long | null;

      /** Event usageContext */
      usageContext?: string | null;
    }

    /** Represents an Event. */
    class Event implements IEvent {
      /**
       * Constructs a new Event.
       * @param [properties] Properties to set
       */
      constructor(properties?: item_cr_0v1.GetLogResponse.IEvent);

      /** Event resourceId. */
      public resourceId: string;

      /** Event eventType. */
      public eventType: string;

      /** Event sizeBytes. */
      public sizeBytes: number | Long;

      /** Event timestampMs. */
      public timestampMs: number | Long;

      /** Event usageContext. */
      public usageContext: string;

      /**
       * Creates a new Event instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Event instance
       */
      public static create(
        properties?: item_cr_0v1.GetLogResponse.IEvent
      ): item_cr_0v1.GetLogResponse.Event;

      /**
       * Encodes the specified Event message. Does not implicitly {@link item_cr_0v1.GetLogResponse.Event.verify|verify} messages.
       * @param message Event message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: item_cr_0v1.GetLogResponse.IEvent,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified Event message, length delimited. Does not implicitly {@link item_cr_0v1.GetLogResponse.Event.verify|verify} messages.
       * @param message Event message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: item_cr_0v1.GetLogResponse.IEvent,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes an Event message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Event
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): item_cr_0v1.GetLogResponse.Event;

      /**
       * Decodes an Event message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Event
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): item_cr_0v1.GetLogResponse.Event;

      /**
       * Verifies an Event message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates an Event message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Event
       */
      public static fromObject(object: {
        [k: string]: any;
      }): item_cr_0v1.GetLogResponse.Event;

      /**
       * Creates a plain object from an Event message. Also converts values to other types if specified.
       * @param message Event
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: item_cr_0v1.GetLogResponse.Event,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this Event to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      /**
       * Gets the default type url for Event
       * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns The default type url
       */
      public static getTypeUrl(typeUrlPrefix?: string): string;
    }
  }

  /** Properties of a ListAllItemsRequest. */
  interface IListAllItemsRequest {
    /** ListAllItemsRequest common */
    common?: item_cr_0v1.ICommonRequest | null;

    /** ListAllItemsRequest startResourceId */
    startResourceId?: string | null;

    /** ListAllItemsRequest limit */
    limit?: number | Long | null;
  }

  /** Represents a ListAllItemsRequest. */
  class ListAllItemsRequest implements IListAllItemsRequest {
    /**
     * Constructs a new ListAllItemsRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: item_cr_0v1.IListAllItemsRequest);

    /** ListAllItemsRequest common. */
    public common?: item_cr_0v1.ICommonRequest | null;

    /** ListAllItemsRequest startResourceId. */
    public startResourceId: string;

    /** ListAllItemsRequest limit. */
    public limit: number | Long;

    /**
     * Creates a new ListAllItemsRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListAllItemsRequest instance
     */
    public static create(
      properties?: item_cr_0v1.IListAllItemsRequest
    ): item_cr_0v1.ListAllItemsRequest;

    /**
     * Encodes the specified ListAllItemsRequest message. Does not implicitly {@link item_cr_0v1.ListAllItemsRequest.verify|verify} messages.
     * @param message ListAllItemsRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: item_cr_0v1.IListAllItemsRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified ListAllItemsRequest message, length delimited. Does not implicitly {@link item_cr_0v1.ListAllItemsRequest.verify|verify} messages.
     * @param message ListAllItemsRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: item_cr_0v1.IListAllItemsRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a ListAllItemsRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListAllItemsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): item_cr_0v1.ListAllItemsRequest;

    /**
     * Decodes a ListAllItemsRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListAllItemsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): item_cr_0v1.ListAllItemsRequest;

    /**
     * Verifies a ListAllItemsRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ListAllItemsRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListAllItemsRequest
     */
    public static fromObject(object: {
      [k: string]: any;
    }): item_cr_0v1.ListAllItemsRequest;

    /**
     * Creates a plain object from a ListAllItemsRequest message. Also converts values to other types if specified.
     * @param message ListAllItemsRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: item_cr_0v1.ListAllItemsRequest,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this ListAllItemsRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ListAllItemsRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a ListAllItemsResponse. */
  interface IListAllItemsResponse {
    /** ListAllItemsResponse common */
    common?: item_cr_0v1.ICommonResponse | null;

    /** ListAllItemsResponse items */
    items?: item_cr_0v1.ListAllItemsResponse.IItem[] | null;

    /** ListAllItemsResponse nextStartResourceId */
    nextStartResourceId?: string | null;
  }

  /** Represents a ListAllItemsResponse. */
  class ListAllItemsResponse implements IListAllItemsResponse {
    /**
     * Constructs a new ListAllItemsResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: item_cr_0v1.IListAllItemsResponse);

    /** ListAllItemsResponse common. */
    public common?: item_cr_0v1.ICommonResponse | null;

    /** ListAllItemsResponse items. */
    public items: item_cr_0v1.ListAllItemsResponse.IItem[];

    /** ListAllItemsResponse nextStartResourceId. */
    public nextStartResourceId: string;

    /**
     * Creates a new ListAllItemsResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListAllItemsResponse instance
     */
    public static create(
      properties?: item_cr_0v1.IListAllItemsResponse
    ): item_cr_0v1.ListAllItemsResponse;

    /**
     * Encodes the specified ListAllItemsResponse message. Does not implicitly {@link item_cr_0v1.ListAllItemsResponse.verify|verify} messages.
     * @param message ListAllItemsResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: item_cr_0v1.IListAllItemsResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified ListAllItemsResponse message, length delimited. Does not implicitly {@link item_cr_0v1.ListAllItemsResponse.verify|verify} messages.
     * @param message ListAllItemsResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: item_cr_0v1.IListAllItemsResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a ListAllItemsResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListAllItemsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): item_cr_0v1.ListAllItemsResponse;

    /**
     * Decodes a ListAllItemsResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListAllItemsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): item_cr_0v1.ListAllItemsResponse;

    /**
     * Verifies a ListAllItemsResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ListAllItemsResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListAllItemsResponse
     */
    public static fromObject(object: {
      [k: string]: any;
    }): item_cr_0v1.ListAllItemsResponse;

    /**
     * Creates a plain object from a ListAllItemsResponse message. Also converts values to other types if specified.
     * @param message ListAllItemsResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: item_cr_0v1.ListAllItemsResponse,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this ListAllItemsResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ListAllItemsResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  namespace ListAllItemsResponse {
    /** Properties of an Item. */
    interface IItem {
      /** Item resourceId */
      resourceId?: string | null;

      /** Item sizeBytes */
      sizeBytes?: number | Long | null;

      /** Item createdMs */
      createdMs?: number | Long | null;

      /** Item updatedMs */
      updatedMs?: number | Long | null;
    }

    /** Represents an Item. */
    class Item implements IItem {
      /**
       * Constructs a new Item.
       * @param [properties] Properties to set
       */
      constructor(properties?: item_cr_0v1.ListAllItemsResponse.IItem);

      /** Item resourceId. */
      public resourceId: string;

      /** Item sizeBytes. */
      public sizeBytes: number | Long;

      /** Item createdMs. */
      public createdMs: number | Long;

      /** Item updatedMs. */
      public updatedMs: number | Long;

      /**
       * Creates a new Item instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Item instance
       */
      public static create(
        properties?: item_cr_0v1.ListAllItemsResponse.IItem
      ): item_cr_0v1.ListAllItemsResponse.Item;

      /**
       * Encodes the specified Item message. Does not implicitly {@link item_cr_0v1.ListAllItemsResponse.Item.verify|verify} messages.
       * @param message Item message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: item_cr_0v1.ListAllItemsResponse.IItem,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified Item message, length delimited. Does not implicitly {@link item_cr_0v1.ListAllItemsResponse.Item.verify|verify} messages.
       * @param message Item message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: item_cr_0v1.ListAllItemsResponse.IItem,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes an Item message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Item
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): item_cr_0v1.ListAllItemsResponse.Item;

      /**
       * Decodes an Item message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Item
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): item_cr_0v1.ListAllItemsResponse.Item;

      /**
       * Verifies an Item message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates an Item message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Item
       */
      public static fromObject(object: {
        [k: string]: any;
      }): item_cr_0v1.ListAllItemsResponse.Item;

      /**
       * Creates a plain object from an Item message. Also converts values to other types if specified.
       * @param message Item
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: item_cr_0v1.ListAllItemsResponse.Item,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this Item to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      /**
       * Gets the default type url for Item
       * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns The default type url
       */
      public static getTypeUrl(typeUrlPrefix?: string): string;
    }
  }
}
