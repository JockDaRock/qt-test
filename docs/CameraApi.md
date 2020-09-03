# MerakiDashboardApi.CameraApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNetworkCameraQualityRetentionProfile**](CameraApi.md#createNetworkCameraQualityRetentionProfile) | **POST** /networks/{networkId}/camera/qualityRetentionProfiles | Creates new quality retention profile for this network.
[**deleteNetworkCameraQualityRetentionProfile**](CameraApi.md#deleteNetworkCameraQualityRetentionProfile) | **DELETE** /networks/{networkId}/camera/qualityRetentionProfiles/{qualityRetentionProfileId} | Delete an existing quality retention profile for this network.
[**generateDeviceCameraSnapshot**](CameraApi.md#generateDeviceCameraSnapshot) | **POST** /devices/{serial}/camera/generateSnapshot | Generate a snapshot of what the camera sees at the specified time and return a link to that image.
[**getDeviceCameraAnalyticsLive**](CameraApi.md#getDeviceCameraAnalyticsLive) | **GET** /devices/{serial}/camera/analytics/live | Returns live state from camera of analytics zones
[**getDeviceCameraAnalyticsOverview**](CameraApi.md#getDeviceCameraAnalyticsOverview) | **GET** /devices/{serial}/camera/analytics/overview | Returns an overview of aggregate analytics data for a timespan
[**getDeviceCameraAnalyticsRecent**](CameraApi.md#getDeviceCameraAnalyticsRecent) | **GET** /devices/{serial}/camera/analytics/recent | Returns most recent record for analytics zones
[**getDeviceCameraAnalyticsZoneHistory**](CameraApi.md#getDeviceCameraAnalyticsZoneHistory) | **GET** /devices/{serial}/camera/analytics/zones/{zoneId}/history | Return historical records for analytic zones
[**getDeviceCameraAnalyticsZones**](CameraApi.md#getDeviceCameraAnalyticsZones) | **GET** /devices/{serial}/camera/analytics/zones | Returns all configured analytic zones for this camera
[**getDeviceCameraQualityAndRetention**](CameraApi.md#getDeviceCameraQualityAndRetention) | **GET** /devices/{serial}/camera/qualityAndRetention | Returns quality and retention settings for the given camera
[**getDeviceCameraSense**](CameraApi.md#getDeviceCameraSense) | **GET** /devices/{serial}/camera/sense | Returns sense settings for a given camera
[**getDeviceCameraSenseObjectDetectionModels**](CameraApi.md#getDeviceCameraSenseObjectDetectionModels) | **GET** /devices/{serial}/camera/sense/objectDetectionModels | Returns the MV Sense object detection model list for the given camera
[**getDeviceCameraVideoLink**](CameraApi.md#getDeviceCameraVideoLink) | **GET** /devices/{serial}/camera/videoLink | Returns video link to the specified camera. If a timestamp is supplied, it links to that timestamp.
[**getDeviceCameraVideoSettings**](CameraApi.md#getDeviceCameraVideoSettings) | **GET** /devices/{serial}/camera/video/settings | Returns video settings for the given camera
[**getNetworkCameraQualityRetentionProfile**](CameraApi.md#getNetworkCameraQualityRetentionProfile) | **GET** /networks/{networkId}/camera/qualityRetentionProfiles/{qualityRetentionProfileId} | Retrieve a single quality retention profile
[**getNetworkCameraQualityRetentionProfiles**](CameraApi.md#getNetworkCameraQualityRetentionProfiles) | **GET** /networks/{networkId}/camera/qualityRetentionProfiles | List the quality retention profiles for this network
[**getNetworkCameraSchedules**](CameraApi.md#getNetworkCameraSchedules) | **GET** /networks/{networkId}/camera/schedules | Returns a list of all camera recording schedules.
[**updateDeviceCameraQualityAndRetention**](CameraApi.md#updateDeviceCameraQualityAndRetention) | **PUT** /devices/{serial}/camera/qualityAndRetention | Update quality and retention settings for the given camera
[**updateDeviceCameraSense**](CameraApi.md#updateDeviceCameraSense) | **PUT** /devices/{serial}/camera/sense | Update sense settings for the given camera
[**updateDeviceCameraVideoSettings**](CameraApi.md#updateDeviceCameraVideoSettings) | **PUT** /devices/{serial}/camera/video/settings | Update video settings for the given camera
[**updateNetworkCameraQualityRetentionProfile**](CameraApi.md#updateNetworkCameraQualityRetentionProfile) | **PUT** /networks/{networkId}/camera/qualityRetentionProfiles/{qualityRetentionProfileId} | Update an existing quality retention profile for this network.


<a name="createNetworkCameraQualityRetentionProfile"></a>
# **createNetworkCameraQualityRetentionProfile**
> Object createNetworkCameraQualityRetentionProfile(networkId, createNetworkCameraQualityRetentionProfile)

Creates new quality retention profile for this network.

Creates new quality retention profile for this network.

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.CameraApi();

var networkId = "networkId_example"; // String | 

var createNetworkCameraQualityRetentionProfile = new MerakiDashboardApi.CreateNetworkCameraQualityRetentionProfile(); // CreateNetworkCameraQualityRetentionProfile | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createNetworkCameraQualityRetentionProfile(networkId, createNetworkCameraQualityRetentionProfile, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **createNetworkCameraQualityRetentionProfile** | [**CreateNetworkCameraQualityRetentionProfile**](CreateNetworkCameraQualityRetentionProfile.md)|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteNetworkCameraQualityRetentionProfile"></a>
# **deleteNetworkCameraQualityRetentionProfile**
> deleteNetworkCameraQualityRetentionProfile(networkId, qualityRetentionProfileId)

Delete an existing quality retention profile for this network.

Delete an existing quality retention profile for this network.

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.CameraApi();

var networkId = "networkId_example"; // String | 

var qualityRetentionProfileId = "qualityRetentionProfileId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteNetworkCameraQualityRetentionProfile(networkId, qualityRetentionProfileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **qualityRetentionProfileId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="generateDeviceCameraSnapshot"></a>
# **generateDeviceCameraSnapshot**
> Object generateDeviceCameraSnapshot(serial, opts)

Generate a snapshot of what the camera sees at the specified time and return a link to that image.

Generate a snapshot of what the camera sees at the specified time and return a link to that image.

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.CameraApi();

var serial = "serial_example"; // String | 

var opts = { 
  'generateDeviceCameraSnapshot': new MerakiDashboardApi.GenerateDeviceCameraSnapshot() // GenerateDeviceCameraSnapshot | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.generateDeviceCameraSnapshot(serial, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 
 **generateDeviceCameraSnapshot** | [**GenerateDeviceCameraSnapshot**](GenerateDeviceCameraSnapshot.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDeviceCameraAnalyticsLive"></a>
# **getDeviceCameraAnalyticsLive**
> Object getDeviceCameraAnalyticsLive(serial)

Returns live state from camera of analytics zones

Returns live state from camera of analytics zones

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.CameraApi();

var serial = "serial_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDeviceCameraAnalyticsLive(serial, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDeviceCameraAnalyticsOverview"></a>
# **getDeviceCameraAnalyticsOverview**
> Object getDeviceCameraAnalyticsOverview(serial, opts)

Returns an overview of aggregate analytics data for a timespan

Returns an overview of aggregate analytics data for a timespan

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.CameraApi();

var serial = "serial_example"; // String | 

var opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 365 days from today.
  't1': "t1_example", // String | The end of the timespan for the data. t1 can be a maximum of 7 days after t0.
  'timespan': 3.4, // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. The default is 1 hour.
  'objectType': "objectType_example" // String | [optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle].
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDeviceCameraAnalyticsOverview(serial, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 365 days from today. | [optional] 
 **t1** | **String**| The end of the timespan for the data. t1 can be a maximum of 7 days after t0. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. The default is 1 hour. | [optional] 
 **objectType** | **String**| [optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle]. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDeviceCameraAnalyticsRecent"></a>
# **getDeviceCameraAnalyticsRecent**
> Object getDeviceCameraAnalyticsRecent(serial, opts)

Returns most recent record for analytics zones

Returns most recent record for analytics zones

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.CameraApi();

var serial = "serial_example"; // String | 

var opts = { 
  'objectType': "objectType_example" // String | [optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle].
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDeviceCameraAnalyticsRecent(serial, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 
 **objectType** | **String**| [optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle]. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDeviceCameraAnalyticsZoneHistory"></a>
# **getDeviceCameraAnalyticsZoneHistory**
> Object getDeviceCameraAnalyticsZoneHistory(serial, zoneId, opts)

Return historical records for analytic zones

Return historical records for analytic zones

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.CameraApi();

var serial = "serial_example"; // String | 

var zoneId = "zoneId_example"; // String | 

var opts = { 
  't0': "t0_example", // String | The beginning of the timespan for the data. The maximum lookback period is 365 days from today.
  't1': "t1_example", // String | The end of the timespan for the data. t1 can be a maximum of 14 hours after t0.
  'timespan': 3.4, // Number | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 14 hours. The default is 1 hour.
  'resolution': 56, // Number | The time resolution in seconds for returned data. The valid resolutions are: 60. The default is 60.
  'objectType': "objectType_example" // String | [optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle].
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDeviceCameraAnalyticsZoneHistory(serial, zoneId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 
 **zoneId** | **String**|  | 
 **t0** | **String**| The beginning of the timespan for the data. The maximum lookback period is 365 days from today. | [optional] 
 **t1** | **String**| The end of the timespan for the data. t1 can be a maximum of 14 hours after t0. | [optional] 
 **timespan** | **Number**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 14 hours. The default is 1 hour. | [optional] 
 **resolution** | **Number**| The time resolution in seconds for returned data. The valid resolutions are: 60. The default is 60. | [optional] 
 **objectType** | **String**| [optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle]. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDeviceCameraAnalyticsZones"></a>
# **getDeviceCameraAnalyticsZones**
> Object getDeviceCameraAnalyticsZones(serial)

Returns all configured analytic zones for this camera

Returns all configured analytic zones for this camera

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.CameraApi();

var serial = "serial_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDeviceCameraAnalyticsZones(serial, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDeviceCameraQualityAndRetention"></a>
# **getDeviceCameraQualityAndRetention**
> Object getDeviceCameraQualityAndRetention(serial)

Returns quality and retention settings for the given camera

Returns quality and retention settings for the given camera

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.CameraApi();

var serial = "serial_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDeviceCameraQualityAndRetention(serial, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDeviceCameraSense"></a>
# **getDeviceCameraSense**
> Object getDeviceCameraSense(serial)

Returns sense settings for a given camera

Returns sense settings for a given camera

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.CameraApi();

var serial = "serial_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDeviceCameraSense(serial, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDeviceCameraSenseObjectDetectionModels"></a>
# **getDeviceCameraSenseObjectDetectionModels**
> Object getDeviceCameraSenseObjectDetectionModels(serial)

Returns the MV Sense object detection model list for the given camera

Returns the MV Sense object detection model list for the given camera

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.CameraApi();

var serial = "serial_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDeviceCameraSenseObjectDetectionModels(serial, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDeviceCameraVideoLink"></a>
# **getDeviceCameraVideoLink**
> Object getDeviceCameraVideoLink(serial, opts)

Returns video link to the specified camera. If a timestamp is supplied, it links to that timestamp.

Returns video link to the specified camera. If a timestamp is supplied, it links to that timestamp.

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.CameraApi();

var serial = "serial_example"; // String | 

var opts = { 
  'timestamp': new Date("2013-10-20T19:20:30+01:00") // Date | [optional] The video link will start at this time. The timestamp should be a string in ISO8601 format. If no timestamp is specified, we will assume current time.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDeviceCameraVideoLink(serial, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 
 **timestamp** | **Date**| [optional] The video link will start at this time. The timestamp should be a string in ISO8601 format. If no timestamp is specified, we will assume current time. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDeviceCameraVideoSettings"></a>
# **getDeviceCameraVideoSettings**
> Object getDeviceCameraVideoSettings(serial)

Returns video settings for the given camera

Returns video settings for the given camera

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.CameraApi();

var serial = "serial_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDeviceCameraVideoSettings(serial, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkCameraQualityRetentionProfile"></a>
# **getNetworkCameraQualityRetentionProfile**
> Object getNetworkCameraQualityRetentionProfile(networkId, qualityRetentionProfileId)

Retrieve a single quality retention profile

Retrieve a single quality retention profile

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.CameraApi();

var networkId = "networkId_example"; // String | 

var qualityRetentionProfileId = "qualityRetentionProfileId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkCameraQualityRetentionProfile(networkId, qualityRetentionProfileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **qualityRetentionProfileId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkCameraQualityRetentionProfiles"></a>
# **getNetworkCameraQualityRetentionProfiles**
> Object getNetworkCameraQualityRetentionProfiles(networkId)

List the quality retention profiles for this network

List the quality retention profiles for this network

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.CameraApi();

var networkId = "networkId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkCameraQualityRetentionProfiles(networkId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkCameraSchedules"></a>
# **getNetworkCameraSchedules**
> Object getNetworkCameraSchedules(networkId)

Returns a list of all camera recording schedules.

Returns a list of all camera recording schedules.

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.CameraApi();

var networkId = "networkId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkCameraSchedules(networkId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateDeviceCameraQualityAndRetention"></a>
# **updateDeviceCameraQualityAndRetention**
> Object updateDeviceCameraQualityAndRetention(serial, opts)

Update quality and retention settings for the given camera

Update quality and retention settings for the given camera

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.CameraApi();

var serial = "serial_example"; // String | 

var opts = { 
  'updateDeviceCameraQualityAndRetention': new MerakiDashboardApi.UpdateDeviceCameraQualityAndRetention() // UpdateDeviceCameraQualityAndRetention | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateDeviceCameraQualityAndRetention(serial, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 
 **updateDeviceCameraQualityAndRetention** | [**UpdateDeviceCameraQualityAndRetention**](UpdateDeviceCameraQualityAndRetention.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateDeviceCameraSense"></a>
# **updateDeviceCameraSense**
> Object updateDeviceCameraSense(serial, opts)

Update sense settings for the given camera

Update sense settings for the given camera

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.CameraApi();

var serial = "serial_example"; // String | 

var opts = { 
  'updateDeviceCameraSense': new MerakiDashboardApi.UpdateDeviceCameraSense() // UpdateDeviceCameraSense | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateDeviceCameraSense(serial, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 
 **updateDeviceCameraSense** | [**UpdateDeviceCameraSense**](UpdateDeviceCameraSense.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateDeviceCameraVideoSettings"></a>
# **updateDeviceCameraVideoSettings**
> Object updateDeviceCameraVideoSettings(serial, opts)

Update video settings for the given camera

Update video settings for the given camera

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.CameraApi();

var serial = "serial_example"; // String | 

var opts = { 
  'updateDeviceCameraVideoSettings': new MerakiDashboardApi.UpdateDeviceCameraVideoSettings() // UpdateDeviceCameraVideoSettings | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateDeviceCameraVideoSettings(serial, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 
 **updateDeviceCameraVideoSettings** | [**UpdateDeviceCameraVideoSettings**](UpdateDeviceCameraVideoSettings.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkCameraQualityRetentionProfile"></a>
# **updateNetworkCameraQualityRetentionProfile**
> Object updateNetworkCameraQualityRetentionProfile(networkId, qualityRetentionProfileId, opts)

Update an existing quality retention profile for this network.

Update an existing quality retention profile for this network.

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.CameraApi();

var networkId = "networkId_example"; // String | 

var qualityRetentionProfileId = "qualityRetentionProfileId_example"; // String | 

var opts = { 
  'updateNetworkCameraQualityRetentionProfile': new MerakiDashboardApi.UpdateNetworkCameraQualityRetentionProfile() // UpdateNetworkCameraQualityRetentionProfile | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNetworkCameraQualityRetentionProfile(networkId, qualityRetentionProfileId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **qualityRetentionProfileId** | **String**|  | 
 **updateNetworkCameraQualityRetentionProfile** | [**UpdateNetworkCameraQualityRetentionProfile**](UpdateNetworkCameraQualityRetentionProfile.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

