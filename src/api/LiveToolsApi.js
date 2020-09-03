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
import Body1 from '../model/Body1';
import Body9 from '../model/Body9';

/**
* LiveTools service.
* @module api/LiveToolsApi
* @version 1.0.0
*/
export default class LiveToolsApi {

    /**
    * Constructs a new LiveToolsApi. 
    * @alias module:api/LiveToolsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the blinkDeviceLeds operation.
     * @callback module:api/LiveToolsApi~blinkDeviceLedsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Blink the LEDs on a device
     * Blink the LEDs on a device
     * @param {Object} opts Optional parameters
     * @param {module:api/LiveToolsApi~blinkDeviceLedsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    blinkDeviceLeds(serial, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

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
        '/devices/{serial}/blinkLeds', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the cycleDeviceSwitchPorts operation.
     * @callback module:api/LiveToolsApi~cycleDeviceSwitchPortsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cycle a set of switch ports
     * Cycle a set of switch ports
     * @param {module:api/LiveToolsApi~cycleDeviceSwitchPortsCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the rebootDevice operation.
     * @callback module:api/LiveToolsApi~rebootDeviceCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reboot a device
     * Reboot a device
     * @param {module:api/LiveToolsApi~rebootDeviceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    rebootDevice(serial, callback) {
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
        '/devices/{serial}/reboot', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
