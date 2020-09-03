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
* The Body145 model module.
* @module model/Body145
* @version 1.0.0
*/
export default class Body145 {
    /**
    * Constructs a new <code>Body145</code>.
    * @alias module:model/Body145
    * @class
    * @param name {String} The name of the combined network
    * @param networkIds {Array.<String>} A list of the network IDs that will be combined. If an ID of a combined network is included in this list, the other networks in the list will be grouped into that network
    */

    constructor(name, networkIds) {
        
        
        this['name'] = name;
        this['networkIds'] = networkIds;
        
    }

    /**
    * Constructs a <code>Body145</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Body145} obj Optional instance to populate.
    * @return {module:model/Body145} The populated <code>Body145</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Body145();
                        
            
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('networkIds')) {
                obj['networkIds'] = ApiClient.convertToType(data['networkIds'], ['String']);
            }
            if (data.hasOwnProperty('enrollmentString')) {
                obj['enrollmentString'] = ApiClient.convertToType(data['enrollmentString'], 'String');
            }
        }
        return obj;
    }

    /**
    * The name of the combined network
    * @member {String} name
    */
    'name' = undefined;
    /**
    * A list of the network IDs that will be combined. If an ID of a combined network is included in this list, the other networks in the list will be grouped into that network
    * @member {Array.<String>} networkIds
    */
    'networkIds' = undefined;
    /**
    * A unique identifier which can be used for device enrollment or easy access through the Meraki SM Registration page or the Self Service Portal. Please note that changing this field may cause existing bookmarks to break. All networks that are part of this combined network will have their enrollment string appended by '-network_type'. If left empty, all exisitng enrollment strings will be deleted.
    * @member {String} enrollmentString
    */
    'enrollmentString' = undefined;




}
