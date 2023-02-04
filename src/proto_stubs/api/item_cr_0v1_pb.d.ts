import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace item_cr_0v1. */
export namespace item_cr_0v1 {

    /** Properties of a CommonRequest. */
    interface ICommonRequest {

        /** CommonRequest token */
        token?: (string|null);

        /** CommonRequest usageContext */
        usageContext?: (string|null);
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
        public static create(properties?: item_cr_0v1.ICommonRequest): item_cr_0v1.CommonRequest;

        /**
         * Encodes the specified CommonRequest message. Does not implicitly {@link item_cr_0v1.CommonRequest.verify|verify} messages.
         * @param message CommonRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: item_cr_0v1.ICommonRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CommonRequest message, length delimited. Does not implicitly {@link item_cr_0v1.CommonRequest.verify|verify} messages.
         * @param message CommonRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: item_cr_0v1.ICommonRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CommonRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CommonRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): item_cr_0v1.CommonRequest;

        /**
         * Decodes a CommonRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CommonRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): item_cr_0v1.CommonRequest;

        /**
         * Verifies a CommonRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CommonRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CommonRequest
         */
        public static fromObject(object: { [k: string]: any }): item_cr_0v1.CommonRequest;

        /**
         * Creates a plain object from a CommonRequest message. Also converts values to other types if specified.
         * @param message CommonRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: item_cr_0v1.CommonRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        message?: (string|null);

        /** CommonResponse debugMessage */
        debugMessage?: (string|null);

        /** CommonResponse status */
        status?: (item_cr_0v1.CommonResponse.Status|null);
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
        public static create(properties?: item_cr_0v1.ICommonResponse): item_cr_0v1.CommonResponse;

        /**
         * Encodes the specified CommonResponse message. Does not implicitly {@link item_cr_0v1.CommonResponse.verify|verify} messages.
         * @param message CommonResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: item_cr_0v1.ICommonResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CommonResponse message, length delimited. Does not implicitly {@link item_cr_0v1.CommonResponse.verify|verify} messages.
         * @param message CommonResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: item_cr_0v1.ICommonResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CommonResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CommonResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): item_cr_0v1.CommonResponse;

        /**
         * Decodes a CommonResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CommonResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): item_cr_0v1.CommonResponse;

        /**
         * Verifies a CommonResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CommonResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CommonResponse
         */
        public static fromObject(object: { [k: string]: any }): item_cr_0v1.CommonResponse;

        /**
         * Creates a plain object from a CommonResponse message. Also converts values to other types if specified.
         * @param message CommonResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: item_cr_0v1.CommonResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            OK_REQUEST = 2
        }
    }

    /** Properties of a CreateRequest. */
    interface ICreateRequest {

        /** CreateRequest common */
        common?: (item_cr_0v1.ICommonRequest|null);

        /** CreateRequest resourceId */
        resourceId?: (string|null);
    }

    /** Represents a CreateRequest. */
    class CreateRequest implements ICreateRequest {

        /**
         * Constructs a new CreateRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: item_cr_0v1.ICreateRequest);

        /** CreateRequest common. */
        public common?: (item_cr_0v1.ICommonRequest|null);

        /** CreateRequest resourceId. */
        public resourceId: string;

        /**
         * Creates a new CreateRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateRequest instance
         */
        public static create(properties?: item_cr_0v1.ICreateRequest): item_cr_0v1.CreateRequest;

        /**
         * Encodes the specified CreateRequest message. Does not implicitly {@link item_cr_0v1.CreateRequest.verify|verify} messages.
         * @param message CreateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: item_cr_0v1.ICreateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateRequest message, length delimited. Does not implicitly {@link item_cr_0v1.CreateRequest.verify|verify} messages.
         * @param message CreateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: item_cr_0v1.ICreateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): item_cr_0v1.CreateRequest;

        /**
         * Decodes a CreateRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): item_cr_0v1.CreateRequest;

        /**
         * Verifies a CreateRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateRequest
         */
        public static fromObject(object: { [k: string]: any }): item_cr_0v1.CreateRequest;

