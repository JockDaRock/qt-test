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
    define(['ApiClient', 'model/UpdateDeviceSwitchRoutingInterfaceDhcp', 'model/UpdateNetworkCellularGatewayDhcp', 'model/UpdateNetworkSwitchStackRoutingInterfaceDhcp'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/UpdateDeviceSwitchRoutingInterfaceDhcp'), require('../model/UpdateNetworkCellularGatewayDhcp'), require('../model/UpdateNetworkSwitchStackRoutingInterfaceDhcp'));
  } else {
    // Browser globals (root is window)
    if (!root.MerakiDashboardApi) {
      root.MerakiDashboardApi = {};
    }
    root.MerakiDashboardApi.DhcpApi = factory(root.MerakiDashboardApi.ApiClient, root.MerakiDashboardApi.UpdateDeviceSwitchRoutingInterfaceDhcp, root.MerakiDashboardApi.UpdateNetworkCellularGatewayDhcp, root.MerakiDashboardApi.UpdateNetworkSwitchStackRoutingInterfaceDhcp);
  }
}(this, function(ApiClient, UpdateDeviceSwitchRoutingInterfaceDhcp, UpdateNetworkCellularGatewayDhcp, UpdateNetworkSwitchStackRoutingInterfaceDhcp) {
  'use strict';

  /**
   * Dhcp service.
   * @module api/DhcpApi
   * @version 1.1.0
   */

  /**
   * Constructs a new DhcpApi. 
   * @alias module:api/DhcpApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getDeviceApplianceDhcpSubnets operation.
     * @callback module:api/DhcpApi~getDeviceApplianceDhcpSubnetsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return the DHCP subnet information for an appliance
     * Return the DHCP subnet information for an appliance
     * @param {String} serial 
     * @param {module:api/DhcpApi~getDeviceApplianceDhcpSubnetsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getDeviceApplianceDhcpSubnets = function(serial, callback) {
      var postBody = null;

      // verify the required parameter 'serial' is set
      if (serial === undefined || serial === null) {
        throw new Error("Missing the required parameter 'serial' when calling getDeviceApplianceDhcpSubnets");
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
        '/devices/{serial}/appliance/dhcp/subnets', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDeviceSwitchRoutingInterfaceDhcp operation.
     * @callback module:api/DhcpApi~getDeviceSwitchRoutingInterfaceDhcpCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return a layer 3 interface DHCP configuration for a switch
     * Return a layer 3 interface DHCP configuration for a switch
     * @param {String} serial 
     * @param {String} interfaceId 
     * @param {module:api/DhcpApi~getDeviceSwitchRoutingInterfaceDhcpCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the getNetworkCellularGatewayDhcp operation.
     * @callback module:api/DhcpApi~getNetworkCellularGatewayDhcpCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List common DHCP settings of MGs
     * List common DHCP settings of MGs
     * @param {String} networkId 
     * @param {module:api/DhcpApi~getNetworkCellularGatewayDhcpCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getNetworkCellularGatewayDhcp = function(networkId, callback) {
      var postBody = null;

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling getNetworkCellularGatewayDhcp");
      }


      var pathParams = {
        'networkId': networkId
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
        '/networks/{networkId}/cellularGateway/dhcp', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getNetworkSwitchStackRoutingInterfaceDhcp operation.
     * @callback module:api/DhcpApi~getNetworkSwitchStackRoutingInterfaceDhcpCallback
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
     * @param {module:api/DhcpApi~getNetworkSwitchStackRoutingInterfaceDhcpCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the updateDeviceSwitchRoutingInterfaceDhcp operation.
     * @callback module:api/DhcpApi~updateDeviceSwitchRoutingInterfaceDhcpCallback
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
     * @param {module:api/DhcpApi~updateDeviceSwitchRoutingInterfaceDhcpCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the updateNetworkCellularGatewayDhcp operation.
     * @callback module:api/DhcpApi~updateNetworkCellularGatewayDhcpCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update common DHCP settings of MGs
     * Update common DHCP settings of MGs
     * @param {String} networkId 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateNetworkCellularGatewayDhcp} opts.updateNetworkCellularGatewayDhcp 
     * @param {module:api/DhcpApi~updateNetworkCellularGatewayDhcpCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.updateNetworkCellularGatewayDhcp = function(networkId, opts, callback) {
      opts = opts || {};
      var postBody = opts['updateNetworkCellularGatewayDhcp'];

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling updateNetworkCellularGatewayDhcp");
      }


      var pathParams = {
        'networkId': networkId
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
        '/networks/{networkId}/cellularGateway/dhcp', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateNetworkSwitchStackRoutingInterfaceDhcp operation.
     * @callback module:api/DhcpApi~updateNetworkSwitchStackRoutingInterfaceDhcpCallback
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
     * @param {module:api/DhcpApi~updateNetworkSwitchStackRoutingInterfaceDhcpCallback} callback The callback function, accepting three arguments: error, data, response
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
