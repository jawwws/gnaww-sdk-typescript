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
exports.PublicSharedContextFactProvenanceEnum = exports.PublicSharedContextFactPostureEnum = void 0;
exports.instanceOfPublicSharedContextFact = instanceOfPublicSharedContextFact;
exports.PublicSharedContextFactFromJSON = PublicSharedContextFactFromJSON;
exports.PublicSharedContextFactFromJSONTyped = PublicSharedContextFactFromJSONTyped;
exports.PublicSharedContextFactToJSON = PublicSharedContextFactToJSON;
exports.PublicSharedContextFactToJSONTyped = PublicSharedContextFactToJSONTyped;
const Value_1 = require("./Value");
const PublicInterpretationScope_1 = require("./PublicInterpretationScope");
/**
 * @export
 */
exports.PublicSharedContextFactPostureEnum = {
    Exact: 'exact',
    Preference: 'preference',
    Tolerance: 'tolerance',
    Ambiguous: 'ambiguous'
};
/**
 * @export
 */
exports.PublicSharedContextFactProvenanceEnum = {
    Supplied: 'supplied',
    Derived: 'derived',
    Confirmed: 'confirmed',
    Controlled: 'controlled'
};
/**
 * Check if a given object implements the PublicSharedContextFact interface.
 */
function instanceOfPublicSharedContextFact(value) {
    if (!('contextId' in value) || value['contextId'] === undefined)
        return false;
    if (!('key' in value) || value['key'] === undefined)
        return false;
    if (!('provenance' in value) || value['provenance'] === undefined)
        return false;
    return true;
}
function PublicSharedContextFactFromJSON(json) {
    return PublicSharedContextFactFromJSONTyped(json, false);
}
function PublicSharedContextFactFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'contextId': json['context_id'],
        'key': json['key'],
        'posture': json['posture'] == null ? undefined : json['posture'],
        'provenance': json['provenance'],
        'requiresConfirmation': json['requires_confirmation'] == null ? undefined : json['requires_confirmation'],
        'scope': json['scope'] == null ? undefined : (0, PublicInterpretationScope_1.PublicInterpretationScopeFromJSON)(json['scope']),
        'sourceExpression': json['source_expression'] == null ? undefined : json['source_expression'],
        'value': json['value'] == null ? undefined : (0, Value_1.ValueFromJSON)(json['value']),
    };
}
function PublicSharedContextFactToJSON(json) {
    return PublicSharedContextFactToJSONTyped(json, false);
}
function PublicSharedContextFactToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'context_id': value['contextId'],
        'key': value['key'],
        'posture': value['posture'],
        'provenance': value['provenance'],
        'requires_confirmation': value['requiresConfirmation'],
        'scope': (0, PublicInterpretationScope_1.PublicInterpretationScopeToJSON)(value['scope']),
        'source_expression': value['sourceExpression'],
        'value': (0, Value_1.ValueToJSON)(value['value']),
    };
}
