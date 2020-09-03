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
import NetworksnetworkIdappliancetrafficShapinguplinkSelectionValueDestination from './NetworksnetworkIdappliancetrafficShapinguplinkSelectionValueDestination';
import NetworksnetworkIdappliancetrafficShapinguplinkSelectionValueSource from './NetworksnetworkIdappliancetrafficShapinguplinkSelectionValueSource';

/**
* The NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue model module.
* @module model/NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue
* @version 1.0.0
*/
export default class NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue {
    /**
    * Constructs a new <code>NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue</code>.
    * Value object of this traffic filter
    * @alias module:model/NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue
    * @class
    * @param source {module:model/NetworksnetworkIdappliancetrafficShapinguplinkSelectionValueSource} 
    * @param destination {module:model/NetworksnetworkIdappliancetrafficShapinguplinkSelectionValueDestination} 
    */

    constructor(source, destination) {
        
        
        this['source'] = source;
        this['destination'] = destination;
        
    }

    /**
    * Constructs a <code>NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue} obj Optional instance to populate.
    * @return {module:model/NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue} The populated <code>NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue();
                        
            
            if (data.hasOwnProperty('protocol')) {
                obj['protocol'] = ApiClient.convertToType(data['protocol'], 'String');
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = NetworksnetworkIdappliancetrafficShapinguplinkSelectionValueSource.constructFromObject(data['source']);
            }
            if (data.hasOwnProperty('destination')) {
                obj['destination'] = NetworksnetworkIdappliancetrafficShapinguplinkSelectionValueDestination.constructFromObject(data['destination']);
            }
        }
        return obj;
    }

    /**
    * Protocol of this custom type traffic filter. Must be one of: 'tcp', 'udp' or 'any'
    * @member {module:model/NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue.ProtocolEnum} protocol
    */
    'protocol' = undefined;
    /**
    * @member {module:model/NetworksnetworkIdappliancetrafficShapinguplinkSelectionValueSource} source
    */
    'source' = undefined;
    /**
    * @member {module:model/NetworksnetworkIdappliancetrafficShapinguplinkSelectionValueDestination} destination
    */
    'destination' = undefined;



    /**
    * Allowed values for the <code>protocol</code> property.
    * @enum {String}
    * @readonly
    */
    static ProtocolEnum = {
        /**
         * value: "tcp"
         * @const
         */
        "tcp": "tcp",
        /**
         * value: "udp"
         * @const
         */
        "udp": "udp",
        /**
         * value: "any"
         * @const
         */
        "any": "any"    };

}