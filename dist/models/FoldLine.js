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
exports.FoldLineDirectionEnum = exports.FoldLineAxisEnum = void 0;
exports.instanceOfFoldLine = instanceOfFoldLine;
exports.FoldLineFromJSON = FoldLineFromJSON;
exports.FoldLineFromJSONTyped = FoldLineFromJSONTyped;
exports.FoldLineToJSON = FoldLineToJSON;
exports.FoldLineToJSONTyped = FoldLineToJSONTyped;
const Line2D_1 = require("./Line2D");
/**
 * @export
 */
exports.FoldLineAxisEnum = {
    Vertical: 'vertical',
    Horizontal: 'horizontal',
    Custom: 'custom'
};
/**
 * @export
 */
exports.FoldLineDirectionEnum = {
    Valley: 'valley',
    Mountain: 'mountain',
    Unknown: 'unknown'
};
/**
 * Check if a given object implements the FoldLine interface.
 */
function instanceOfFoldLine(value) {
    if (!('line' in value) || value['line'] === undefined)
        return false;
    if (!('sequence' in value) || value['sequence'] === undefined)
        return false;
    return true;
}
function FoldLineFromJSON(json) {
    return FoldLineFromJSONTyped(json, false);
}
function FoldLineFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'axis': json['axis'] == null ? undefined : json['axis'],
        'direction': json['direction'] == null ? undefined : json['direction'],
        'line': (0, Line2D_1.Line2DFromJSON)(json['line']),
        'sequence': json['sequence'],
    };
}
function FoldLineToJSON(json) {
    return FoldLineToJSONTyped(json, false);
}
function FoldLineToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'axis': value['axis'],
        'direction': value['direction'],
        'line': (0, Line2D_1.Line2DToJSON)(value['line']),
        'sequence': value['sequence'],
    };
}