        /**
         * Creates a plain object from a CreateRequest message. Also converts values to other types if specified.
         * @param message CreateRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: item_cr_0v1.CreateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        common?: (item_cr_0v1.ICommonResponse|null);

        /** CreateResponse status */
        status?: (item_cr_0v1.CreateResponse.Status|null);
    }

    /** Represents a CreateResponse. */
    class CreateResponse implements ICreateResponse {

        /**
         * Constructs a new CreateResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: item_cr_0v1.ICreateResponse);

        /** CreateResponse common. */
        public common?: (item_cr_0v1.ICommonResponse|null);

        /** CreateResponse status. */
        public status: item_cr_0v1.CreateResponse.Status;

        /**
         * Creates a new CreateResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateResponse instance
         */
        public static create(properties?: item_cr_0v1.ICreateResponse): item_cr_0v1.CreateResponse;

        /**
         * Encodes the specified CreateResponse message. Does not implicitly {@link item_cr_0v1.CreateResponse.verify|verify} messages.
         * @param message CreateResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: item_cr_0v1.ICreateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateResponse message, length delimited. Does not implicitly {@link item_cr_0v1.CreateResponse.verify|verify} messages.
         * @param message CreateResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: item_cr_0v1.ICreateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): item_cr_0v1.CreateResponse;

        /**
         * Decodes a CreateResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): item_cr_0v1.CreateResponse;

        /**
         * Verifies a CreateResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateResponse
         */
        public static fromObject(object: { [k: string]: any }): item_cr_0v1.CreateResponse;

        /**
         * Creates a plain object from a CreateResponse message. Also converts values to other types if specified.
         * @param message CreateResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: item_cr_0v1.CreateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            INVALID_RESOURCE_ID = 2
        }
    }

    /** Properties of a GetRequest. */
    interface IGetRequest {

        /** GetRequest common */
        common?: (item_cr_0v1.ICommonRequest|null);

        /** GetRequest resourceId */
        resourceId?: (string|null);

        /** GetRequest withoutMetavaribles */
        withoutMetavaribles?: (boolean|null);

        /** GetRequest withoutItemValue */
        withoutItemValue?: (boolean|null);

        /** GetRequest maxSizeBytes */
        maxSizeBytes?: (number|null);
    }

    /** Represents a GetRequest. */
    class GetRequest implements IGetRequest {

        /**
         * Constructs a new GetRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: item_cr_0v1.IGetRequest);

        /** GetRequest common. */
        public common?: (item_cr_0v1.ICommonRequest|null);

        /** GetRequest resourceId. */
        public resourceId: string;

        /** GetRequest withoutMetavaribles. */
        public withoutMetavaribles: boolean;

        /** GetRequest withoutItemValue. */
        public withoutItemValue: boolean;

        /** GetRequest maxSizeBytes. */
        public maxSizeBytes: number;

        /**
         * Creates a new GetRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetRequest instance
         */
        public static create(properties?: item_cr_0v1.IGetRequest): item_cr_0v1.GetRequest;

        /**
         * Encodes the specified GetRequest message. Does not implicitly {@link item_cr_0v1.GetRequest.verify|verify} messages.
         * @param message GetRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: item_cr_0v1.IGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetRequest message, length delimited. Does not implicitly {@link item_cr_0v1.GetRequest.verify|verify} messages.
         * @param message GetRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: item_cr_0v1.IGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): item_cr_0v1.GetRequest;

        /**
         * Decodes a GetRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): item_cr_0v1.GetRequest;

        /**
         * Verifies a GetRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetRequest
         */
        public static fromObject(object: { [k: string]: any }): item_cr_0v1.GetRequest;

        /**
         * Creates a plain object from a GetRequest message. Also converts values to other types if specified.
         * @param message GetRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: item_cr_0v1.GetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        common?: (item_cr_0v1.ICommonResponse|null);

        /** GetResponse status */
        status?: (item_cr_0v1.GetResponse.Status|null);

