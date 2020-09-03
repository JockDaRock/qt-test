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
import NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue1Destination from './NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue1Destination';
import NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue1Source from './NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue1Source';

/**
* The NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue1 model module.
* @module model/NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue1
* @version 1.0.0
*/
export default class NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue1 {
    /**
    * Constructs a new <code>NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue1</code>.
    * Value object of this traffic filter
    * @alias module:model/NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue1
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue1</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue1} obj Optional instance to populate.
    * @return {module:model/NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue1} The populated <code>NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue1</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue1();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('protocol')) {
                obj['protocol'] = ApiClient.convertToType(data['protocol'], 'String');
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue1Source.constructFromObject(data['source']);
            }
            if (data.hasOwnProperty('destination')) {
                obj['destination'] = NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue1Destination.constructFromObject(data['destination']);
            }
        }
        return obj;
    }

    /**
    * ID of this applicationCategory or application type traffic filter. E.g.: \"meraki:layer7/category/1\", \"meraki:layer7/application/4\"
    * @member {String} id
    */
    'id' = undefined;
    /**
    * Protocol of this custom type traffic filter. Must be one of: 'tcp', 'udp', 'icmp' or 'any'
    * @member {module:model/NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue1.ProtocolEnum} protocol
    */
    'protocol' = undefined;
    /**
    * @member {module:model/NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue1Source} source
    */
    'source' = undefined;
    /**
    * @member {module:model/NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue1Destination} destination
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
         * value: "icmp"
         * @const
         */
        "icmp": "icmp",
        /**
         * value: "any"
         * @const
         */
        "any": "any"    };

}
