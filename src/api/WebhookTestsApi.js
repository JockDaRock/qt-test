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
    define(['ApiClient', 'model/CreateNetworkWebhooksWebhookTest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateNetworkWebhooksWebhookTest'));
  } else {
    // Browser globals (root is window)
    if (!root.MerakiDashboardApi) {
      root.MerakiDashboardApi = {};
    }
    root.MerakiDashboardApi.WebhookTestsApi = factory(root.MerakiDashboardApi.ApiClient, root.MerakiDashboardApi.CreateNetworkWebhooksWebhookTest);
  }
}(this, function(ApiClient, CreateNetworkWebhooksWebhookTest) {
  'use strict';

  /**
   * WebhookTests service.
   * @module api/WebhookTestsApi
   * @version 1.1.0
   */

  /**
   * Constructs a new WebhookTestsApi. 
   * @alias module:api/WebhookTestsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createNetworkWebhooksWebhookTest operation.
     * @callback module:api/WebhookTestsApi~createNetworkWebhooksWebhookTestCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send a test webhook for a network
     * Send a test webhook for a network
     * @param {String} networkId 
     * @param {module:model/CreateNetworkWebhooksWebhookTest} createNetworkWebhooksWebhookTest 
     * @param {module:api/WebhookTestsApi~createNetworkWebhooksWebhookTestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.createNetworkWebhooksWebhookTest = function(networkId, createNetworkWebhooksWebhookTest, callback) {
      var postBody = createNetworkWebhooksWebhookTest;

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling createNetworkWebhooksWebhookTest");
      }

      // verify the required parameter 'createNetworkWebhooksWebhookTest' is set
      if (createNetworkWebhooksWebhookTest === undefined || createNetworkWebhooksWebhookTest === null) {
        throw new Error("Missing the required parameter 'createNetworkWebhooksWebhookTest' when calling createNetworkWebhooksWebhookTest");
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
        '/networks/{networkId}/webhooks/webhookTests', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getNetworkWebhooksWebhookTest operation.
     * @callback module:api/WebhookTestsApi~getNetworkWebhooksWebhookTestCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return the status of a webhook test for a network
     * Return the status of a webhook test for a network
     * @param {String} networkId 
     * @param {String} webhookTestId 
     * @param {module:api/WebhookTestsApi~getNetworkWebhooksWebhookTestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getNetworkWebhooksWebhookTest = function(networkId, webhookTestId, callback) {
      var postBody = null;

      // verify the required parameter 'networkId' is set
      if (networkId === undefined || networkId === null) {
        throw new Error("Missing the required parameter 'networkId' when calling getNetworkWebhooksWebhookTest");
      }

      // verify the required parameter 'webhookTestId' is set
      if (webhookTestId === undefined || webhookTestId === null) {
        throw new Error("Missing the required parameter 'webhookTestId' when calling getNetworkWebhooksWebhookTest");
      }


      var pathParams = {
        'networkId': networkId,
        'webhookTestId': webhookTestId
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
        '/networks/{networkId}/webhooks/webhookTests/{webhookTestId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
