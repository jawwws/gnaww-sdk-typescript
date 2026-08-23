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
/**
 * Check if a given object implements the InterpretPrintRequirementDefaultResponseError interface.
 */
export function instanceOfInterpretPrintRequirementDefaultResponseError(value) {
    if (!('code' in value) || value['code'] === undefined)
        return false;
    if (!('correlationId' in value) || value['correlationId'] === undefined)
        return false;
    if (!('details' in value) || value['details'] === undefined)
        return false;
    if (!('message' in value) || value['message'] === undefined)
        return false;
    if (!('requestId' in value) || value['requestId'] === undefined)
        return false;
    if (!('retryable' in value) || value['retryable'] === undefined)
        return false;
    if (!('status' in value) || value['status'] === undefined)
        return false;
    return true;
}
export function InterpretPrintRequirementDefaultResponseErrorFromJSON(json) {
    return InterpretPrintRequirementDefaultResponseErrorFromJSONTyped(json, false);
}
export function InterpretPrintRequirementDefaultResponseErrorFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'code': json['code'],
        'correlationId': json['correlation_id'],
        'details': json['details'],
        'message': json['message'],
        'requestId': json['request_id'],
        'retryable': json['retryable'],
        'status': json['status'],
    };
}
export function InterpretPrintRequirementDefaultResponseErrorToJSON(json) {
    return InterpretPrintRequirementDefaultResponseErrorToJSONTyped(json, false);
}
export function InterpretPrintRequirementDefaultResponseErrorToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'code': value['code'],
        'correlation_id': value['correlationId'],
        'details': value['details'],
        'message': value['message'],
        'request_id': value['requestId'],
        'retryable': value['retryable'],
        'status': value['status'],
    };
}
