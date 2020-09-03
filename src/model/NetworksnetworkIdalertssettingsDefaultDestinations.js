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
* The NetworksnetworkIdalertssettingsDefaultDestinations model module.
* @module model/NetworksnetworkIdalertssettingsDefaultDestinations
* @version 1.0.0
*/
export default class NetworksnetworkIdalertssettingsDefaultDestinations {
    /**
    * Constructs a new <code>NetworksnetworkIdalertssettingsDefaultDestinations</code>.
    * The network-wide destinations for all alerts on the network.
    * @alias module:model/NetworksnetworkIdalertssettingsDefaultDestinations
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>NetworksnetworkIdalertssettingsDefaultDestinations</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/NetworksnetworkIdalertssettingsDefaultDestinations} obj Optional instance to populate.
    * @return {module:model/NetworksnetworkIdalertssettingsDefaultDestinations} The populated <code>NetworksnetworkIdalertssettingsDefaultDestinations</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworksnetworkIdalertssettingsDefaultDestinations();
                        
            
            if (data.hasOwnProperty('emails')) {
                obj['emails'] = ApiClient.convertToType(data['emails'], ['String']);
            }
            if (data.hasOwnProperty('allAdmins')) {
                obj['allAdmins'] = ApiClient.convertToType(data['allAdmins'], 'Boolean');
            }
            if (data.hasOwnProperty('snmp')) {
                obj['snmp'] = ApiClient.convertToType(data['snmp'], 'Boolean');
            }
            if (data.hasOwnProperty('httpServerIds')) {
                obj['httpServerIds'] = ApiClient.convertToType(data['httpServerIds'], ['String']);
            }
        }
        return obj;
    }

    /**
    * A list of emails that will recieve the alert(s).
    * @member {Array.<String>} emails
    */
    'emails' = undefined;
    /**
    * If true, then all network admins will receive emails.
    * @member {Boolean} allAdmins
    */
    'allAdmins' = undefined;
    /**
    * If true, then an SNMP trap will be sent if there is an SNMP trap server configured for this network.
    * @member {Boolean} snmp
    */
    'snmp' = undefined;
    /**
    * A list of HTTP server IDs to send a Webhook to
    * @member {Array.<String>} httpServerIds
    */
    'httpServerIds' = undefined;




}
