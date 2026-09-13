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
exports.ManufacturingOperationParametersFromJSON = ManufacturingOperationParametersFromJSON;
exports.ManufacturingOperationParametersFromJSONTyped = ManufacturingOperationParametersFromJSONTyped;
exports.ManufacturingOperationParametersToJSON = ManufacturingOperationParametersToJSON;
exports.ManufacturingOperationParametersToJSONTyped = ManufacturingOperationParametersToJSONTyped;
const AssemblyOperationParameters_1 = require("./AssemblyOperationParameters");
const CutOperationParameters_1 = require("./CutOperationParameters");
const DecorationOperationParameters_1 = require("./DecorationOperationParameters");
const DrillOperationParameters_1 = require("./DrillOperationParameters");
const FoldOperationParameters_1 = require("./FoldOperationParameters");
const InspectOperationParameters_1 = require("./InspectOperationParameters");
const LegacyOperationParameters_1 = require("./LegacyOperationParameters");
const PrintOperationParameters_1 = require("./PrintOperationParameters");
const SurfaceOperationParameters_1 = require("./SurfaceOperationParameters");
function ManufacturingOperationParametersFromJSON(json) {
    return ManufacturingOperationParametersFromJSONTyped(json, false);
}
function ManufacturingOperationParametersFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    switch (json['kind']) {
        case 'assembly':
            return Object.assign({}, (0, AssemblyOperationParameters_1.AssemblyOperationParametersFromJSONTyped)(json, true), { kind: 'assembly' });
        case 'cut':
            return Object.assign({}, (0, CutOperationParameters_1.CutOperationParametersFromJSONTyped)(json, true), { kind: 'cut' });
        case 'decoration':
            return Object.assign({}, (0, DecorationOperationParameters_1.DecorationOperationParametersFromJSONTyped)(json, true), { kind: 'decoration' });
        case 'drill':
            return Object.assign({}, (0, DrillOperationParameters_1.DrillOperationParametersFromJSONTyped)(json, true), { kind: 'drill' });
        case 'fold':
            return Object.assign({}, (0, FoldOperationParameters_1.FoldOperationParametersFromJSONTyped)(json, true), { kind: 'fold' });
        case 'inspect':
            return Object.assign({}, (0, InspectOperationParameters_1.InspectOperationParametersFromJSONTyped)(json, true), { kind: 'inspect' });
        case 'legacy':
            return Object.assign({}, (0, LegacyOperationParameters_1.LegacyOperationParametersFromJSONTyped)(json, true), { kind: 'legacy' });
        case 'print':
            return Object.assign({}, (0, PrintOperationParameters_1.PrintOperationParametersFromJSONTyped)(json, true), { kind: 'print' });
        case 'surface':
            return Object.assign({}, (0, SurfaceOperationParameters_1.SurfaceOperationParametersFromJSONTyped)(json, true), { kind: 'surface' });
        default:
            return json;
    }
}
function ManufacturingOperationParametersToJSON(json) {
    return ManufacturingOperationParametersToJSONTyped(json, false);
}
function ManufacturingOperationParametersToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    switch (value['kind']) {
        case 'assembly':
            return Object.assign({}, (0, AssemblyOperationParameters_1.AssemblyOperationParametersToJSON)(value), { kind: 'assembly' });
        case 'cut':
            return Object.assign({}, (0, CutOperationParameters_1.CutOperationParametersToJSON)(value), { kind: 'cut' });
        case 'decoration':
            return Object.assign({}, (0, DecorationOperationParameters_1.DecorationOperationParametersToJSON)(value), { kind: 'decoration' });
        case 'drill':
            return Object.assign({}, (0, DrillOperationParameters_1.DrillOperationParametersToJSON)(value), { kind: 'drill' });
        case 'fold':
            return Object.assign({}, (0, FoldOperationParameters_1.FoldOperationParametersToJSON)(value), { kind: 'fold' });
        case 'inspect':
            return Object.assign({}, (0, InspectOperationParameters_1.InspectOperationParametersToJSON)(value), { kind: 'inspect' });
        case 'legacy':
            return Object.assign({}, (0, LegacyOperationParameters_1.LegacyOperationParametersToJSON)(value), { kind: 'legacy' });
        case 'print':
            return Object.assign({}, (0, PrintOperationParameters_1.PrintOperationParametersToJSON)(value), { kind: 'print' });
        case 'surface':
            return Object.assign({}, (0, SurfaceOperationParameters_1.SurfaceOperationParametersToJSON)(value), { kind: 'surface' });
        default:
            return value;
    }
}