        /** GetResponse itemValue */
        itemValue?: (Uint8Array|null);

        /** GetResponse metavaribles */
        metavaribles?: (item_cr_0v1.GetResponse.IMetavarible[]|null);

        /** GetResponse sizeBytesBiggerThanMax */
        sizeBytesBiggerThanMax?: (boolean|null);

        /** GetResponse sizeBytes */
        sizeBytes?: (number|null);

        /** GetResponse createdMs */
        createdMs?: (number|null);

        /** GetResponse updatedMs */
        updatedMs?: (number|null);
    }

    /** Represents a GetResponse. */
    class GetResponse implements IGetResponse {

        /**
         * Constructs a new GetResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: item_cr_0v1.IGetResponse);

        /** GetResponse common. */
        public common?: (item_cr_0v1.ICommonResponse|null);

        /** GetResponse status. */
        public status: item_cr_0v1.GetResponse.Status;

        /** GetResponse itemValue. */
        public itemValue: Uint8Array;

        /** GetResponse metavaribles. */
        public metavaribles: item_cr_0v1.GetResponse.IMetavarible[];

        /** GetResponse sizeBytesBiggerThanMax. */
        public sizeBytesBiggerThanMax: boolean;

        /** GetResponse sizeBytes. */
        public sizeBytes: number;

        /** GetResponse createdMs. */
        public createdMs: number;

        /** GetResponse updatedMs. */
        public updatedMs: number;

        /**
         * Creates a new GetResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetResponse instance
         */
        public static create(properties?: item_cr_0v1.IGetResponse): item_cr_0v1.GetResponse;

        /**
         * Encodes the specified GetResponse message. Does not implicitly {@link item_cr_0v1.GetResponse.verify|verify} messages.
         * @param message GetResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: item_cr_0v1.IGetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetResponse message, length delimited. Does not implicitly {@link item_cr_0v1.GetResponse.verify|verify} messages.
         * @param message GetResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: item_cr_0v1.IGetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): item_cr_0v1.GetResponse;

        /**
         * Decodes a GetResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): item_cr_0v1.GetResponse;

        /**
         * Verifies a GetResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetResponse
         */
        public static fromObject(object: { [k: string]: any }): item_cr_0v1.GetResponse;

        /**
         * Creates a plain object from a GetResponse message. Also converts values to other types if specified.
         * @param message GetResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: item_cr_0v1.GetResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            FOUND = 1
        }

        /** Properties of a Metavarible. */
        interface IMetavarible {

            /** Metavarible key */
            key?: (string|null);

            /** Metavarible value */
            value?: (string|null);
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
            public static create(properties?: item_cr_0v1.GetResponse.IMetavarible): item_cr_0v1.GetResponse.Metavarible;

            /**
             * Encodes the specified Metavarible message. Does not implicitly {@link item_cr_0v1.GetResponse.Metavarible.verify|verify} messages.
             * @param message Metavarible message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: item_cr_0v1.GetResponse.IMetavarible, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Metavarible message, length delimited. Does not implicitly {@link item_cr_0v1.GetResponse.Metavarible.verify|verify} messages.
             * @param message Metavarible message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: item_cr_0v1.GetResponse.IMetavarible, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Metavarible message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Metavarible
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): item_cr_0v1.GetResponse.Metavarible;

            /**
             * Decodes a Metavarible message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Metavarible
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): item_cr_0v1.GetResponse.Metavarible;

            /**
             * Verifies a Metavarible message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Metavarible message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Metavarible
             */
            public static fromObject(object: { [k: string]: any }): item_cr_0v1.GetResponse.Metavarible;

            /**
             * Creates a plain object from a Metavarible message. Also converts values to other types if specified.
             * @param message Metavarible
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: item_cr_0v1.GetResponse.Metavarible, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        common?: (item_cr_0v1.ICommonRequest|null);

        /** SetRequest resourceId */
        resourceId?: (string|null);

