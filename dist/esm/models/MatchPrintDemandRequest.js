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
import { PublicMatchTargetRequestFromJSON, PublicMatchTargetRequestToJSON, } from './PublicMatchTargetRequest';
import { PrintJobSpecificationV04FromJSON, PrintJobSpecificationV04ToJSON, } from './PrintJobSpecificationV04';
/**
 * @export
 */
export const MatchPrintDemandRequestSchemaNameEnum = {
    GnawwSpecmatchRequest: 'gnaww.specmatch_request'
};
/**
 * @export
 */
export const MatchPrintDemandRequestSchemaVersionEnum = {
    _01: '0.1'
};
/**
 * Check if a given object implements the MatchPrintDemandRequest interface.
 */
export function instanceOfMatchPrintDemandRequest(value) {
    if (!('gjs' in value) || value['gjs'] === undefined)
        return false;
    if (!('target' in value) || value['target'] === undefined)
        return false;
    return true;
}
export function MatchPrintDemandRequestFromJSON(json) {
    return MatchPrintDemandRequestFromJSONTyped(json, false);
}
export function MatchPrintDemandRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'gjs': PrintJobSpecificationV04FromJSON(json['gjs']),
        'schemaName': json['schema_name'] == null ? undefined : json['schema_name'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
        'target': PublicMatchTargetRequestFromJSON(json['target']),
    };
}
export function MatchPrintDemandRequestToJSON(json) {
    return MatchPrintDemandRequestToJSONTyped(json, false);
}
export function MatchPrintDemandRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'gjs': PrintJobSpecificationV04ToJSON(value['gjs']),
        'schema_name': value['schemaName'],
        'schema_version': value['schemaVersion'],
        'target': PublicMatchTargetRequestToJSON(value['target']),
    };
}
