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
* The Body87 model module.
* @module model/Body87
* @version 1.0.0
*/
export default class Body87 {
    /**
    * Constructs a new <code>Body87</code>.
    * @alias module:model/Body87
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Body87</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Body87} obj Optional instance to populate.
    * @return {module:model/Body87} The populated <code>Body87</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Body87();
                        
            
            if (data.hasOwnProperty('vlan')) {
                obj['vlan'] = ApiClient.convertToType(data['vlan'], 'Number');
            }
            if (data.hasOwnProperty('protocol')) {
                obj['protocol'] = ApiClient.convertToType(data['protocol'], 'String');
            }
            if (data.hasOwnProperty('srcPort')) {
                obj['srcPort'] = ApiClient.convertToType(data['srcPort'], 'Number');
            }
            if (data.hasOwnProperty('srcPortRange')) {
                obj['srcPortRange'] = ApiClient.convertToType(data['srcPortRange'], 'String');
            }
            if (data.hasOwnProperty('dstPort')) {
                obj['dstPort'] = ApiClient.convertToType(data['dstPort'], 'Number');
            }
            if (data.hasOwnProperty('dstPortRange')) {
                obj['dstPortRange'] = ApiClient.convertToType(data['dstPortRange'], 'String');
            }
            if (data.hasOwnProperty('dscp')) {
                obj['dscp'] = ApiClient.convertToType(data['dscp'], 'Number');
            }
        }
        return obj;
    }

    /**
    * The VLAN of the incoming packet. A null value will match any VLAN.
    * @member {Number} vlan
    */
    'vlan' = undefined;
    /**
    * The protocol of the incoming packet. Can be one of \"ANY\", \"TCP\" or \"UDP\". Default value is \"ANY\".
    * @member {module:model/Body87.ProtocolEnum} protocol
    */
    'protocol' = undefined;
    /**
    * The source port of the incoming packet. Applicable only if protocol is TCP or UDP.
    * @member {Number} srcPort
    */
    'srcPort' = undefined;
    /**
    * The source port range of the incoming packet. Applicable only if protocol is set to TCP or UDP. Example: 70-80
    * @member {String} srcPortRange
    */
    'srcPortRange' = undefined;
    /**
    * The destination port of the incoming packet. Applicable only if protocol is TCP or UDP.
    * @member {Number} dstPort
    */
    'dstPort' = undefined;
    /**
    * The destination port range of the incoming packet. Applicable only if protocol is set to TCP or UDP. Example: 70-80
    * @member {String} dstPortRange
    */
    'dstPortRange' = undefined;
    /**
    * DSCP tag that should be assigned to incoming packet. Set this to -1 to trust incoming DSCP. Default value is 0.
    * @member {Number} dscp
    */
    'dscp' = undefined;



    /**
    * Allowed values for the <code>protocol</code> property.
    * @enum {String}
    * @readonly
    */
    static ProtocolEnum = {
        /**
         * value: "ANY"
         * @const
         */
        "ANY": "ANY",
        /**
         * value: "TCP"
         * @const
         */
        "TCP": "TCP",
        /**
         * value: "UDP"
         * @const
         */
        "UDP": "UDP"    };

}
