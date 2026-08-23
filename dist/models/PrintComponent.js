"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrintComponentRoleEnum = void 0;
exports.instanceOfPrintComponent = instanceOfPrintComponent;
exports.PrintComponentFromJSON = PrintComponentFromJSON;
exports.PrintComponentFromJSONTyped = PrintComponentFromJSONTyped;
exports.PrintComponentToJSON = PrintComponentToJSON;
exports.PrintComponentToJSONTyped = PrintComponentToJSONTyped;
const Substrate_1 = require("./Substrate");
const FinishedSize_1 = require("./FinishedSize");
const Finishing_1 = require("./Finishing");
const PrintSpec_1 = require("./PrintSpec");
/**
 * @export
 */
exports.PrintComponentRoleEnum = {
    Main: 'main',
    Flat: 'flat',
    Finished: 'finished',
    Cover: 'cover',
    Text: 'text',
    Insert: 'insert',
    Garment: 'garment',
    Decoration: 'decoration',
    Unknown: 'unknown'
};
/**
 * Check if a given object implements the PrintComponent interface.
 */
function instanceOfPrintComponent(value) {
    return true;
}
function PrintComponentFromJSON(json) {
    return PrintComponentFromJSONTyped(json, false);
}
function PrintComponentFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'componentId': json['component_id'] == null ? undefined : json['component_id'],
        'finishings': json['finishings'] == null ? undefined : (json['finishings'].map(Finishing_1.FinishingFromJSON)),
        'printSpec': json['print_spec'] == null ? undefined : (0, PrintSpec_1.PrintSpecFromJSON)(json['print_spec']),
        'role': json['role'] == null ? undefined : json['role'],
        'size': json['size'] == null ? undefined : (0, FinishedSize_1.FinishedSizeFromJSON)(json['size']),
        'substrate': json['substrate'] == null ? undefined : (0, Substrate_1.SubstrateFromJSON)(json['substrate']),
    };
}
function PrintComponentToJSON(json) {
    return PrintComponentToJSONTyped(json, false);
}
function PrintComponentToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'component_id': value['componentId'],
        'finishings': value['finishings'] == null ? undefined : (value['finishings'].map(Finishing_1.FinishingToJSON)),
        'print_spec': (0, PrintSpec_1.PrintSpecToJSON)(value['printSpec']),
        'role': value['role'],
        'size': (0, FinishedSize_1.FinishedSizeToJSON)(value['size']),
        'substrate': (0, Substrate_1.SubstrateToJSON)(value['substrate']),
    };
}
