/**
 * Meraki Dashboard API
 * The Cisco Meraki Dashboard API is a modern REST API based on the OpenAPI specification.  > Date: 05 August, 2020 > > [What's New](https://meraki.io/whats-new/)  ---  [API Documentation](https://meraki.io/api)  [Community Support](https://meraki.io/community)  [Meraki Homepage](https://www.meraki.com) 
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
* The NetworksnetworkIdgroupPoliciesContentFilteringBlockedUrlPatterns model module.
* @module model/NetworksnetworkIdgroupPoliciesContentFilteringBlockedUrlPatterns
* @version 1.0.0
*/
export default class NetworksnetworkIdgroupPoliciesContentFilteringBlockedUrlPatterns {
    /**
    * Constructs a new <code>NetworksnetworkIdgroupPoliciesContentFilteringBlockedUrlPatterns</code>.
    * Settings for blocked URL patterns
    * @alias module:model/NetworksnetworkIdgroupPoliciesContentFilteringBlockedUrlPatterns
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>NetworksnetworkIdgroupPoliciesContentFilteringBlockedUrlPatterns</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/NetworksnetworkIdgroupPoliciesContentFilteringBlockedUrlPatterns} obj Optional instance to populate.
    * @return {module:model/NetworksnetworkIdgroupPoliciesContentFilteringBlockedUrlPatterns} The populated <code>NetworksnetworkIdgroupPoliciesContentFilteringBlockedUrlPatterns</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworksnetworkIdgroupPoliciesContentFilteringBlockedUrlPatterns();
                        
            
            if (data.hasOwnProperty('settings')) {
                obj['settings'] = ApiClient.convertToType(data['settings'], 'String');
            }
            if (data.hasOwnProperty('patterns')) {
                obj['patterns'] = ApiClient.convertToType(data['patterns'], ['String']);
            }
        }
        return obj;
    }

    /**
    * How URL patterns are applied. Can be 'network default', 'append' or 'override'.
    * @member {module:model/NetworksnetworkIdgroupPoliciesContentFilteringBlockedUrlPatterns.SettingsEnum} settings
    */
    'settings' = undefined;
    /**
    * A list of URL patterns that are blocked
    * @member {Array.<String>} patterns
    */
    'patterns' = undefined;



    /**
    * Allowed values for the <code>settings</code> property.
    * @enum {String}
    * @readonly
    */
    static SettingsEnum = {
        /**
         * value: "network default"
         * @const
         */
        "network default": "network default",
        /**
         * value: "append"
         * @const
         */
        "append": "append",
        /**
         * value: "override"
         * @const
         */
        "override": "override"    };

}