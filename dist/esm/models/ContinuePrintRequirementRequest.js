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
import { PublicClarificationAnswerFromJSON, PublicClarificationAnswerToJSON, } from './PublicClarificationAnswer';
import { SourceInputFromJSON, SourceInputToJSON, } from './SourceInput';
/**
 * @export
 */
export const ContinuePrintRequirementRequestGjsVersionEnum = {
    _04: '0.4'
};
/**
 * @export
 */
export const ContinuePrintRequirementRequestMatchingModeEnum = {
    SingleTarget: 'single_target',
    ProducerUniverse: 'producer_universe'
};
/**
 * @export
 */
export const ContinuePrintRequirementRequestSchemaNameEnum = {
    GnawwInterpretationContinuationRequest: 'gnaww.interpretation_continuation_request'
};
/**
 * @export
 */
export const ContinuePrintRequirementRequestSchemaVersionEnum = {
    _01: '0.1'
};
/**
 * Check if a given object implements the ContinuePrintRequirementRequest interface.
 */
export function instanceOfContinuePrintRequirementRequest(value) {
    if (!('source' in value) || value['source'] === undefined)
        return false;
    return true;
}
export function ContinuePrintRequirementRequestFromJSON(json) {
    return ContinuePrintRequirementRequestFromJSONTyped(json, false);
}
export function ContinuePrintRequirementRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'answers': json['answers'] == null ? undefined : (json['answers'].map(PublicClarificationAnswerFromJSON)),
        'gjsVersion': json['gjs_version'] == null ? undefined : json['gjs_version'],
        'matchingMode': json['matching_mode'] == null ? undefined : json['matching_mode'],
        'schemaName': json['schema_name'] == null ? undefined : json['schema_name'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
        'source': SourceInputFromJSON(json['source']),
    };
}
export function ContinuePrintRequirementRequestToJSON(json) {
    return ContinuePrintRequirementRequestToJSONTyped(json, false);
}
export function ContinuePrintRequirementRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'answers': value['answers'] == null ? undefined : (value['answers'].map(PublicClarificationAnswerToJSON)),
        'gjs_version': value['gjsVersion'],
        'matching_mode': value['matchingMode'],
        'schema_name': value['schemaName'],
        'schema_version': value['schemaVersion'],
        'source': SourceInputToJSON(value['source']),
    };
}
