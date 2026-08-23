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
import { FinishedSizeFromJSON, FinishedSizeToJSON, } from './FinishedSize';
/**
 * @export
 */
export const FoldedLeafletOptionsFoldPatternEnum = {
    HalfFold: 'half_fold',
    TriFold: 'tri_fold',
    ZFold: 'z_fold',
    GateFold: 'gate_fold',
    RollFold: 'roll_fold',
    CrossFold: 'cross_fold',
    Unknown: 'unknown'
};
/**
 * Check if a given object implements the FoldedLeafletOptions interface.
 */
export function instanceOfFoldedLeafletOptions(value) {
    return true;
}
export function FoldedLeafletOptionsFromJSON(json) {
    return FoldedLeafletOptionsFromJSONTyped(json, false);
}
export function FoldedLeafletOptionsFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'finishedSize': json['finished_size'] == null ? undefined : FinishedSizeFromJSON(json['finished_size']),
        'flatSize': json['flat_size'] == null ? undefined : FinishedSizeFromJSON(json['flat_size']),
        'foldPattern': json['fold_pattern'] == null ? undefined : json['fold_pattern'],
        'panels': json['panels'] == null ? undefined : json['panels'],
    };
}
export function FoldedLeafletOptionsToJSON(json) {
    return FoldedLeafletOptionsToJSONTyped(json, false);
}
export function FoldedLeafletOptionsToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'finished_size': FinishedSizeToJSON(value['finishedSize']),
        'flat_size': FinishedSizeToJSON(value['flatSize']),
        'fold_pattern': value['foldPattern'],
        'panels': value['panels'],
    };
}
