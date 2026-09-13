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
exports.ManufacturingMaterialCategoryEnum = void 0;
exports.instanceOfManufacturingMaterial = instanceOfManufacturingMaterial;
exports.ManufacturingMaterialFromJSON = ManufacturingMaterialFromJSON;
exports.ManufacturingMaterialFromJSONTyped = ManufacturingMaterialFromJSONTyped;
exports.ManufacturingMaterialToJSON = ManufacturingMaterialToJSON;
exports.ManufacturingMaterialToJSONTyped = ManufacturingMaterialToJSONTyped;
const AppModelsManufacturingGeometryMaterialCompositionPart_1 = require("./AppModelsManufacturingGeometryMaterialCompositionPart");
const GrammageRequirement_1 = require("./GrammageRequirement");
/**
 * @export
 */
exports.ManufacturingMaterialCategoryEnum = {
    Paper: 'paper',
    Board: 'board',
    Synthetic: 'synthetic',
    Textile: 'textile',
    Plastic: 'plastic',
    Metal: 'metal',
    Ceramic: 'ceramic',
    Glass: 'glass',
    Wood: 'wood',
    Other: 'other',
    Unknown: 'unknown'
};
/**
 * Check if a given object implements the ManufacturingMaterial interface.
 */
function instanceOfManufacturingMaterial(value) {
    return true;
}
function ManufacturingMaterialFromJSON(json) {
    return ManufacturingMaterialFromJSONTyped(json, false);
}
function ManufacturingMaterialFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'category': json['category'] == null ? undefined : json['category'],
        'colour': json['colour'] == null ? undefined : json['colour'],
        'composition': json['composition'] == null ? undefined : (json['composition'].map(AppModelsManufacturingGeometryMaterialCompositionPart_1.AppModelsManufacturingGeometryMaterialCompositionPartFromJSON)),
        'finish': json['finish'] == null ? undefined : json['finish'],
        'grammageRequirement': json['grammage_requirement'] == null ? undefined : (0, GrammageRequirement_1.GrammageRequirementFromJSON)(json['grammage_requirement']),
        'name': json['name'] == null ? undefined : json['name'],
        'texture': json['texture'] == null ? undefined : json['texture'],
        'thicknessMm': json['thickness_mm'] == null ? undefined : json['thickness_mm'],
        'weightGsm': json['weight_gsm'] == null ? undefined : json['weight_gsm'],
    };
}
function ManufacturingMaterialToJSON(json) {
    return ManufacturingMaterialToJSONTyped(json, false);
}
function ManufacturingMaterialToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'category': value['category'],
        'colour': value['colour'],
        'composition': value['composition'] == null ? undefined : (value['composition'].map(AppModelsManufacturingGeometryMaterialCompositionPart_1.AppModelsManufacturingGeometryMaterialCompositionPartToJSON)),
        'finish': value['finish'],
        'grammage_requirement': (0, GrammageRequirement_1.GrammageRequirementToJSON)(value['grammageRequirement']),
        'name': value['name'],
        'texture': value['texture'],
        'thickness_mm': value['thicknessMm'],
        'weight_gsm': value['weightGsm'],
    };
}
