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

import ApiClient from "../ApiClient";
import Body10 from '../model/Body10';
import Body136 from '../model/Body136';
import Body31 from '../model/Body31';
import Body9 from '../model/Body9';

/**
* Ports service.
* @module api/PortsApi
* @version 1.0.0
*/
export default class PortsApi {

    /**
    * Constructs a new PortsApi. 
    * @alias module:api/PortsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the cycleDeviceSwitchPorts operation.
     * @callback module:api/PortsApi~cycleDeviceSwitchPortsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cycle a set of switch ports
     * Cycle a set of switch ports
     * @param {module:api/PortsApi~cycleDeviceSwitchPortsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    cycleDeviceSwitchPorts(body, serial, callback) {
      let postBody = body;

      let pathParams = {
        'serial': serial
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['meraki_api_key'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/devices/{serial}/switch/ports/cycle', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getDeviceSwitchPort operation.
     * @callback module:api/PortsApi~getDeviceSwitchPortCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return a switch port
     * Return a switch port
     * @param {module:api/PortsApi~getDeviceSwitchPortCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getDeviceSwitchPort(serial, portId, callback) {
      let postBody = null;

      let pathParams = {
        'serial': serial,
        'portId': portId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['meraki_api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/devices/{serial}/switch/ports/{portId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getDeviceSwitchPorts operation.
     * @callback module:api/PortsApi~getDeviceSwitchPortsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List the switch ports for a switch
     * List the switch ports for a switch
     * @param {module:api/PortsApi~getDeviceSwitchPortsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getDeviceSwitchPorts(serial, callback) {
      let postBody = null;

      let pathParams = {
        'serial': serial
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['meraki_api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/devices/{serial}/switch/ports', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getDeviceSwitchPortsStatuses operation.
     * @callback module:api/PortsApi~getDeviceSwitchPortsStatusesCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return the status for all the ports of a switch
     * Return the status for all the ports of a switch
     * @param {Object} opts Optional parameters
     * @param {module:api/PortsApi~getDeviceSwitchPortsStatusesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getDeviceSwitchPortsStatuses(serial, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'serial': serial
      };
      let queryParams = {
        't0': opts['t0'],
        'timespan': opts['timespan']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['meraki_api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/devices/{serial}/switch/ports/statuses', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getDeviceSwitchPortsStatusesPackets operation.
     * @callback module:api/PortsApi~getDeviceSwitchPortsStatusesPacketsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return the packet counters for all the ports of a switch
     * Return the packet counters for all the ports of a switch
     * @param {Object} opts Optional parameters
     * @param {module:api/PortsApi~getDeviceSwitchPortsStatusesPacketsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getDeviceSwitchPortsStatusesPackets(serial, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'serial': serial
      };
      let queryParams = {
        't0': opts['t0'],
        'timespan': opts['timespan']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['meraki_api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/devices/{serial}/switch/ports/statuses/packets', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getNetworkAppliancePort operation.
     * @callback module:api/PortsApi~getNetworkAppliancePortCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return per-port VLAN settings for a single MX port.
     * Return per-port VLAN settings for a single MX port.
     * @param {module:api/PortsApi~getNetworkAppliancePortCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getNetworkAppliancePort(networkId, portId, callback) {
      let postBody = null;

      let pathParams = {
        'networkId': networkId,
        'portId': portId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['meraki_api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/networks/{networkId}/appliance/ports/{portId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getNetworkAppliancePorts operation.
     * @callback module:api/PortsApi~getNetworkAppliancePortsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List per-port VLAN settings for all ports of a MX.
     * List per-port VLAN settings for all ports of a MX.
     * @param {module:api/PortsApi~getNetworkAppliancePortsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getNetworkAppliancePorts(networkId, callback) {
      let postBody = null;

      let pathParams = {
        'networkId': networkId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['meraki_api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/networks/{networkId}/appliance/ports', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getOrganizationConfigTemplateSwitchProfilePort operation.
     * @callback module:api/PortsApi~getOrganizationConfigTemplateSwitchProfilePortCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return a switch profile port
     * Return a switch profile port
     * @param {module:api/PortsApi~getOrganizationConfigTemplateSwitchProfilePortCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getOrganizationConfigTemplateSwitchProfilePort(organizationId, configTemplateId, profileId, portId, callback) {
      let postBody = null;

      let pathParams = {
        'organizationId': organizationId,
        'configTemplateId': configTemplateId,
        'profileId': profileId,
        'portId': portId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['meraki_api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports/{portId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getOrganizationConfigTemplateSwitchProfilePorts operation.
     * @callback module:api/PortsApi~getOrganizationConfigTemplateSwitchProfilePortsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return all the ports of a switch profile
     * Return all the ports of a switch profile
     * @param {module:api/PortsApi~getOrganizationConfigTemplateSwitchProfilePortsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getOrganizationConfigTemplateSwitchProfilePorts(organizationId, configTemplateId, profileId, callback) {
      let postBody = null;

      let pathParams = {
        'organizationId': organizationId,
        'configTemplateId': configTemplateId,
        'profileId': profileId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['meraki_api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateDeviceSwitchPort operation.
     * @callback module:api/PortsApi~updateDeviceSwitchPortCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a switch port
     * Update a switch port
     * @param {Object} opts Optional parameters
     * @param {module:api/PortsApi~updateDeviceSwitchPortCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    updateDeviceSwitchPort(serial, portId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
        'serial': serial,
        'portId': portId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['meraki_api_key'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/devices/{serial}/switch/ports/{portId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateNetworkAppliancePort operation.
     * @callback module:api/PortsApi~updateNetworkAppliancePortCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the per-port VLAN settings for a single MX port.
     * Update the per-port VLAN settings for a single MX port.
     * @param {Object} opts Optional parameters
     * @param {module:api/PortsApi~updateNetworkAppliancePortCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    updateNetworkAppliancePort(networkId, portId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
        'networkId': networkId,
        'portId': portId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['meraki_api_key'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/networks/{networkId}/appliance/ports/{portId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateOrganizationConfigTemplateSwitchProfilePort operation.
     * @callback module:api/PortsApi~updateOrganizationConfigTemplateSwitchProfilePortCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a switch profile port
     * Update a switch profile port
     * @param {Object} opts Optional parameters
     * @param {module:api/PortsApi~updateOrganizationConfigTemplateSwitchProfilePortCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    updateOrganizationConfigTemplateSwitchProfilePort(organizationId, configTemplateId, profileId, portId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
        'organizationId': organizationId,
        'configTemplateId': configTemplateId,
        'profileId': profileId,
        'portId': portId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['meraki_api_key'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports/{portId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}