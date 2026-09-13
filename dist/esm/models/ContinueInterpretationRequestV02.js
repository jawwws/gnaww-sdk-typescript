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
import { PublicInterpretationContinuationAnswerFromJSON, PublicInterpretationContinuationAnswerToJSON, } from './PublicInterpretationContinuationAnswer';
import { SourceInputFromJSON, SourceInputToJSON, } from './SourceInput';
/**
 * @export
 */
export const ContinueInterpretationRequestV02GjsVersionEnum = {
    _04: '0.4'
};
/**
 * @export
 */
export const ContinueInterpretationRequestV02MatchingModeEnum = {
    SingleTarget: 'single_target',
    ProducerUniverse: 'producer_universe'
};
/**
 * @export
 */
export const ContinueInterpretationRequestV02SchemaNameEnum = {
    GnawwInterpretationContinuationRequest: 'gnaww.interpretation_continuation_request'
};
/**
 * @export
 */
export const ContinueInterpretationRequestV02SchemaVersionEnum = {
    _02: '0.2'
};
/**
 * Check if a given object implements the ContinueInterpretationRequestV02 interface.
 */
export function instanceOfContinueInterpretationRequestV02(value) {
    if (!('source' in value) || value['source'] === undefined)
        return false;
    return true;
}
export function ContinueInterpretationRequestV02FromJSON(json) {
    return ContinueInterpretationRequestV02FromJSONTyped(json, false);
}
export function ContinueInterpretationRequestV02FromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'answers': json['answers'] == null ? undefined : (json['answers'].map(PublicInterpretationContinuationAnswerFromJSON)),
        'gjsVersion': json['gjs_version'] == null ? undefined : json['gjs_version'],
        'matchingMode': json['matching_mode'] == null ? undefined : json['matching_mode'],
        'schemaName': json['schema_name'] == null ? undefined : json['schema_name'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
        'source': SourceInputFromJSON(json['source']),
    };
}
export function ContinueInterpretationRequestV02ToJSON(json) {
    return ContinueInterpretationRequestV02ToJSONTyped(json, false);
}
export function ContinueInterpretationRequestV02ToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'answers': value['answers'] == null ? undefined : (value['answers'].map(PublicInterpretationContinuationAnswerToJSON)),
        'gjs_version': value['gjsVersion'],
        'matching_mode': value['matchingMode'],
        'schema_name': value['schemaName'],
        'schema_version': value['schemaVersion'],
        'source': SourceInputToJSON(value['source']),
    };
}
