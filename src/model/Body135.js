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
* The Body135 model module.
* @module model/Body135
* @version 1.0.0
*/
export default class Body135 {
    /**
    * Constructs a new <code>Body135</code>.
    * @alias module:model/Body135
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Body135</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Body135} obj Optional instance to populate.
    * @return {module:model/Body135} The populated <code>Body135</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Body135();
                        
            
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('timeZone')) {
                obj['timeZone'] = ApiClient.convertToType(data['timeZone'], 'String');
            }
        }
        return obj;
    }

    /**
    * The name of the configuration template
    * @member {String} name
    */
    'name' = undefined;
    /**
    * The timezone of the configuration template. For a list of allowed timezones, please see the 'TZ' column in the table in <a target='_blank' href='https://en.wikipedia.org/wiki/List_of_tz_database_time_zones'>this article.</a>
    * @member {String} timeZone
    */
    'timeZone' = undefined;




}