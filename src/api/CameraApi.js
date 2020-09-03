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
import Body2 from '../model/Body2';
import Body3 from '../model/Body3';
import Body4 from '../model/Body4';
import Body48 from '../model/Body48';
import Body49 from '../model/Body49';
import Body5 from '../model/Body5';

/**
* Camera service.
* @module api/CameraApi
* @version 1.0.0
*/
export default class CameraApi {

    /**
    * Constructs a new CameraApi. 
    * @alias module:api/CameraApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the createNetworkCameraQualityRetentionProfile operation.
     * @callback module:api/CameraApi~createNetworkCameraQualityRetentionProfileCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates new quality retention profile for this network.
     * Creates new quality retention profile for this network.
     * @param {module:api/CameraApi~createNetworkCameraQualityRetentionProfileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    createNetworkCameraQualityRetentionProfile(body, networkId, callback) {
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
        '/networks/{networkId}/camera/qualityRetentionProfiles', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the deleteNetworkCameraQualityRetentionProfile operation.
     * @callback module:api/CameraApi~deleteNetworkCameraQualityRetentionProfileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an existing quality retention profile for this network.
     * Delete an existing quality retention profile for this network.
     * @param {module:api/CameraApi~deleteNetworkCameraQualityRetentionProfileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteNetworkCameraQualityRetentionProfile(networkId, qualityRetentionProfileId, callback) {
      let postBody = null;

      let pathParams = {
        'networkId': networkId,
        'qualityRetentionProfileId': qualityRetentionProfileId
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
        '/networks/{networkId}/camera/qualityRetentionProfiles/{qualityRetentionProfileId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the generateDeviceCameraSnapshot operation.
     * @callback module:api/CameraApi~generateDeviceCameraSnapshotCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate a snapshot of what the camera sees at the specified time and return a link to that image.
     * Generate a snapshot of what the camera sees at the specified time and return a link to that image.
     * @param {Object} opts Optional parameters
     * @param {module:api/CameraApi~generateDeviceCameraSnapshotCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    generateDeviceCameraSnapshot(serial, opts, callback) {
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
        '/devices/{serial}/camera/generateSnapshot', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getDeviceCameraAnalyticsLive operation.
     * @callback module:api/CameraApi~getDeviceCameraAnalyticsLiveCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns live state from camera of analytics zones
     * Returns live state from camera of analytics zones
     * @param {module:api/CameraApi~getDeviceCameraAnalyticsLiveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getDeviceCameraAnalyticsLive(serial, callback) {
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
        '/devices/{serial}/camera/analytics/live', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getDeviceCameraAnalyticsOverview operation.
     * @callback module:api/CameraApi~getDeviceCameraAnalyticsOverviewCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns an overview of aggregate analytics data for a timespan
     * Returns an overview of aggregate analytics data for a timespan
     * @param {Object} opts Optional parameters
     * @param {module:api/CameraApi~getDeviceCameraAnalyticsOverviewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getDeviceCameraAnalyticsOverview(serial, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'serial': serial
      };
      let queryParams = {
        't0': opts['t0'],
        't1': opts['t1'],
        'timespan': opts['timespan'],
        'objectType': opts['objectType']
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
        '/devices/{serial}/camera/analytics/overview', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getDeviceCameraAnalyticsRecent operation.
     * @callback module:api/CameraApi~getDeviceCameraAnalyticsRecentCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns most recent record for analytics zones
     * Returns most recent record for analytics zones
     * @param {Object} opts Optional parameters
     * @param {module:api/CameraApi~getDeviceCameraAnalyticsRecentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getDeviceCameraAnalyticsRecent(serial, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'serial': serial
      };
      let queryParams = {
        'objectType': opts['objectType']
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
        '/devices/{serial}/camera/analytics/recent', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getDeviceCameraAnalyticsZoneHistory operation.
     * @callback module:api/CameraApi~getDeviceCameraAnalyticsZoneHistoryCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return historical records for analytic zones
     * Return historical records for analytic zones
     * @param {Object} opts Optional parameters
     * @param {module:api/CameraApi~getDeviceCameraAnalyticsZoneHistoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getDeviceCameraAnalyticsZoneHistory(serial, zoneId, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'serial': serial,
        'zoneId': zoneId
      };
      let queryParams = {
        't0': opts['t0'],
        't1': opts['t1'],
        'timespan': opts['timespan'],
        'resolution': opts['resolution'],
        'objectType': opts['objectType']
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
        '/devices/{serial}/camera/analytics/zones/{zoneId}/history', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getDeviceCameraAnalyticsZones operation.
     * @callback module:api/CameraApi~getDeviceCameraAnalyticsZonesCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all configured analytic zones for this camera
     * Returns all configured analytic zones for this camera
     * @param {module:api/CameraApi~getDeviceCameraAnalyticsZonesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getDeviceCameraAnalyticsZones(serial, callback) {
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
        '/devices/{serial}/camera/analytics/zones', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getDeviceCameraQualityAndRetention operation.
     * @callback module:api/CameraApi~getDeviceCameraQualityAndRetentionCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns quality and retention settings for the given camera
     * Returns quality and retention settings for the given camera
     * @param {module:api/CameraApi~getDeviceCameraQualityAndRetentionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getDeviceCameraQualityAndRetention(serial, callback) {
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
        '/devices/{serial}/camera/qualityAndRetention', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getDeviceCameraSense operation.
     * @callback module:api/CameraApi~getDeviceCameraSenseCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns sense settings for a given camera
     * Returns sense settings for a given camera
     * @param {module:api/CameraApi~getDeviceCameraSenseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getDeviceCameraSense(serial, callback) {
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
        '/devices/{serial}/camera/sense', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getDeviceCameraSenseObjectDetectionModels operation.
     * @callback module:api/CameraApi~getDeviceCameraSenseObjectDetectionModelsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the MV Sense object detection model list for the given camera
     * Returns the MV Sense object detection model list for the given camera
     * @param {module:api/CameraApi~getDeviceCameraSenseObjectDetectionModelsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getDeviceCameraSenseObjectDetectionModels(serial, callback) {
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
        '/devices/{serial}/camera/sense/objectDetectionModels', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getDeviceCameraVideoLink operation.
     * @callback module:api/CameraApi~getDeviceCameraVideoLinkCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns video link to the specified camera. If a timestamp is supplied, it links to that timestamp.
     * Returns video link to the specified camera. If a timestamp is supplied, it links to that timestamp.
     * @param {Object} opts Optional parameters
     * @param {module:api/CameraApi~getDeviceCameraVideoLinkCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getDeviceCameraVideoLink(serial, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'serial': serial
      };
      let queryParams = {
        'timestamp': opts['timestamp']
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
        '/devices/{serial}/camera/videoLink', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getDeviceCameraVideoSettings operation.
     * @callback module:api/CameraApi~getDeviceCameraVideoSettingsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns video settings for the given camera
     * Returns video settings for the given camera
     * @param {module:api/CameraApi~getDeviceCameraVideoSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getDeviceCameraVideoSettings(serial, callback) {
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
        '/devices/{serial}/camera/video/settings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getNetworkCameraQualityRetentionProfile operation.
     * @callback module:api/CameraApi~getNetworkCameraQualityRetentionProfileCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a single quality retention profile
     * Retrieve a single quality retention profile
     * @param {module:api/CameraApi~getNetworkCameraQualityRetentionProfileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getNetworkCameraQualityRetentionProfile(networkId, qualityRetentionProfileId, callback) {
      let postBody = null;

      let pathParams = {
        'networkId': networkId,
        'qualityRetentionProfileId': qualityRetentionProfileId
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
        '/networks/{networkId}/camera/qualityRetentionProfiles/{qualityRetentionProfileId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getNetworkCameraQualityRetentionProfiles operation.
     * @callback module:api/CameraApi~getNetworkCameraQualityRetentionProfilesCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List the quality retention profiles for this network
     * List the quality retention profiles for this network
     * @param {module:api/CameraApi~getNetworkCameraQualityRetentionProfilesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getNetworkCameraQualityRetentionProfiles(networkId, callback) {
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
        '/networks/{networkId}/camera/qualityRetentionProfiles', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getNetworkCameraSchedules operation.
     * @callback module:api/CameraApi~getNetworkCameraSchedulesCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of all camera recording schedules.
     * Returns a list of all camera recording schedules.
     * @param {module:api/CameraApi~getNetworkCameraSchedulesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getNetworkCameraSchedules(networkId, callback) {
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
        '/networks/{networkId}/camera/schedules', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateDeviceCameraQualityAndRetention operation.
     * @callback module:api/CameraApi~updateDeviceCameraQualityAndRetentionCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update quality and retention settings for the given camera
     * Update quality and retention settings for the given camera
     * @param {Object} opts Optional parameters
     * @param {module:api/CameraApi~updateDeviceCameraQualityAndRetentionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    updateDeviceCameraQualityAndRetention(serial, opts, callback) {
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
        '/devices/{serial}/camera/qualityAndRetention', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateDeviceCameraSense operation.
     * @callback module:api/CameraApi~updateDeviceCameraSenseCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update sense settings for the given camera
     * Update sense settings for the given camera
     * @param {Object} opts Optional parameters
     * @param {module:api/CameraApi~updateDeviceCameraSenseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    updateDeviceCameraSense(serial, opts, callback) {
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
        '/devices/{serial}/camera/sense', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateDeviceCameraVideoSettings operation.
     * @callback module:api/CameraApi~updateDeviceCameraVideoSettingsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update video settings for the given camera
     * Update video settings for the given camera
     * @param {Object} opts Optional parameters
     * @param {module:api/CameraApi~updateDeviceCameraVideoSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    updateDeviceCameraVideoSettings(serial, opts, callback) {
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
        '/devices/{serial}/camera/video/settings', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateNetworkCameraQualityRetentionProfile operation.
     * @callback module:api/CameraApi~updateNetworkCameraQualityRetentionProfileCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an existing quality retention profile for this network.
     * Update an existing quality retention profile for this network.
     * @param {Object} opts Optional parameters
     * @param {module:api/CameraApi~updateNetworkCameraQualityRetentionProfileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    updateNetworkCameraQualityRetentionProfile(networkId, qualityRetentionProfileId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
        'networkId': networkId,
        'qualityRetentionProfileId': qualityRetentionProfileId
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
        '/networks/{networkId}/camera/qualityRetentionProfiles/{qualityRetentionProfileId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
