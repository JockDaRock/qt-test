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
* The Body94 model module.
* @module model/Body94
* @version 1.0.0
*/
export default class Body94 {
    /**
    * Constructs a new <code>Body94</code>.
    * @alias module:model/Body94
    * @class
    * @param serial {String} The serial of the switch to be added
    */

    constructor(serial) {
        
        
        this['serial'] = serial;
        
    }

    /**
    * Constructs a <code>Body94</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Body94} obj Optional instance to populate.
    * @return {module:model/Body94} The populated <code>Body94</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Body94();
                        
            
            if (data.hasOwnProperty('serial')) {
                obj['serial'] = ApiClient.convertToType(data['serial'], 'String');
            }
        }
        return obj;
    }

    /**
    * The serial of the switch to be added
    * @member {String} serial
    */
    'serial' = undefined;




}
