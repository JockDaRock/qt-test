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
* The NetworksnetworkIdclientsclientIdsplashAuthorizationStatusSsids8 model module.
* @module model/NetworksnetworkIdclientsclientIdsplashAuthorizationStatusSsids8
* @version 1.0.0
*/
export default class NetworksnetworkIdclientsclientIdsplashAuthorizationStatusSsids8 {
    /**
    * Constructs a new <code>NetworksnetworkIdclientsclientIdsplashAuthorizationStatusSsids8</code>.
    * Splash authorization for SSID 8
    * @alias module:model/NetworksnetworkIdclientsclientIdsplashAuthorizationStatusSsids8
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>NetworksnetworkIdclientsclientIdsplashAuthorizationStatusSsids8</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/NetworksnetworkIdclientsclientIdsplashAuthorizationStatusSsids8} obj Optional instance to populate.
    * @return {module:model/NetworksnetworkIdclientsclientIdsplashAuthorizationStatusSsids8} The populated <code>NetworksnetworkIdclientsclientIdsplashAuthorizationStatusSsids8</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworksnetworkIdclientsclientIdsplashAuthorizationStatusSsids8();
                        
            
            if (data.hasOwnProperty('isAuthorized')) {
                obj['isAuthorized'] = ApiClient.convertToType(data['isAuthorized'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * New authorization status for the SSID (true, false).
    * @member {Boolean} isAuthorized
    */
    'isAuthorized' = undefined;




}
