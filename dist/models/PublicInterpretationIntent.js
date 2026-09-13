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
exports.PublicInterpretationIntentKindEnum = void 0;
exports.instanceOfPublicInterpretationIntent = instanceOfPublicInterpretationIntent;
exports.PublicInterpretationIntentFromJSON = PublicInterpretationIntentFromJSON;
exports.PublicInterpretationIntentFromJSONTyped = PublicInterpretationIntentFromJSONTyped;
exports.PublicInterpretationIntentToJSON = PublicInterpretationIntentToJSON;
exports.PublicInterpretationIntentToJSONTyped = PublicInterpretationIntentToJSONTyped;
/**
 * @export
 */
exports.PublicInterpretationIntentKindEnum = {
    SingleJob: 'single_job',
    OrderLike: 'order_like',
    CapabilityQuestion: 'capability_question',
    OutcomeLed: 'outcome_led',
    Mixed: 'mixed',
    NeedsReview: 'needs_review'
};
/**
 * Check if a given object implements the PublicInterpretationIntent interface.
 */
function instanceOfPublicInterpretationIntent(value) {
    if (!('confidence' in value) || value['confidence'] === undefined)
        return false;
    if (!('kind' in value) || value['kind'] === undefined)
        return false;
    return true;
}
function PublicInterpretationIntentFromJSON(json) {
    return PublicInterpretationIntentFromJSONTyped(json, false);
}
function PublicInterpretationIntentFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'confidence': json['confidence'],
        'kind': json['kind'],
    };
}
function PublicInterpretationIntentToJSON(json) {
    return PublicInterpretationIntentToJSONTyped(json, false);
}
function PublicInterpretationIntentToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'confidence': value['confidence'],
        'kind': value['kind'],
    };
}
