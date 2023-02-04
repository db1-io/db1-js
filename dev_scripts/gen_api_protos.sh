#!/bin/bash

# Run from repo root. 
# Assumes serializer-interface repo in parent folder
# Assumes protobufjs installed 
# Assumes protobufjs-cli installed 

SRC="../db1-app/proto-defs/item-cr-0v1.proto"
DST_JS="src/proto_stubs/api/item_cr_0v1_pb.js"
DST_TS="src/proto_stubs/api/item_cr_0v1_pb.d.ts"

./node_modules/protobufjs-cli/bin/pbjs --force-number -t static-module -w default -o ${DST_JS} ${SRC}
./node_modules/protobufjs-cli/bin/pbts -o ${DST_TS} ${DST_JS}
