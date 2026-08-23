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
 * Check if a given object implements the PersonalisationCapability interface.
 */
export function instanceOfPersonalisationCapability(value) {
    return true;
}
export function PersonalisationCapabilityFromJSON(json) {
    return PersonalisationCapabilityFromJSONTyped(json, false);
}
export function PersonalisationCapabilityFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'maximumVariants': json['maximum_variants'] == null ? undefined : json['maximum_variants'],
        'perItemArtwork': json['per_item_artwork'] == null ? undefined : json['per_item_artwork'],
        'sequentialNumbering': json['sequential_numbering'] == null ? undefined : json['sequential_numbering'],
        'supported': json['supported'] == null ? undefined : json['supported'],
        'variableImages': json['variable_images'] == null ? undefined : json['variable_images'],
        'variableText': json['variable_text'] == null ? undefined : json['variable_text'],
    };
}
export function PersonalisationCapabilityToJSON(json) {
    return PersonalisationCapabilityToJSONTyped(json, false);
}
export function PersonalisationCapabilityToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'maximum_variants': value['maximumVariants'],
        'per_item_artwork': value['perItemArtwork'],
        'sequential_numbering': value['sequentialNumbering'],
        'supported': value['supported'],
        'variable_images': value['variableImages'],
        'variable_text': value['variableText'],
    };
}
