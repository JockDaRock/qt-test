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
import Body100 from '../model/Body100';
import Body14 from '../model/Body14';
import Body15 from '../model/Body15';
import Body35 from '../model/Body35';
import Body36 from '../model/Body36';
import Body99 from '../model/Body99';

/**
* StaticRoutes service.
* @module api/StaticRoutesApi
* @version 1.0.0
*/
export default class StaticRoutesApi {

    /**
    * Constructs a new StaticRoutesApi. 
    * @alias module:api/StaticRoutesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the createDeviceSwitchRoutingStaticRoute operation.
     * @callback module:api/StaticRoutesApi~createDeviceSwitchRoutingStaticRouteCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a layer 3 static route for a switch
     * Create a layer 3 static route for a switch
     * @param {module:api/StaticRoutesApi~createDeviceSwitchRoutingStaticRouteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    createDeviceSwitchRoutingStaticRoute(body, serial, callback) {
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
        '/devices/{serial}/switch/routing/staticRoutes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the createNetworkApplianceStaticRoute operation.
     * @callback module:api/StaticRoutesApi~createNetworkApplianceStaticRouteCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a static route for an MX or teleworker network
     * Add a static route for an MX or teleworker network
     * @param {module:api/StaticRoutesApi~createNetworkApplianceStaticRouteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    createNetworkApplianceStaticRoute(body, networkId, callback) {
      let postBody = body;

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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/networks/{networkId}/appliance/staticRoutes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the createNetworkSwitchStackRoutingStaticRoute operation.
     * @callback module:api/StaticRoutesApi~createNetworkSwitchStackRoutingStaticRouteCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a layer 3 static route for a switch stack
     * Create a layer 3 static route for a switch stack
     * @param {module:api/StaticRoutesApi~createNetworkSwitchStackRoutingStaticRouteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    createNetworkSwitchStackRoutingStaticRoute(body, networkId, switchStackId, callback) {
      let postBody = body;

      let pathParams = {
        'networkId': networkId,
        'switchStackId': switchStackId
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
        '/networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the deleteDeviceSwitchRoutingStaticRoute operation.
     * @callback module:api/StaticRoutesApi~deleteDeviceSwitchRoutingStaticRouteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a layer 3 static route for a switch
     * Delete a layer 3 static route for a switch
     * @param {module:api/StaticRoutesApi~deleteDeviceSwitchRoutingStaticRouteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteDeviceSwitchRoutingStaticRoute(serial, staticRouteId, callback) {
      let postBody = null;

      let pathParams = {
        'serial': serial,
        'staticRouteId': staticRouteId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['meraki_api_key'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/devices/{serial}/switch/routing/staticRoutes/{staticRouteId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the deleteNetworkApplianceStaticRoute operation.
     * @callback module:api/StaticRoutesApi~deleteNetworkApplianceStaticRouteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a static route from an MX or teleworker network
     * Delete a static route from an MX or teleworker network
     * @param {module:api/StaticRoutesApi~deleteNetworkApplianceStaticRouteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteNetworkApplianceStaticRoute(networkId, staticRouteId, callback) {
      let postBody = null;

      let pathParams = {
        'networkId': networkId,
        'staticRouteId': staticRouteId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['meraki_api_key'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/networks/{networkId}/appliance/staticRoutes/{staticRouteId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the deleteNetworkSwitchStackRoutingStaticRoute operation.
     * @callback module:api/StaticRoutesApi~deleteNetworkSwitchStackRoutingStaticRouteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a layer 3 static route for a switch stack
     * Delete a layer 3 static route for a switch stack
     * @param {module:api/StaticRoutesApi~deleteNetworkSwitchStackRoutingStaticRouteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteNetworkSwitchStackRoutingStaticRoute(networkId, switchStackId, staticRouteId, callback) {
      let postBody = null;

      let pathParams = {
        'networkId': networkId,
        'switchStackId': switchStackId,
        'staticRouteId': staticRouteId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['meraki_api_key'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes/{staticRouteId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getDeviceSwitchRoutingStaticRoute operation.
     * @callback module:api/StaticRoutesApi~getDeviceSwitchRoutingStaticRouteCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return a layer 3 static route for a switch
     * Return a layer 3 static route for a switch
     * @param {module:api/StaticRoutesApi~getDeviceSwitchRoutingStaticRouteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getDeviceSwitchRoutingStaticRoute(serial, staticRouteId, callback) {
      let postBody = null;

      let pathParams = {
        'serial': serial,
        'staticRouteId': staticRouteId
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
        '/devices/{serial}/switch/routing/staticRoutes/{staticRouteId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getDeviceSwitchRoutingStaticRoutes operation.
     * @callback module:api/StaticRoutesApi~getDeviceSwitchRoutingStaticRoutesCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List layer 3 static routes for a switch
     * List layer 3 static routes for a switch
     * @param {module:api/StaticRoutesApi~getDeviceSwitchRoutingStaticRoutesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getDeviceSwitchRoutingStaticRoutes(serial, callback) {
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
        '/devices/{serial}/switch/routing/staticRoutes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getNetworkApplianceStaticRoute operation.
     * @callback module:api/StaticRoutesApi~getNetworkApplianceStaticRouteCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return a static route for an MX or teleworker network
     * Return a static route for an MX or teleworker network
     * @param {module:api/StaticRoutesApi~getNetworkApplianceStaticRouteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getNetworkApplianceStaticRoute(networkId, staticRouteId, callback) {
      let postBody = null;

      let pathParams = {
        'networkId': networkId,
        'staticRouteId': staticRouteId
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
        '/networks/{networkId}/appliance/staticRoutes/{staticRouteId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getNetworkApplianceStaticRoutes operation.
     * @callback module:api/StaticRoutesApi~getNetworkApplianceStaticRoutesCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List the static routes for an MX or teleworker network
     * List the static routes for an MX or teleworker network
     * @param {module:api/StaticRoutesApi~getNetworkApplianceStaticRoutesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getNetworkApplianceStaticRoutes(networkId, callback) {
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
        '/networks/{networkId}/appliance/staticRoutes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getNetworkSwitchStackRoutingStaticRoute operation.
     * @callback module:api/StaticRoutesApi~getNetworkSwitchStackRoutingStaticRouteCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return a layer 3 static route for a switch stack
     * Return a layer 3 static route for a switch stack
     * @param {module:api/StaticRoutesApi~getNetworkSwitchStackRoutingStaticRouteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getNetworkSwitchStackRoutingStaticRoute(networkId, switchStackId, staticRouteId, callback) {
      let postBody = null;

      let pathParams = {
        'networkId': networkId,
        'switchStackId': switchStackId,
        'staticRouteId': staticRouteId
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
        '/networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes/{staticRouteId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getNetworkSwitchStackRoutingStaticRoutes operation.
     * @callback module:api/StaticRoutesApi~getNetworkSwitchStackRoutingStaticRoutesCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List layer 3 static routes for a switch stack
     * List layer 3 static routes for a switch stack
     * @param {module:api/StaticRoutesApi~getNetworkSwitchStackRoutingStaticRoutesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getNetworkSwitchStackRoutingStaticRoutes(networkId, switchStackId, callback) {
      let postBody = null;

      let pathParams = {
        'networkId': networkId,
        'switchStackId': switchStackId
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
        '/networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateDeviceSwitchRoutingStaticRoute operation.
     * @callback module:api/StaticRoutesApi~updateDeviceSwitchRoutingStaticRouteCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a layer 3 static route for a switch
     * Update a layer 3 static route for a switch
     * @param {Object} opts Optional parameters
     * @param {module:api/StaticRoutesApi~updateDeviceSwitchRoutingStaticRouteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    updateDeviceSwitchRoutingStaticRoute(serial, staticRouteId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
        'serial': serial,
        'staticRouteId': staticRouteId
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
        '/devices/{serial}/switch/routing/staticRoutes/{staticRouteId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateNetworkApplianceStaticRoute operation.
     * @callback module:api/StaticRoutesApi~updateNetworkApplianceStaticRouteCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a static route for an MX or teleworker network
     * Update a static route for an MX or teleworker network
     * @param {Object} opts Optional parameters
     * @param {module:api/StaticRoutesApi~updateNetworkApplianceStaticRouteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    updateNetworkApplianceStaticRoute(networkId, staticRouteId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
        'networkId': networkId,
        'staticRouteId': staticRouteId
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
        '/networks/{networkId}/appliance/staticRoutes/{staticRouteId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateNetworkSwitchStackRoutingStaticRoute operation.
     * @callback module:api/StaticRoutesApi~updateNetworkSwitchStackRoutingStaticRouteCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a layer 3 static route for a switch stack
     * Update a layer 3 static route for a switch stack
     * @param {Object} opts Optional parameters
     * @param {module:api/StaticRoutesApi~updateNetworkSwitchStackRoutingStaticRouteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    updateNetworkSwitchStackRoutingStaticRoute(networkId, switchStackId, staticRouteId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
        'networkId': networkId,
        'switchStackId': switchStackId,
        'staticRouteId': staticRouteId
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
        '/networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes/{staticRouteId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}