        /** SetRequest itemValue */
        itemValue?: (Uint8Array|null);
    }

    /** Represents a SetRequest. */
    class SetRequest implements ISetRequest {

        /**
         * Constructs a new SetRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: item_cr_0v1.ISetRequest);

        /** SetRequest common. */
        public common?: (item_cr_0v1.ICommonRequest|null);

        /** SetRequest resourceId. */
        public resourceId: string;

        /** SetRequest itemValue. */
        public itemValue: Uint8Array;

        /**
         * Creates a new SetRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetRequest instance
         */
        public static create(properties?: item_cr_0v1.ISetRequest): item_cr_0v1.SetRequest;

        /**
         * Encodes the specified SetRequest message. Does not implicitly {@link item_cr_0v1.SetRequest.verify|verify} messages.
         * @param message SetRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: item_cr_0v1.ISetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetRequest message, length delimited. Does not implicitly {@link item_cr_0v1.SetRequest.verify|verify} messages.
         * @param message SetRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: item_cr_0v1.ISetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): item_cr_0v1.SetRequest;

        /**
         * Decodes a SetRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): item_cr_0v1.SetRequest;

        /**
         * Verifies a SetRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetRequest
         */
        public static fromObject(object: { [k: string]: any }): item_cr_0v1.SetRequest;

        /**
         * Creates a plain object from a SetRequest message. Also converts values to other types if specified.
         * @param message SetRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: item_cr_0v1.SetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        common?: (item_cr_0v1.ICommonResponse|null);

        /** SetResponse status */
        status?: (item_cr_0v1.SetResponse.Status|null);
    }

    /** Represents a SetResponse. */
    class SetResponse implements ISetResponse {

        /**
         * Constructs a new SetResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: item_cr_0v1.ISetResponse);

        /** SetResponse common. */
        public common?: (item_cr_0v1.ICommonResponse|null);

        /** SetResponse status. */
        public status: item_cr_0v1.SetResponse.Status;

        /**
         * Creates a new SetResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetResponse instance
         */
        public static create(properties?: item_cr_0v1.ISetResponse): item_cr_0v1.SetResponse;

        /**
         * Encodes the specified SetResponse message. Does not implicitly {@link item_cr_0v1.SetResponse.verify|verify} messages.
         * @param message SetResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: item_cr_0v1.ISetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetResponse message, length delimited. Does not implicitly {@link item_cr_0v1.SetResponse.verify|verify} messages.
         * @param message SetResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: item_cr_0v1.ISetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): item_cr_0v1.SetResponse;

        /**
         * Decodes a SetResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): item_cr_0v1.SetResponse;

        /**
         * Verifies a SetResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetResponse
         */
        public static fromObject(object: { [k: string]: any }): item_cr_0v1.SetResponse;

        /**
         * Creates a plain object from a SetResponse message. Also converts values to other types if specified.
         * @param message SetResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: item_cr_0v1.SetResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            INVALID_RESOURCE_ID = 2
        }
    }

    /** Properties of an UpdateMetavariblesRequest. */
    interface IUpdateMetavariblesRequest {

        /** UpdateMetavariblesRequest common */
        common?: (item_cr_0v1.ICommonRequest|null);

        /** UpdateMetavariblesRequest resourceId */
        resourceId?: (string|null);

        /** UpdateMetavariblesRequest metavaribles */
        metavaribles?: (item_cr_0v1.UpdateMetavariblesRequest.IMetavarible[]|null);
    }

    /** Represents an UpdateMetavariblesRequest. */
    class UpdateMetavariblesRequest implements IUpdateMetavariblesRequest {

        /**
         * Constructs a new UpdateMetavariblesRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: item_cr_0v1.IUpdateMetavariblesRequest);

        /** UpdateMetavariblesRequest common. */
        public common?: (item_cr_0v1.ICommonRequest|null);

        /** UpdateMetavariblesRequest resourceId. */
        public resourceId: string;

