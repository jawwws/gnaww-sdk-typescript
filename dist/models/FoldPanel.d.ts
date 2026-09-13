/**
 * Gnaww Developer API
 * Reviewed public print-intelligence contract for direct HTTP, CLI, SDK and MCP consumers. Capability fit is not price, live availability, producer acceptance or an order.
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 */
import type { Rectangle2D } from './Rectangle2D';
/**
 * One physical panel in flat/input coordinates, not a printed face/page count.
 * @export
 * @interface FoldPanel
 */
export interface FoldPanel {
    /**
     *
     * @type {Rectangle2D}
     * @memberof FoldPanel
     */
    area: Rectangle2D;
    /**
     *
     * @type {string}
     * @memberof FoldPanel
     */
    panelId: string;
    /**
     *
     * @type {string}
     * @memberof FoldPanel
     */
    role?: string | null;
}
/**
 * Check if a given object implements the FoldPanel interface.
 */
export declare function instanceOfFoldPanel(value: object): value is FoldPanel;
export declare function FoldPanelFromJSON(json: any): FoldPanel;
export declare function FoldPanelFromJSONTyped(json: any, ignoreDiscriminator: boolean): FoldPanel;
export declare function FoldPanelToJSON(json: any): FoldPanel;
export declare function FoldPanelToJSONTyped(value?: FoldPanel | null, ignoreDiscriminator?: boolean): any;
