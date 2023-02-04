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
    
    $root.item_cr_0v1 = (function() {
    
        /**
         * Namespace item_cr_0v1.
         * @exports item_cr_0v1
         * @namespace
         */
        var item_cr_0v1 = {};
    
        item_cr_0v1.CommonRequest = (function() {
    
            /**
             * Properties of a CommonRequest.
             * @memberof item_cr_0v1
             * @interface ICommonRequest
             * @property {string|null} [token] CommonRequest token
             * @property {string|null} [usageContext] CommonRequest usageContext
             */
    
            /**
             * Constructs a new CommonRequest.
             * @memberof item_cr_0v1
             * @classdesc Represents a CommonRequest.
             * @implements ICommonRequest
             * @constructor
             * @param {item_cr_0v1.ICommonRequest=} [properties] Properties to set
             */
            function CommonRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * CommonRequest token.
             * @member {string} token
             * @memberof item_cr_0v1.CommonRequest
             * @instance
             */
            CommonRequest.prototype.token = "";
    
            /**
             * CommonRequest usageContext.
             * @member {string} usageContext
             * @memberof item_cr_0v1.CommonRequest
             * @instance
             */
            CommonRequest.prototype.usageContext = "";
    
            /**
             * Creates a new CommonRequest instance using the specified properties.
             * @function create
             * @memberof item_cr_0v1.CommonRequest
             * @static
             * @param {item_cr_0v1.ICommonRequest=} [properties] Properties to set
             * @returns {item_cr_0v1.CommonRequest} CommonRequest instance
             */
            CommonRequest.create = function create(properties) {
                return new CommonRequest(properties);
            };
    
            /**
             * Encodes the specified CommonRequest message. Does not implicitly {@link item_cr_0v1.CommonRequest.verify|verify} messages.
             * @function encode
             * @memberof item_cr_0v1.CommonRequest
             * @static
             * @param {item_cr_0v1.ICommonRequest} message CommonRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CommonRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
                if (message.usageContext != null && Object.hasOwnProperty.call(message, "usageContext"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.usageContext);
                return writer;
            };
    
            /**
             * Encodes the specified CommonRequest message, length delimited. Does not implicitly {@link item_cr_0v1.CommonRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof item_cr_0v1.CommonRequest
             * @static
             * @param {item_cr_0v1.ICommonRequest} message CommonRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CommonRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a CommonRequest message from the specified reader or buffer.
             * @function decode
             * @memberof item_cr_0v1.CommonRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {item_cr_0v1.CommonRequest} CommonRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CommonRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.item_cr_0v1.CommonRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.token = reader.string();
                            break;
                        }
                    case 2: {
                            message.usageContext = reader.string();
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
             * Decodes a CommonRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof item_cr_0v1.CommonRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {item_cr_0v1.CommonRequest} CommonRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CommonRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a CommonRequest message.
             * @function verify
             * @memberof item_cr_0v1.CommonRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CommonRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.token != null && message.hasOwnProperty("token"))
                    if (!$util.isString(message.token))
                        return "token: string expected";
                if (message.usageContext != null && message.hasOwnProperty("usageContext"))
                    if (!$util.isString(message.usageContext))
                        return "usageContext: string expected";
                return null;
            };
    
            /**
             * Creates a CommonRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof item_cr_0v1.CommonRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {item_cr_0v1.CommonRequest} CommonRequest
             */
            CommonRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.item_cr_0v1.CommonRequest)
                    return object;
                var message = new $root.item_cr_0v1.CommonRequest();
                if (object.token != null)
                    message.token = String(object.token);
                if (object.usageContext != null)
                    message.usageContext = String(object.usageContext);
                return message;
            };
    
            /**
             * Creates a plain object from a CommonRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof item_cr_0v1.CommonRequest
             * @static
             * @param {item_cr_0v1.CommonRequest} message CommonRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CommonRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.token = "";
                    object.usageContext = "";
                }
                if (message.token != null && message.hasOwnProperty("token"))
                    object.token = message.token;
                if (message.usageContext != null && message.hasOwnProperty("usageContext"))
                    object.usageContext = message.usageContext;
                return object;
            };
    
            /**
             * Converts this CommonRequest to JSON.
             * @function toJSON
             * @memberof item_cr_0v1.CommonRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CommonRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for CommonRequest
             * @function getTypeUrl
             * @memberof item_cr_0v1.CommonRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CommonRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/item_cr_0v1.CommonRequest";
            };
    
            return CommonRequest;
        })();
    
        item_cr_0v1.CommonResponse = (function() {
    
            /**
             * Properties of a CommonResponse.
             * @memberof item_cr_0v1
             * @interface ICommonResponse
             * @property {string|null} [message] CommonResponse message
             * @property {string|null} [debugMessage] CommonResponse debugMessage
             * @property {item_cr_0v1.CommonResponse.Status|null} [status] CommonResponse status
             */
    
            /**
             * Constructs a new CommonResponse.
             * @memberof item_cr_0v1
             * @classdesc Represents a CommonResponse.
             * @implements ICommonResponse
             * @constructor
             * @param {item_cr_0v1.ICommonResponse=} [properties] Properties to set
             */
            function CommonResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * CommonResponse message.
             * @member {string} message
             * @memberof item_cr_0v1.CommonResponse
             * @instance
             */
            CommonResponse.prototype.message = "";
    
            /**
             * CommonResponse debugMessage.
             * @member {string} debugMessage
             * @memberof item_cr_0v1.CommonResponse
             * @instance
             */
            CommonResponse.prototype.debugMessage = "";
    
            /**
             * CommonResponse status.
             * @member {item_cr_0v1.CommonResponse.Status} status
             * @memberof item_cr_0v1.CommonResponse
             * @instance
             */
            CommonResponse.prototype.status = 0;
    
            /**
             * Creates a new CommonResponse instance using the specified properties.
             * @function create
             * @memberof item_cr_0v1.CommonResponse
             * @static
             * @param {item_cr_0v1.ICommonResponse=} [properties] Properties to set
             * @returns {item_cr_0v1.CommonResponse} CommonResponse instance
             */
            CommonResponse.create = function create(properties) {
                return new CommonResponse(properties);
            };
    
            /**
             * Encodes the specified CommonResponse message. Does not implicitly {@link item_cr_0v1.CommonResponse.verify|verify} messages.
             * @function encode
             * @memberof item_cr_0v1.CommonResponse
             * @static
             * @param {item_cr_0v1.ICommonResponse} message CommonResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CommonResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                if (message.debugMessage != null && Object.hasOwnProperty.call(message, "debugMessage"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.debugMessage);
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.status);
                return writer;
            };
    
            /**
             * Encodes the specified CommonResponse message, length delimited. Does not implicitly {@link item_cr_0v1.CommonResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof item_cr_0v1.CommonResponse
             * @static
             * @param {item_cr_0v1.ICommonResponse} message CommonResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CommonResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a CommonResponse message from the specified reader or buffer.
             * @function decode
             * @memberof item_cr_0v1.CommonResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {item_cr_0v1.CommonResponse} CommonResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CommonResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.item_cr_0v1.CommonResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.message = reader.string();
                            break;
                        }
                    case 2: {
                            message.debugMessage = reader.string();
                            break;
                        }
                    case 3: {
                            message.status = reader.int32();
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
             * Decodes a CommonResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof item_cr_0v1.CommonResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {item_cr_0v1.CommonResponse} CommonResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CommonResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a CommonResponse message.
             * @function verify
             * @memberof item_cr_0v1.CommonResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CommonResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                if (message.debugMessage != null && message.hasOwnProperty("debugMessage"))
                    if (!$util.isString(message.debugMessage))
                        return "debugMessage: string expected";
                if (message.status != null && message.hasOwnProperty("status"))
                    switch (message.status) {
                    default:
                        return "status: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                return null;
            };
    
            /**
             * Creates a CommonResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof item_cr_0v1.CommonResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {item_cr_0v1.CommonResponse} CommonResponse
             */
            CommonResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.item_cr_0v1.CommonResponse)
                    return object;
                var message = new $root.item_cr_0v1.CommonResponse();
                if (object.message != null)
                    message.message = String(object.message);
                if (object.debugMessage != null)
                    message.debugMessage = String(object.debugMessage);
                switch (object.status) {
                default:
                    if (typeof object.status === "number") {
                        message.status = object.status;
                        break;
                    }
                    break;
                case "INTERNAL_ERROR":
                case 0:
                    message.status = 0;
                    break;
                case "BAD_REQUEST":
                case 1:
                    message.status = 1;
                    break;
                case "OK_REQUEST":
                case 2:
                    message.status = 2;
                    break;
                }
                return message;
            };
    
            /**
             * Creates a plain object from a CommonResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof item_cr_0v1.CommonResponse
             * @static
             * @param {item_cr_0v1.CommonResponse} message CommonResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CommonResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.message = "";
                    object.debugMessage = "";
                    object.status = options.enums === String ? "INTERNAL_ERROR" : 0;
                }
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                if (message.debugMessage != null && message.hasOwnProperty("debugMessage"))
                    object.debugMessage = message.debugMessage;
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = options.enums === String ? $root.item_cr_0v1.CommonResponse.Status[message.status] === undefined ? message.status : $root.item_cr_0v1.CommonResponse.Status[message.status] : message.status;
                return object;
            };
    
            /**
             * Converts this CommonResponse to JSON.
             * @function toJSON
             * @memberof item_cr_0v1.CommonResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CommonResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for CommonResponse
             * @function getTypeUrl
             * @memberof item_cr_0v1.CommonResponse
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CommonResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/item_cr_0v1.CommonResponse";
            };
    
            /**
             * Status enum.
             * @name item_cr_0v1.CommonResponse.Status
             * @enum {number}
             * @property {number} INTERNAL_ERROR=0 INTERNAL_ERROR value
             * @property {number} BAD_REQUEST=1 BAD_REQUEST value
             * @property {number} OK_REQUEST=2 OK_REQUEST value
             */
            CommonResponse.Status = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "INTERNAL_ERROR"] = 0;
                values[valuesById[1] = "BAD_REQUEST"] = 1;
                values[valuesById[2] = "OK_REQUEST"] = 2;
                return values;
            })();
    
            return CommonResponse;
        })();
    
        item_cr_0v1.CreateRequest = (function() {
    
            /**
             * Properties of a CreateRequest.
             * @memberof item_cr_0v1
             * @interface ICreateRequest
             * @property {item_cr_0v1.ICommonRequest|null} [common] CreateRequest common
             * @property {string|null} [resourceId] CreateRequest resourceId
             */
    
            /**
             * Constructs a new CreateRequest.
             * @memberof item_cr_0v1
             * @classdesc Represents a CreateRequest.
             * @implements ICreateRequest
             * @constructor
             * @param {item_cr_0v1.ICreateRequest=} [properties] Properties to set
             */
            function CreateRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * CreateRequest common.
             * @member {item_cr_0v1.ICommonRequest|null|undefined} common
             * @memberof item_cr_0v1.CreateRequest
             * @instance
             */
            CreateRequest.prototype.common = null;
    
            /**
             * CreateRequest resourceId.
             * @member {string} resourceId
             * @memberof item_cr_0v1.CreateRequest
             * @instance
             */
            CreateRequest.prototype.resourceId = "";
    
            /**
             * Creates a new CreateRequest instance using the specified properties.
             * @function create
             * @memberof item_cr_0v1.CreateRequest
             * @static
             * @param {item_cr_0v1.ICreateRequest=} [properties] Properties to set
             * @returns {item_cr_0v1.CreateRequest} CreateRequest instance
             */
            CreateRequest.create = function create(properties) {
                return new CreateRequest(properties);
            };
    
            /**
             * Encodes the specified CreateRequest message. Does not implicitly {@link item_cr_0v1.CreateRequest.verify|verify} messages.
             * @function encode
             * @memberof item_cr_0v1.CreateRequest
             * @static
             * @param {item_cr_0v1.ICreateRequest} message CreateRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.common != null && Object.hasOwnProperty.call(message, "common"))
                    $root.item_cr_0v1.CommonRequest.encode(message.common, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.resourceId != null && Object.hasOwnProperty.call(message, "resourceId"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.resourceId);
                return writer;
            };
    
            /**
             * Encodes the specified CreateRequest message, length delimited. Does not implicitly {@link item_cr_0v1.CreateRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof item_cr_0v1.CreateRequest
             * @static
             * @param {item_cr_0v1.ICreateRequest} message CreateRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a CreateRequest message from the specified reader or buffer.
             * @function decode
             * @memberof item_cr_0v1.CreateRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {item_cr_0v1.CreateRequest} CreateRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.item_cr_0v1.CreateRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.common = $root.item_cr_0v1.CommonRequest.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.resourceId = reader.string();
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
             * Decodes a CreateRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof item_cr_0v1.CreateRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {item_cr_0v1.CreateRequest} CreateRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a CreateRequest message.
             * @function verify
             * @memberof item_cr_0v1.CreateRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CreateRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.common != null && message.hasOwnProperty("common")) {
                    var error = $root.item_cr_0v1.CommonRequest.verify(message.common);
                    if (error)
                        return "common." + error;
                }
                if (message.resourceId != null && message.hasOwnProperty("resourceId"))
                    if (!$util.isString(message.resourceId))
                        return "resourceId: string expected";
                return null;
            };
    
            /**
             * Creates a CreateRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof item_cr_0v1.CreateRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {item_cr_0v1.CreateRequest} CreateRequest
             */
            CreateRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.item_cr_0v1.CreateRequest)
                    return object;
                var message = new $root.item_cr_0v1.CreateRequest();
                if (object.common != null) {
                    if (typeof object.common !== "object")
                        throw TypeError(".item_cr_0v1.CreateRequest.common: object expected");
                    message.common = $root.item_cr_0v1.CommonRequest.fromObject(object.common);
                }
                if (object.resourceId != null)
                    message.resourceId = String(object.resourceId);
                return message;
            };
    
            /**
             * Creates a plain object from a CreateRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof item_cr_0v1.CreateRequest
             * @static
             * @param {item_cr_0v1.CreateRequest} message CreateRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CreateRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.common = null;
                    object.resourceId = "";
                }
                if (message.common != null && message.hasOwnProperty("common"))
                    object.common = $root.item_cr_0v1.CommonRequest.toObject(message.common, options);
                if (message.resourceId != null && message.hasOwnProperty("resourceId"))
                    object.resourceId = message.resourceId;
                return object;
            };
    
            /**
             * Converts this CreateRequest to JSON.
             * @function toJSON
             * @memberof item_cr_0v1.CreateRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CreateRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for CreateRequest
             * @function getTypeUrl
             * @memberof item_cr_0v1.CreateRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CreateRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/item_cr_0v1.CreateRequest";
            };
    
            return CreateRequest;
        })();
    
        item_cr_0v1.CreateResponse = (function() {
    
            /**
             * Properties of a CreateResponse.
             * @memberof item_cr_0v1
             * @interface ICreateResponse
             * @property {item_cr_0v1.ICommonResponse|null} [common] CreateResponse common
             * @property {item_cr_0v1.CreateResponse.Status|null} [status] CreateResponse status
             */
    
            /**
             * Constructs a new CreateResponse.
             * @memberof item_cr_0v1
             * @classdesc Represents a CreateResponse.
             * @implements ICreateResponse
             * @constructor
             * @param {item_cr_0v1.ICreateResponse=} [properties] Properties to set
             */
            function CreateResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * CreateResponse common.
             * @member {item_cr_0v1.ICommonResponse|null|undefined} common
             * @memberof item_cr_0v1.CreateResponse
             * @instance
             */
            CreateResponse.prototype.common = null;
    
            /**
             * CreateResponse status.
             * @member {item_cr_0v1.CreateResponse.Status} status
             * @memberof item_cr_0v1.CreateResponse
             * @instance
             */
            CreateResponse.prototype.status = 0;
    
            /**
             * Creates a new CreateResponse instance using the specified properties.
             * @function create
             * @memberof item_cr_0v1.CreateResponse
             * @static
             * @param {item_cr_0v1.ICreateResponse=} [properties] Properties to set
             * @returns {item_cr_0v1.CreateResponse} CreateResponse instance
             */
            CreateResponse.create = function create(properties) {
                return new CreateResponse(properties);
            };
    
            /**
             * Encodes the specified CreateResponse message. Does not implicitly {@link item_cr_0v1.CreateResponse.verify|verify} messages.
             * @function encode
             * @memberof item_cr_0v1.CreateResponse
             * @static
             * @param {item_cr_0v1.ICreateResponse} message CreateResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.common != null && Object.hasOwnProperty.call(message, "common"))
                    $root.item_cr_0v1.CommonResponse.encode(message.common, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.status);
                return writer;
            };
    
            /**
             * Encodes the specified CreateResponse message, length delimited. Does not implicitly {@link item_cr_0v1.CreateResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof item_cr_0v1.CreateResponse
             * @static
             * @param {item_cr_0v1.ICreateResponse} message CreateResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a CreateResponse message from the specified reader or buffer.
             * @function decode
             * @memberof item_cr_0v1.CreateResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {item_cr_0v1.CreateResponse} CreateResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.item_cr_0v1.CreateResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.common = $root.item_cr_0v1.CommonResponse.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.status = reader.int32();
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
             * Decodes a CreateResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof item_cr_0v1.CreateResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {item_cr_0v1.CreateResponse} CreateResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a CreateResponse message.
             * @function verify
             * @memberof item_cr_0v1.CreateResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CreateResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.common != null && message.hasOwnProperty("common")) {
                    var error = $root.item_cr_0v1.CommonResponse.verify(message.common);
                    if (error)
                        return "common." + error;
                }
                if (message.status != null && message.hasOwnProperty("status"))
                    switch (message.status) {
                    default:
                        return "status: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                return null;
            };
    
            /**
             * Creates a CreateResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof item_cr_0v1.CreateResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {item_cr_0v1.CreateResponse} CreateResponse
             */
            CreateResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.item_cr_0v1.CreateResponse)
                    return object;
                var message = new $root.item_cr_0v1.CreateResponse();
                if (object.common != null) {
                    if (typeof object.common !== "object")
                        throw TypeError(".item_cr_0v1.CreateResponse.common: object expected");
                    message.common = $root.item_cr_0v1.CommonResponse.fromObject(object.common);
                }
                switch (object.status) {
                default:
                    if (typeof object.status === "number") {
                        message.status = object.status;
                        break;
                    }
                    break;
                case "ALREADY_EXISTS":
                case 0:
                    message.status = 0;
                    break;
                case "CREATED":
                case 1:
                    message.status = 1;
                    break;
                case "INVALID_RESOURCE_ID":
                case 2:
                    message.status = 2;
                    break;
                }
                return message;
            };
    
            /**
             * Creates a plain object from a CreateResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof item_cr_0v1.CreateResponse
             * @static
             * @param {item_cr_0v1.CreateResponse} message CreateResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CreateResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.common = null;
                    object.status = options.enums === String ? "ALREADY_EXISTS" : 0;
                }
                if (message.common != null && message.hasOwnProperty("common"))
                    object.common = $root.item_cr_0v1.CommonResponse.toObject(message.common, options);
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = options.enums === String ? $root.item_cr_0v1.CreateResponse.Status[message.status] === undefined ? message.status : $root.item_cr_0v1.CreateResponse.Status[message.status] : message.status;
                return object;
            };
    
            /**
             * Converts this CreateResponse to JSON.
             * @function toJSON
             * @memberof item_cr_0v1.CreateResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CreateResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for CreateResponse
             * @function getTypeUrl
             * @memberof item_cr_0v1.CreateResponse
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CreateResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/item_cr_0v1.CreateResponse";
            };
    
            /**
             * Status enum.
             * @name item_cr_0v1.CreateResponse.Status
             * @enum {number}
             * @property {number} ALREADY_EXISTS=0 ALREADY_EXISTS value
             * @property {number} CREATED=1 CREATED value
             * @property {number} INVALID_RESOURCE_ID=2 INVALID_RESOURCE_ID value
             */
            CreateResponse.Status = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "ALREADY_EXISTS"] = 0;
                values[valuesById[1] = "CREATED"] = 1;
                values[valuesById[2] = "INVALID_RESOURCE_ID"] = 2;
                return values;
            })();
    
            return CreateResponse;
        })();
    
        item_cr_0v1.GetRequest = (function() {
    
            /**
             * Properties of a GetRequest.
             * @memberof item_cr_0v1
             * @interface IGetRequest
             * @property {item_cr_0v1.ICommonRequest|null} [common] GetRequest common
             * @property {string|null} [resourceId] GetRequest resourceId
             * @property {boolean|null} [withoutMetavaribles] GetRequest withoutMetavaribles
             * @property {boolean|null} [withoutItemValue] GetRequest withoutItemValue
             * @property {number|null} [maxSizeBytes] GetRequest maxSizeBytes
             */
    
            /**
             * Constructs a new GetRequest.
             * @memberof item_cr_0v1
             * @classdesc Represents a GetRequest.
             * @implements IGetRequest
             * @constructor
             * @param {item_cr_0v1.IGetRequest=} [properties] Properties to set
             */
            function GetRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * GetRequest common.
             * @member {item_cr_0v1.ICommonRequest|null|undefined} common
             * @memberof item_cr_0v1.GetRequest
             * @instance
             */
            GetRequest.prototype.common = null;
    
            /**
             * GetRequest resourceId.
             * @member {string} resourceId
             * @memberof item_cr_0v1.GetRequest
             * @instance
             */
            GetRequest.prototype.resourceId = "";
    
            /**
             * GetRequest withoutMetavaribles.
             * @member {boolean} withoutMetavaribles
             * @memberof item_cr_0v1.GetRequest
             * @instance
             */
            GetRequest.prototype.withoutMetavaribles = false;
    
            /**
             * GetRequest withoutItemValue.
             * @member {boolean} withoutItemValue
             * @memberof item_cr_0v1.GetRequest
             * @instance
             */
            GetRequest.prototype.withoutItemValue = false;
    
            /**
             * GetRequest maxSizeBytes.
             * @member {number} maxSizeBytes
             * @memberof item_cr_0v1.GetRequest
             * @instance
             */
            GetRequest.prototype.maxSizeBytes = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Creates a new GetRequest instance using the specified properties.
             * @function create
             * @memberof item_cr_0v1.GetRequest
             * @static
             * @param {item_cr_0v1.IGetRequest=} [properties] Properties to set
             * @returns {item_cr_0v1.GetRequest} GetRequest instance
             */
            GetRequest.create = function create(properties) {
                return new GetRequest(properties);
            };
    
            /**
             * Encodes the specified GetRequest message. Does not implicitly {@link item_cr_0v1.GetRequest.verify|verify} messages.
             * @function encode
             * @memberof item_cr_0v1.GetRequest
             * @static
             * @param {item_cr_0v1.IGetRequest} message GetRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.common != null && Object.hasOwnProperty.call(message, "common"))
                    $root.item_cr_0v1.CommonRequest.encode(message.common, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.resourceId != null && Object.hasOwnProperty.call(message, "resourceId"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.resourceId);
                if (message.withoutMetavaribles != null && Object.hasOwnProperty.call(message, "withoutMetavaribles"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.withoutMetavaribles);
                if (message.withoutItemValue != null && Object.hasOwnProperty.call(message, "withoutItemValue"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.withoutItemValue);
                if (message.maxSizeBytes != null && Object.hasOwnProperty.call(message, "maxSizeBytes"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.maxSizeBytes);
                return writer;
            };
    
            /**
             * Encodes the specified GetRequest message, length delimited. Does not implicitly {@link item_cr_0v1.GetRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof item_cr_0v1.GetRequest
             * @static
             * @param {item_cr_0v1.IGetRequest} message GetRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a GetRequest message from the specified reader or buffer.
             * @function decode
             * @memberof item_cr_0v1.GetRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {item_cr_0v1.GetRequest} GetRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.item_cr_0v1.GetRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.common = $root.item_cr_0v1.CommonRequest.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.resourceId = reader.string();
                            break;
                        }
                    case 3: {
                            message.withoutMetavaribles = reader.bool();
                            break;
                        }
                    case 4: {
                            message.withoutItemValue = reader.bool();
                            break;
                        }
                    case 5: {
                            message.maxSizeBytes = reader.uint64();
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
             * Decodes a GetRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof item_cr_0v1.GetRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {item_cr_0v1.GetRequest} GetRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a GetRequest message.
             * @function verify
             * @memberof item_cr_0v1.GetRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.common != null && message.hasOwnProperty("common")) {
                    var error = $root.item_cr_0v1.CommonRequest.verify(message.common);
                    if (error)
                        return "common." + error;
                }
                if (message.resourceId != null && message.hasOwnProperty("resourceId"))
                    if (!$util.isString(message.resourceId))
                        return "resourceId: string expected";
                if (message.withoutMetavaribles != null && message.hasOwnProperty("withoutMetavaribles"))
                    if (typeof message.withoutMetavaribles !== "boolean")
                        return "withoutMetavaribles: boolean expected";
                if (message.withoutItemValue != null && message.hasOwnProperty("withoutItemValue"))
                    if (typeof message.withoutItemValue !== "boolean")
                        return "withoutItemValue: boolean expected";
                if (message.maxSizeBytes != null && message.hasOwnProperty("maxSizeBytes"))
                    if (!$util.isInteger(message.maxSizeBytes) && !(message.maxSizeBytes && $util.isInteger(message.maxSizeBytes.low) && $util.isInteger(message.maxSizeBytes.high)))
                        return "maxSizeBytes: integer|Long expected";
                return null;
            };
    
            /**
             * Creates a GetRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof item_cr_0v1.GetRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {item_cr_0v1.GetRequest} GetRequest
             */
            GetRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.item_cr_0v1.GetRequest)
                    return object;
                var message = new $root.item_cr_0v1.GetRequest();
                if (object.common != null) {
                    if (typeof object.common !== "object")
                        throw TypeError(".item_cr_0v1.GetRequest.common: object expected");
                    message.common = $root.item_cr_0v1.CommonRequest.fromObject(object.common);
                }
                if (object.resourceId != null)
                    message.resourceId = String(object.resourceId);
                if (object.withoutMetavaribles != null)
                    message.withoutMetavaribles = Boolean(object.withoutMetavaribles);
                if (object.withoutItemValue != null)
                    message.withoutItemValue = Boolean(object.withoutItemValue);
                if (object.maxSizeBytes != null)
                    if ($util.Long)
                        (message.maxSizeBytes = $util.Long.fromValue(object.maxSizeBytes)).unsigned = true;
                    else if (typeof object.maxSizeBytes === "string")
                        message.maxSizeBytes = parseInt(object.maxSizeBytes, 10);
                    else if (typeof object.maxSizeBytes === "number")
                        message.maxSizeBytes = object.maxSizeBytes;
                    else if (typeof object.maxSizeBytes === "object")
                        message.maxSizeBytes = new $util.LongBits(object.maxSizeBytes.low >>> 0, object.maxSizeBytes.high >>> 0).toNumber(true);
                return message;
            };
    
            /**
             * Creates a plain object from a GetRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof item_cr_0v1.GetRequest
             * @static
             * @param {item_cr_0v1.GetRequest} message GetRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.common = null;
                    object.resourceId = "";
                    object.withoutMetavaribles = false;
                    object.withoutItemValue = false;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.maxSizeBytes = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.maxSizeBytes = options.longs === String ? "0" : 0;
                }
                if (message.common != null && message.hasOwnProperty("common"))
                    object.common = $root.item_cr_0v1.CommonRequest.toObject(message.common, options);
                if (message.resourceId != null && message.hasOwnProperty("resourceId"))
                    object.resourceId = message.resourceId;
                if (message.withoutMetavaribles != null && message.hasOwnProperty("withoutMetavaribles"))
                    object.withoutMetavaribles = message.withoutMetavaribles;
                if (message.withoutItemValue != null && message.hasOwnProperty("withoutItemValue"))
                    object.withoutItemValue = message.withoutItemValue;
                if (message.maxSizeBytes != null && message.hasOwnProperty("maxSizeBytes"))
                    if (typeof message.maxSizeBytes === "number")
                        object.maxSizeBytes = options.longs === String ? String(message.maxSizeBytes) : message.maxSizeBytes;
                    else
                        object.maxSizeBytes = options.longs === String ? $util.Long.prototype.toString.call(message.maxSizeBytes) : options.longs === Number ? new $util.LongBits(message.maxSizeBytes.low >>> 0, message.maxSizeBytes.high >>> 0).toNumber(true) : message.maxSizeBytes;
                return object;
            };
    
            /**
             * Converts this GetRequest to JSON.
             * @function toJSON
             * @memberof item_cr_0v1.GetRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for GetRequest
             * @function getTypeUrl
             * @memberof item_cr_0v1.GetRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GetRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/item_cr_0v1.GetRequest";
            };
    
            return GetRequest;
        })();
    
        item_cr_0v1.GetResponse = (function() {
    
            /**
             * Properties of a GetResponse.
             * @memberof item_cr_0v1
             * @interface IGetResponse
             * @property {item_cr_0v1.ICommonResponse|null} [common] GetResponse common
             * @property {item_cr_0v1.GetResponse.Status|null} [status] GetResponse status
             * @property {Uint8Array|null} [itemValue] GetResponse itemValue
             * @property {Array.<item_cr_0v1.GetResponse.IMetavarible>|null} [metavaribles] GetResponse metavaribles
             * @property {boolean|null} [sizeBytesBiggerThanMax] GetResponse sizeBytesBiggerThanMax
             * @property {number|null} [sizeBytes] GetResponse sizeBytes
             * @property {number|null} [createdMs] GetResponse createdMs
             * @property {number|null} [updatedMs] GetResponse updatedMs
             */
    
            /**
             * Constructs a new GetResponse.
             * @memberof item_cr_0v1
             * @classdesc Represents a GetResponse.
             * @implements IGetResponse
             * @constructor
             * @param {item_cr_0v1.IGetResponse=} [properties] Properties to set
             */
            function GetResponse(properties) {
                this.metavaribles = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * GetResponse common.
             * @member {item_cr_0v1.ICommonResponse|null|undefined} common
             * @memberof item_cr_0v1.GetResponse
             * @instance
             */
            GetResponse.prototype.common = null;
    
            /**
             * GetResponse status.
             * @member {item_cr_0v1.GetResponse.Status} status
             * @memberof item_cr_0v1.GetResponse
             * @instance
             */
            GetResponse.prototype.status = 0;
    
            /**
             * GetResponse itemValue.
             * @member {Uint8Array} itemValue
             * @memberof item_cr_0v1.GetResponse
             * @instance
             */
            GetResponse.prototype.itemValue = $util.newBuffer([]);
    
            /**
             * GetResponse metavaribles.
             * @member {Array.<item_cr_0v1.GetResponse.IMetavarible>} metavaribles
             * @memberof item_cr_0v1.GetResponse
             * @instance
             */
            GetResponse.prototype.metavaribles = $util.emptyArray;
    
            /**
             * GetResponse sizeBytesBiggerThanMax.
             * @member {boolean} sizeBytesBiggerThanMax
             * @memberof item_cr_0v1.GetResponse
             * @instance
             */
            GetResponse.prototype.sizeBytesBiggerThanMax = false;
    
            /**
             * GetResponse sizeBytes.
             * @member {number} sizeBytes
             * @memberof item_cr_0v1.GetResponse
             * @instance
             */
            GetResponse.prototype.sizeBytes = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * GetResponse createdMs.
             * @member {number} createdMs
             * @memberof item_cr_0v1.GetResponse
             * @instance
             */
            GetResponse.prototype.createdMs = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * GetResponse updatedMs.
             * @member {number} updatedMs
             * @memberof item_cr_0v1.GetResponse
             * @instance
             */
            GetResponse.prototype.updatedMs = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Creates a new GetResponse instance using the specified properties.
             * @function create
             * @memberof item_cr_0v1.GetResponse
             * @static
             * @param {item_cr_0v1.IGetResponse=} [properties] Properties to set
             * @returns {item_cr_0v1.GetResponse} GetResponse instance
             */
            GetResponse.create = function create(properties) {
                return new GetResponse(properties);
            };
    
            /**
             * Encodes the specified GetResponse message. Does not implicitly {@link item_cr_0v1.GetResponse.verify|verify} messages.
             * @function encode
             * @memberof item_cr_0v1.GetResponse
             * @static
             * @param {item_cr_0v1.IGetResponse} message GetResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.common != null && Object.hasOwnProperty.call(message, "common"))
                    $root.item_cr_0v1.CommonResponse.encode(message.common, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.status);
                if (message.itemValue != null && Object.hasOwnProperty.call(message, "itemValue"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.itemValue);
                if (message.metavaribles != null && message.metavaribles.length)
                    for (var i = 0; i < message.metavaribles.length; ++i)
                        $root.item_cr_0v1.GetResponse.Metavarible.encode(message.metavaribles[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.sizeBytesBiggerThanMax != null && Object.hasOwnProperty.call(message, "sizeBytesBiggerThanMax"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.sizeBytesBiggerThanMax);
                if (message.sizeBytes != null && Object.hasOwnProperty.call(message, "sizeBytes"))
                    writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.sizeBytes);
                if (message.createdMs != null && Object.hasOwnProperty.call(message, "createdMs"))
                    writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.createdMs);
                if (message.updatedMs != null && Object.hasOwnProperty.call(message, "updatedMs"))
                    writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.updatedMs);
                return writer;
            };
    
            /**
             * Encodes the specified GetResponse message, length delimited. Does not implicitly {@link item_cr_0v1.GetResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof item_cr_0v1.GetResponse
             * @static
             * @param {item_cr_0v1.IGetResponse} message GetResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a GetResponse message from the specified reader or buffer.
             * @function decode
             * @memberof item_cr_0v1.GetResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {item_cr_0v1.GetResponse} GetResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.item_cr_0v1.GetResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.common = $root.item_cr_0v1.CommonResponse.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.status = reader.int32();
                            break;
                        }
                    case 3: {
                            message.itemValue = reader.bytes();
                            break;
                        }
                    case 4: {
                            if (!(message.metavaribles && message.metavaribles.length))
                                message.metavaribles = [];
                            message.metavaribles.push($root.item_cr_0v1.GetResponse.Metavarible.decode(reader, reader.uint32()));
                            break;
                        }
                    case 5: {
                            message.sizeBytesBiggerThanMax = reader.bool();
                            break;
                        }
                    case 6: {
                            message.sizeBytes = reader.uint64();
                            break;
                        }
                    case 7: {
                            message.createdMs = reader.uint64();
                            break;
                        }
                    case 8: {
                            message.updatedMs = reader.uint64();
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
             * Decodes a GetResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof item_cr_0v1.GetResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {item_cr_0v1.GetResponse} GetResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a GetResponse message.
             * @function verify
             * @memberof item_cr_0v1.GetResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.common != null && message.hasOwnProperty("common")) {
                    var error = $root.item_cr_0v1.CommonResponse.verify(message.common);
                    if (error)
                        return "common." + error;
                }
                if (message.status != null && message.hasOwnProperty("status"))
                    switch (message.status) {
                    default:
                        return "status: enum value expected";
                    case 0:
                    case 1:
                        break;
                    }
                if (message.itemValue != null && message.hasOwnProperty("itemValue"))
                    if (!(message.itemValue && typeof message.itemValue.length === "number" || $util.isString(message.itemValue)))
                        return "itemValue: buffer expected";
                if (message.metavaribles != null && message.hasOwnProperty("metavaribles")) {
                    if (!Array.isArray(message.metavaribles))
                        return "metavaribles: array expected";
                    for (var i = 0; i < message.metavaribles.length; ++i) {
                        var error = $root.item_cr_0v1.GetResponse.Metavarible.verify(message.metavaribles[i]);
                        if (error)
                            return "metavaribles." + error;
                    }
                }
                if (message.sizeBytesBiggerThanMax != null && message.hasOwnProperty("sizeBytesBiggerThanMax"))
                    if (typeof message.sizeBytesBiggerThanMax !== "boolean")
                        return "sizeBytesBiggerThanMax: boolean expected";
                if (message.sizeBytes != null && message.hasOwnProperty("sizeBytes"))
                    if (!$util.isInteger(message.sizeBytes) && !(message.sizeBytes && $util.isInteger(message.sizeBytes.low) && $util.isInteger(message.sizeBytes.high)))
                        return "sizeBytes: integer|Long expected";
                if (message.createdMs != null && message.hasOwnProperty("createdMs"))
                    if (!$util.isInteger(message.createdMs) && !(message.createdMs && $util.isInteger(message.createdMs.low) && $util.isInteger(message.createdMs.high)))
                        return "createdMs: integer|Long expected";
                if (message.updatedMs != null && message.hasOwnProperty("updatedMs"))
                    if (!$util.isInteger(message.updatedMs) && !(message.updatedMs && $util.isInteger(message.updatedMs.low) && $util.isInteger(message.updatedMs.high)))
                        return "updatedMs: integer|Long expected";
                return null;
            };
    
            /**
             * Creates a GetResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof item_cr_0v1.GetResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {item_cr_0v1.GetResponse} GetResponse
             */
            GetResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.item_cr_0v1.GetResponse)
                    return object;
                var message = new $root.item_cr_0v1.GetResponse();
                if (object.common != null) {
                    if (typeof object.common !== "object")
                        throw TypeError(".item_cr_0v1.GetResponse.common: object expected");
                    message.common = $root.item_cr_0v1.CommonResponse.fromObject(object.common);
                }
                switch (object.status) {
                default:
                    if (typeof object.status === "number") {
                        message.status = object.status;
                        break;
                    }
                    break;
                case "NOT_FOUND":
                case 0:
                    message.status = 0;
                    break;
                case "FOUND":
                case 1:
                    message.status = 1;
                    break;
                }
                if (object.itemValue != null)
                    if (typeof object.itemValue === "string")
                        $util.base64.decode(object.itemValue, message.itemValue = $util.newBuffer($util.base64.length(object.itemValue)), 0);
                    else if (object.itemValue.length >= 0)
                        message.itemValue = object.itemValue;
                if (object.metavaribles) {
                    if (!Array.isArray(object.metavaribles))
                        throw TypeError(".item_cr_0v1.GetResponse.metavaribles: array expected");
                    message.metavaribles = [];
                    for (var i = 0; i < object.metavaribles.length; ++i) {
                        if (typeof object.metavaribles[i] !== "object")
                            throw TypeError(".item_cr_0v1.GetResponse.metavaribles: object expected");
                        message.metavaribles[i] = $root.item_cr_0v1.GetResponse.Metavarible.fromObject(object.metavaribles[i]);
                    }
                }
                if (object.sizeBytesBiggerThanMax != null)
                    message.sizeBytesBiggerThanMax = Boolean(object.sizeBytesBiggerThanMax);
                if (object.sizeBytes != null)
                    if ($util.Long)
                        (message.sizeBytes = $util.Long.fromValue(object.sizeBytes)).unsigned = true;
                    else if (typeof object.sizeBytes === "string")
                        message.sizeBytes = parseInt(object.sizeBytes, 10);
                    else if (typeof object.sizeBytes === "number")
                        message.sizeBytes = object.sizeBytes;
                    else if (typeof object.sizeBytes === "object")
                        message.sizeBytes = new $util.LongBits(object.sizeBytes.low >>> 0, object.sizeBytes.high >>> 0).toNumber(true);
                if (object.createdMs != null)
                    if ($util.Long)
                        (message.createdMs = $util.Long.fromValue(object.createdMs)).unsigned = true;
                    else if (typeof object.createdMs === "string")
                        message.createdMs = parseInt(object.createdMs, 10);
                    else if (typeof object.createdMs === "number")
                        message.createdMs = object.createdMs;
                    else if (typeof object.createdMs === "object")
                        message.createdMs = new $util.LongBits(object.createdMs.low >>> 0, object.createdMs.high >>> 0).toNumber(true);
                if (object.updatedMs != null)
                    if ($util.Long)
                        (message.updatedMs = $util.Long.fromValue(object.updatedMs)).unsigned = true;
                    else if (typeof object.updatedMs === "string")
                        message.updatedMs = parseInt(object.updatedMs, 10);
                    else if (typeof object.updatedMs === "number")
                        message.updatedMs = object.updatedMs;
                    else if (typeof object.updatedMs === "object")
                        message.updatedMs = new $util.LongBits(object.updatedMs.low >>> 0, object.updatedMs.high >>> 0).toNumber(true);
                return message;
            };
    
            /**
             * Creates a plain object from a GetResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof item_cr_0v1.GetResponse
             * @static
             * @param {item_cr_0v1.GetResponse} message GetResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.metavaribles = [];
                if (options.defaults) {
                    object.common = null;
                    object.status = options.enums === String ? "NOT_FOUND" : 0;
                    if (options.bytes === String)
                        object.itemValue = "";
                    else {
                        object.itemValue = [];
                        if (options.bytes !== Array)
                            object.itemValue = $util.newBuffer(object.itemValue);
                    }
                    object.sizeBytesBiggerThanMax = false;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.sizeBytes = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.sizeBytes = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.createdMs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.createdMs = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.updatedMs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.updatedMs = options.longs === String ? "0" : 0;
                }
                if (message.common != null && message.hasOwnProperty("common"))
                    object.common = $root.item_cr_0v1.CommonResponse.toObject(message.common, options);
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = options.enums === String ? $root.item_cr_0v1.GetResponse.Status[message.status] === undefined ? message.status : $root.item_cr_0v1.GetResponse.Status[message.status] : message.status;
                if (message.itemValue != null && message.hasOwnProperty("itemValue"))
                    object.itemValue = options.bytes === String ? $util.base64.encode(message.itemValue, 0, message.itemValue.length) : options.bytes === Array ? Array.prototype.slice.call(message.itemValue) : message.itemValue;
                if (message.metavaribles && message.metavaribles.length) {
                    object.metavaribles = [];
                    for (var j = 0; j < message.metavaribles.length; ++j)
                        object.metavaribles[j] = $root.item_cr_0v1.GetResponse.Metavarible.toObject(message.metavaribles[j], options);
                }
                if (message.sizeBytesBiggerThanMax != null && message.hasOwnProperty("sizeBytesBiggerThanMax"))
                    object.sizeBytesBiggerThanMax = message.sizeBytesBiggerThanMax;
                if (message.sizeBytes != null && message.hasOwnProperty("sizeBytes"))
                    if (typeof message.sizeBytes === "number")
                        object.sizeBytes = options.longs === String ? String(message.sizeBytes) : message.sizeBytes;
                    else
                        object.sizeBytes = options.longs === String ? $util.Long.prototype.toString.call(message.sizeBytes) : options.longs === Number ? new $util.LongBits(message.sizeBytes.low >>> 0, message.sizeBytes.high >>> 0).toNumber(true) : message.sizeBytes;
                if (message.createdMs != null && message.hasOwnProperty("createdMs"))
                    if (typeof message.createdMs === "number")
                        object.createdMs = options.longs === String ? String(message.createdMs) : message.createdMs;
                    else
                        object.createdMs = options.longs === String ? $util.Long.prototype.toString.call(message.createdMs) : options.longs === Number ? new $util.LongBits(message.createdMs.low >>> 0, message.createdMs.high >>> 0).toNumber(true) : message.createdMs;
                if (message.updatedMs != null && message.hasOwnProperty("updatedMs"))
                    if (typeof message.updatedMs === "number")
                        object.updatedMs = options.longs === String ? String(message.updatedMs) : message.updatedMs;
                    else
                        object.updatedMs = options.longs === String ? $util.Long.prototype.toString.call(message.updatedMs) : options.longs === Number ? new $util.LongBits(message.updatedMs.low >>> 0, message.updatedMs.high >>> 0).toNumber(true) : message.updatedMs;
                return object;
            };
    
            /**
             * Converts this GetResponse to JSON.
             * @function toJSON
             * @memberof item_cr_0v1.GetResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for GetResponse
             * @function getTypeUrl
             * @memberof item_cr_0v1.GetResponse
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GetResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/item_cr_0v1.GetResponse";
            };
    
            /**
             * Status enum.
             * @name item_cr_0v1.GetResponse.Status
             * @enum {number}
             * @property {number} NOT_FOUND=0 NOT_FOUND value
             * @property {number} FOUND=1 FOUND value
             */
            GetResponse.Status = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "NOT_FOUND"] = 0;
                values[valuesById[1] = "FOUND"] = 1;
                return values;
            })();
    
            GetResponse.Metavarible = (function() {
    
                /**
                 * Properties of a Metavarible.
                 * @memberof item_cr_0v1.GetResponse
                 * @interface IMetavarible
                 * @property {string|null} [key] Metavarible key
                 * @property {string|null} [value] Metavarible value
                 */
    
                /**
                 * Constructs a new Metavarible.
                 * @memberof item_cr_0v1.GetResponse
                 * @classdesc Represents a Metavarible.
                 * @implements IMetavarible
                 * @constructor
                 * @param {item_cr_0v1.GetResponse.IMetavarible=} [properties] Properties to set
                 */
                function Metavarible(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Metavarible key.
                 * @member {string} key
                 * @memberof item_cr_0v1.GetResponse.Metavarible
                 * @instance
                 */
                Metavarible.prototype.key = "";
    
                /**
                 * Metavarible value.
                 * @member {string} value
                 * @memberof item_cr_0v1.GetResponse.Metavarible
                 * @instance
                 */
                Metavarible.prototype.value = "";
    
                /**
                 * Creates a new Metavarible instance using the specified properties.
                 * @function create
                 * @memberof item_cr_0v1.GetResponse.Metavarible
                 * @static
                 * @param {item_cr_0v1.GetResponse.IMetavarible=} [properties] Properties to set
                 * @returns {item_cr_0v1.GetResponse.Metavarible} Metavarible instance
                 */
                Metavarible.create = function create(properties) {
                    return new Metavarible(properties);
                };
    
                /**
                 * Encodes the specified Metavarible message. Does not implicitly {@link item_cr_0v1.GetResponse.Metavarible.verify|verify} messages.
                 * @function encode
                 * @memberof item_cr_0v1.GetResponse.Metavarible
                 * @static
                 * @param {item_cr_0v1.GetResponse.IMetavarible} message Metavarible message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Metavarible.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
                    if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
                    return writer;
                };
    
                /**
                 * Encodes the specified Metavarible message, length delimited. Does not implicitly {@link item_cr_0v1.GetResponse.Metavarible.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof item_cr_0v1.GetResponse.Metavarible
                 * @static
                 * @param {item_cr_0v1.GetResponse.IMetavarible} message Metavarible message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Metavarible.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Metavarible message from the specified reader or buffer.
                 * @function decode
                 * @memberof item_cr_0v1.GetResponse.Metavarible
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {item_cr_0v1.GetResponse.Metavarible} Metavarible
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Metavarible.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.item_cr_0v1.GetResponse.Metavarible();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.key = reader.string();
                                break;
                            }
                        case 2: {
                                message.value = reader.string();
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
                 * Decodes a Metavarible message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof item_cr_0v1.GetResponse.Metavarible
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {item_cr_0v1.GetResponse.Metavarible} Metavarible
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Metavarible.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Metavarible message.
                 * @function verify
                 * @memberof item_cr_0v1.GetResponse.Metavarible
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Metavarible.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.key != null && message.hasOwnProperty("key"))
                        if (!$util.isString(message.key))
                            return "key: string expected";
                    if (message.value != null && message.hasOwnProperty("value"))
                        if (!$util.isString(message.value))
                            return "value: string expected";
                    return null;
                };
    
                /**
                 * Creates a Metavarible message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof item_cr_0v1.GetResponse.Metavarible
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {item_cr_0v1.GetResponse.Metavarible} Metavarible
                 */
                Metavarible.fromObject = function fromObject(object) {
                    if (object instanceof $root.item_cr_0v1.GetResponse.Metavarible)
                        return object;
                    var message = new $root.item_cr_0v1.GetResponse.Metavarible();
                    if (object.key != null)
                        message.key = String(object.key);
                    if (object.value != null)
                        message.value = String(object.value);
                    return message;
                };
    
                /**
                 * Creates a plain object from a Metavarible message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof item_cr_0v1.GetResponse.Metavarible
                 * @static
                 * @param {item_cr_0v1.GetResponse.Metavarible} message Metavarible
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Metavarible.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.key = "";
                        object.value = "";
                    }
                    if (message.key != null && message.hasOwnProperty("key"))
                        object.key = message.key;
                    if (message.value != null && message.hasOwnProperty("value"))
                        object.value = message.value;
                    return object;
                };
    
                /**
                 * Converts this Metavarible to JSON.
                 * @function toJSON
                 * @memberof item_cr_0v1.GetResponse.Metavarible
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Metavarible.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for Metavarible
                 * @function getTypeUrl
                 * @memberof item_cr_0v1.GetResponse.Metavarible
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Metavarible.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/item_cr_0v1.GetResponse.Metavarible";
                };
    
                return Metavarible;
            })();
    
            return GetResponse;
        })();
    
        item_cr_0v1.SetRequest = (function() {
    
            /**
             * Properties of a SetRequest.
             * @memberof item_cr_0v1
             * @interface ISetRequest
             * @property {item_cr_0v1.ICommonRequest|null} [common] SetRequest common
             * @property {string|null} [resourceId] SetRequest resourceId
             * @property {Uint8Array|null} [itemValue] SetRequest itemValue
             */
    
            /**
             * Constructs a new SetRequest.
             * @memberof item_cr_0v1
             * @classdesc Represents a SetRequest.
             * @implements ISetRequest
             * @constructor
             * @param {item_cr_0v1.ISetRequest=} [properties] Properties to set
             */
            function SetRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * SetRequest common.
             * @member {item_cr_0v1.ICommonRequest|null|undefined} common
             * @memberof item_cr_0v1.SetRequest
             * @instance
             */
            SetRequest.prototype.common = null;
    
            /**
             * SetRequest resourceId.
             * @member {string} resourceId
             * @memberof item_cr_0v1.SetRequest
             * @instance
             */
            SetRequest.prototype.resourceId = "";
    
            /**
             * SetRequest itemValue.
             * @member {Uint8Array} itemValue
             * @memberof item_cr_0v1.SetRequest
             * @instance
             */
            SetRequest.prototype.itemValue = $util.newBuffer([]);
    
            /**
             * Creates a new SetRequest instance using the specified properties.
             * @function create
             * @memberof item_cr_0v1.SetRequest
             * @static
             * @param {item_cr_0v1.ISetRequest=} [properties] Properties to set
             * @returns {item_cr_0v1.SetRequest} SetRequest instance
             */
            SetRequest.create = function create(properties) {
                return new SetRequest(properties);
            };
    
            /**
             * Encodes the specified SetRequest message. Does not implicitly {@link item_cr_0v1.SetRequest.verify|verify} messages.
             * @function encode
             * @memberof item_cr_0v1.SetRequest
             * @static
             * @param {item_cr_0v1.ISetRequest} message SetRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SetRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.common != null && Object.hasOwnProperty.call(message, "common"))
                    $root.item_cr_0v1.CommonRequest.encode(message.common, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.resourceId != null && Object.hasOwnProperty.call(message, "resourceId"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.resourceId);
                if (message.itemValue != null && Object.hasOwnProperty.call(message, "itemValue"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.itemValue);
                return writer;
            };
    
            /**
             * Encodes the specified SetRequest message, length delimited. Does not implicitly {@link item_cr_0v1.SetRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof item_cr_0v1.SetRequest
             * @static
             * @param {item_cr_0v1.ISetRequest} message SetRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SetRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a SetRequest message from the specified reader or buffer.
             * @function decode
             * @memberof item_cr_0v1.SetRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {item_cr_0v1.SetRequest} SetRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SetRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.item_cr_0v1.SetRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.common = $root.item_cr_0v1.CommonRequest.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.resourceId = reader.string();
                            break;
                        }
                    case 3: {
                            message.itemValue = reader.bytes();
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
             * Decodes a SetRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof item_cr_0v1.SetRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {item_cr_0v1.SetRequest} SetRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SetRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a SetRequest message.
             * @function verify
             * @memberof item_cr_0v1.SetRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SetRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.common != null && message.hasOwnProperty("common")) {
                    var error = $root.item_cr_0v1.CommonRequest.verify(message.common);
                    if (error)
                        return "common." + error;
                }
                if (message.resourceId != null && message.hasOwnProperty("resourceId"))
                    if (!$util.isString(message.resourceId))
                        return "resourceId: string expected";
                if (message.itemValue != null && message.hasOwnProperty("itemValue"))
                    if (!(message.itemValue && typeof message.itemValue.length === "number" || $util.isString(message.itemValue)))
                        return "itemValue: buffer expected";
                return null;
            };
    
            /**
             * Creates a SetRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof item_cr_0v1.SetRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {item_cr_0v1.SetRequest} SetRequest
             */
            SetRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.item_cr_0v1.SetRequest)
                    return object;
                var message = new $root.item_cr_0v1.SetRequest();
                if (object.common != null) {
                    if (typeof object.common !== "object")
                        throw TypeError(".item_cr_0v1.SetRequest.common: object expected");
                    message.common = $root.item_cr_0v1.CommonRequest.fromObject(object.common);
                }
                if (object.resourceId != null)
                    message.resourceId = String(object.resourceId);
                if (object.itemValue != null)
                    if (typeof object.itemValue === "string")
                        $util.base64.decode(object.itemValue, message.itemValue = $util.newBuffer($util.base64.length(object.itemValue)), 0);
                    else if (object.itemValue.length >= 0)
                        message.itemValue = object.itemValue;
                return message;
            };
    
            /**
             * Creates a plain object from a SetRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof item_cr_0v1.SetRequest
             * @static
             * @param {item_cr_0v1.SetRequest} message SetRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SetRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.common = null;
                    object.resourceId = "";
                    if (options.bytes === String)
                        object.itemValue = "";
                    else {
                        object.itemValue = [];
                        if (options.bytes !== Array)
                            object.itemValue = $util.newBuffer(object.itemValue);
                    }
                }
                if (message.common != null && message.hasOwnProperty("common"))
                    object.common = $root.item_cr_0v1.CommonRequest.toObject(message.common, options);
                if (message.resourceId != null && message.hasOwnProperty("resourceId"))
                    object.resourceId = message.resourceId;
                if (message.itemValue != null && message.hasOwnProperty("itemValue"))
                    object.itemValue = options.bytes === String ? $util.base64.encode(message.itemValue, 0, message.itemValue.length) : options.bytes === Array ? Array.prototype.slice.call(message.itemValue) : message.itemValue;
                return object;
            };
    
            /**
             * Converts this SetRequest to JSON.
             * @function toJSON
             * @memberof item_cr_0v1.SetRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SetRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for SetRequest
             * @function getTypeUrl
             * @memberof item_cr_0v1.SetRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SetRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/item_cr_0v1.SetRequest";
            };
    
            return SetRequest;
        })();
    
        item_cr_0v1.SetResponse = (function() {
    
            /**
             * Properties of a SetResponse.
             * @memberof item_cr_0v1
             * @interface ISetResponse
             * @property {item_cr_0v1.ICommonResponse|null} [common] SetResponse common
             * @property {item_cr_0v1.SetResponse.Status|null} [status] SetResponse status
             */
    
            /**
             * Constructs a new SetResponse.
             * @memberof item_cr_0v1
             * @classdesc Represents a SetResponse.
             * @implements ISetResponse
             * @constructor
             * @param {item_cr_0v1.ISetResponse=} [properties] Properties to set
             */
            function SetResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * SetResponse common.
             * @member {item_cr_0v1.ICommonResponse|null|undefined} common
             * @memberof item_cr_0v1.SetResponse
             * @instance
             */
            SetResponse.prototype.common = null;
    
            /**
             * SetResponse status.
             * @member {item_cr_0v1.SetResponse.Status} status
             * @memberof item_cr_0v1.SetResponse
             * @instance
             */
            SetResponse.prototype.status = 0;
    
            /**
             * Creates a new SetResponse instance using the specified properties.
             * @function create
             * @memberof item_cr_0v1.SetResponse
             * @static
             * @param {item_cr_0v1.ISetResponse=} [properties] Properties to set
             * @returns {item_cr_0v1.SetResponse} SetResponse instance
             */
            SetResponse.create = function create(properties) {
                return new SetResponse(properties);
            };
    
            /**
             * Encodes the specified SetResponse message. Does not implicitly {@link item_cr_0v1.SetResponse.verify|verify} messages.
             * @function encode
             * @memberof item_cr_0v1.SetResponse
             * @static
             * @param {item_cr_0v1.ISetResponse} message SetResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SetResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.common != null && Object.hasOwnProperty.call(message, "common"))
                    $root.item_cr_0v1.CommonResponse.encode(message.common, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.status);
                return writer;
            };
    
            /**
             * Encodes the specified SetResponse message, length delimited. Does not implicitly {@link item_cr_0v1.SetResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof item_cr_0v1.SetResponse
             * @static
             * @param {item_cr_0v1.ISetResponse} message SetResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SetResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a SetResponse message from the specified reader or buffer.
             * @function decode
             * @memberof item_cr_0v1.SetResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {item_cr_0v1.SetResponse} SetResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SetResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.item_cr_0v1.SetResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.common = $root.item_cr_0v1.CommonResponse.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.status = reader.int32();
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
             * Decodes a SetResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof item_cr_0v1.SetResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {item_cr_0v1.SetResponse} SetResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SetResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a SetResponse message.
             * @function verify
             * @memberof item_cr_0v1.SetResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SetResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.common != null && message.hasOwnProperty("common")) {
                    var error = $root.item_cr_0v1.CommonResponse.verify(message.common);
                    if (error)
                        return "common." + error;
                }
                if (message.status != null && message.hasOwnProperty("status"))
                    switch (message.status) {
                    default:
                        return "status: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                return null;
            };
    
            /**
             * Creates a SetResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof item_cr_0v1.SetResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {item_cr_0v1.SetResponse} SetResponse
             */
            SetResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.item_cr_0v1.SetResponse)
                    return object;
                var message = new $root.item_cr_0v1.SetResponse();
                if (object.common != null) {
                    if (typeof object.common !== "object")
                        throw TypeError(".item_cr_0v1.SetResponse.common: object expected");
                    message.common = $root.item_cr_0v1.CommonResponse.fromObject(object.common);
                }
                switch (object.status) {
                default:
                    if (typeof object.status === "number") {
                        message.status = object.status;
                        break;
                    }
                    break;
                case "NOT_FOUND":
                case 0:
                    message.status = 0;
                    break;
                case "UPDATED":
                case 1:
                    message.status = 1;
                    break;
                case "INVALID_RESOURCE_ID":
                case 2:
                    message.status = 2;
                    break;
                }
                return message;
            };
    
            /**
             * Creates a plain object from a SetResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof item_cr_0v1.SetResponse
             * @static
             * @param {item_cr_0v1.SetResponse} message SetResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SetResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.common = null;
                    object.status = options.enums === String ? "NOT_FOUND" : 0;
                }
                if (message.common != null && message.hasOwnProperty("common"))
                    object.common = $root.item_cr_0v1.CommonResponse.toObject(message.common, options);
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = options.enums === String ? $root.item_cr_0v1.SetResponse.Status[message.status] === undefined ? message.status : $root.item_cr_0v1.SetResponse.Status[message.status] : message.status;
                return object;
            };
    
            /**
             * Converts this SetResponse to JSON.
             * @function toJSON
             * @memberof item_cr_0v1.SetResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SetResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for SetResponse
             * @function getTypeUrl
             * @memberof item_cr_0v1.SetResponse
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SetResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/item_cr_0v1.SetResponse";
            };
    
            /**
             * Status enum.
             * @name item_cr_0v1.SetResponse.Status
             * @enum {number}
             * @property {number} NOT_FOUND=0 NOT_FOUND value
             * @property {number} UPDATED=1 UPDATED value
             * @property {number} INVALID_RESOURCE_ID=2 INVALID_RESOURCE_ID value
             */
            SetResponse.Status = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "NOT_FOUND"] = 0;
                values[valuesById[1] = "UPDATED"] = 1;
                values[valuesById[2] = "INVALID_RESOURCE_ID"] = 2;
                return values;
            })();
    
            return SetResponse;
        })();
    
        item_cr_0v1.UpdateMetavariblesRequest = (function() {
    
            /**
             * Properties of an UpdateMetavariblesRequest.
             * @memberof item_cr_0v1
             * @interface IUpdateMetavariblesRequest
             * @property {item_cr_0v1.ICommonRequest|null} [common] UpdateMetavariblesRequest common
             * @property {string|null} [resourceId] UpdateMetavariblesRequest resourceId
             * @property {Array.<item_cr_0v1.UpdateMetavariblesRequest.IMetavarible>|null} [metavaribles] UpdateMetavariblesRequest metavaribles
             */
    
            /**
             * Constructs a new UpdateMetavariblesRequest.
             * @memberof item_cr_0v1
             * @classdesc Represents an UpdateMetavariblesRequest.
             * @implements IUpdateMetavariblesRequest
             * @constructor
             * @param {item_cr_0v1.IUpdateMetavariblesRequest=} [properties] Properties to set
             */
            function UpdateMetavariblesRequest(properties) {
                this.metavaribles = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * UpdateMetavariblesRequest common.
             * @member {item_cr_0v1.ICommonRequest|null|undefined} common
             * @memberof item_cr_0v1.UpdateMetavariblesRequest
             * @instance
             */
            UpdateMetavariblesRequest.prototype.common = null;
    
            /**
             * UpdateMetavariblesRequest resourceId.
             * @member {string} resourceId
             * @memberof item_cr_0v1.UpdateMetavariblesRequest
             * @instance
             */
            UpdateMetavariblesRequest.prototype.resourceId = "";
    
            /**
             * UpdateMetavariblesRequest metavaribles.
             * @member {Array.<item_cr_0v1.UpdateMetavariblesRequest.IMetavarible>} metavaribles
             * @memberof item_cr_0v1.UpdateMetavariblesRequest
             * @instance
             */
            UpdateMetavariblesRequest.prototype.metavaribles = $util.emptyArray;
    
            /**
             * Creates a new UpdateMetavariblesRequest instance using the specified properties.
             * @function create
             * @memberof item_cr_0v1.UpdateMetavariblesRequest
             * @static
             * @param {item_cr_0v1.IUpdateMetavariblesRequest=} [properties] Properties to set
             * @returns {item_cr_0v1.UpdateMetavariblesRequest} UpdateMetavariblesRequest instance
             */
            UpdateMetavariblesRequest.create = function create(properties) {
                return new UpdateMetavariblesRequest(properties);
            };
    
            /**
             * Encodes the specified UpdateMetavariblesRequest message. Does not implicitly {@link item_cr_0v1.UpdateMetavariblesRequest.verify|verify} messages.
             * @function encode
             * @memberof item_cr_0v1.UpdateMetavariblesRequest
             * @static
             * @param {item_cr_0v1.IUpdateMetavariblesRequest} message UpdateMetavariblesRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateMetavariblesRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.common != null && Object.hasOwnProperty.call(message, "common"))
                    $root.item_cr_0v1.CommonRequest.encode(message.common, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.resourceId != null && Object.hasOwnProperty.call(message, "resourceId"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.resourceId);
                if (message.metavaribles != null && message.metavaribles.length)
                    for (var i = 0; i < message.metavaribles.length; ++i)
                        $root.item_cr_0v1.UpdateMetavariblesRequest.Metavarible.encode(message.metavaribles[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified UpdateMetavariblesRequest message, length delimited. Does not implicitly {@link item_cr_0v1.UpdateMetavariblesRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof item_cr_0v1.UpdateMetavariblesRequest
             * @static
             * @param {item_cr_0v1.IUpdateMetavariblesRequest} message UpdateMetavariblesRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateMetavariblesRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an UpdateMetavariblesRequest message from the specified reader or buffer.
             * @function decode
             * @memberof item_cr_0v1.UpdateMetavariblesRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {item_cr_0v1.UpdateMetavariblesRequest} UpdateMetavariblesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateMetavariblesRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.item_cr_0v1.UpdateMetavariblesRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.common = $root.item_cr_0v1.CommonRequest.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.resourceId = reader.string();
                            break;
                        }
                    case 3: {
                            if (!(message.metavaribles && message.metavaribles.length))
                                message.metavaribles = [];
                            message.metavaribles.push($root.item_cr_0v1.UpdateMetavariblesRequest.Metavarible.decode(reader, reader.uint32()));
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
             * Decodes an UpdateMetavariblesRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof item_cr_0v1.UpdateMetavariblesRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {item_cr_0v1.UpdateMetavariblesRequest} UpdateMetavariblesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateMetavariblesRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an UpdateMetavariblesRequest message.
             * @function verify
             * @memberof item_cr_0v1.UpdateMetavariblesRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UpdateMetavariblesRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.common != null && message.hasOwnProperty("common")) {
                    var error = $root.item_cr_0v1.CommonRequest.verify(message.common);
                    if (error)
                        return "common." + error;
                }
                if (message.resourceId != null && message.hasOwnProperty("resourceId"))
                    if (!$util.isString(message.resourceId))
                        return "resourceId: string expected";
                if (message.metavaribles != null && message.hasOwnProperty("metavaribles")) {
                    if (!Array.isArray(message.metavaribles))
                        return "metavaribles: array expected";
                    for (var i = 0; i < message.metavaribles.length; ++i) {
                        var error = $root.item_cr_0v1.UpdateMetavariblesRequest.Metavarible.verify(message.metavaribles[i]);
                        if (error)
                            return "metavaribles." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates an UpdateMetavariblesRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof item_cr_0v1.UpdateMetavariblesRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {item_cr_0v1.UpdateMetavariblesRequest} UpdateMetavariblesRequest
             */
            UpdateMetavariblesRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.item_cr_0v1.UpdateMetavariblesRequest)
                    return object;
                var message = new $root.item_cr_0v1.UpdateMetavariblesRequest();
                if (object.common != null) {
                    if (typeof object.common !== "object")
                        throw TypeError(".item_cr_0v1.UpdateMetavariblesRequest.common: object expected");
                    message.common = $root.item_cr_0v1.CommonRequest.fromObject(object.common);
                }
                if (object.resourceId != null)
                    message.resourceId = String(object.resourceId);
                if (object.metavaribles) {
                    if (!Array.isArray(object.metavaribles))
                        throw TypeError(".item_cr_0v1.UpdateMetavariblesRequest.metavaribles: array expected");
                    message.metavaribles = [];
                    for (var i = 0; i < object.metavaribles.length; ++i) {
                        if (typeof object.metavaribles[i] !== "object")
                            throw TypeError(".item_cr_0v1.UpdateMetavariblesRequest.metavaribles: object expected");
                        message.metavaribles[i] = $root.item_cr_0v1.UpdateMetavariblesRequest.Metavarible.fromObject(object.metavaribles[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from an UpdateMetavariblesRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof item_cr_0v1.UpdateMetavariblesRequest
             * @static
             * @param {item_cr_0v1.UpdateMetavariblesRequest} message UpdateMetavariblesRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UpdateMetavariblesRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.metavaribles = [];
                if (options.defaults) {
                    object.common = null;
                    object.resourceId = "";
                }
                if (message.common != null && message.hasOwnProperty("common"))
                    object.common = $root.item_cr_0v1.CommonRequest.toObject(message.common, options);
                if (message.resourceId != null && message.hasOwnProperty("resourceId"))
                    object.resourceId = message.resourceId;
                if (message.metavaribles && message.metavaribles.length) {
                    object.metavaribles = [];
                    for (var j = 0; j < message.metavaribles.length; ++j)
                        object.metavaribles[j] = $root.item_cr_0v1.UpdateMetavariblesRequest.Metavarible.toObject(message.metavaribles[j], options);
                }
                return object;
            };
    
            /**
             * Converts this UpdateMetavariblesRequest to JSON.
             * @function toJSON
             * @memberof item_cr_0v1.UpdateMetavariblesRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UpdateMetavariblesRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for UpdateMetavariblesRequest
             * @function getTypeUrl
             * @memberof item_cr_0v1.UpdateMetavariblesRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            UpdateMetavariblesRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/item_cr_0v1.UpdateMetavariblesRequest";
            };
    
            UpdateMetavariblesRequest.Metavarible = (function() {
    
                /**
                 * Properties of a Metavarible.
                 * @memberof item_cr_0v1.UpdateMetavariblesRequest
                 * @interface IMetavarible
                 * @property {string|null} [key] Metavarible key
                 * @property {string|null} [value] Metavarible value
                 * @property {boolean|null} ["delete"] Metavarible delete
                 */
    
                /**
                 * Constructs a new Metavarible.
                 * @memberof item_cr_0v1.UpdateMetavariblesRequest
                 * @classdesc Represents a Metavarible.
                 * @implements IMetavarible
                 * @constructor
                 * @param {item_cr_0v1.UpdateMetavariblesRequest.IMetavarible=} [properties] Properties to set
                 */
                function Metavarible(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Metavarible key.
                 * @member {string} key
                 * @memberof item_cr_0v1.UpdateMetavariblesRequest.Metavarible
                 * @instance
                 */
                Metavarible.prototype.key = "";
    
                /**
                 * Metavarible value.
                 * @member {string} value
                 * @memberof item_cr_0v1.UpdateMetavariblesRequest.Metavarible
                 * @instance
                 */
                Metavarible.prototype.value = "";
    
                /**
                 * Metavarible delete.
                 * @member {boolean} delete
                 * @memberof item_cr_0v1.UpdateMetavariblesRequest.Metavarible
                 * @instance
                 */
                Metavarible.prototype["delete"] = false;
    
                /**
                 * Creates a new Metavarible instance using the specified properties.
                 * @function create
                 * @memberof item_cr_0v1.UpdateMetavariblesRequest.Metavarible
                 * @static
                 * @param {item_cr_0v1.UpdateMetavariblesRequest.IMetavarible=} [properties] Properties to set
                 * @returns {item_cr_0v1.UpdateMetavariblesRequest.Metavarible} Metavarible instance
                 */
                Metavarible.create = function create(properties) {
                    return new Metavarible(properties);
                };
    
                /**
                 * Encodes the specified Metavarible message. Does not implicitly {@link item_cr_0v1.UpdateMetavariblesRequest.Metavarible.verify|verify} messages.
                 * @function encode
                 * @memberof item_cr_0v1.UpdateMetavariblesRequest.Metavarible
                 * @static
                 * @param {item_cr_0v1.UpdateMetavariblesRequest.IMetavarible} message Metavarible message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Metavarible.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
                    if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
                    if (message["delete"] != null && Object.hasOwnProperty.call(message, "delete"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message["delete"]);
                    return writer;
                };
    
                /**
                 * Encodes the specified Metavarible message, length delimited. Does not implicitly {@link item_cr_0v1.UpdateMetavariblesRequest.Metavarible.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof item_cr_0v1.UpdateMetavariblesRequest.Metavarible
                 * @static
                 * @param {item_cr_0v1.UpdateMetavariblesRequest.IMetavarible} message Metavarible message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Metavarible.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Metavarible message from the specified reader or buffer.
                 * @function decode
                 * @memberof item_cr_0v1.UpdateMetavariblesRequest.Metavarible
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {item_cr_0v1.UpdateMetavariblesRequest.Metavarible} Metavarible
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Metavarible.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.item_cr_0v1.UpdateMetavariblesRequest.Metavarible();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.key = reader.string();
                                break;
                            }
                        case 2: {
                                message.value = reader.string();
                                break;
                            }
                        case 3: {
                                message["delete"] = reader.bool();
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
                 * Decodes a Metavarible message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof item_cr_0v1.UpdateMetavariblesRequest.Metavarible
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {item_cr_0v1.UpdateMetavariblesRequest.Metavarible} Metavarible
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Metavarible.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Metavarible message.
                 * @function verify
                 * @memberof item_cr_0v1.UpdateMetavariblesRequest.Metavarible
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Metavarible.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.key != null && message.hasOwnProperty("key"))
                        if (!$util.isString(message.key))
                            return "key: string expected";
                    if (message.value != null && message.hasOwnProperty("value"))
                        if (!$util.isString(message.value))
                            return "value: string expected";
                    if (message["delete"] != null && message.hasOwnProperty("delete"))
                        if (typeof message["delete"] !== "boolean")
                            return "delete: boolean expected";
                    return null;
                };
    
                /**
                 * Creates a Metavarible message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof item_cr_0v1.UpdateMetavariblesRequest.Metavarible
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {item_cr_0v1.UpdateMetavariblesRequest.Metavarible} Metavarible
                 */
                Metavarible.fromObject = function fromObject(object) {
                    if (object instanceof $root.item_cr_0v1.UpdateMetavariblesRequest.Metavarible)
                        return object;
                    var message = new $root.item_cr_0v1.UpdateMetavariblesRequest.Metavarible();
                    if (object.key != null)
                        message.key = String(object.key);
                    if (object.value != null)
                        message.value = String(object.value);
                    if (object["delete"] != null)
                        message["delete"] = Boolean(object["delete"]);
                    return message;
                };
    
                /**
                 * Creates a plain object from a Metavarible message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof item_cr_0v1.UpdateMetavariblesRequest.Metavarible
                 * @static
                 * @param {item_cr_0v1.UpdateMetavariblesRequest.Metavarible} message Metavarible
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Metavarible.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.key = "";
                        object.value = "";
                        object["delete"] = false;
                    }
                    if (message.key != null && message.hasOwnProperty("key"))
                        object.key = message.key;
                    if (message.value != null && message.hasOwnProperty("value"))
                        object.value = message.value;
                    if (message["delete"] != null && message.hasOwnProperty("delete"))
                        object["delete"] = message["delete"];
                    return object;
                };
    
                /**
                 * Converts this Metavarible to JSON.
                 * @function toJSON
                 * @memberof item_cr_0v1.UpdateMetavariblesRequest.Metavarible
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Metavarible.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for Metavarible
                 * @function getTypeUrl
                 * @memberof item_cr_0v1.UpdateMetavariblesRequest.Metavarible
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Metavarible.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/item_cr_0v1.UpdateMetavariblesRequest.Metavarible";
                };
    
                return Metavarible;
            })();
    
            return UpdateMetavariblesRequest;
        })();
    
        item_cr_0v1.UpdateMetavariblesResponse = (function() {
    
            /**
             * Properties of an UpdateMetavariblesResponse.
             * @memberof item_cr_0v1
             * @interface IUpdateMetavariblesResponse
             * @property {item_cr_0v1.ICommonResponse|null} [common] UpdateMetavariblesResponse common
             * @property {item_cr_0v1.UpdateMetavariblesResponse.Status|null} [status] UpdateMetavariblesResponse status
             */
    
            /**
             * Constructs a new UpdateMetavariblesResponse.
             * @memberof item_cr_0v1
             * @classdesc Represents an UpdateMetavariblesResponse.
             * @implements IUpdateMetavariblesResponse
             * @constructor
             * @param {item_cr_0v1.IUpdateMetavariblesResponse=} [properties] Properties to set
             */
            function UpdateMetavariblesResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * UpdateMetavariblesResponse common.
             * @member {item_cr_0v1.ICommonResponse|null|undefined} common
             * @memberof item_cr_0v1.UpdateMetavariblesResponse
             * @instance
             */
            UpdateMetavariblesResponse.prototype.common = null;
    
            /**
             * UpdateMetavariblesResponse status.
             * @member {item_cr_0v1.UpdateMetavariblesResponse.Status} status
             * @memberof item_cr_0v1.UpdateMetavariblesResponse
             * @instance
             */
            UpdateMetavariblesResponse.prototype.status = 0;
    
            /**
             * Creates a new UpdateMetavariblesResponse instance using the specified properties.
             * @function create
             * @memberof item_cr_0v1.UpdateMetavariblesResponse
             * @static
             * @param {item_cr_0v1.IUpdateMetavariblesResponse=} [properties] Properties to set
             * @returns {item_cr_0v1.UpdateMetavariblesResponse} UpdateMetavariblesResponse instance
             */
            UpdateMetavariblesResponse.create = function create(properties) {
                return new UpdateMetavariblesResponse(properties);
            };
    
            /**
             * Encodes the specified UpdateMetavariblesResponse message. Does not implicitly {@link item_cr_0v1.UpdateMetavariblesResponse.verify|verify} messages.
             * @function encode
             * @memberof item_cr_0v1.UpdateMetavariblesResponse
             * @static
             * @param {item_cr_0v1.IUpdateMetavariblesResponse} message UpdateMetavariblesResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateMetavariblesResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.common != null && Object.hasOwnProperty.call(message, "common"))
                    $root.item_cr_0v1.CommonResponse.encode(message.common, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.status);
                return writer;
            };
    
            /**
             * Encodes the specified UpdateMetavariblesResponse message, length delimited. Does not implicitly {@link item_cr_0v1.UpdateMetavariblesResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof item_cr_0v1.UpdateMetavariblesResponse
             * @static
             * @param {item_cr_0v1.IUpdateMetavariblesResponse} message UpdateMetavariblesResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateMetavariblesResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an UpdateMetavariblesResponse message from the specified reader or buffer.
             * @function decode
             * @memberof item_cr_0v1.UpdateMetavariblesResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {item_cr_0v1.UpdateMetavariblesResponse} UpdateMetavariblesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateMetavariblesResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.item_cr_0v1.UpdateMetavariblesResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.common = $root.item_cr_0v1.CommonResponse.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.status = reader.int32();
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
             * Decodes an UpdateMetavariblesResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof item_cr_0v1.UpdateMetavariblesResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {item_cr_0v1.UpdateMetavariblesResponse} UpdateMetavariblesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateMetavariblesResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an UpdateMetavariblesResponse message.
             * @function verify
             * @memberof item_cr_0v1.UpdateMetavariblesResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UpdateMetavariblesResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.common != null && message.hasOwnProperty("common")) {
                    var error = $root.item_cr_0v1.CommonResponse.verify(message.common);
                    if (error)
                        return "common." + error;
                }
                if (message.status != null && message.hasOwnProperty("status"))
                    switch (message.status) {
                    default:
                        return "status: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                return null;
            };
    
            /**
             * Creates an UpdateMetavariblesResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof item_cr_0v1.UpdateMetavariblesResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {item_cr_0v1.UpdateMetavariblesResponse} UpdateMetavariblesResponse
             */
            UpdateMetavariblesResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.item_cr_0v1.UpdateMetavariblesResponse)
                    return object;
                var message = new $root.item_cr_0v1.UpdateMetavariblesResponse();
                if (object.common != null) {
                    if (typeof object.common !== "object")
                        throw TypeError(".item_cr_0v1.UpdateMetavariblesResponse.common: object expected");
                    message.common = $root.item_cr_0v1.CommonResponse.fromObject(object.common);
                }
                switch (object.status) {
                default:
                    if (typeof object.status === "number") {
                        message.status = object.status;
                        break;
                    }
                    break;
                case "NOT_FOUND":
                case 0:
                    message.status = 0;
                    break;
                case "UPDATED":
                case 1:
                    message.status = 1;
                    break;
                case "INVALID_RESOURCE_ID":
                case 2:
                    message.status = 2;
                    break;
                }
                return message;
            };
    
            /**
             * Creates a plain object from an UpdateMetavariblesResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof item_cr_0v1.UpdateMetavariblesResponse
             * @static
             * @param {item_cr_0v1.UpdateMetavariblesResponse} message UpdateMetavariblesResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UpdateMetavariblesResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.common = null;
                    object.status = options.enums === String ? "NOT_FOUND" : 0;
                }
                if (message.common != null && message.hasOwnProperty("common"))
                    object.common = $root.item_cr_0v1.CommonResponse.toObject(message.common, options);
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = options.enums === String ? $root.item_cr_0v1.UpdateMetavariblesResponse.Status[message.status] === undefined ? message.status : $root.item_cr_0v1.UpdateMetavariblesResponse.Status[message.status] : message.status;
                return object;
            };
    
            /**
             * Converts this UpdateMetavariblesResponse to JSON.
             * @function toJSON
             * @memberof item_cr_0v1.UpdateMetavariblesResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UpdateMetavariblesResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for UpdateMetavariblesResponse
             * @function getTypeUrl
             * @memberof item_cr_0v1.UpdateMetavariblesResponse
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            UpdateMetavariblesResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/item_cr_0v1.UpdateMetavariblesResponse";
            };
    
            /**
             * Status enum.
             * @name item_cr_0v1.UpdateMetavariblesResponse.Status
             * @enum {number}
             * @property {number} NOT_FOUND=0 NOT_FOUND value
             * @property {number} UPDATED=1 UPDATED value
             * @property {number} INVALID_RESOURCE_ID=2 INVALID_RESOURCE_ID value
             */
            UpdateMetavariblesResponse.Status = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "NOT_FOUND"] = 0;
                values[valuesById[1] = "UPDATED"] = 1;
                values[valuesById[2] = "INVALID_RESOURCE_ID"] = 2;
                return values;
            })();
    
            return UpdateMetavariblesResponse;
        })();
    
        item_cr_0v1.DeleteRequest = (function() {
    
            /**
             * Properties of a DeleteRequest.
             * @memberof item_cr_0v1
             * @interface IDeleteRequest
             * @property {item_cr_0v1.ICommonRequest|null} [common] DeleteRequest common
             * @property {string|null} [resourceId] DeleteRequest resourceId
             */
    
            /**
             * Constructs a new DeleteRequest.
             * @memberof item_cr_0v1
             * @classdesc Represents a DeleteRequest.
             * @implements IDeleteRequest
             * @constructor
             * @param {item_cr_0v1.IDeleteRequest=} [properties] Properties to set
             */
            function DeleteRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * DeleteRequest common.
             * @member {item_cr_0v1.ICommonRequest|null|undefined} common
             * @memberof item_cr_0v1.DeleteRequest
             * @instance
             */
            DeleteRequest.prototype.common = null;
    
            /**
             * DeleteRequest resourceId.
             * @member {string} resourceId
             * @memberof item_cr_0v1.DeleteRequest
             * @instance
             */
            DeleteRequest.prototype.resourceId = "";
    
            /**
             * Creates a new DeleteRequest instance using the specified properties.
             * @function create
             * @memberof item_cr_0v1.DeleteRequest
             * @static
             * @param {item_cr_0v1.IDeleteRequest=} [properties] Properties to set
             * @returns {item_cr_0v1.DeleteRequest} DeleteRequest instance
             */
            DeleteRequest.create = function create(properties) {
                return new DeleteRequest(properties);
            };
    
            /**
             * Encodes the specified DeleteRequest message. Does not implicitly {@link item_cr_0v1.DeleteRequest.verify|verify} messages.
             * @function encode
             * @memberof item_cr_0v1.DeleteRequest
             * @static
             * @param {item_cr_0v1.IDeleteRequest} message DeleteRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeleteRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.common != null && Object.hasOwnProperty.call(message, "common"))
                    $root.item_cr_0v1.CommonRequest.encode(message.common, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.resourceId != null && Object.hasOwnProperty.call(message, "resourceId"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.resourceId);
                return writer;
            };
    
            /**
             * Encodes the specified DeleteRequest message, length delimited. Does not implicitly {@link item_cr_0v1.DeleteRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof item_cr_0v1.DeleteRequest
             * @static
             * @param {item_cr_0v1.IDeleteRequest} message DeleteRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeleteRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a DeleteRequest message from the specified reader or buffer.
             * @function decode
             * @memberof item_cr_0v1.DeleteRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {item_cr_0v1.DeleteRequest} DeleteRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeleteRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.item_cr_0v1.DeleteRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.common = $root.item_cr_0v1.CommonRequest.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.resourceId = reader.string();
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
             * Decodes a DeleteRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof item_cr_0v1.DeleteRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {item_cr_0v1.DeleteRequest} DeleteRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeleteRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a DeleteRequest message.
             * @function verify
             * @memberof item_cr_0v1.DeleteRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DeleteRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.common != null && message.hasOwnProperty("common")) {
                    var error = $root.item_cr_0v1.CommonRequest.verify(message.common);
                    if (error)
                        return "common." + error;
                }
                if (message.resourceId != null && message.hasOwnProperty("resourceId"))
                    if (!$util.isString(message.resourceId))
                        return "resourceId: string expected";
                return null;
            };
    
            /**
             * Creates a DeleteRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof item_cr_0v1.DeleteRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {item_cr_0v1.DeleteRequest} DeleteRequest
             */
            DeleteRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.item_cr_0v1.DeleteRequest)
                    return object;
                var message = new $root.item_cr_0v1.DeleteRequest();
                if (object.common != null) {
                    if (typeof object.common !== "object")
                        throw TypeError(".item_cr_0v1.DeleteRequest.common: object expected");
                    message.common = $root.item_cr_0v1.CommonRequest.fromObject(object.common);
                }
                if (object.resourceId != null)
                    message.resourceId = String(object.resourceId);
                return message;
            };
    
            /**
             * Creates a plain object from a DeleteRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof item_cr_0v1.DeleteRequest
             * @static
             * @param {item_cr_0v1.DeleteRequest} message DeleteRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DeleteRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.common = null;
                    object.resourceId = "";
                }
                if (message.common != null && message.hasOwnProperty("common"))
                    object.common = $root.item_cr_0v1.CommonRequest.toObject(message.common, options);
                if (message.resourceId != null && message.hasOwnProperty("resourceId"))
                    object.resourceId = message.resourceId;
                return object;
            };
    
            /**
             * Converts this DeleteRequest to JSON.
             * @function toJSON
             * @memberof item_cr_0v1.DeleteRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DeleteRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for DeleteRequest
             * @function getTypeUrl
             * @memberof item_cr_0v1.DeleteRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            DeleteRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/item_cr_0v1.DeleteRequest";
            };
    
            return DeleteRequest;
        })();
    
        item_cr_0v1.DeleteResponse = (function() {
    
            /**
             * Properties of a DeleteResponse.
             * @memberof item_cr_0v1
             * @interface IDeleteResponse
             * @property {item_cr_0v1.ICommonResponse|null} [common] DeleteResponse common
             * @property {item_cr_0v1.DeleteResponse.Status|null} [status] DeleteResponse status
             */
    
            /**
             * Constructs a new DeleteResponse.
             * @memberof item_cr_0v1
             * @classdesc Represents a DeleteResponse.
             * @implements IDeleteResponse
             * @constructor
             * @param {item_cr_0v1.IDeleteResponse=} [properties] Properties to set
             */
            function DeleteResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * DeleteResponse common.
             * @member {item_cr_0v1.ICommonResponse|null|undefined} common
             * @memberof item_cr_0v1.DeleteResponse
             * @instance
             */
            DeleteResponse.prototype.common = null;
    
            /**
             * DeleteResponse status.
             * @member {item_cr_0v1.DeleteResponse.Status} status
             * @memberof item_cr_0v1.DeleteResponse
             * @instance
             */
            DeleteResponse.prototype.status = 0;
    
            /**
             * Creates a new DeleteResponse instance using the specified properties.
             * @function create
             * @memberof item_cr_0v1.DeleteResponse
             * @static
             * @param {item_cr_0v1.IDeleteResponse=} [properties] Properties to set
             * @returns {item_cr_0v1.DeleteResponse} DeleteResponse instance
             */
            DeleteResponse.create = function create(properties) {
                return new DeleteResponse(properties);
            };
    
            /**
             * Encodes the specified DeleteResponse message. Does not implicitly {@link item_cr_0v1.DeleteResponse.verify|verify} messages.
             * @function encode
             * @memberof item_cr_0v1.DeleteResponse
             * @static
             * @param {item_cr_0v1.IDeleteResponse} message DeleteResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeleteResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.common != null && Object.hasOwnProperty.call(message, "common"))
                    $root.item_cr_0v1.CommonResponse.encode(message.common, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.status);
                return writer;
            };
    
            /**
             * Encodes the specified DeleteResponse message, length delimited. Does not implicitly {@link item_cr_0v1.DeleteResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof item_cr_0v1.DeleteResponse
             * @static
             * @param {item_cr_0v1.IDeleteResponse} message DeleteResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeleteResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a DeleteResponse message from the specified reader or buffer.
             * @function decode
             * @memberof item_cr_0v1.DeleteResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {item_cr_0v1.DeleteResponse} DeleteResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeleteResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.item_cr_0v1.DeleteResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.common = $root.item_cr_0v1.CommonResponse.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.status = reader.int32();
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
             * Decodes a DeleteResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof item_cr_0v1.DeleteResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {item_cr_0v1.DeleteResponse} DeleteResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeleteResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a DeleteResponse message.
             * @function verify
             * @memberof item_cr_0v1.DeleteResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DeleteResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.common != null && message.hasOwnProperty("common")) {
                    var error = $root.item_cr_0v1.CommonResponse.verify(message.common);
                    if (error)
                        return "common." + error;
                }
                if (message.status != null && message.hasOwnProperty("status"))
                    switch (message.status) {
                    default:
                        return "status: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                return null;
            };
    
            /**
             * Creates a DeleteResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof item_cr_0v1.DeleteResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {item_cr_0v1.DeleteResponse} DeleteResponse
             */
            DeleteResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.item_cr_0v1.DeleteResponse)
                    return object;
                var message = new $root.item_cr_0v1.DeleteResponse();
                if (object.common != null) {
                    if (typeof object.common !== "object")
                        throw TypeError(".item_cr_0v1.DeleteResponse.common: object expected");
                    message.common = $root.item_cr_0v1.CommonResponse.fromObject(object.common);
                }
                switch (object.status) {
                default:
                    if (typeof object.status === "number") {
                        message.status = object.status;
                        break;
                    }
                    break;
                case "NOT_FOUND":
                case 0:
                    message.status = 0;
                    break;
                case "DELETED":
                case 1:
                    message.status = 1;
                    break;
                case "INVALID_RESOURCE_ID":
                case 2:
                    message.status = 2;
                    break;
                }
                return message;
            };
    
            /**
             * Creates a plain object from a DeleteResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof item_cr_0v1.DeleteResponse
             * @static
             * @param {item_cr_0v1.DeleteResponse} message DeleteResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DeleteResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.common = null;
                    object.status = options.enums === String ? "NOT_FOUND" : 0;
                }
                if (message.common != null && message.hasOwnProperty("common"))
                    object.common = $root.item_cr_0v1.CommonResponse.toObject(message.common, options);
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = options.enums === String ? $root.item_cr_0v1.DeleteResponse.Status[message.status] === undefined ? message.status : $root.item_cr_0v1.DeleteResponse.Status[message.status] : message.status;
                return object;
            };
    
            /**
             * Converts this DeleteResponse to JSON.
             * @function toJSON
             * @memberof item_cr_0v1.DeleteResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DeleteResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for DeleteResponse
             * @function getTypeUrl
             * @memberof item_cr_0v1.DeleteResponse
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            DeleteResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/item_cr_0v1.DeleteResponse";
            };
    
            /**
             * Status enum.
             * @name item_cr_0v1.DeleteResponse.Status
             * @enum {number}
             * @property {number} NOT_FOUND=0 NOT_FOUND value
             * @property {number} DELETED=1 DELETED value
             * @property {number} INVALID_RESOURCE_ID=2 INVALID_RESOURCE_ID value
             */
            DeleteResponse.Status = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "NOT_FOUND"] = 0;
                values[valuesById[1] = "DELETED"] = 1;
                values[valuesById[2] = "INVALID_RESOURCE_ID"] = 2;
                return values;
            })();
    
            return DeleteResponse;
        })();
    
        item_cr_0v1.SubscribeToItemWSRequest = (function() {
    
            /**
             * Properties of a SubscribeToItemWSRequest.
             * @memberof item_cr_0v1
             * @interface ISubscribeToItemWSRequest
             * @property {string|null} [resourceId] SubscribeToItemWSRequest resourceId
             * @property {string|null} [requestId] SubscribeToItemWSRequest requestId
             */
    
            /**
             * Constructs a new SubscribeToItemWSRequest.
             * @memberof item_cr_0v1
             * @classdesc Represents a SubscribeToItemWSRequest.
             * @implements ISubscribeToItemWSRequest
             * @constructor
             * @param {item_cr_0v1.ISubscribeToItemWSRequest=} [properties] Properties to set
             */
            function SubscribeToItemWSRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * SubscribeToItemWSRequest resourceId.
             * @member {string} resourceId
             * @memberof item_cr_0v1.SubscribeToItemWSRequest
             * @instance
             */
            SubscribeToItemWSRequest.prototype.resourceId = "";
    
            /**
             * SubscribeToItemWSRequest requestId.
             * @member {string} requestId
             * @memberof item_cr_0v1.SubscribeToItemWSRequest
             * @instance
             */
            SubscribeToItemWSRequest.prototype.requestId = "";
    
            /**
             * Creates a new SubscribeToItemWSRequest instance using the specified properties.
             * @function create
             * @memberof item_cr_0v1.SubscribeToItemWSRequest
             * @static
             * @param {item_cr_0v1.ISubscribeToItemWSRequest=} [properties] Properties to set
             * @returns {item_cr_0v1.SubscribeToItemWSRequest} SubscribeToItemWSRequest instance
             */
            SubscribeToItemWSRequest.create = function create(properties) {
                return new SubscribeToItemWSRequest(properties);
            };
    
            /**
             * Encodes the specified SubscribeToItemWSRequest message. Does not implicitly {@link item_cr_0v1.SubscribeToItemWSRequest.verify|verify} messages.
             * @function encode
             * @memberof item_cr_0v1.SubscribeToItemWSRequest
             * @static
             * @param {item_cr_0v1.ISubscribeToItemWSRequest} message SubscribeToItemWSRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SubscribeToItemWSRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.resourceId != null && Object.hasOwnProperty.call(message, "resourceId"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.resourceId);
                if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.requestId);
                return writer;
            };
    
            /**
             * Encodes the specified SubscribeToItemWSRequest message, length delimited. Does not implicitly {@link item_cr_0v1.SubscribeToItemWSRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof item_cr_0v1.SubscribeToItemWSRequest
             * @static
             * @param {item_cr_0v1.ISubscribeToItemWSRequest} message SubscribeToItemWSRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SubscribeToItemWSRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a SubscribeToItemWSRequest message from the specified reader or buffer.
             * @function decode
             * @memberof item_cr_0v1.SubscribeToItemWSRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {item_cr_0v1.SubscribeToItemWSRequest} SubscribeToItemWSRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SubscribeToItemWSRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.item_cr_0v1.SubscribeToItemWSRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 3: {
                            message.resourceId = reader.string();
                            break;
                        }
                    case 4: {
                            message.requestId = reader.string();
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
             * Decodes a SubscribeToItemWSRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof item_cr_0v1.SubscribeToItemWSRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {item_cr_0v1.SubscribeToItemWSRequest} SubscribeToItemWSRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SubscribeToItemWSRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a SubscribeToItemWSRequest message.
             * @function verify
             * @memberof item_cr_0v1.SubscribeToItemWSRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SubscribeToItemWSRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.resourceId != null && message.hasOwnProperty("resourceId"))
                    if (!$util.isString(message.resourceId))
                        return "resourceId: string expected";
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    if (!$util.isString(message.requestId))
                        return "requestId: string expected";
                return null;
            };
    
            /**
             * Creates a SubscribeToItemWSRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof item_cr_0v1.SubscribeToItemWSRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {item_cr_0v1.SubscribeToItemWSRequest} SubscribeToItemWSRequest
             */
            SubscribeToItemWSRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.item_cr_0v1.SubscribeToItemWSRequest)
                    return object;
                var message = new $root.item_cr_0v1.SubscribeToItemWSRequest();
                if (object.resourceId != null)
                    message.resourceId = String(object.resourceId);
                if (object.requestId != null)
                    message.requestId = String(object.requestId);
                return message;
            };
    
            /**
             * Creates a plain object from a SubscribeToItemWSRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof item_cr_0v1.SubscribeToItemWSRequest
             * @static
             * @param {item_cr_0v1.SubscribeToItemWSRequest} message SubscribeToItemWSRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SubscribeToItemWSRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.resourceId = "";
                    object.requestId = "";
                }
                if (message.resourceId != null && message.hasOwnProperty("resourceId"))
                    object.resourceId = message.resourceId;
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    object.requestId = message.requestId;
                return object;
            };
    
            /**
             * Converts this SubscribeToItemWSRequest to JSON.
             * @function toJSON
             * @memberof item_cr_0v1.SubscribeToItemWSRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SubscribeToItemWSRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for SubscribeToItemWSRequest
             * @function getTypeUrl
             * @memberof item_cr_0v1.SubscribeToItemWSRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SubscribeToItemWSRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/item_cr_0v1.SubscribeToItemWSRequest";
            };
    
            return SubscribeToItemWSRequest;
        })();
    
        item_cr_0v1.SubscribeToItemWSResponse = (function() {
    
            /**
             * Properties of a SubscribeToItemWSResponse.
             * @memberof item_cr_0v1
             * @interface ISubscribeToItemWSResponse
             * @property {item_cr_0v1.SubscribeToItemWSResponse.Status|null} [status] SubscribeToItemWSResponse status
             * @property {string|null} [requestId] SubscribeToItemWSResponse requestId
             */
    
            /**
             * Constructs a new SubscribeToItemWSResponse.
             * @memberof item_cr_0v1
             * @classdesc Represents a SubscribeToItemWSResponse.
             * @implements ISubscribeToItemWSResponse
             * @constructor
             * @param {item_cr_0v1.ISubscribeToItemWSResponse=} [properties] Properties to set
             */
            function SubscribeToItemWSResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * SubscribeToItemWSResponse status.
             * @member {item_cr_0v1.SubscribeToItemWSResponse.Status} status
             * @memberof item_cr_0v1.SubscribeToItemWSResponse
             * @instance
             */
            SubscribeToItemWSResponse.prototype.status = 0;
    
            /**
             * SubscribeToItemWSResponse requestId.
             * @member {string} requestId
             * @memberof item_cr_0v1.SubscribeToItemWSResponse
             * @instance
             */
            SubscribeToItemWSResponse.prototype.requestId = "";
    
            /**
             * Creates a new SubscribeToItemWSResponse instance using the specified properties.
             * @function create
             * @memberof item_cr_0v1.SubscribeToItemWSResponse
             * @static
             * @param {item_cr_0v1.ISubscribeToItemWSResponse=} [properties] Properties to set
             * @returns {item_cr_0v1.SubscribeToItemWSResponse} SubscribeToItemWSResponse instance
             */
            SubscribeToItemWSResponse.create = function create(properties) {
                return new SubscribeToItemWSResponse(properties);
            };
    
            /**
             * Encodes the specified SubscribeToItemWSResponse message. Does not implicitly {@link item_cr_0v1.SubscribeToItemWSResponse.verify|verify} messages.
             * @function encode
             * @memberof item_cr_0v1.SubscribeToItemWSResponse
             * @static
             * @param {item_cr_0v1.ISubscribeToItemWSResponse} message SubscribeToItemWSResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SubscribeToItemWSResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
                if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.requestId);
                return writer;
            };
    
            /**
             * Encodes the specified SubscribeToItemWSResponse message, length delimited. Does not implicitly {@link item_cr_0v1.SubscribeToItemWSResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof item_cr_0v1.SubscribeToItemWSResponse
             * @static
             * @param {item_cr_0v1.ISubscribeToItemWSResponse} message SubscribeToItemWSResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SubscribeToItemWSResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a SubscribeToItemWSResponse message from the specified reader or buffer.
             * @function decode
             * @memberof item_cr_0v1.SubscribeToItemWSResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {item_cr_0v1.SubscribeToItemWSResponse} SubscribeToItemWSResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SubscribeToItemWSResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.item_cr_0v1.SubscribeToItemWSResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.status = reader.int32();
                            break;
                        }
                    case 4: {
                            message.requestId = reader.string();
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
             * Decodes a SubscribeToItemWSResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof item_cr_0v1.SubscribeToItemWSResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {item_cr_0v1.SubscribeToItemWSResponse} SubscribeToItemWSResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SubscribeToItemWSResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a SubscribeToItemWSResponse message.
             * @function verify
             * @memberof item_cr_0v1.SubscribeToItemWSResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SubscribeToItemWSResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.status != null && message.hasOwnProperty("status"))
                    switch (message.status) {
                    default:
                        return "status: enum value expected";
                    case 0:
                    case 1:
                        break;
                    }
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    if (!$util.isString(message.requestId))
                        return "requestId: string expected";
                return null;
            };
    
            /**
             * Creates a SubscribeToItemWSResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof item_cr_0v1.SubscribeToItemWSResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {item_cr_0v1.SubscribeToItemWSResponse} SubscribeToItemWSResponse
             */
            SubscribeToItemWSResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.item_cr_0v1.SubscribeToItemWSResponse)
                    return object;
                var message = new $root.item_cr_0v1.SubscribeToItemWSResponse();
                switch (object.status) {
                default:
                    if (typeof object.status === "number") {
                        message.status = object.status;
                        break;
                    }
                    break;
                case "NOT_FOUND":
                case 0:
                    message.status = 0;
                    break;
                case "SUBSCRIBED":
                case 1:
                    message.status = 1;
                    break;
                }
                if (object.requestId != null)
                    message.requestId = String(object.requestId);
                return message;
            };
    
            /**
             * Creates a plain object from a SubscribeToItemWSResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof item_cr_0v1.SubscribeToItemWSResponse
             * @static
             * @param {item_cr_0v1.SubscribeToItemWSResponse} message SubscribeToItemWSResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SubscribeToItemWSResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.status = options.enums === String ? "NOT_FOUND" : 0;
                    object.requestId = "";
                }
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = options.enums === String ? $root.item_cr_0v1.SubscribeToItemWSResponse.Status[message.status] === undefined ? message.status : $root.item_cr_0v1.SubscribeToItemWSResponse.Status[message.status] : message.status;
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    object.requestId = message.requestId;
                return object;
            };
    
            /**
             * Converts this SubscribeToItemWSResponse to JSON.
             * @function toJSON
             * @memberof item_cr_0v1.SubscribeToItemWSResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SubscribeToItemWSResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for SubscribeToItemWSResponse
             * @function getTypeUrl
             * @memberof item_cr_0v1.SubscribeToItemWSResponse
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SubscribeToItemWSResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/item_cr_0v1.SubscribeToItemWSResponse";
            };
    
            /**
             * Status enum.
             * @name item_cr_0v1.SubscribeToItemWSResponse.Status
             * @enum {number}
             * @property {number} NOT_FOUND=0 NOT_FOUND value
             * @property {number} SUBSCRIBED=1 SUBSCRIBED value
             */
            SubscribeToItemWSResponse.Status = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "NOT_FOUND"] = 0;
                values[valuesById[1] = "SUBSCRIBED"] = 1;
                return values;
            })();
    
            return SubscribeToItemWSResponse;
        })();
    
        item_cr_0v1.ItemEventWSPush = (function() {
    
            /**
             * Properties of an ItemEventWSPush.
             * @memberof item_cr_0v1
             * @interface IItemEventWSPush
             * @property {string|null} [resourceId] ItemEventWSPush resourceId
             */
    
            /**
             * Constructs a new ItemEventWSPush.
             * @memberof item_cr_0v1
             * @classdesc Represents an ItemEventWSPush.
             * @implements IItemEventWSPush
             * @constructor
             * @param {item_cr_0v1.IItemEventWSPush=} [properties] Properties to set
             */
            function ItemEventWSPush(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ItemEventWSPush resourceId.
             * @member {string} resourceId
             * @memberof item_cr_0v1.ItemEventWSPush
             * @instance
             */
            ItemEventWSPush.prototype.resourceId = "";
    
            /**
             * Creates a new ItemEventWSPush instance using the specified properties.
             * @function create
             * @memberof item_cr_0v1.ItemEventWSPush
             * @static
             * @param {item_cr_0v1.IItemEventWSPush=} [properties] Properties to set
             * @returns {item_cr_0v1.ItemEventWSPush} ItemEventWSPush instance
             */
            ItemEventWSPush.create = function create(properties) {
                return new ItemEventWSPush(properties);
            };
    
            /**
             * Encodes the specified ItemEventWSPush message. Does not implicitly {@link item_cr_0v1.ItemEventWSPush.verify|verify} messages.
             * @function encode
             * @memberof item_cr_0v1.ItemEventWSPush
             * @static
             * @param {item_cr_0v1.IItemEventWSPush} message ItemEventWSPush message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ItemEventWSPush.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.resourceId != null && Object.hasOwnProperty.call(message, "resourceId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.resourceId);
                return writer;
            };
    
            /**
             * Encodes the specified ItemEventWSPush message, length delimited. Does not implicitly {@link item_cr_0v1.ItemEventWSPush.verify|verify} messages.
             * @function encodeDelimited
             * @memberof item_cr_0v1.ItemEventWSPush
             * @static
             * @param {item_cr_0v1.IItemEventWSPush} message ItemEventWSPush message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ItemEventWSPush.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an ItemEventWSPush message from the specified reader or buffer.
             * @function decode
             * @memberof item_cr_0v1.ItemEventWSPush
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {item_cr_0v1.ItemEventWSPush} ItemEventWSPush
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ItemEventWSPush.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.item_cr_0v1.ItemEventWSPush();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.resourceId = reader.string();
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
             * Decodes an ItemEventWSPush message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof item_cr_0v1.ItemEventWSPush
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {item_cr_0v1.ItemEventWSPush} ItemEventWSPush
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ItemEventWSPush.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an ItemEventWSPush message.
             * @function verify
             * @memberof item_cr_0v1.ItemEventWSPush
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ItemEventWSPush.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.resourceId != null && message.hasOwnProperty("resourceId"))
                    if (!$util.isString(message.resourceId))
                        return "resourceId: string expected";
                return null;
            };
    
            /**
             * Creates an ItemEventWSPush message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof item_cr_0v1.ItemEventWSPush
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {item_cr_0v1.ItemEventWSPush} ItemEventWSPush
             */
            ItemEventWSPush.fromObject = function fromObject(object) {
                if (object instanceof $root.item_cr_0v1.ItemEventWSPush)
                    return object;
                var message = new $root.item_cr_0v1.ItemEventWSPush();
                if (object.resourceId != null)
                    message.resourceId = String(object.resourceId);
                return message;
            };
    
            /**
             * Creates a plain object from an ItemEventWSPush message. Also converts values to other types if specified.
             * @function toObject
             * @memberof item_cr_0v1.ItemEventWSPush
             * @static
             * @param {item_cr_0v1.ItemEventWSPush} message ItemEventWSPush
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ItemEventWSPush.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.resourceId = "";
                if (message.resourceId != null && message.hasOwnProperty("resourceId"))
                    object.resourceId = message.resourceId;
                return object;
            };
    
            /**
             * Converts this ItemEventWSPush to JSON.
             * @function toJSON
             * @memberof item_cr_0v1.ItemEventWSPush
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ItemEventWSPush.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            /**
             * Gets the default type url for ItemEventWSPush
             * @function getTypeUrl
             * @memberof item_cr_0v1.ItemEventWSPush
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ItemEventWSPush.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/item_cr_0v1.ItemEventWSPush";
            };
    
            /**
             * EventType enum.
             * @name item_cr_0v1.ItemEventWSPush.EventType
             * @enum {number}
             * @property {number} CREATED=0 CREATED value
             * @property {number} UPDATED=1 UPDATED value
             * @property {number} DELETED=2 DELETED value
             */
            ItemEventWSPush.EventType = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "CREATED"] = 0;
                values[valuesById[1] = "UPDATED"] = 1;
                values[valuesById[2] = "DELETED"] = 2;
                return values;
            })();
    
            return ItemEventWSPush;
        })();
    
        return item_cr_0v1;
    })();

    return $root;
});
