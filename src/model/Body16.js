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
* The Body16 model module.
* @module model/Body16
* @version 1.0.0
*/
export default class Body16 {
    /**
    * Constructs a new <code>Body16</code>.
    * @alias module:model/Body16
    * @class
    * @param enabled {Boolean} Enable or disable warm spare for a switch
    */

    constructor(enabled) {
        
        
        this['enabled'] = enabled;
        
    }

    /**
    * Constructs a <code>Body16</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Body16} obj Optional instance to populate.
    * @return {module:model/Body16} The populated <code>Body16</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Body16();
                        
            
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('spareSerial')) {
                obj['spareSerial'] = ApiClient.convertToType(data['spareSerial'], 'String');
            }
        }
        return obj;
    }

    /**
    * Enable or disable warm spare for a switch
    * @member {Boolean} enabled
    */
    'enabled' = undefined;
    /**
    * Serial number of the warm spare switch
    * @member {String} spareSerial
    */
    'spareSerial' = undefined;




}
