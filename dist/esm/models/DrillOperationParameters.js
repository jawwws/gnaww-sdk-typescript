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
import { RepeatedDrillPatternFromJSON, RepeatedDrillPatternToJSON, } from './RepeatedDrillPattern';
import { DrillHoleFromJSON, DrillHoleToJSON, } from './DrillHole';
/**
 * @export
 */
export const DrillOperationParametersKindEnum = {
    Drill: 'drill'
};
/**
 * Check if a given object implements the DrillOperationParameters interface.
 */
export function instanceOfDrillOperationParameters(value) {
    return true;
}
export function DrillOperationParametersFromJSON(json) {
    return DrillOperationParametersFromJSONTyped(json, false);
}
export function DrillOperationParametersFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'holes': json['holes'] == null ? undefined : (json['holes'].map(DrillHoleFromJSON)),
        'kind': json['kind'] == null ? undefined : json['kind'],
        'patterns': json['patterns'] == null ? undefined : (json['patterns'].map(RepeatedDrillPatternFromJSON)),
    };
}
export function DrillOperationParametersToJSON(json) {
    return DrillOperationParametersToJSONTyped(json, false);
}
export function DrillOperationParametersToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'holes': value['holes'] == null ? undefined : (value['holes'].map(DrillHoleToJSON)),
        'kind': value['kind'],
        'patterns': value['patterns'] == null ? undefined : (value['patterns'].map(RepeatedDrillPatternToJSON)),
    };
}
