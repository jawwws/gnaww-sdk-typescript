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
import { SourceInputFromJSON, SourceInputToJSON, } from './SourceInput';
/**
 * Check if a given object implements the TransformRequest interface.
 */
export function instanceOfTransformRequest(value) {
    if (!('source' in value) || value['source'] === undefined)
        return false;
    return true;
}
export function TransformRequestFromJSON(json) {
    return TransformRequestFromJSONTyped(json, false);
}
export function TransformRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'requestedSchemaVersion': json['requested_schema_version'] == null ? undefined : json['requested_schema_version'],
        'source': SourceInputFromJSON(json['source']),
    };
}
export function TransformRequestToJSON(json) {
    return TransformRequestToJSONTyped(json, false);
}
export function TransformRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'requested_schema_version': value['requestedSchemaVersion'],
        'source': SourceInputToJSON(value['source']),
    };
}
