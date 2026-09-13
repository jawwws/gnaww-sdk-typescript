"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManufacturingOperationCategoryEnum = void 0;
exports.instanceOfManufacturingOperation = instanceOfManufacturingOperation;
exports.ManufacturingOperationFromJSON = ManufacturingOperationFromJSON;
exports.ManufacturingOperationFromJSONTyped = ManufacturingOperationFromJSONTyped;
exports.ManufacturingOperationToJSON = ManufacturingOperationToJSON;
exports.ManufacturingOperationToJSONTyped = ManufacturingOperationToJSONTyped;
const OperationTarget_1 = require("./OperationTarget");
const ManufacturingOperationParameters_1 = require("./ManufacturingOperationParameters");
/**
 * @export
 */
exports.ManufacturingOperationCategoryEnum = {
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
function instanceOfManufacturingOperation(value) {
    if (!('category' in value) || value['category'] === undefined)
        return false;
    if (!('operationId' in value) || value['operationId'] === undefined)
        return false;
    if (!('targets' in value) || value['targets'] === undefined)
        return false;
    return true;
}
function ManufacturingOperationFromJSON(json) {
    return ManufacturingOperationFromJSONTyped(json, false);
}
function ManufacturingOperationFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'category': json['category'],
        'dependsOn': json['depends_on'] == null ? undefined : json['depends_on'],
        'method': json['method'] == null ? undefined : json['method'],
        'operationId': json['operation_id'],
        'parameters': json['parameters'] == null ? undefined : (0, ManufacturingOperationParameters_1.ManufacturingOperationParametersFromJSON)(json['parameters']),
        'targets': (json['targets'].map(OperationTarget_1.OperationTargetFromJSON)),
    };
}
function ManufacturingOperationToJSON(json) {
    return ManufacturingOperationToJSONTyped(json, false);
}
function ManufacturingOperationToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'category': value['category'],
        'depends_on': value['dependsOn'],
        'method': value['method'],
        'operation_id': value['operationId'],
        'parameters': (0, ManufacturingOperationParameters_1.ManufacturingOperationParametersToJSON)(value['parameters']),
        'targets': (value['targets'].map(OperationTarget_1.OperationTargetToJSON)),
    };
}
