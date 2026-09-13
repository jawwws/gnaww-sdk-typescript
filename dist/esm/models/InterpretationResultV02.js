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
import { PublicInterpretationQuestionFromJSON, PublicInterpretationQuestionToJSON, } from './PublicInterpretationQuestion';
import { PublicInterpretationIntentFromJSON, PublicInterpretationIntentToJSON, } from './PublicInterpretationIntent';
import { PublicCapabilityQuestionFromJSON, PublicCapabilityQuestionToJSON, } from './PublicCapabilityQuestion';
import { PublicInterpretationJobFromJSON, PublicInterpretationJobToJSON, } from './PublicInterpretationJob';
import { IssueSetFromJSON, IssueSetToJSON, } from './IssueSet';
import { PublicInterpretationTruthStateFromJSON, PublicInterpretationTruthStateToJSON, } from './PublicInterpretationTruthState';
import { ProductPackResponseFromJSON, ProductPackResponseToJSON, } from './ProductPackResponse';
import { SourceInputFromJSON, SourceInputToJSON, } from './SourceInput';
import { PublicSharedContextFactFromJSON, PublicSharedContextFactToJSON, } from './PublicSharedContextFact';
import { PublicControlledInterpretationStateFromJSON, PublicControlledInterpretationStateToJSON, } from './PublicControlledInterpretationState';
/**
 * @export
 */
export const InterpretationResultV02RequestedGjsVersionEnum = {
    _03: '0.3',
    _04: '0.4'
};
/**
 * @export
 */
export const InterpretationResultV02SchemaNameEnum = {
    GnawwInterpretationResult: 'gnaww.interpretation_result'
};
/**
 * @export
 */
export const InterpretationResultV02SchemaVersionEnum = {
    _02: '0.2'
};
/**
 * @export
 */
export const InterpretationResultV02StatusEnum = {
    CanonicalReady: 'canonical_ready',
    ReviewRequired: 'review_required',
    NeedsReview: 'needs_review',
    Failed: 'failed'
};
/**
 * Check if a given object implements the InterpretationResultV02 interface.
 */
export function instanceOfInterpretationResultV02(value) {
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
export function InterpretationResultV02FromJSON(json) {
    return InterpretationResultV02FromJSONTyped(json, false);
}
export function InterpretationResultV02FromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'capabilityQuestions': json['capability_questions'] == null ? undefined : (json['capability_questions'].map(PublicCapabilityQuestionFromJSON)),
        'controlledInterpretation': PublicControlledInterpretationStateFromJSON(json['controlled_interpretation']),
        'intent': PublicInterpretationIntentFromJSON(json['intent']),
        'issues': json['issues'] == null ? undefined : IssueSetFromJSON(json['issues']),
        'jobs': json['jobs'] == null ? undefined : (json['jobs'].map(PublicInterpretationJobFromJSON)),
        'nextActions': json['next_actions'] == null ? undefined : json['next_actions'],
        'questions': json['questions'] == null ? undefined : (json['questions'].map(PublicInterpretationQuestionFromJSON)),
        'recommendations': json['recommendations'] == null ? undefined : (json['recommendations'].map(ProductPackResponseFromJSON)),
        'requestedGjsVersion': json['requested_gjs_version'],
        'schemaName': json['schema_name'] == null ? undefined : json['schema_name'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
        'sharedContext': json['shared_context'] == null ? undefined : (json['shared_context'].map(PublicSharedContextFactFromJSON)),
        'source': SourceInputFromJSON(json['source']),
        'status': json['status'],
        'truth': json['truth'] == null ? undefined : PublicInterpretationTruthStateFromJSON(json['truth']),
    };
}
export function InterpretationResultV02ToJSON(json) {
    return InterpretationResultV02ToJSONTyped(json, false);
}
export function InterpretationResultV02ToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'capability_questions': value['capabilityQuestions'] == null ? undefined : (value['capabilityQuestions'].map(PublicCapabilityQuestionToJSON)),
        'controlled_interpretation': PublicControlledInterpretationStateToJSON(value['controlledInterpretation']),
        'intent': PublicInterpretationIntentToJSON(value['intent']),
        'issues': IssueSetToJSON(value['issues']),
        'jobs': value['jobs'] == null ? undefined : (value['jobs'].map(PublicInterpretationJobToJSON)),
        'next_actions': value['nextActions'],
        'questions': value['questions'] == null ? undefined : (value['questions'].map(PublicInterpretationQuestionToJSON)),
        'recommendations': value['recommendations'] == null ? undefined : (value['recommendations'].map(ProductPackResponseToJSON)),
        'requested_gjs_version': value['requestedGjsVersion'],
        'schema_name': value['schemaName'],
        'schema_version': value['schemaVersion'],
        'shared_context': value['sharedContext'] == null ? undefined : (value['sharedContext'].map(PublicSharedContextFactToJSON)),
        'source': SourceInputToJSON(value['source']),
        'status': value['status'],
        'truth': PublicInterpretationTruthStateToJSON(value['truth']),
    };
}
