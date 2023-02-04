/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.Value = (function() {
    
        /**
         * Properties of a Value.
         * @exports IValue
         * @interface IValue
         * @property {Value.Type|null} [type] Value type
         * @property {number|null} [int64_] Value int64_
         * @property {number|null} [float_] Value float_
         * @property {string|null} [string_] Value string_
         * @property {boolean|null} [bool_] Value bool_
         * @property {Uint8Array|null} [bytes_] Value bytes_
         * @property {Array.<IValue>|null} [list] Value list
         * @property {IDict|null} [dict] Value dict
         * @property {INDArray|null} [ndarray] Value ndarray
         * @property {IDataFrame|null} [dataFrame] Value dataFrame
         */
    
        /**
         * Constructs a new Value.
         * @exports Value
         * @classdesc Represents a Value.
         * @implements IValue
         * @constructor
         * @param {IValue=} [properties] Properties to set
         */
        function Value(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Value type.
         * @member {Value.Type} type
         * @memberof Value
         * @instance
         */
        Value.prototype.type = 0;
    
        /**
         * Value int64_.
         * @member {number} int64_
         * @memberof Value
         * @instance
         */
        Value.prototype.int64_ = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * Value float_.
         * @member {number} float_
         * @memberof Value
         * @instance
         */
        Value.prototype.float_ = 0;
    
        /**
         * Value string_.
         * @member {string} string_
         * @memberof Value
         * @instance
         */
        Value.prototype.string_ = "";
    
        /**
         * Value bool_.
         * @member {boolean} bool_
         * @memberof Value
         * @instance
         */
        Value.prototype.bool_ = false;
    
        /**
         * Value bytes_.
         * @member {Uint8Array} bytes_
         * @memberof Value
         * @instance
         */
        Value.prototype.bytes_ = $util.newBuffer([]);
    
        /**
         * Value list.
         * @member {Array.<IValue>} list
         * @memberof Value
         * @instance
         */
        Value.prototype.list = $util.emptyArray;
    
        /**
         * Value dict.
         * @member {IDict|null|undefined} dict
         * @memberof Value
         * @instance
         */
        Value.prototype.dict = null;
    
        /**
         * Value ndarray.
         * @member {INDArray|null|undefined} ndarray
         * @memberof Value
         * @instance
         */
        Value.prototype.ndarray = null;
    
        /**
         * Value dataFrame.
         * @member {IDataFrame|null|undefined} dataFrame
         * @memberof Value
         * @instance
         */
        Value.prototype.dataFrame = null;
    
        /**
         * Creates a new Value instance using the specified properties.
         * @function create
         * @memberof Value
         * @static
         * @param {IValue=} [properties] Properties to set
         * @returns {Value} Value instance
         */
        Value.create = function create(properties) {
            return new Value(properties);
        };
    
        /**
         * Encodes the specified Value message. Does not implicitly {@link Value.verify|verify} messages.
         * @function encode
         * @memberof Value
         * @static
         * @param {IValue} message Value message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Value.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.int64_ != null && Object.hasOwnProperty.call(message, "int64_"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.int64_);
            if (message.float_ != null && Object.hasOwnProperty.call(message, "float_"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.float_);
            if (message.string_ != null && Object.hasOwnProperty.call(message, "string_"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.string_);
            if (message.bool_ != null && Object.hasOwnProperty.call(message, "bool_"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.bool_);
            if (message.bytes_ != null && Object.hasOwnProperty.call(message, "bytes_"))
                writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.bytes_);
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.Value.encode(message.list[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.dict != null && Object.hasOwnProperty.call(message, "dict"))
                $root.Dict.encode(message.dict, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.ndarray != null && Object.hasOwnProperty.call(message, "ndarray"))
                $root.NDArray.encode(message.ndarray, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.dataFrame != null && Object.hasOwnProperty.call(message, "dataFrame"))
                $root.DataFrame.encode(message.dataFrame, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified Value message, length delimited. Does not implicitly {@link Value.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Value
         * @static
         * @param {IValue} message Value message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Value.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a Value message from the specified reader or buffer.
         * @function decode
         * @memberof Value
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Value} Value
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Value.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Value();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.int32();
                        break;
                    }
                case 2: {
                        message.int64_ = reader.int64();
                        break;
                    }
                case 3: {
                        message.float_ = reader.float();
                        break;
                    }
                case 4: {
                        message.string_ = reader.string();
                        break;
                    }
                case 5: {
                        message.bool_ = reader.bool();
                        break;
                    }
                case 6: {
                        message.bytes_ = reader.bytes();
                        break;
                    }
                case 7: {
                        if (!(message.list && message.list.length))
                            message.list = [];
                        message.list.push($root.Value.decode(reader, reader.uint32()));
                        break;
                    }
                case 8: {
                        message.dict = $root.Dict.decode(reader, reader.uint32());
                        break;
                    }
                case 9: {
                        message.ndarray = $root.NDArray.decode(reader, reader.uint32());
                        break;
                    }
                case 10: {
                        message.dataFrame = $root.DataFrame.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a Value message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Value
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Value} Value
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Value.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a Value message.
         * @function verify
         * @memberof Value
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Value.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                    break;
                }
            if (message.int64_ != null && message.hasOwnProperty("int64_"))
                if (!$util.isInteger(message.int64_) && !(message.int64_ && $util.isInteger(message.int64_.low) && $util.isInteger(message.int64_.high)))
                    return "int64_: integer|Long expected";
            if (message.float_ != null && message.hasOwnProperty("float_"))
                if (typeof message.float_ !== "number")
                    return "float_: number expected";
            if (message.string_ != null && message.hasOwnProperty("string_"))
                if (!$util.isString(message.string_))
                    return "string_: string expected";
            if (message.bool_ != null && message.hasOwnProperty("bool_"))
                if (typeof message.bool_ !== "boolean")
                    return "bool_: boolean expected";
            if (message.bytes_ != null && message.hasOwnProperty("bytes_"))
                if (!(message.bytes_ && typeof message.bytes_.length === "number" || $util.isString(message.bytes_)))
                    return "bytes_: buffer expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.Value.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            if (message.dict != null && message.hasOwnProperty("dict")) {
                var error = $root.Dict.verify(message.dict);
                if (error)
                    return "dict." + error;
            }
            if (message.ndarray != null && message.hasOwnProperty("ndarray")) {
                var error = $root.NDArray.verify(message.ndarray);
                if (error)
                    return "ndarray." + error;
            }
            if (message.dataFrame != null && message.hasOwnProperty("dataFrame")) {
                var error = $root.DataFrame.verify(message.dataFrame);
                if (error)
                    return "dataFrame." + error;
            }
            return null;
        };
    
        /**
         * Creates a Value message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Value
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Value} Value
         */
        Value.fromObject = function fromObject(object) {
            if (object instanceof $root.Value)
                return object;
            var message = new $root.Value();
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "NONE":
            case 0:
                message.type = 0;
                break;
            case "INT64_":
            case 1:
                message.type = 1;
                break;
            case "FLOAT_":
            case 2:
                message.type = 2;
                break;
            case "STRING_":
            case 3:
                message.type = 3;
                break;
            case "BOOL_":
            case 4:
                message.type = 4;
                break;
            case "BYTES_":
            case 5:
                message.type = 5;
                break;
            case "LIST":
            case 6:
                message.type = 6;
                break;
            case "DICT":
            case 7:
                message.type = 7;
                break;
            case "NDARRAY":
            case 8:
                message.type = 8;
                break;
            case "DATAFRAME":
            case 9:
                message.type = 9;
                break;
            }
            if (object.int64_ != null)
                if ($util.Long)
                    (message.int64_ = $util.Long.fromValue(object.int64_)).unsigned = false;
                else if (typeof object.int64_ === "string")
                    message.int64_ = parseInt(object.int64_, 10);
                else if (typeof object.int64_ === "number")
                    message.int64_ = object.int64_;
                else if (typeof object.int64_ === "object")
                    message.int64_ = new $util.LongBits(object.int64_.low >>> 0, object.int64_.high >>> 0).toNumber();
            if (object.float_ != null)
                message.float_ = Number(object.float_);
            if (object.string_ != null)
                message.string_ = String(object.string_);
            if (object.bool_ != null)
                message.bool_ = Boolean(object.bool_);
            if (object.bytes_ != null)
                if (typeof object.bytes_ === "string")
                    $util.base64.decode(object.bytes_, message.bytes_ = $util.newBuffer($util.base64.length(object.bytes_)), 0);
                else if (object.bytes_.length >= 0)
                    message.bytes_ = object.bytes_;
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".Value.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".Value.list: object expected");
                    message.list[i] = $root.Value.fromObject(object.list[i]);
                }
            }
            if (object.dict != null) {
                if (typeof object.dict !== "object")
                    throw TypeError(".Value.dict: object expected");
                message.dict = $root.Dict.fromObject(object.dict);
            }
            if (object.ndarray != null) {
                if (typeof object.ndarray !== "object")
                    throw TypeError(".Value.ndarray: object expected");
                message.ndarray = $root.NDArray.fromObject(object.ndarray);
            }
            if (object.dataFrame != null) {
                if (typeof object.dataFrame !== "object")
                    throw TypeError(".Value.dataFrame: object expected");
                message.dataFrame = $root.DataFrame.fromObject(object.dataFrame);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a Value message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Value
         * @static
         * @param {Value} message Value
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Value.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (options.defaults) {
                object.type = options.enums === String ? "NONE" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.int64_ = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.int64_ = options.longs === String ? "0" : 0;
                object.float_ = 0;
                object.string_ = "";
                object.bool_ = false;
                if (options.bytes === String)
                    object.bytes_ = "";
                else {
                    object.bytes_ = [];
                    if (options.bytes !== Array)
                        object.bytes_ = $util.newBuffer(object.bytes_);
                }
                object.dict = null;
                object.ndarray = null;
                object.dataFrame = null;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.Value.Type[message.type] === undefined ? message.type : $root.Value.Type[message.type] : message.type;
            if (message.int64_ != null && message.hasOwnProperty("int64_"))
                if (typeof message.int64_ === "number")
                    object.int64_ = options.longs === String ? String(message.int64_) : message.int64_;
                else
                    object.int64_ = options.longs === String ? $util.Long.prototype.toString.call(message.int64_) : options.longs === Number ? new $util.LongBits(message.int64_.low >>> 0, message.int64_.high >>> 0).toNumber() : message.int64_;
            if (message.float_ != null && message.hasOwnProperty("float_"))
                object.float_ = options.json && !isFinite(message.float_) ? String(message.float_) : message.float_;
            if (message.string_ != null && message.hasOwnProperty("string_"))
                object.string_ = message.string_;
            if (message.bool_ != null && message.hasOwnProperty("bool_"))
                object.bool_ = message.bool_;
            if (message.bytes_ != null && message.hasOwnProperty("bytes_"))
                object.bytes_ = options.bytes === String ? $util.base64.encode(message.bytes_, 0, message.bytes_.length) : options.bytes === Array ? Array.prototype.slice.call(message.bytes_) : message.bytes_;
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.Value.toObject(message.list[j], options);
            }
            if (message.dict != null && message.hasOwnProperty("dict"))
                object.dict = $root.Dict.toObject(message.dict, options);
            if (message.ndarray != null && message.hasOwnProperty("ndarray"))
                object.ndarray = $root.NDArray.toObject(message.ndarray, options);
            if (message.dataFrame != null && message.hasOwnProperty("dataFrame"))
                object.dataFrame = $root.DataFrame.toObject(message.dataFrame, options);
            return object;
        };
    
        /**
         * Converts this Value to JSON.
         * @function toJSON
         * @memberof Value
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Value.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for Value
         * @function getTypeUrl
         * @memberof Value
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Value.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Value";
        };
    
        /**
         * Type enum.
         * @name Value.Type
         * @enum {number}
         * @property {number} NONE=0 NONE value
         * @property {number} INT64_=1 INT64_ value
         * @property {number} FLOAT_=2 FLOAT_ value
         * @property {number} STRING_=3 STRING_ value
         * @property {number} BOOL_=4 BOOL_ value
         * @property {number} BYTES_=5 BYTES_ value
         * @property {number} LIST=6 LIST value
         * @property {number} DICT=7 DICT value
         * @property {number} NDARRAY=8 NDARRAY value
         * @property {number} DATAFRAME=9 DATAFRAME value
         */
        Value.Type = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "NONE"] = 0;
            values[valuesById[1] = "INT64_"] = 1;
            values[valuesById[2] = "FLOAT_"] = 2;
            values[valuesById[3] = "STRING_"] = 3;
            values[valuesById[4] = "BOOL_"] = 4;
            values[valuesById[5] = "BYTES_"] = 5;
            values[valuesById[6] = "LIST"] = 6;
            values[valuesById[7] = "DICT"] = 7;
            values[valuesById[8] = "NDARRAY"] = 8;
            values[valuesById[9] = "DATAFRAME"] = 9;
            return values;
        })();
    
        return Value;
    })();
    
    $root.NDArray = (function() {
    
        /**
         * Properties of a NDArray.
         * @exports INDArray
         * @interface INDArray
         * @property {Uint8Array|null} [bytes_] NDArray bytes_
         * @property {Array.<number>|null} [shape] NDArray shape
         * @property {string|null} [type] NDArray type
         */
    
        /**
         * Constructs a new NDArray.
         * @exports NDArray
         * @classdesc Represents a NDArray.
         * @implements INDArray
         * @constructor
         * @param {INDArray=} [properties] Properties to set
         */
        function NDArray(properties) {
            this.shape = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * NDArray bytes_.
         * @member {Uint8Array} bytes_
         * @memberof NDArray
         * @instance
         */
        NDArray.prototype.bytes_ = $util.newBuffer([]);
    
        /**
         * NDArray shape.
         * @member {Array.<number>} shape
         * @memberof NDArray
         * @instance
         */
        NDArray.prototype.shape = $util.emptyArray;
    
        /**
         * NDArray type.
         * @member {string} type
         * @memberof NDArray
         * @instance
         */
        NDArray.prototype.type = "";
    
        /**
         * Creates a new NDArray instance using the specified properties.
         * @function create
         * @memberof NDArray
         * @static
         * @param {INDArray=} [properties] Properties to set
         * @returns {NDArray} NDArray instance
         */
        NDArray.create = function create(properties) {
            return new NDArray(properties);
        };
    
        /**
         * Encodes the specified NDArray message. Does not implicitly {@link NDArray.verify|verify} messages.
         * @function encode
         * @memberof NDArray
         * @static
         * @param {INDArray} message NDArray message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NDArray.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.bytes_ != null && Object.hasOwnProperty.call(message, "bytes_"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.bytes_);
            if (message.shape != null && message.shape.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (var i = 0; i < message.shape.length; ++i)
                    writer.uint32(message.shape[i]);
                writer.ldelim();
            }
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.type);
            return writer;
        };
    
        /**
         * Encodes the specified NDArray message, length delimited. Does not implicitly {@link NDArray.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NDArray
         * @static
         * @param {INDArray} message NDArray message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NDArray.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a NDArray message from the specified reader or buffer.
         * @function decode
         * @memberof NDArray
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NDArray} NDArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NDArray.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NDArray();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.bytes_ = reader.bytes();
                        break;
                    }
                case 2: {
                        if (!(message.shape && message.shape.length))
                            message.shape = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.shape.push(reader.uint32());
                        } else
                            message.shape.push(reader.uint32());
                        break;
                    }
                case 3: {
                        message.type = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a NDArray message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NDArray
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NDArray} NDArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NDArray.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a NDArray message.
         * @function verify
         * @memberof NDArray
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NDArray.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.bytes_ != null && message.hasOwnProperty("bytes_"))
                if (!(message.bytes_ && typeof message.bytes_.length === "number" || $util.isString(message.bytes_)))
                    return "bytes_: buffer expected";
            if (message.shape != null && message.hasOwnProperty("shape")) {
                if (!Array.isArray(message.shape))
                    return "shape: array expected";
                for (var i = 0; i < message.shape.length; ++i)
                    if (!$util.isInteger(message.shape[i]))
                        return "shape: integer[] expected";
            }
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            return null;
        };
    
        /**
         * Creates a NDArray message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NDArray
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NDArray} NDArray
         */
        NDArray.fromObject = function fromObject(object) {
            if (object instanceof $root.NDArray)
                return object;
            var message = new $root.NDArray();
            if (object.bytes_ != null)
                if (typeof object.bytes_ === "string")
                    $util.base64.decode(object.bytes_, message.bytes_ = $util.newBuffer($util.base64.length(object.bytes_)), 0);
                else if (object.bytes_.length >= 0)
                    message.bytes_ = object.bytes_;
            if (object.shape) {
                if (!Array.isArray(object.shape))
                    throw TypeError(".NDArray.shape: array expected");
                message.shape = [];
                for (var i = 0; i < object.shape.length; ++i)
                    message.shape[i] = object.shape[i] >>> 0;
            }
            if (object.type != null)
                message.type = String(object.type);
            return message;
        };
    
        /**
         * Creates a plain object from a NDArray message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NDArray
         * @static
         * @param {NDArray} message NDArray
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NDArray.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.shape = [];
            if (options.defaults) {
                if (options.bytes === String)
                    object.bytes_ = "";
                else {
                    object.bytes_ = [];
                    if (options.bytes !== Array)
                        object.bytes_ = $util.newBuffer(object.bytes_);
                }
                object.type = "";
            }
            if (message.bytes_ != null && message.hasOwnProperty("bytes_"))
                object.bytes_ = options.bytes === String ? $util.base64.encode(message.bytes_, 0, message.bytes_.length) : options.bytes === Array ? Array.prototype.slice.call(message.bytes_) : message.bytes_;
            if (message.shape && message.shape.length) {
                object.shape = [];
                for (var j = 0; j < message.shape.length; ++j)
                    object.shape[j] = message.shape[j];
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            return object;
        };
    
        /**
         * Converts this NDArray to JSON.
         * @function toJSON
         * @memberof NDArray
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NDArray.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for NDArray
         * @function getTypeUrl
         * @memberof NDArray
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        NDArray.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NDArray";
        };
    
        return NDArray;
    })();
    
    $root.Dict = (function() {
    
        /**
         * Properties of a Dict.
         * @exports IDict
         * @interface IDict
         * @property {Array.<string>|null} [keys] Dict keys
         * @property {Array.<IValue>|null} [values] Dict values
         */
    
        /**
         * Constructs a new Dict.
         * @exports Dict
         * @classdesc Represents a Dict.
         * @implements IDict
         * @constructor
         * @param {IDict=} [properties] Properties to set
         */
        function Dict(properties) {
            this.keys = [];
            this.values = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Dict keys.
         * @member {Array.<string>} keys
         * @memberof Dict
         * @instance
         */
        Dict.prototype.keys = $util.emptyArray;
    
        /**
         * Dict values.
         * @member {Array.<IValue>} values
         * @memberof Dict
         * @instance
         */
        Dict.prototype.values = $util.emptyArray;
    
        /**
         * Creates a new Dict instance using the specified properties.
         * @function create
         * @memberof Dict
         * @static
         * @param {IDict=} [properties] Properties to set
         * @returns {Dict} Dict instance
         */
        Dict.create = function create(properties) {
            return new Dict(properties);
        };
    
        /**
         * Encodes the specified Dict message. Does not implicitly {@link Dict.verify|verify} messages.
         * @function encode
         * @memberof Dict
         * @static
         * @param {IDict} message Dict message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Dict.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.keys != null && message.keys.length)
                for (var i = 0; i < message.keys.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.keys[i]);
            if (message.values != null && message.values.length)
                for (var i = 0; i < message.values.length; ++i)
                    $root.Value.encode(message.values[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified Dict message, length delimited. Does not implicitly {@link Dict.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Dict
         * @static
         * @param {IDict} message Dict message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Dict.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a Dict message from the specified reader or buffer.
         * @function decode
         * @memberof Dict
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Dict} Dict
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Dict.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Dict();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.keys && message.keys.length))
                            message.keys = [];
                        message.keys.push(reader.string());
                        break;
                    }
                case 2: {
                        if (!(message.values && message.values.length))
                            message.values = [];
                        message.values.push($root.Value.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a Dict message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Dict
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Dict} Dict
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Dict.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a Dict message.
         * @function verify
         * @memberof Dict
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Dict.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.keys != null && message.hasOwnProperty("keys")) {
                if (!Array.isArray(message.keys))
                    return "keys: array expected";
                for (var i = 0; i < message.keys.length; ++i)
                    if (!$util.isString(message.keys[i]))
                        return "keys: string[] expected";
            }
            if (message.values != null && message.hasOwnProperty("values")) {
                if (!Array.isArray(message.values))
                    return "values: array expected";
                for (var i = 0; i < message.values.length; ++i) {
                    var error = $root.Value.verify(message.values[i]);
                    if (error)
                        return "values." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a Dict message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Dict
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Dict} Dict
         */
        Dict.fromObject = function fromObject(object) {
            if (object instanceof $root.Dict)
                return object;
            var message = new $root.Dict();
            if (object.keys) {
                if (!Array.isArray(object.keys))
                    throw TypeError(".Dict.keys: array expected");
                message.keys = [];
                for (var i = 0; i < object.keys.length; ++i)
                    message.keys[i] = String(object.keys[i]);
            }
            if (object.values) {
                if (!Array.isArray(object.values))
                    throw TypeError(".Dict.values: array expected");
                message.values = [];
                for (var i = 0; i < object.values.length; ++i) {
                    if (typeof object.values[i] !== "object")
                        throw TypeError(".Dict.values: object expected");
                    message.values[i] = $root.Value.fromObject(object.values[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a Dict message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Dict
         * @static
         * @param {Dict} message Dict
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Dict.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.keys = [];
                object.values = [];
            }
            if (message.keys && message.keys.length) {
                object.keys = [];
                for (var j = 0; j < message.keys.length; ++j)
                    object.keys[j] = message.keys[j];
            }
            if (message.values && message.values.length) {
                object.values = [];
                for (var j = 0; j < message.values.length; ++j)
                    object.values[j] = $root.Value.toObject(message.values[j], options);
            }
            return object;
        };
    
        /**
         * Converts this Dict to JSON.
         * @function toJSON
         * @memberof Dict
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Dict.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for Dict
         * @function getTypeUrl
         * @memberof Dict
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Dict.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Dict";
        };
    
        return Dict;
    })();
    
    $root.DataFrame = (function() {
    
        /**
         * Properties of a DataFrame.
         * @exports IDataFrame
         * @interface IDataFrame
         * @property {IValue|null} [index] DataFrame index
         * @property {IValue|null} [columns] DataFrame columns
         * @property {Array.<IValue>|null} [values] DataFrame values
         */
    
        /**
         * Constructs a new DataFrame.
         * @exports DataFrame
         * @classdesc Represents a DataFrame.
         * @implements IDataFrame
         * @constructor
         * @param {IDataFrame=} [properties] Properties to set
         */
        function DataFrame(properties) {
            this.values = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * DataFrame index.
         * @member {IValue|null|undefined} index
         * @memberof DataFrame
         * @instance
         */
        DataFrame.prototype.index = null;
    
        /**
         * DataFrame columns.
         * @member {IValue|null|undefined} columns
         * @memberof DataFrame
         * @instance
         */
        DataFrame.prototype.columns = null;
    
        /**
         * DataFrame values.
         * @member {Array.<IValue>} values
         * @memberof DataFrame
         * @instance
         */
        DataFrame.prototype.values = $util.emptyArray;
    
        /**
         * Creates a new DataFrame instance using the specified properties.
         * @function create
         * @memberof DataFrame
         * @static
         * @param {IDataFrame=} [properties] Properties to set
         * @returns {DataFrame} DataFrame instance
         */
        DataFrame.create = function create(properties) {
            return new DataFrame(properties);
        };
    
        /**
         * Encodes the specified DataFrame message. Does not implicitly {@link DataFrame.verify|verify} messages.
         * @function encode
         * @memberof DataFrame
         * @static
         * @param {IDataFrame} message DataFrame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DataFrame.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.index != null && Object.hasOwnProperty.call(message, "index"))
                $root.Value.encode(message.index, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.columns != null && Object.hasOwnProperty.call(message, "columns"))
                $root.Value.encode(message.columns, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.values != null && message.values.length)
                for (var i = 0; i < message.values.length; ++i)
                    $root.Value.encode(message.values[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified DataFrame message, length delimited. Does not implicitly {@link DataFrame.verify|verify} messages.
         * @function encodeDelimited
         * @memberof DataFrame
         * @static
         * @param {IDataFrame} message DataFrame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DataFrame.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a DataFrame message from the specified reader or buffer.
         * @function decode
         * @memberof DataFrame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {DataFrame} DataFrame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DataFrame.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DataFrame();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.index = $root.Value.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.columns = $root.Value.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        if (!(message.values && message.values.length))
                            message.values = [];
                        message.values.push($root.Value.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a DataFrame message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof DataFrame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {DataFrame} DataFrame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DataFrame.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a DataFrame message.
         * @function verify
         * @memberof DataFrame
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DataFrame.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.index != null && message.hasOwnProperty("index")) {
                var error = $root.Value.verify(message.index);
                if (error)
                    return "index." + error;
            }
            if (message.columns != null && message.hasOwnProperty("columns")) {
                var error = $root.Value.verify(message.columns);
                if (error)
                    return "columns." + error;
            }
            if (message.values != null && message.hasOwnProperty("values")) {
                if (!Array.isArray(message.values))
                    return "values: array expected";
                for (var i = 0; i < message.values.length; ++i) {
                    var error = $root.Value.verify(message.values[i]);
                    if (error)
                        return "values." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a DataFrame message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof DataFrame
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {DataFrame} DataFrame
         */
        DataFrame.fromObject = function fromObject(object) {
            if (object instanceof $root.DataFrame)
                return object;
            var message = new $root.DataFrame();
            if (object.index != null) {
                if (typeof object.index !== "object")
                    throw TypeError(".DataFrame.index: object expected");
                message.index = $root.Value.fromObject(object.index);
            }
            if (object.columns != null) {
                if (typeof object.columns !== "object")
                    throw TypeError(".DataFrame.columns: object expected");
                message.columns = $root.Value.fromObject(object.columns);
            }
            if (object.values) {
                if (!Array.isArray(object.values))
                    throw TypeError(".DataFrame.values: array expected");
                message.values = [];
                for (var i = 0; i < object.values.length; ++i) {
                    if (typeof object.values[i] !== "object")
                        throw TypeError(".DataFrame.values: object expected");
                    message.values[i] = $root.Value.fromObject(object.values[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a DataFrame message. Also converts values to other types if specified.
         * @function toObject
         * @memberof DataFrame
         * @static
         * @param {DataFrame} message DataFrame
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DataFrame.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.values = [];
            if (options.defaults) {
                object.index = null;
                object.columns = null;
            }
            if (message.index != null && message.hasOwnProperty("index"))
                object.index = $root.Value.toObject(message.index, options);
            if (message.columns != null && message.hasOwnProperty("columns"))
                object.columns = $root.Value.toObject(message.columns, options);
            if (message.values && message.values.length) {
                object.values = [];
                for (var j = 0; j < message.values.length; ++j)
                    object.values[j] = $root.Value.toObject(message.values[j], options);
            }
            return object;
        };
    
        /**
         * Converts this DataFrame to JSON.
         * @function toJSON
         * @memberof DataFrame
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DataFrame.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for DataFrame
         * @function getTypeUrl
         * @memberof DataFrame
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DataFrame.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/DataFrame";
        };
    
        return DataFrame;
    })();

    return $root;
});
