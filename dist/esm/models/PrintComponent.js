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
import { SubstrateFromJSON, SubstrateToJSON, } from './Substrate';
import { FinishedSizeFromJSON, FinishedSizeToJSON, } from './FinishedSize';
import { FinishingFromJSON, FinishingToJSON, } from './Finishing';
import { PrintSpecFromJSON, PrintSpecToJSON, } from './PrintSpec';
/**
 * @export
 */
export const PrintComponentRoleEnum = {
    Main: 'main',
    Flat: 'flat',
    Finished: 'finished',
    Cover: 'cover',
    Text: 'text',
    Insert: 'insert',
    Garment: 'garment',
    Decoration: 'decoration',
    Unknown: 'unknown'
};
/**
 * Check if a given object implements the PrintComponent interface.
 */
export function instanceOfPrintComponent(value) {
    return true;
}
export function PrintComponentFromJSON(json) {
    return PrintComponentFromJSONTyped(json, false);
}
export function PrintComponentFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'componentId': json['component_id'] == null ? undefined : json['component_id'],
        'finishings': json['finishings'] == null ? undefined : (json['finishings'].map(FinishingFromJSON)),
        'printSpec': json['print_spec'] == null ? undefined : PrintSpecFromJSON(json['print_spec']),
        'role': json['role'] == null ? undefined : json['role'],
        'size': json['size'] == null ? undefined : FinishedSizeFromJSON(json['size']),
        'substrate': json['substrate'] == null ? undefined : SubstrateFromJSON(json['substrate']),
    };
}
export function PrintComponentToJSON(json) {
    return PrintComponentToJSONTyped(json, false);
}
export function PrintComponentToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'component_id': value['componentId'],
        'finishings': value['finishings'] == null ? undefined : (value['finishings'].map(FinishingToJSON)),
        'print_spec': PrintSpecToJSON(value['printSpec']),
        'role': value['role'],
        'size': FinishedSizeToJSON(value['size']),
        'substrate': SubstrateToJSON(value['substrate']),
    };
}
