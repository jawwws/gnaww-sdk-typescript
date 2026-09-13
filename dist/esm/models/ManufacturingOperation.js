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
import { OperationTargetFromJSON, OperationTargetToJSON, } from './OperationTarget';
import { ManufacturingOperationParametersFromJSON, ManufacturingOperationParametersToJSON, } from './ManufacturingOperationParameters';
/**
 * @export
 */
export const ManufacturingOperationCategoryEnum = {
    Print: 'print',
    Decorate: 'decorate',
    Coat: 'coat',
    Laminate: 'laminate',
    Emboss: 'emboss',
    Deboss: 'deboss',
    Foil: 'foil',
    SpotFinish: 'spot_finish',
    Cut: 'cut',
    DieCut: 'die_cut',
    LaserCut: 'laser_cut',
    Drill: 'drill',
    Perforate: 'perforate',
    Crease: 'crease',
    Fold: 'fold',
    Stitch: 'stitch',
    Sew: 'sew',
    Bind: 'bind',
    Glue: 'glue',
    Attach: 'attach',
    Assemble: 'assemble',
    Cure: 'cure',
    Dry: 'dry',
    Inspect: 'inspect',
    Pack: 'pack',
    Other: 'other'
};
/**
 * Check if a given object implements the ManufacturingOperation interface.
 */
export function instanceOfManufacturingOperation(value) {
    if (!('category' in value) || value['category'] === undefined)
        return false;
    if (!('operationId' in value) || value['operationId'] === undefined)
        return false;
    if (!('targets' in value) || value['targets'] === undefined)
        return false;
    return true;
}
export function ManufacturingOperationFromJSON(json) {
    return ManufacturingOperationFromJSONTyped(json, false);
}
export function ManufacturingOperationFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'category': json['category'],
        'dependsOn': json['depends_on'] == null ? undefined : json['depends_on'],
        'method': json['method'] == null ? undefined : json['method'],
        'operationId': json['operation_id'],
        'parameters': json['parameters'] == null ? undefined : ManufacturingOperationParametersFromJSON(json['parameters']),
        'targets': (json['targets'].map(OperationTargetFromJSON)),
    };
}
export function ManufacturingOperationToJSON(json) {
    return ManufacturingOperationToJSONTyped(json, false);
}
export function ManufacturingOperationToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'category': value['category'],
        'depends_on': value['dependsOn'],
        'method': value['method'],
        'operation_id': value['operationId'],
        'parameters': ManufacturingOperationParametersToJSON(value['parameters']),
        'targets': (value['targets'].map(OperationTargetToJSON)),
    };
}
