# MerakiDashboardApi.QualityRetentionProfilesApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNetworkCameraQualityRetentionProfile**](QualityRetentionProfilesApi.md#createNetworkCameraQualityRetentionProfile) | **POST** /networks/{networkId}/camera/qualityRetentionProfiles | Creates new quality retention profile for this network.
[**deleteNetworkCameraQualityRetentionProfile**](QualityRetentionProfilesApi.md#deleteNetworkCameraQualityRetentionProfile) | **DELETE** /networks/{networkId}/camera/qualityRetentionProfiles/{qualityRetentionProfileId} | Delete an existing quality retention profile for this network.
[**getNetworkCameraQualityRetentionProfile**](QualityRetentionProfilesApi.md#getNetworkCameraQualityRetentionProfile) | **GET** /networks/{networkId}/camera/qualityRetentionProfiles/{qualityRetentionProfileId} | Retrieve a single quality retention profile
[**getNetworkCameraQualityRetentionProfiles**](QualityRetentionProfilesApi.md#getNetworkCameraQualityRetentionProfiles) | **GET** /networks/{networkId}/camera/qualityRetentionProfiles | List the quality retention profiles for this network
[**updateNetworkCameraQualityRetentionProfile**](QualityRetentionProfilesApi.md#updateNetworkCameraQualityRetentionProfile) | **PUT** /networks/{networkId}/camera/qualityRetentionProfiles/{qualityRetentionProfileId} | Update an existing quality retention profile for this network.


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

var apiInstance = new MerakiDashboardApi.QualityRetentionProfilesApi();

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

var apiInstance = new MerakiDashboardApi.QualityRetentionProfilesApi();

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

var apiInstance = new MerakiDashboardApi.QualityRetentionProfilesApi();

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

var apiInstance = new MerakiDashboardApi.QualityRetentionProfilesApi();

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

var apiInstance = new MerakiDashboardApi.QualityRetentionProfilesApi();

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

