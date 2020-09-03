# MerakiDashboardApi.BypassActivationLockAttemptsApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNetworkSmBypassActivationLockAttempt**](BypassActivationLockAttemptsApi.md#createNetworkSmBypassActivationLockAttempt) | **POST** /networks/{networkId}/sm/bypassActivationLockAttempts | Bypass activation lock attempt
[**getNetworkSmBypassActivationLockAttempt**](BypassActivationLockAttemptsApi.md#getNetworkSmBypassActivationLockAttempt) | **GET** /networks/{networkId}/sm/bypassActivationLockAttempts/{attemptId} | Bypass activation lock attempt status


<a name="createNetworkSmBypassActivationLockAttempt"></a>
# **createNetworkSmBypassActivationLockAttempt**
> Object createNetworkSmBypassActivationLockAttempt(networkId, createNetworkSmBypassActivationLockAttempt)

Bypass activation lock attempt

Bypass activation lock attempt

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.BypassActivationLockAttemptsApi();

var networkId = "networkId_example"; // String | 

var createNetworkSmBypassActivationLockAttempt = new MerakiDashboardApi.CreateNetworkSmBypassActivationLockAttempt(); // CreateNetworkSmBypassActivationLockAttempt | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createNetworkSmBypassActivationLockAttempt(networkId, createNetworkSmBypassActivationLockAttempt, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **createNetworkSmBypassActivationLockAttempt** | [**CreateNetworkSmBypassActivationLockAttempt**](CreateNetworkSmBypassActivationLockAttempt.md)|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkSmBypassActivationLockAttempt"></a>
# **getNetworkSmBypassActivationLockAttempt**
> Object getNetworkSmBypassActivationLockAttempt(networkId, attemptId)

Bypass activation lock attempt status

Bypass activation lock attempt status

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.BypassActivationLockAttemptsApi();

var networkId = "networkId_example"; // String | 

var attemptId = "attemptId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkSmBypassActivationLockAttempt(networkId, attemptId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **attemptId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

