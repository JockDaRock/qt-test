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
* The Body121 model module.
* @module model/Body121
* @version 1.0.0
*/
export default class Body121 {
    /**
    * Constructs a new <code>Body121</code>.
    * @alias module:model/Body121
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Body121</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Body121} obj Optional instance to populate.
    * @return {module:model/Body121} The populated <code>Body121</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Body121();
                        
            
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
    * The name of the organization
    * @member {String} name
    */
    'name' = undefined;




}