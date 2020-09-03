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
* The NetworksnetworkIdfloorPlansBottomLeftCorner model module.
* @module model/NetworksnetworkIdfloorPlansBottomLeftCorner
* @version 1.0.0
*/
export default class NetworksnetworkIdfloorPlansBottomLeftCorner {
    /**
    * Constructs a new <code>NetworksnetworkIdfloorPlansBottomLeftCorner</code>.
    * The longitude and latitude of the bottom left corner of your floor plan.
    * @alias module:model/NetworksnetworkIdfloorPlansBottomLeftCorner
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>NetworksnetworkIdfloorPlansBottomLeftCorner</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/NetworksnetworkIdfloorPlansBottomLeftCorner} obj Optional instance to populate.
    * @return {module:model/NetworksnetworkIdfloorPlansBottomLeftCorner} The populated <code>NetworksnetworkIdfloorPlansBottomLeftCorner</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworksnetworkIdfloorPlansBottomLeftCorner();
                        
            
            if (data.hasOwnProperty('lat')) {
                obj['lat'] = ApiClient.convertToType(data['lat'], 'Number');
            }
            if (data.hasOwnProperty('lng')) {
                obj['lng'] = ApiClient.convertToType(data['lng'], 'Number');
            }
        }
        return obj;
    }

    /**
    * Latitude
    * @member {Number} lat
    */
    'lat' = undefined;
    /**
    * Longitude
    * @member {Number} lng
    */
    'lng' = undefined;




}
