/*
 * Meraki Dashboard API
 * The Cisco Meraki Dashboard API is a modern REST API based on the OpenAPI specification.  > Date: 02 September, 2020 > > [What's New](https://meraki.io/whats-new/)  ---  [API Documentation](https://meraki.io/api)  [Community Support](https://meraki.io/community)  [Meraki Homepage](https://www.meraki.com) 
 *
 * OpenAPI spec version: 1.1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.15
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CreateDeviceSwitchRoutingInterface', 'model/CreateNetworkSwitchStackRoutingInterface', 'model/UpdateDeviceSwitchRoutingInterface', 'model/UpdateDeviceSwitchRoutingInterfaceDhcp', 'model/UpdateNetworkSwitchStackRoutingInterface', 'model/UpdateNetworkSwitchStackRoutingInterfaceDhcp'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateDeviceSwitchRoutingInterface'), require('../model/CreateNetworkSwitchStackRoutingInterface'), require('../model/UpdateDeviceSwitchRoutingInterface'), require('../model/UpdateDeviceSwitchRoutingInterfaceDhcp'), require('../model/UpdateNetworkSwitchStackRoutingInterface'), require('../model/UpdateNetworkSwitchStackRoutingInterfaceDhcp'));
  } else {
    // Browser globals (root is window)
    if (!root.MerakiDashboardApi) {
      root.MerakiDashboardApi = {};
    }
    root.MerakiDashboardApi.InterfacesApi = factory(root.MerakiDashboardApi.ApiClient, root.MerakiDashboardApi.CreateDeviceSwitchRoutingInterface, root.MerakiDashboardApi.CreateNetworkSwitchStackRoutingInterface, root.MerakiDashboardApi.UpdateDeviceSwitchRoutingInterface, root.MerakiDashboardApi.UpdateDeviceSwitchRoutingInterfaceDhcp, root.MerakiDashboardApi.UpdateNetworkSwitchStackRoutingInterface, root.MerakiDashboardApi.UpdateNetworkSwitchStackRoutingInterfaceDhcp);
  }
}(this, function(ApiClient, CreateDeviceSwitchRoutingInterface, CreateNetworkSwitchStackRoutingInterface, UpdateDeviceSwitchRoutingInterface, UpdateDeviceSwitchRoutingInterfaceDhcp, UpdateNetworkSwitchStackRoutingInterface, UpdateNetworkSwitchStackRoutingInterfaceDhcp) {
  'use strict';

  /**
   * Interfaces service.
   * @module api/InterfacesApi
   * @version 1.1.0
   */

  /**
   * Constructs a new InterfacesApi. 
   * @alias module:api/InterfacesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createDeviceSwitchRoutingInterface operation.
     * @callback module:api/InterfacesApi~createDeviceSwitchRoutingInterfaceCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a layer 3 interface for a switch
     * Create a layer 3 interface for a switch
     * @param {String} serial 
     * @param {module:model/CreateDeviceSwitchRoutingInterface} createDeviceSwitchRoutingInterface 
     * @param {module:api/InterfacesApi~createDeviceSwitchRoutingInterfaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.createDeviceSwitchRoutingInterface = function(serial, createDeviceSwitchRoutingInterface, callback) {
      var postBody = createDeviceSwitchRoutingInterface;

      // verify the required parameter 'serial' is set
      if (serial === undefined || serial === null) {
        throw new Error("Missing the required parameter 'serial' when calling createDeviceSwitchRoutingInterface");
      }

      // verify the required parameter 'createDeviceSwitchRoutingInterface' is set
      if (createDeviceSwitchRoutingInterface === undefined || createDeviceSwitchRoutingInterface === null) {
        throw new Error("Missing the required parameter 'createDeviceSwitchRoutingInterface' when calling createDeviceSwitchRoutingInterface");
      }


      var pathParams = {
        'serial': serial
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['meraki_api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/devices/{serial}/switch/routing/interfaces', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createNetworkSwitchStackRoutingInterface operation.
     * @callback module:api/InterfacesApi~createNetworkSwitchStackRoutingInterfaceCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a layer 3 interface for a switch stack
     * Create a layer 3 interface for a switch stack
     * @param {String} networkId 
     * @param {String} switchStackId 
     * @param {module:model/CreateNetworkSwitchStackRoutingInterface} createNetworkSwitchStackRoutingInterface 
     * @param {module:api/InterfacesApi~createNetworkSwitchStackRoutingInterfaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.createNetworkSwitchStackRoutingInterface = function(networkId, switchStackId, createNetworkSwitchStackRoutingInterface, callback) {
      var postBody = createNetworkSwitchStackRoutingInterface;

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling createNetworkSwitchStackRoutingInterface");
      }

      // verify the required parameter 'switchStackId' is set
      if (switchStackId === undefined || switchStackId === null) {
        throw new Error("Missing the required parameter 'switchStackId' when calling createNetworkSwitchStackRoutingInterface");
      }

      // verify the required parameter 'createNetworkSwitchStackRoutingInterface' is set
      if (createNetworkSwitchStackRoutingInterface === undefined || createNetworkSwitchStackRoutingInterface === null) {
        throw new Error("Missing the required parameter 'createNetworkSwitchStackRoutingInterface' when calling createNetworkSwitchStackRoutingInterface");
      }


      var pathParams = {
        'networkId': networkId,
        'switchStackId': switchStackId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['meraki_api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteDeviceSwitchRoutingInterface operation.
     * @callback module:api/InterfacesApi~deleteDeviceSwitchRoutingInterfaceCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a layer 3 interface from the switch
     * Delete a layer 3 interface from the switch
     * @param {String} serial 
     * @param {String} interfaceId 
     * @param {module:api/InterfacesApi~deleteDeviceSwitchRoutingInterfaceCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteDeviceSwitchRoutingInterface = function(serial, interfaceId, callback) {
      var postBody = null;

      // verify the required parameter 'serial' is set
      if (serial === undefined || serial === null) {
        throw new Error("Missing the required parameter 'serial' when calling deleteDeviceSwitchRoutingInterface");
      }

      // verify the required parameter 'interfaceId' is set
      if (interfaceId === undefined || interfaceId === null) {
        throw new Error("Missing the required parameter 'interfaceId' when calling deleteDeviceSwitchRoutingInterface");
      }


      var pathParams = {
        'serial': serial,
        'interfaceId': interfaceId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['meraki_api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/devices/{serial}/switch/routing/interfaces/{interfaceId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteNetworkSwitchStackRoutingInterface operation.
     * @callback module:api/InterfacesApi~deleteNetworkSwitchStackRoutingInterfaceCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a layer 3 interface from a switch stack
     * Delete a layer 3 interface from a switch stack
     * @param {String} networkId 
     * @param {String} switchStackId 
     * @param {String} interfaceId 
     * @param {module:api/InterfacesApi~deleteNetworkSwitchStackRoutingInterfaceCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteNetworkSwitchStackRoutingInterface = function(networkId, switchStackId, interfaceId, callback) {
      var postBody = null;

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling deleteNetworkSwitchStackRoutingInterface");
      }

      // verify the required parameter 'switchStackId' is set
      if (switchStackId === undefined || switchStackId === null) {
        throw new Error("Missing the required parameter 'switchStackId' when calling deleteNetworkSwitchStackRoutingInterface");
      }

      // verify the required parameter 'interfaceId' is set
      if (interfaceId === undefined || interfaceId === null) {
        throw new Error("Missing the required parameter 'interfaceId' when calling deleteNetworkSwitchStackRoutingInterface");
      }


      var pathParams = {
        'networkId': networkId,
        'switchStackId': switchStackId,
        'interfaceId': interfaceId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['meraki_api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDeviceSwitchRoutingInterface operation.
     * @callback module:api/InterfacesApi~getDeviceSwitchRoutingInterfaceCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return a layer 3 interface for a switch
     * Return a layer 3 interface for a switch
     * @param {String} serial 
     * @param {String} interfaceId 
     * @param {module:api/InterfacesApi~getDeviceSwitchRoutingInterfaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getDeviceSwitchRoutingInterface = function(serial, interfaceId, callback) {
      var postBody = null;

      // verify the required parameter 'serial' is set
      if (serial === undefined || serial === null) {
        throw new Error("Missing the required parameter 'serial' when calling getDeviceSwitchRoutingInterface");
      }

      // verify the required parameter 'interfaceId' is set
      if (interfaceId === undefined || interfaceId === null) {
        throw new Error("Missing the required parameter 'interfaceId' when calling getDeviceSwitchRoutingInterface");
      }


      var pathParams = {
        'serial': serial,
        'interfaceId': interfaceId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['meraki_api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/devices/{serial}/switch/routing/interfaces/{interfaceId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDeviceSwitchRoutingInterfaceDhcp operation.
     * @callback module:api/InterfacesApi~getDeviceSwitchRoutingInterfaceDhcpCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return a layer 3 interface DHCP configuration for a switch
     * Return a layer 3 interface DHCP configuration for a switch
     * @param {String} serial 
     * @param {String} interfaceId 
     * @param {module:api/InterfacesApi~getDeviceSwitchRoutingInterfaceDhcpCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getDeviceSwitchRoutingInterfaceDhcp = function(serial, interfaceId, callback) {
      var postBody = null;

      // verify the required parameter 'serial' is set
      if (serial === undefined || serial === null) {
        throw new Error("Missing the required parameter 'serial' when calling getDeviceSwitchRoutingInterfaceDhcp");
      }

      // verify the required parameter 'interfaceId' is set
      if (interfaceId === undefined || interfaceId === null) {
        throw new Error("Missing the required parameter 'interfaceId' when calling getDeviceSwitchRoutingInterfaceDhcp");
      }


      var pathParams = {
        'serial': serial,
        'interfaceId': interfaceId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['meraki_api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/devices/{serial}/switch/routing/interfaces/{interfaceId}/dhcp', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDeviceSwitchRoutingInterfaces operation.
     * @callback module:api/InterfacesApi~getDeviceSwitchRoutingInterfacesCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List layer 3 interfaces for a switch
     * List layer 3 interfaces for a switch
     * @param {String} serial 
     * @param {module:api/InterfacesApi~getDeviceSwitchRoutingInterfacesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getDeviceSwitchRoutingInterfaces = function(serial, callback) {
      var postBody = null;

      // verify the required parameter 'serial' is set
      if (serial === undefined || serial === null) {
        throw new Error("Missing the required parameter 'serial' when calling getDeviceSwitchRoutingInterfaces");
      }


      var pathParams = {
        'serial': serial
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['meraki_api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/devices/{serial}/switch/routing/interfaces', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getNetworkSwitchStackRoutingInterface operation.
     * @callback module:api/InterfacesApi~getNetworkSwitchStackRoutingInterfaceCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return a layer 3 interface from a switch stack
     * Return a layer 3 interface from a switch stack
     * @param {String} networkId 
     * @param {String} switchStackId 
     * @param {String} interfaceId 
     * @param {module:api/InterfacesApi~getNetworkSwitchStackRoutingInterfaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getNetworkSwitchStackRoutingInterface = function(networkId, switchStackId, interfaceId, callback) {
      var postBody = null;

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling getNetworkSwitchStackRoutingInterface");
      }

      // verify the required parameter 'switchStackId' is set
      if (switchStackId === undefined || switchStackId === null) {
        throw new Error("Missing the required parameter 'switchStackId' when calling getNetworkSwitchStackRoutingInterface");
      }

      // verify the required parameter 'interfaceId' is set
      if (interfaceId === undefined || interfaceId === null) {
        throw new Error("Missing the required parameter 'interfaceId' when calling getNetworkSwitchStackRoutingInterface");
      }


      var pathParams = {
        'networkId': networkId,
        'switchStackId': switchStackId,
        'interfaceId': interfaceId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['meraki_api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getNetworkSwitchStackRoutingInterfaceDhcp operation.
     * @callback module:api/InterfacesApi~getNetworkSwitchStackRoutingInterfaceDhcpCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return a layer 3 interface DHCP configuration for a switch stack
     * Return a layer 3 interface DHCP configuration for a switch stack
     * @param {String} networkId 
     * @param {String} switchStackId 
     * @param {String} interfaceId 
     * @param {module:api/InterfacesApi~getNetworkSwitchStackRoutingInterfaceDhcpCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getNetworkSwitchStackRoutingInterfaceDhcp = function(networkId, switchStackId, interfaceId, callback) {
      var postBody = null;

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling getNetworkSwitchStackRoutingInterfaceDhcp");
      }

      // verify the required parameter 'switchStackId' is set
      if (switchStackId === undefined || switchStackId === null) {
        throw new Error("Missing the required parameter 'switchStackId' when calling getNetworkSwitchStackRoutingInterfaceDhcp");
      }

      // verify the required parameter 'interfaceId' is set
      if (interfaceId === undefined || interfaceId === null) {
        throw new Error("Missing the required parameter 'interfaceId' when calling getNetworkSwitchStackRoutingInterfaceDhcp");
      }


      var pathParams = {
        'networkId': networkId,
        'switchStackId': switchStackId,
        'interfaceId': interfaceId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['meraki_api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}/dhcp', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getNetworkSwitchStackRoutingInterfaces operation.
     * @callback module:api/InterfacesApi~getNetworkSwitchStackRoutingInterfacesCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List layer 3 interfaces for a switch stack
     * List layer 3 interfaces for a switch stack
     * @param {String} networkId 
     * @param {String} switchStackId 
     * @param {module:api/InterfacesApi~getNetworkSwitchStackRoutingInterfacesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getNetworkSwitchStackRoutingInterfaces = function(networkId, switchStackId, callback) {
      var postBody = null;

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling getNetworkSwitchStackRoutingInterfaces");
      }

      // verify the required parameter 'switchStackId' is set
      if (switchStackId === undefined || switchStackId === null) {
        throw new Error("Missing the required parameter 'switchStackId' when calling getNetworkSwitchStackRoutingInterfaces");
      }


      var pathParams = {
        'networkId': networkId,
        'switchStackId': switchStackId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['meraki_api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateDeviceSwitchRoutingInterface operation.
     * @callback module:api/InterfacesApi~updateDeviceSwitchRoutingInterfaceCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a layer 3 interface for a switch
     * Update a layer 3 interface for a switch
     * @param {String} serial 
     * @param {String} interfaceId 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateDeviceSwitchRoutingInterface} opts.updateDeviceSwitchRoutingInterface 
     * @param {module:api/InterfacesApi~updateDeviceSwitchRoutingInterfaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.updateDeviceSwitchRoutingInterface = function(serial, interfaceId, opts, callback) {
      opts = opts || {};
      var postBody = opts['updateDeviceSwitchRoutingInterface'];

      // verify the required parameter 'serial' is set
      if (serial === undefined || serial === null) {
        throw new Error("Missing the required parameter 'serial' when calling updateDeviceSwitchRoutingInterface");
      }

      // verify the required parameter 'interfaceId' is set
      if (interfaceId === undefined || interfaceId === null) {
        throw new Error("Missing the required parameter 'interfaceId' when calling updateDeviceSwitchRoutingInterface");
      }


      var pathParams = {
        'serial': serial,
        'interfaceId': interfaceId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['meraki_api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/devices/{serial}/switch/routing/interfaces/{interfaceId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateDeviceSwitchRoutingInterfaceDhcp operation.
     * @callback module:api/InterfacesApi~updateDeviceSwitchRoutingInterfaceDhcpCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a layer 3 interface DHCP configuration for a switch
     * Update a layer 3 interface DHCP configuration for a switch
     * @param {String} serial 
     * @param {String} interfaceId 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateDeviceSwitchRoutingInterfaceDhcp} opts.updateDeviceSwitchRoutingInterfaceDhcp 
     * @param {module:api/InterfacesApi~updateDeviceSwitchRoutingInterfaceDhcpCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.updateDeviceSwitchRoutingInterfaceDhcp = function(serial, interfaceId, opts, callback) {
      opts = opts || {};
      var postBody = opts['updateDeviceSwitchRoutingInterfaceDhcp'];

      // verify the required parameter 'serial' is set
      if (serial === undefined || serial === null) {
        throw new Error("Missing the required parameter 'serial' when calling updateDeviceSwitchRoutingInterfaceDhcp");
      }

      // verify the required parameter 'interfaceId' is set
      if (interfaceId === undefined || interfaceId === null) {
        throw new Error("Missing the required parameter 'interfaceId' when calling updateDeviceSwitchRoutingInterfaceDhcp");
      }


      var pathParams = {
        'serial': serial,
        'interfaceId': interfaceId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['meraki_api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/devices/{serial}/switch/routing/interfaces/{interfaceId}/dhcp', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateNetworkSwitchStackRoutingInterface operation.
     * @callback module:api/InterfacesApi~updateNetworkSwitchStackRoutingInterfaceCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a layer 3 interface for a switch stack
     * Update a layer 3 interface for a switch stack
     * @param {String} networkId 
     * @param {String} switchStackId 
     * @param {String} interfaceId 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateNetworkSwitchStackRoutingInterface} opts.updateNetworkSwitchStackRoutingInterface 
     * @param {module:api/InterfacesApi~updateNetworkSwitchStackRoutingInterfaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.updateNetworkSwitchStackRoutingInterface = function(networkId, switchStackId, interfaceId, opts, callback) {
      opts = opts || {};
      var postBody = opts['updateNetworkSwitchStackRoutingInterface'];

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling updateNetworkSwitchStackRoutingInterface");
      }

      // verify the required parameter 'switchStackId' is set
      if (switchStackId === undefined || switchStackId === null) {
        throw new Error("Missing the required parameter 'switchStackId' when calling updateNetworkSwitchStackRoutingInterface");
      }

      // verify the required parameter 'interfaceId' is set
      if (interfaceId === undefined || interfaceId === null) {
        throw new Error("Missing the required parameter 'interfaceId' when calling updateNetworkSwitchStackRoutingInterface");
      }


      var pathParams = {
        'networkId': networkId,
        'switchStackId': switchStackId,
        'interfaceId': interfaceId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['meraki_api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateNetworkSwitchStackRoutingInterfaceDhcp operation.
     * @callback module:api/InterfacesApi~updateNetworkSwitchStackRoutingInterfaceDhcpCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a layer 3 interface DHCP configuration for a switch stack
     * Update a layer 3 interface DHCP configuration for a switch stack
     * @param {String} networkId 
     * @param {String} switchStackId 
     * @param {String} interfaceId 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateNetworkSwitchStackRoutingInterfaceDhcp} opts.updateNetworkSwitchStackRoutingInterfaceDhcp 
     * @param {module:api/InterfacesApi~updateNetworkSwitchStackRoutingInterfaceDhcpCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.updateNetworkSwitchStackRoutingInterfaceDhcp = function(networkId, switchStackId, interfaceId, opts, callback) {
      opts = opts || {};
      var postBody = opts['updateNetworkSwitchStackRoutingInterfaceDhcp'];

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling updateNetworkSwitchStackRoutingInterfaceDhcp");
      }

      // verify the required parameter 'switchStackId' is set
      if (switchStackId === undefined || switchStackId === null) {
        throw new Error("Missing the required parameter 'switchStackId' when calling updateNetworkSwitchStackRoutingInterfaceDhcp");
      }

      // verify the required parameter 'interfaceId' is set
      if (interfaceId === undefined || interfaceId === null) {
        throw new Error("Missing the required parameter 'interfaceId' when calling updateNetworkSwitchStackRoutingInterfaceDhcp");
      }


      var pathParams = {
        'networkId': networkId,
        'switchStackId': switchStackId,
        'interfaceId': interfaceId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['meraki_api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}/dhcp', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
