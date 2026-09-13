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
exports.PublicJobContextFactProvenanceEnum = exports.PublicJobContextFactPostureEnum = void 0;
exports.instanceOfPublicJobContextFact = instanceOfPublicJobContextFact;
exports.PublicJobContextFactFromJSON = PublicJobContextFactFromJSON;
exports.PublicJobContextFactFromJSONTyped = PublicJobContextFactFromJSONTyped;
exports.PublicJobContextFactToJSON = PublicJobContextFactToJSON;
exports.PublicJobContextFactToJSONTyped = PublicJobContextFactToJSONTyped;
const Value_1 = require("./Value");
/**
 * @export
 */
exports.PublicJobContextFactPostureEnum = {
    Exact: 'exact',
    Preference: 'preference',
    Tolerance: 'tolerance',
    Ambiguous: 'ambiguous'
};
/**
 * @export
 */
exports.PublicJobContextFactProvenanceEnum = {
    Supplied: 'supplied',
    Derived: 'derived',
    Confirmed: 'confirmed',
    Controlled: 'controlled'
};
/**
 * Check if a given object implements the PublicJobContextFact interface.
 */
function instanceOfPublicJobContextFact(value) {
    if (!('factId' in value) || value['factId'] === undefined)
        return false;
    if (!('key' in value) || value['key'] === undefined)
        return false;
    if (!('provenance' in value) || value['provenance'] === undefined)
        return false;
    return true;
}
function PublicJobContextFactFromJSON(json) {
    return PublicJobContextFactFromJSONTyped(json, false);
}
function PublicJobContextFactFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'factId': json['fact_id'],
        'key': json['key'],
        'posture': json['posture'] == null ? undefined : json['posture'],
        'provenance': json['provenance'],
        'requiresConfirmation': json['requires_confirmation'] == null ? undefined : json['requires_confirmation'],
        'sourceExpression': json['source_expression'] == null ? undefined : json['source_expression'],
        'value': json['value'] == null ? undefined : (0, Value_1.ValueFromJSON)(json['value']),
    };
}
function PublicJobContextFactToJSON(json) {
    return PublicJobContextFactToJSONTyped(json, false);
}
function PublicJobContextFactToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'fact_id': value['factId'],
        'key': value['key'],
        'posture': value['posture'],
        'provenance': value['provenance'],
        'requires_confirmation': value['requiresConfirmation'],
        'source_expression': value['sourceExpression'],
        'value': (0, Value_1.ValueToJSON)(value['value']),
    };
}