        /** UpdateMetavariblesRequest metavaribles. */
        public metavaribles: item_cr_0v1.UpdateMetavariblesRequest.IMetavarible[];

        /**
         * Creates a new UpdateMetavariblesRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateMetavariblesRequest instance
         */
        public static create(properties?: item_cr_0v1.IUpdateMetavariblesRequest): item_cr_0v1.UpdateMetavariblesRequest;

        /**
         * Encodes the specified UpdateMetavariblesRequest message. Does not implicitly {@link item_cr_0v1.UpdateMetavariblesRequest.verify|verify} messages.
         * @param message UpdateMetavariblesRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: item_cr_0v1.IUpdateMetavariblesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateMetavariblesRequest message, length delimited. Does not implicitly {@link item_cr_0v1.UpdateMetavariblesRequest.verify|verify} messages.
         * @param message UpdateMetavariblesRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: item_cr_0v1.IUpdateMetavariblesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateMetavariblesRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateMetavariblesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): item_cr_0v1.UpdateMetavariblesRequest;

        /**
         * Decodes an UpdateMetavariblesRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateMetavariblesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): item_cr_0v1.UpdateMetavariblesRequest;

        /**
         * Verifies an UpdateMetavariblesRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateMetavariblesRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateMetavariblesRequest
         */
        public static fromObject(object: { [k: string]: any }): item_cr_0v1.UpdateMetavariblesRequest;

        /**
         * Creates a plain object from an UpdateMetavariblesRequest message. Also converts values to other types if specified.
         * @param message UpdateMetavariblesRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: item_cr_0v1.UpdateMetavariblesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            key?: (string|null);

            /** Metavarible value */
            value?: (string|null);

            /** Metavarible delete */
            "delete"?: (boolean|null);
        }

        /** Represents a Metavarible. */
        class Metavarible implements IMetavarible {

            /**
             * Constructs a new Metavarible.
             * @param [properties] Properties to set
             */
            constructor(properties?: item_cr_0v1.UpdateMetavariblesRequest.IMetavarible);

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
            public static create(properties?: item_cr_0v1.UpdateMetavariblesRequest.IMetavarible): item_cr_0v1.UpdateMetavariblesRequest.Metavarible;

            /**
             * Encodes the specified Metavarible message. Does not implicitly {@link item_cr_0v1.UpdateMetavariblesRequest.Metavarible.verify|verify} messages.
             * @param message Metavarible message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: item_cr_0v1.UpdateMetavariblesRequest.IMetavarible, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Metavarible message, length delimited. Does not implicitly {@link item_cr_0v1.UpdateMetavariblesRequest.Metavarible.verify|verify} messages.
             * @param message Metavarible message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: item_cr_0v1.UpdateMetavariblesRequest.IMetavarible, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Metavarible message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Metavarible
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): item_cr_0v1.UpdateMetavariblesRequest.Metavarible;

            /**
             * Decodes a Metavarible message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Metavarible
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): item_cr_0v1.UpdateMetavariblesRequest.Metavarible;

            /**
             * Verifies a Metavarible message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Metavarible message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Metavarible
             */
            public static fromObject(object: { [k: string]: any }): item_cr_0v1.UpdateMetavariblesRequest.Metavarible;

            /**
             * Creates a plain object from a Metavarible message. Also converts values to other types if specified.
             * @param message Metavarible
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: item_cr_0v1.UpdateMetavariblesRequest.Metavarible, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        common?: (item_cr_0v1.ICommonResponse|null);

        /** UpdateMetavariblesResponse status */
        status?: (item_cr_0v1.UpdateMetavariblesResponse.Status|null);
    }

    /** Represents an UpdateMetavariblesResponse. */
    class UpdateMetavariblesResponse implements IUpdateMetavariblesResponse {

        /**
         * Constructs a new UpdateMetavariblesResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: item_cr_0v1.IUpdateMetavariblesResponse);

        /** UpdateMetavariblesResponse common. */
        public common?: (item_cr_0v1.ICommonResponse|null);

