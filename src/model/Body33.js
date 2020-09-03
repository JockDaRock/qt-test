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
import NetworksnetworkIdappliancesecuritymalwareAllowedFiles from './NetworksnetworkIdappliancesecuritymalwareAllowedFiles';
import NetworksnetworkIdappliancesecuritymalwareAllowedUrls from './NetworksnetworkIdappliancesecuritymalwareAllowedUrls';

/**
* The Body33 model module.
* @module model/Body33
* @version 1.0.0
*/
export default class Body33 {
    /**
    * Constructs a new <code>Body33</code>.
    * @alias module:model/Body33
    * @class
    * @param mode {module:model/Body33.ModeEnum} Set mode to 'enabled' to enable malware prevention, otherwise 'disabled'
    */

    constructor(mode) {
        
        
        this['mode'] = mode;
        
    }

    /**
    * Constructs a <code>Body33</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Body33} obj Optional instance to populate.
    * @return {module:model/Body33} The populated <code>Body33</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Body33();
                        
            
            if (data.hasOwnProperty('mode')) {
                obj['mode'] = ApiClient.convertToType(data['mode'], 'String');
            }
            if (data.hasOwnProperty('allowedUrls')) {
                obj['allowedUrls'] = ApiClient.convertToType(data['allowedUrls'], [NetworksnetworkIdappliancesecuritymalwareAllowedUrls]);
            }
            if (data.hasOwnProperty('allowedFiles')) {
                obj['allowedFiles'] = ApiClient.convertToType(data['allowedFiles'], [NetworksnetworkIdappliancesecuritymalwareAllowedFiles]);
            }
        }
        return obj;
    }

    /**
    * Set mode to 'enabled' to enable malware prevention, otherwise 'disabled'
    * @member {module:model/Body33.ModeEnum} mode
    */
    'mode' = undefined;
    /**
    * The urls that should be permitted by the malware detection engine. If omitted, the current config will remain unchanged. This is available only if your network supports AMP allow listing
    * @member {Array.<module:model/NetworksnetworkIdappliancesecuritymalwareAllowedUrls>} allowedUrls
    */
    'allowedUrls' = undefined;
    /**
    * The sha256 digests of files that should be permitted by the malware detection engine. If omitted, the current config will remain unchanged. This is available only if your network supports AMP allow listing
    * @member {Array.<module:model/NetworksnetworkIdappliancesecuritymalwareAllowedFiles>} allowedFiles
    */
    'allowedFiles' = undefined;



    /**
    * Allowed values for the <code>mode</code> property.
    * @enum {String}
    * @readonly
    */
    static ModeEnum = {
        /**
         * value: "enabled"
         * @const
         */
        "enabled": "enabled",
        /**
         * value: "disabled"
         * @const
         */
        "disabled": "disabled"    };

}
