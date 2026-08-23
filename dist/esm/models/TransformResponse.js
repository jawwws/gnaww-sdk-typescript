/* tslint:disable */
/* eslint-disable */
/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 * NOTE: This class is auto Gnaww SDK.
 * https://gnaww-sdk.tech
 * Do not edit the class manually.
 */
import { IssueSetFromJSON, IssueSetToJSON, } from './IssueSet';
import { PrintJobSpecificationFromJSON, PrintJobSpecificationToJSON, } from './PrintJobSpecification';
/**
 * @export
 */
export const TransformResponseSchemaNameEnum = {
    JawwwsTransformResponse: 'jawwws.transform_response'
};
/**
 * @export
 */
export const TransformResponseStatusEnum = {
    Mapped: 'mapped',
    NeedsReview: 'needs_review',
    Blocked: 'blocked',
    Failed: 'failed'
};
/**
 * Check if a given object implements the TransformResponse interface.
 */
export function instanceOfTransformResponse(value) {
    if (!('status' in value) || value['status'] === undefined)
        return false;
    return true;
}
export function TransformResponseFromJSON(json) {
    return TransformResponseFromJSONTyped(json, false);
}
export function TransformResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'confidence': json['confidence'] == null ? undefined : json['confidence'],
        'issues': json['issues'] == null ? undefined : IssueSetFromJSON(json['issues']),
        'job': json['job'] == null ? undefined : PrintJobSpecificationFromJSON(json['job']),
        'nextActions': json['next_actions'] == null ? undefined : json['next_actions'],
        'schemaName': json['schema_name'] == null ? undefined : json['schema_name'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
        'status': json['status'],
        'unresolvedFields': json['unresolved_fields'] == null ? undefined : json['unresolved_fields'],
    };
}
export function TransformResponseToJSON(json) {
    return TransformResponseToJSONTyped(json, false);
}
export function TransformResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'confidence': value['confidence'],
        'issues': IssueSetToJSON(value['issues']),
        'job': PrintJobSpecificationToJSON(value['job']),
        'next_actions': value['nextActions'],
        'schema_name': value['schemaName'],
        'schema_version': value['schemaVersion'],
        'status': value['status'],
        'unresolved_fields': value['unresolvedFields'],
    };
}