        /** UpdateMetavariblesResponse status. */
        public status: item_cr_0v1.UpdateMetavariblesResponse.Status;

        /**
         * Creates a new UpdateMetavariblesResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateMetavariblesResponse instance
         */
        public static create(properties?: item_cr_0v1.IUpdateMetavariblesResponse): item_cr_0v1.UpdateMetavariblesResponse;

        /**
         * Encodes the specified UpdateMetavariblesResponse message. Does not implicitly {@link item_cr_0v1.UpdateMetavariblesResponse.verify|verify} messages.
         * @param message UpdateMetavariblesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: item_cr_0v1.IUpdateMetavariblesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateMetavariblesResponse message, length delimited. Does not implicitly {@link item_cr_0v1.UpdateMetavariblesResponse.verify|verify} messages.
         * @param message UpdateMetavariblesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: item_cr_0v1.IUpdateMetavariblesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateMetavariblesResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateMetavariblesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): item_cr_0v1.UpdateMetavariblesResponse;

        /**
         * Decodes an UpdateMetavariblesResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateMetavariblesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): item_cr_0v1.UpdateMetavariblesResponse;

        /**
         * Verifies an UpdateMetavariblesResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateMetavariblesResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateMetavariblesResponse
         */
        public static fromObject(object: { [k: string]: any }): item_cr_0v1.UpdateMetavariblesResponse;

        /**
         * Creates a plain object from an UpdateMetavariblesResponse message. Also converts values to other types if specified.
         * @param message UpdateMetavariblesResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: item_cr_0v1.UpdateMetavariblesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            INVALID_RESOURCE_ID = 2
        }
    }

    /** Properties of a DeleteRequest. */
    interface IDeleteRequest {

        /** DeleteRequest common */
        common?: (item_cr_0v1.ICommonRequest|null);

        /** DeleteRequest resourceId */
        resourceId?: (string|null);
    }

    /** Represents a DeleteRequest. */
    class DeleteRequest implements IDeleteRequest {

        /**
         * Constructs a new DeleteRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: item_cr_0v1.IDeleteRequest);

        /** DeleteRequest common. */
        public common?: (item_cr_0v1.ICommonRequest|null);

        /** DeleteRequest resourceId. */
        public resourceId: string;

        /**
         * Creates a new DeleteRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteRequest instance
         */
        public static create(properties?: item_cr_0v1.IDeleteRequest): item_cr_0v1.DeleteRequest;

        /**
         * Encodes the specified DeleteRequest message. Does not implicitly {@link item_cr_0v1.DeleteRequest.verify|verify} messages.
         * @param message DeleteRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: item_cr_0v1.IDeleteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeleteRequest message, length delimited. Does not implicitly {@link item_cr_0v1.DeleteRequest.verify|verify} messages.
         * @param message DeleteRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: item_cr_0v1.IDeleteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeleteRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): item_cr_0v1.DeleteRequest;

        /**
         * Decodes a DeleteRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): item_cr_0v1.DeleteRequest;

        /**
         * Verifies a DeleteRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeleteRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteRequest
         */
        public static fromObject(object: { [k: string]: any }): item_cr_0v1.DeleteRequest;

        /**
         * Creates a plain object from a DeleteRequest message. Also converts values to other types if specified.
         * @param message DeleteRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: item_cr_0v1.DeleteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        common?: (item_cr_0v1.ICommonResponse|null);

        /** DeleteResponse status */
        status?: (item_cr_0v1.DeleteResponse.Status|null);
    }

    /** Represents a DeleteResponse. */
    class DeleteResponse implements IDeleteResponse {

        /**
         * Constructs a new DeleteResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: item_cr_0v1.IDeleteResponse);

        /** DeleteResponse common. */
        public common?: (item_cr_0v1.ICommonResponse|null);

        /** DeleteResponse status. */
        public status: item_cr_0v1.DeleteResponse.Status;

        /**
         * Creates a new DeleteResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteResponse instance
         */
        public static create(properties?: item_cr_0v1.IDeleteResponse): item_cr_0v1.DeleteResponse;

