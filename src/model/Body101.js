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
* The Body101 model module.
* @module model/Body101
* @version 1.0.0
*/
export default class Body101 {
    /**
    * Constructs a new <code>Body101</code>.
    * @alias module:model/Body101
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Body101</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Body101} obj Optional instance to populate.
    * @return {module:model/Body101} The populated <code>Body101</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Body101();
                        
            
            if (data.hasOwnProperty('broadcastThreshold')) {
                obj['broadcastThreshold'] = ApiClient.convertToType(data['broadcastThreshold'], 'Number');
            }
            if (data.hasOwnProperty('multicastThreshold')) {
                obj['multicastThreshold'] = ApiClient.convertToType(data['multicastThreshold'], 'Number');
            }
            if (data.hasOwnProperty('unknownUnicastThreshold')) {
                obj['unknownUnicastThreshold'] = ApiClient.convertToType(data['unknownUnicastThreshold'], 'Number');
            }
        }
        return obj;
    }

    /**
    * Percentage (1 to 99) of total available port bandwidth for broadcast traffic type. Default value 100 percent rate is to clear the configuration.
    * @member {Number} broadcastThreshold
    */
    'broadcastThreshold' = undefined;
    /**
    * Percentage (1 to 99) of total available port bandwidth for multicast traffic type. Default value 100 percent rate is to clear the configuration.
    * @member {Number} multicastThreshold
    */
    'multicastThreshold' = undefined;
    /**
    * Percentage (1 to 99) of total available port bandwidth for unknown unicast (dlf-destination lookup failure) traffic type. Default value 100 percent rate is to clear the configuration.
    * @member {Number} unknownUnicastThreshold
    */
    'unknownUnicastThreshold' = undefined;




}
