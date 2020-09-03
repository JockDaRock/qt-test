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
* The NetworksnetworkIdfloorPlansBottomRightCorner model module.
* @module model/NetworksnetworkIdfloorPlansBottomRightCorner
* @version 1.0.0
*/
export default class NetworksnetworkIdfloorPlansBottomRightCorner {
    /**
    * Constructs a new <code>NetworksnetworkIdfloorPlansBottomRightCorner</code>.
    * The longitude and latitude of the bottom right corner of your floor plan.
    * @alias module:model/NetworksnetworkIdfloorPlansBottomRightCorner
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>NetworksnetworkIdfloorPlansBottomRightCorner</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/NetworksnetworkIdfloorPlansBottomRightCorner} obj Optional instance to populate.
    * @return {module:model/NetworksnetworkIdfloorPlansBottomRightCorner} The populated <code>NetworksnetworkIdfloorPlansBottomRightCorner</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworksnetworkIdfloorPlansBottomRightCorner();
                        
            
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