        /**
         * Encodes the specified DeleteResponse message. Does not implicitly {@link item_cr_0v1.DeleteResponse.verify|verify} messages.
         * @param message DeleteResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: item_cr_0v1.IDeleteResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeleteResponse message, length delimited. Does not implicitly {@link item_cr_0v1.DeleteResponse.verify|verify} messages.
         * @param message DeleteResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: item_cr_0v1.IDeleteResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeleteResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): item_cr_0v1.DeleteResponse;

        /**
         * Decodes a DeleteResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): item_cr_0v1.DeleteResponse;

        /**
         * Verifies a DeleteResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeleteResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteResponse
         */
        public static fromObject(object: { [k: string]: any }): item_cr_0v1.DeleteResponse;

        /**
         * Creates a plain object from a DeleteResponse message. Also converts values to other types if specified.
         * @param message DeleteResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: item_cr_0v1.DeleteResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            INVALID_RESOURCE_ID = 2
        }
    }

    /** Properties of a SubscribeToItemWSRequest. */
    interface ISubscribeToItemWSRequest {

        /** SubscribeToItemWSRequest resourceId */
        resourceId?: (string|null);

        /** SubscribeToItemWSRequest requestId */
        requestId?: (string|null);
    }

    /** Represents a SubscribeToItemWSRequest. */
    class SubscribeToItemWSRequest implements ISubscribeToItemWSRequest {

        /**
         * Constructs a new SubscribeToItemWSRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: item_cr_0v1.ISubscribeToItemWSRequest);

        /** SubscribeToItemWSRequest resourceId. */
        public resourceId: string;

        /** SubscribeToItemWSRequest requestId. */
        public requestId: string;

        /**
         * Creates a new SubscribeToItemWSRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SubscribeToItemWSRequest instance
         */
        public static create(properties?: item_cr_0v1.ISubscribeToItemWSRequest): item_cr_0v1.SubscribeToItemWSRequest;

        /**
         * Encodes the specified SubscribeToItemWSRequest message. Does not implicitly {@link item_cr_0v1.SubscribeToItemWSRequest.verify|verify} messages.
         * @param message SubscribeToItemWSRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: item_cr_0v1.ISubscribeToItemWSRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SubscribeToItemWSRequest message, length delimited. Does not implicitly {@link item_cr_0v1.SubscribeToItemWSRequest.verify|verify} messages.
         * @param message SubscribeToItemWSRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: item_cr_0v1.ISubscribeToItemWSRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SubscribeToItemWSRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SubscribeToItemWSRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): item_cr_0v1.SubscribeToItemWSRequest;

        /**
         * Decodes a SubscribeToItemWSRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SubscribeToItemWSRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): item_cr_0v1.SubscribeToItemWSRequest;

        /**
         * Verifies a SubscribeToItemWSRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SubscribeToItemWSRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SubscribeToItemWSRequest
         */
        public static fromObject(object: { [k: string]: any }): item_cr_0v1.SubscribeToItemWSRequest;

        /**
         * Creates a plain object from a SubscribeToItemWSRequest message. Also converts values to other types if specified.
         * @param message SubscribeToItemWSRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: item_cr_0v1.SubscribeToItemWSRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SubscribeToItemWSRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SubscribeToItemWSRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SubscribeToItemWSResponse. */
    interface ISubscribeToItemWSResponse {

        /** SubscribeToItemWSResponse status */
        status?: (item_cr_0v1.SubscribeToItemWSResponse.Status|null);

        /** SubscribeToItemWSResponse requestId */
        requestId?: (string|null);
    }

    /** Represents a SubscribeToItemWSResponse. */
    class SubscribeToItemWSResponse implements ISubscribeToItemWSResponse {

        /**
         * Constructs a new SubscribeToItemWSResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: item_cr_0v1.ISubscribeToItemWSResponse);

        /** SubscribeToItemWSResponse status. */
        public status: item_cr_0v1.SubscribeToItemWSResponse.Status;

