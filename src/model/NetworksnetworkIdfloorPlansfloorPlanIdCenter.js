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
* The NetworksnetworkIdfloorPlansfloorPlanIdCenter model module.
* @module model/NetworksnetworkIdfloorPlansfloorPlanIdCenter
* @version 1.0.0
*/
export default class NetworksnetworkIdfloorPlansfloorPlanIdCenter {
    /**
    * Constructs a new <code>NetworksnetworkIdfloorPlansfloorPlanIdCenter</code>.
    * The longitude and latitude of the center of your floor plan. If you want to change the geolocation data of your floor plan, either the &#x27;center&#x27; or two adjacent corners (e.g. &#x27;topLeftCorner&#x27; and &#x27;bottomLeftCorner&#x27;) must be specified. If &#x27;center&#x27; is specified, the floor plan is placed over that point with no rotation. If two adjacent corners are specified, the floor plan is rotated to line up with the two specified points. The aspect ratio of the floor plan&#x27;s image is preserved regardless of which corners/center are specified. (This means if that more than two corners are specified, only two corners may be used to preserve the floor plan&#x27;s aspect ratio.). No two points can have the same latitude, longitude pair.
    * @alias module:model/NetworksnetworkIdfloorPlansfloorPlanIdCenter
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>NetworksnetworkIdfloorPlansfloorPlanIdCenter</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/NetworksnetworkIdfloorPlansfloorPlanIdCenter} obj Optional instance to populate.
    * @return {module:model/NetworksnetworkIdfloorPlansfloorPlanIdCenter} The populated <code>NetworksnetworkIdfloorPlansfloorPlanIdCenter</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworksnetworkIdfloorPlansfloorPlanIdCenter();
                        
            
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