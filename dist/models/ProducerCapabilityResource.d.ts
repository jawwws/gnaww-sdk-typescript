/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import type { ProducerProductCapability } from './ProducerProductCapability';
/**
 * Safe capability-only projection of one producer profile.
 * @export
 * @interface ProducerCapabilityResource
 */
export interface ProducerCapabilityResource {
    /**
     *
     * @type {boolean}
     * @memberof ProducerCapabilityResource
     */
    isLiveSupplier: boolean;
    /**
     *
     * @type {string}
     * @memberof ProducerCapabilityResource
     */
    producerId: string;
    /**
     *
     * @type {string}
     * @memberof ProducerCapabilityResource
     */
    producerName: string;
    /**
     *
     * @type {string}
     * @memberof ProducerCapabilityResource
     */
    producerProfileId: string;
    /**
     *
     * @type {string}
     * @memberof ProducerCapabilityResource
     */
    producerProfileSchemaVersion: string;
    /**
     *
     * @type {Array<ProducerProductCapability>}
     * @memberof ProducerCapabilityResource
     */
    products: Array<ProducerProductCapability>;
    /**
     *
     * @type {ProducerCapabilityResourceSchemaNameEnum}
     * @memberof ProducerCapabilityResource
     */
    schemaName: ProducerCapabilityResourceSchemaNameEnum;
    /**
     *
     * @type {ProducerCapabilityResourceSchemaVersionEnum}
     * @memberof ProducerCapabilityResource
     */
    schemaVersion: ProducerCapabilityResourceSchemaVersionEnum;
    /**
     *
     * @type {ProducerCapabilityResourceSourceEnum}
     * @memberof ProducerCapabilityResource
     */
    source: ProducerCapabilityResourceSourceEnum;
    /**
     *
     * @type {ProducerCapabilityResourceTruthStateEnum}
     * @memberof ProducerCapabilityResource
     */
    truthState: ProducerCapabilityResourceTruthStateEnum;
}
/**
 * @export
 */
export declare const ProducerCapabilityResourceSchemaNameEnum: {
    readonly GnawwProducerCapabilityResource: "gnaww.producer_capability_resource";
};
export type ProducerCapabilityResourceSchemaNameEnum = typeof ProducerCapabilityResourceSchemaNameEnum[keyof typeof ProducerCapabilityResourceSchemaNameEnum];
/**
 * @export
 */
export declare const ProducerCapabilityResourceSchemaVersionEnum: {
    readonly _01: "0.1";
};
export type ProducerCapabilityResourceSchemaVersionEnum = typeof ProducerCapabilityResourceSchemaVersionEnum[keyof typeof ProducerCapabilityResourceSchemaVersionEnum];
/**
 * @export
 */
export declare const ProducerCapabilityResourceSourceEnum: {
    readonly PublishedProfile: "published_profile";
    readonly DemoFixture: "demo_fixture";
    readonly ApiDerivedDemo: "api_derived_demo";
};
export type ProducerCapabilityResourceSourceEnum = typeof ProducerCapabilityResourceSourceEnum[keyof typeof ProducerCapabilityResourceSourceEnum];
/**
 * @export
 */
export declare const ProducerCapabilityResourceTruthStateEnum: {
    readonly PublishedCapability: "published_capability";
    readonly FixtureBacked: "fixture_backed";
    readonly LiveApiDerived: "live_api_derived";
};
export type ProducerCapabilityResourceTruthStateEnum = typeof ProducerCapabilityResourceTruthStateEnum[keyof typeof ProducerCapabilityResourceTruthStateEnum];
/**
 * Check if a given object implements the ProducerCapabilityResource interface.
 */
export declare function instanceOfProducerCapabilityResource(value: object): value is ProducerCapabilityResource;
export declare function ProducerCapabilityResourceFromJSON(json: any): ProducerCapabilityResource;
export declare function ProducerCapabilityResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProducerCapabilityResource;
export declare function ProducerCapabilityResourceToJSON(json: any): ProducerCapabilityResource;
export declare function ProducerCapabilityResourceToJSONTyped(value?: ProducerCapabilityResource | null, ignoreDiscriminator?: boolean): any;