        /** SubscribeToItemWSResponse requestId. */
        public requestId: string;

        /**
         * Creates a new SubscribeToItemWSResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SubscribeToItemWSResponse instance
         */
        public static create(properties?: item_cr_0v1.ISubscribeToItemWSResponse): item_cr_0v1.SubscribeToItemWSResponse;

        /**
         * Encodes the specified SubscribeToItemWSResponse message. Does not implicitly {@link item_cr_0v1.SubscribeToItemWSResponse.verify|verify} messages.
         * @param message SubscribeToItemWSResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: item_cr_0v1.ISubscribeToItemWSResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SubscribeToItemWSResponse message, length delimited. Does not implicitly {@link item_cr_0v1.SubscribeToItemWSResponse.verify|verify} messages.
         * @param message SubscribeToItemWSResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: item_cr_0v1.ISubscribeToItemWSResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SubscribeToItemWSResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SubscribeToItemWSResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): item_cr_0v1.SubscribeToItemWSResponse;

        /**
         * Decodes a SubscribeToItemWSResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SubscribeToItemWSResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): item_cr_0v1.SubscribeToItemWSResponse;

        /**
         * Verifies a SubscribeToItemWSResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SubscribeToItemWSResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SubscribeToItemWSResponse
         */
        public static fromObject(object: { [k: string]: any }): item_cr_0v1.SubscribeToItemWSResponse;

        /**
         * Creates a plain object from a SubscribeToItemWSResponse message. Also converts values to other types if specified.
         * @param message SubscribeToItemWSResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: item_cr_0v1.SubscribeToItemWSResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SubscribeToItemWSResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SubscribeToItemWSResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace SubscribeToItemWSResponse {

        /** Status enum. */
        enum Status {
            NOT_FOUND = 0,
            SUBSCRIBED = 1
        }
    }

    /** Properties of an ItemEventWSPush. */
    interface IItemEventWSPush {

        /** ItemEventWSPush resourceId */
        resourceId?: (string|null);
    }

    /** Represents an ItemEventWSPush. */
    class ItemEventWSPush implements IItemEventWSPush {

        /**
         * Constructs a new ItemEventWSPush.
         * @param [properties] Properties to set
         */
        constructor(properties?: item_cr_0v1.IItemEventWSPush);

        /** ItemEventWSPush resourceId. */
        public resourceId: string;

        /**
         * Creates a new ItemEventWSPush instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ItemEventWSPush instance
         */
        public static create(properties?: item_cr_0v1.IItemEventWSPush): item_cr_0v1.ItemEventWSPush;

        /**
         * Encodes the specified ItemEventWSPush message. Does not implicitly {@link item_cr_0v1.ItemEventWSPush.verify|verify} messages.
         * @param message ItemEventWSPush message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: item_cr_0v1.IItemEventWSPush, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ItemEventWSPush message, length delimited. Does not implicitly {@link item_cr_0v1.ItemEventWSPush.verify|verify} messages.
         * @param message ItemEventWSPush message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: item_cr_0v1.IItemEventWSPush, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ItemEventWSPush message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ItemEventWSPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): item_cr_0v1.ItemEventWSPush;

        /**
         * Decodes an ItemEventWSPush message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ItemEventWSPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): item_cr_0v1.ItemEventWSPush;

        /**
         * Verifies an ItemEventWSPush message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ItemEventWSPush message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ItemEventWSPush
         */
        public static fromObject(object: { [k: string]: any }): item_cr_0v1.ItemEventWSPush;

        /**
         * Creates a plain object from an ItemEventWSPush message. Also converts values to other types if specified.
         * @param message ItemEventWSPush
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: item_cr_0v1.ItemEventWSPush, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ItemEventWSPush to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ItemEventWSPush
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ItemEventWSPush {

        /** EventType enum. */
        enum EventType {
            CREATED = 0,
            UPDATED = 1,
            DELETED = 2
        }
    }
}
