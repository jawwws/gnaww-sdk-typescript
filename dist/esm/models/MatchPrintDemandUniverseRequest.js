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
import { FulfilmentRequirementFromJSON, FulfilmentRequirementToJSON, } from './FulfilmentRequirement';
import { PrintJobSpecificationV04FromJSON, PrintJobSpecificationV04ToJSON, } from './PrintJobSpecificationV04';
/**
 * @export
 */
export const MatchPrintDemandUniverseRequestSchemaNameEnum = {
    GnawwSpecmatchUniverseRequest: 'gnaww.specmatch_universe_request'
};
/**
 * @export
 */
export const MatchPrintDemandUniverseRequestSchemaVersionEnum = {
    _01: '0.1'
};
/**
 * Check if a given object implements the MatchPrintDemandUniverseRequest interface.
 */
export function instanceOfMatchPrintDemandUniverseRequest(value) {
    if (!('fulfilment' in value) || value['fulfilment'] === undefined)
        return false;
    if (!('gjs' in value) || value['gjs'] === undefined)
        return false;
    return true;
}
export function MatchPrintDemandUniverseRequestFromJSON(json) {
    return MatchPrintDemandUniverseRequestFromJSONTyped(json, false);
}
export function MatchPrintDemandUniverseRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'fulfilment': FulfilmentRequirementFromJSON(json['fulfilment']),
        'gjs': PrintJobSpecificationV04FromJSON(json['gjs']),
        'schemaName': json['schema_name'] == null ? undefined : json['schema_name'],
        'schemaVersion': json['schema_version'] == null ? undefined : json['schema_version'],
    };
}
export function MatchPrintDemandUniverseRequestToJSON(json) {
    return MatchPrintDemandUniverseRequestToJSONTyped(json, false);
}
export function MatchPrintDemandUniverseRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'fulfilment': FulfilmentRequirementToJSON(value['fulfilment']),
        'gjs': PrintJobSpecificationV04ToJSON(value['gjs']),
        'schema_name': value['schemaName'],
        'schema_version': value['schemaVersion'],
    };
}
