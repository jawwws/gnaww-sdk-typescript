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
exports.InterpretationResultV02StatusEnum = exports.InterpretationResultV02SchemaVersionEnum = exports.InterpretationResultV02SchemaNameEnum = exports.InterpretationResultV02RequestedGjsVersionEnum = void 0;
exports.instanceOfInterpretationResultV02 = instanceOfInterpretationResultV02;
exports.InterpretationResultV02FromJSON = InterpretationResultV02FromJSON;
exports.InterpretationResultV02FromJSONTyped = InterpretationResultV02FromJSONTyped;
exports.InterpretationResultV02ToJSON = InterpretationResultV02ToJSON;
exports.InterpretationResultV02ToJSONTyped = InterpretationResultV02ToJSONTyped;
const PublicInterpretationQuestion_1 = require("./PublicInterpretationQuestion");
const PublicInterpretationIntent_1 = require("./PublicInterpretationIntent");
const PublicCapabilityQuestion_1 = require("./PublicCapabilityQuestion");
const PublicInterpretationJob_1 = require("./PublicInterpretationJob");
const IssueSet_1 = require("./IssueSet");
const PublicInterpretationTruthState_1 = require("./PublicInterpretationTruthState");
const ProductPackResponse_1 = require("./ProductPackResponse");
const SourceInput_1 = require("./SourceInput");
const PublicSharedContextFact_1 = require("./PublicSharedContextFact");
const PublicControlledInterpretationState_1 = require("./PublicControlledInterpretationState");
/**
 * @export
 */
exports.InterpretationResultV02RequestedGjsVersionEnum = {
    _03: '0.3',
    _04: '0.4'
};
/**
 * @export
 */
exports.InterpretationResultV02SchemaNameEnum = {
    GnawwInterpretationResult: 'gnaww.interpretation_result'
};
/**
 * @export
 */
exports.InterpretationResultV02SchemaVersionEnum = {
    _02: '0.2'
};
/**
 * @export
 */
exports.InterpretationResultV02StatusEnum = {
    CanonicalReady: 'canonical_ready',
    ReviewRequired: 'review_required',
    NeedsReview: 'needs_review',
    Failed: 'failed'
};
/**
 * Check if a given object implements the InterpretationResultV02 interface.
 */
function instanceOfInterpretationResultV02(value) {
    if (!('controlledInterpretation' in value) || value['controlledInterpretation'] === undefined)
        return false;
    if (!('intent' in value) || value['intent'] === undefined)
        return false;
    if (!('requestedGjsVersion' in value) || value['requestedGjsVersion'] === undefined)
        return false;
    if (!('source' in value) || value['source'] === undefined)
        return false;
    if (!('status' in value) || value['status'] === undefined)
        return false;
    return true;
}
function InterpretationResultV02FromJSON(json) {
    return InterpretationResultV02FromJSONTyped(json, false);
}
function InterpretationResultV02FromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'capabilityQuestions': json['capability_questions'] == null ? undefined : (json['capability_questions'].map(PublicCapabilityQuestion_1.PublicCapabilityQuestionFromJSON)),
        'controlledInterpretation': (0, PublicControlledInterpretationState_1.PublicControlledInterpretationStateFromJSON)(json['controlled_interpretation']),
        'intent': (0, PublicInterpretationIntent_1.PublicInterpretationIntentFromJSON)(json['intent']),
        'issues': json['issues'] == null ? undefined : (0, IssueSet_1.IssueSetFromJSON)(json['issues']),
        'jobs': json['jobs'] == null ? undefined : (json['jobs'].map(PublicInterpretationJob_1.PublicInterpretationJobFromJSON)),
        'nextActions': json['next_actions'] == null ? undefined : json['next_actions'],
        'questions': json['questions'] == null ? undefined : (json['questions'].map(PublicInterpretationQuestion_1.PublicInterpretationQuestionFromJSON)),
        'recommendations': json['recommendations'] == null ? undefined : (json['recommendations'].map(ProductPackResponse_1.ProductPackResponseFromJSON)),
        'requestedGjsVersion': json['requested_gjs_version'],
        'schemaName': json['schema_name'] == null ? undefined : json['schema_name'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
        'sharedContext': json['shared_context'] == null ? undefined : (json['shared_context'].map(PublicSharedContextFact_1.PublicSharedContextFactFromJSON)),
        'source': (0, SourceInput_1.SourceInputFromJSON)(json['source']),
        'status': json['status'],
        'truth': json['truth'] == null ? undefined : (0, PublicInterpretationTruthState_1.PublicInterpretationTruthStateFromJSON)(json['truth']),
    };
}
function InterpretationResultV02ToJSON(json) {
    return InterpretationResultV02ToJSONTyped(json, false);
}
function InterpretationResultV02ToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'capability_questions': value['capabilityQuestions'] == null ? undefined : (value['capabilityQuestions'].map(PublicCapabilityQuestion_1.PublicCapabilityQuestionToJSON)),
        'controlled_interpretation': (0, PublicControlledInterpretationState_1.PublicControlledInterpretationStateToJSON)(value['controlledInterpretation']),
        'intent': (0, PublicInterpretationIntent_1.PublicInterpretationIntentToJSON)(value['intent']),
        'issues': (0, IssueSet_1.IssueSetToJSON)(value['issues']),
        'jobs': value['jobs'] == null ? undefined : (value['jobs'].map(PublicInterpretationJob_1.PublicInterpretationJobToJSON)),
        'next_actions': value['nextActions'],
        'questions': value['questions'] == null ? undefined : (value['questions'].map(PublicInterpretationQuestion_1.PublicInterpretationQuestionToJSON)),
        'recommendations': value['recommendations'] == null ? undefined : (value['recommendations'].map(ProductPackResponse_1.ProductPackResponseToJSON)),
        'requested_gjs_version': value['requestedGjsVersion'],
        'schema_name': value['schemaName'],
        'schema_version': value['schemaVersion'],
        'shared_context': value['sharedContext'] == null ? undefined : (value['sharedContext'].map(PublicSharedContextFact_1.PublicSharedContextFactToJSON)),
        'source': (0, SourceInput_1.SourceInputToJSON)(value['source']),
        'status': value['status'],
        'truth': (0, PublicInterpretationTruthState_1.PublicInterpretationTruthStateToJSON)(value['truth']),
    };
}
