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
* The Body71 model module.
* @module model/Body71
* @version 1.0.0
*/
export default class Body71 {
    /**
    * Constructs a new <code>Body71</code>.
    * @alias module:model/Body71
    * @class
    * @param ids {Array.<String>} The ids of the devices to attempt activation lock bypass.
    */

    constructor(ids) {
        
        
        this['ids'] = ids;
        
    }

    /**
    * Constructs a <code>Body71</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Body71} obj Optional instance to populate.
    * @return {module:model/Body71} The populated <code>Body71</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Body71();
                        
            
            if (data.hasOwnProperty('ids')) {
                obj['ids'] = ApiClient.convertToType(data['ids'], ['String']);
            }
        }
        return obj;
    }

    /**
    * The ids of the devices to attempt activation lock bypass.
    * @member {Array.<String>} ids
    */
    'ids' = undefined;




}