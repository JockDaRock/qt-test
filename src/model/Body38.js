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
* The Body38 model module.
* @module model/Body38
* @version 1.0.0
*/
export default class Body38 {
    /**
    * Constructs a new <code>Body38</code>.
    * @alias module:model/Body38
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Body38</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Body38} obj Optional instance to populate.
    * @return {module:model/Body38} The populated <code>Body38</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Body38();
                        
            
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('maxLatency')) {
                obj['maxLatency'] = ApiClient.convertToType(data['maxLatency'], 'Number');
            }
            if (data.hasOwnProperty('maxJitter')) {
                obj['maxJitter'] = ApiClient.convertToType(data['maxJitter'], 'Number');
            }
            if (data.hasOwnProperty('maxLossPercentage')) {
                obj['maxLossPercentage'] = ApiClient.convertToType(data['maxLossPercentage'], 'Number');
            }
        }
        return obj;
    }

    /**
    * Name of the custom performance class
    * @member {String} name
    */
    'name' = undefined;
    /**
    * Maximum latency in milliseconds
    * @member {Number} maxLatency
    */
    'maxLatency' = undefined;
    /**
    * Maximum jitter in milliseconds
    * @member {Number} maxJitter
    */
    'maxJitter' = undefined;
    /**
    * Maximum percentage of packet loss
    * @member {Number} maxLossPercentage
    */
    'maxLossPercentage' = undefined;




}