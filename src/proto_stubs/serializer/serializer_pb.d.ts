import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of a Value. */
export interface IValue {

    /** Value type */
    type?: (Value.Type|null);

    /** Value int64_ */
    int64_?: (number|null);

    /** Value float_ */
    float_?: (number|null);

    /** Value string_ */
    string_?: (string|null);

    /** Value bool_ */
    bool_?: (boolean|null);

    /** Value bytes_ */
    bytes_?: (Uint8Array|null);

    /** Value list */
    list?: (IValue[]|null);

    /** Value dict */
    dict?: (IDict|null);

    /** Value ndarray */
    ndarray?: (INDArray|null);

    /** Value dataFrame */
    dataFrame?: (IDataFrame|null);
}

/** Represents a Value. */
export class Value implements IValue {

    /**
     * Constructs a new Value.
     * @param [properties] Properties to set
     */
    constructor(properties?: IValue);

    /** Value type. */
    public type: Value.Type;

    /** Value int64_. */
    public int64_: number;

    /** Value float_. */
    public float_: number;

    /** Value string_. */
    public string_: string;

    /** Value bool_. */
    public bool_: boolean;

    /** Value bytes_. */
    public bytes_: Uint8Array;

    /** Value list. */
    public list: IValue[];

    /** Value dict. */
    public dict?: (IDict|null);

    /** Value ndarray. */
    public ndarray?: (INDArray|null);

    /** Value dataFrame. */
    public dataFrame?: (IDataFrame|null);

    /**
     * Creates a new Value instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Value instance
     */
    public static create(properties?: IValue): Value;

    /**
     * Encodes the specified Value message. Does not implicitly {@link Value.verify|verify} messages.
     * @param message Value message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IValue, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Value message, length delimited. Does not implicitly {@link Value.verify|verify} messages.
     * @param message Value message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IValue, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Value message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Value
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Value;

    /**
     * Decodes a Value message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Value
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Value;

    /**
     * Verifies a Value message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Value message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Value
     */
    public static fromObject(object: { [k: string]: any }): Value;

    /**
     * Creates a plain object from a Value message. Also converts values to other types if specified.
     * @param message Value
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Value to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Value
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace Value {

    /** Type enum. */
    enum Type {
        NONE = 0,
        INT64_ = 1,
        FLOAT_ = 2,
        STRING_ = 3,
        BOOL_ = 4,
        BYTES_ = 5,
        LIST = 6,
        DICT = 7,
        NDARRAY = 8,
        DATAFRAME = 9
    }
}

/** Properties of a NDArray. */
export interface INDArray {

    /** NDArray bytes_ */
    bytes_?: (Uint8Array|null);

    /** NDArray shape */
    shape?: (number[]|null);

    /** NDArray type */
    type?: (string|null);
}

/** Represents a NDArray. */
export class NDArray implements INDArray {

    /**
     * Constructs a new NDArray.
     * @param [properties] Properties to set
     */
    constructor(properties?: INDArray);

    /** NDArray bytes_. */
    public bytes_: Uint8Array;

    /** NDArray shape. */
    public shape: number[];

    /** NDArray type. */
    public type: string;

    /**
     * Creates a new NDArray instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NDArray instance
     */
    public static create(properties?: INDArray): NDArray;

    /**
     * Encodes the specified NDArray message. Does not implicitly {@link NDArray.verify|verify} messages.
     * @param message NDArray message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INDArray, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NDArray message, length delimited. Does not implicitly {@link NDArray.verify|verify} messages.
     * @param message NDArray message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INDArray, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NDArray message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NDArray
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NDArray;

    /**
     * Decodes a NDArray message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NDArray
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NDArray;

    /**
     * Verifies a NDArray message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a NDArray message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NDArray
     */
    public static fromObject(object: { [k: string]: any }): NDArray;

    /**
     * Creates a plain object from a NDArray message. Also converts values to other types if specified.
     * @param message NDArray
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NDArray, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this NDArray to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for NDArray
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a Dict. */
export interface IDict {

    /** Dict keys */
    keys?: (string[]|null);

    /** Dict values */
    values?: (IValue[]|null);
}

/** Represents a Dict. */
export class Dict implements IDict {

    /**
     * Constructs a new Dict.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDict);

    /** Dict keys. */
    public keys: string[];

    /** Dict values. */
    public values: IValue[];

    /**
     * Creates a new Dict instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Dict instance
     */
    public static create(properties?: IDict): Dict;

    /**
     * Encodes the specified Dict message. Does not implicitly {@link Dict.verify|verify} messages.
     * @param message Dict message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDict, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Dict message, length delimited. Does not implicitly {@link Dict.verify|verify} messages.
     * @param message Dict message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDict, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Dict message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Dict
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Dict;

    /**
     * Decodes a Dict message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Dict
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Dict;

    /**
     * Verifies a Dict message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Dict message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Dict
     */
    public static fromObject(object: { [k: string]: any }): Dict;

    /**
     * Creates a plain object from a Dict message. Also converts values to other types if specified.
     * @param message Dict
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Dict, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Dict to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Dict
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DataFrame. */
export interface IDataFrame {

    /** DataFrame index */
    index?: (IValue|null);

    /** DataFrame columns */
    columns?: (IValue|null);

    /** DataFrame values */
    values?: (IValue[]|null);
}

/** Represents a DataFrame. */
export class DataFrame implements IDataFrame {

    /**
     * Constructs a new DataFrame.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDataFrame);

    /** DataFrame index. */
    public index?: (IValue|null);

    /** DataFrame columns. */
    public columns?: (IValue|null);

    /** DataFrame values. */
    public values: IValue[];

    /**
     * Creates a new DataFrame instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DataFrame instance
     */
    public static create(properties?: IDataFrame): DataFrame;

    /**
     * Encodes the specified DataFrame message. Does not implicitly {@link DataFrame.verify|verify} messages.
     * @param message DataFrame message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDataFrame, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DataFrame message, length delimited. Does not implicitly {@link DataFrame.verify|verify} messages.
     * @param message DataFrame message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDataFrame, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DataFrame message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DataFrame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DataFrame;

    /**
     * Decodes a DataFrame message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DataFrame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DataFrame;

    /**
     * Verifies a DataFrame message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DataFrame message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DataFrame
     */
    public static fromObject(object: { [k: string]: any }): DataFrame;

    /**
     * Creates a plain object from a DataFrame message. Also converts values to other types if specified.
     * @param message DataFrame
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DataFrame, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DataFrame to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DataFrame
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}
