# MerakiDashboardApi.BypassActivationLockAttemptsApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNetworkSmBypassActivationLockAttempt**](BypassActivationLockAttemptsApi.md#createNetworkSmBypassActivationLockAttempt) | **POST** /networks/{networkId}/sm/bypassActivationLockAttempts | Bypass activation lock attempt
[**getNetworkSmBypassActivationLockAttempt**](BypassActivationLockAttemptsApi.md#getNetworkSmBypassActivationLockAttempt) | **GET** /networks/{networkId}/sm/bypassActivationLockAttempts/{attemptId} | Bypass activation lock attempt status

<a name="createNetworkSmBypassActivationLockAttempt"></a>
# **createNetworkSmBypassActivationLockAttempt**
> Object createNetworkSmBypassActivationLockAttempt(bodynetworkId)

Bypass activation lock attempt

Bypass activation lock attempt

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.BypassActivationLockAttemptsApi();
let body = new MerakiDashboardApi.Body71(); // Body71 | 
let networkId = "networkId_example"; // String | 

apiInstance.createNetworkSmBypassActivationLockAttempt(bodynetworkId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body71**](Body71.md)|  | 
 **networkId** | **String**|  | 

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
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.BypassActivationLockAttemptsApi();
let networkId = "networkId_example"; // String | 
let attemptId = "attemptId_example"; // String | 

apiInstance.getNetworkSmBypassActivationLockAttempt(networkId, attemptId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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

 - **Content-Type**: Not defined
 - **Accept**: application/json

