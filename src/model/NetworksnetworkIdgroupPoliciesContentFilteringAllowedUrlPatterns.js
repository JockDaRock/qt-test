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
* The NetworksnetworkIdgroupPoliciesContentFilteringAllowedUrlPatterns model module.
* @module model/NetworksnetworkIdgroupPoliciesContentFilteringAllowedUrlPatterns
* @version 1.0.0
*/
export default class NetworksnetworkIdgroupPoliciesContentFilteringAllowedUrlPatterns {
    /**
    * Constructs a new <code>NetworksnetworkIdgroupPoliciesContentFilteringAllowedUrlPatterns</code>.
    * Settings for allowed URL patterns
    * @alias module:model/NetworksnetworkIdgroupPoliciesContentFilteringAllowedUrlPatterns
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>NetworksnetworkIdgroupPoliciesContentFilteringAllowedUrlPatterns</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/NetworksnetworkIdgroupPoliciesContentFilteringAllowedUrlPatterns} obj Optional instance to populate.
    * @return {module:model/NetworksnetworkIdgroupPoliciesContentFilteringAllowedUrlPatterns} The populated <code>NetworksnetworkIdgroupPoliciesContentFilteringAllowedUrlPatterns</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworksnetworkIdgroupPoliciesContentFilteringAllowedUrlPatterns();
                        
            
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
    * @member {module:model/NetworksnetworkIdgroupPoliciesContentFilteringAllowedUrlPatterns.SettingsEnum} settings
    */
    'settings' = undefined;
    /**
    * A list of URL patterns that are allowed
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