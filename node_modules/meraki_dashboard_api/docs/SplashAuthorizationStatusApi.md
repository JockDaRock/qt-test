# MerakiDashboardApi.SplashAuthorizationStatusApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNetworkClientSplashAuthorizationStatus**](SplashAuthorizationStatusApi.md#getNetworkClientSplashAuthorizationStatus) | **GET** /networks/{networkId}/clients/{clientId}/splashAuthorizationStatus | Return the splash authorization for a client, for each SSID they&#x27;ve associated with through splash. Only enabled SSIDs with Click-through splash enabled will be included. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
[**updateNetworkClientSplashAuthorizationStatus**](SplashAuthorizationStatusApi.md#updateNetworkClientSplashAuthorizationStatus) | **PUT** /networks/{networkId}/clients/{clientId}/splashAuthorizationStatus | Update a client&#x27;s splash authorization. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

<a name="getNetworkClientSplashAuthorizationStatus"></a>
# **getNetworkClientSplashAuthorizationStatus**
> Object getNetworkClientSplashAuthorizationStatus(networkId, clientId)

Return the splash authorization for a client, for each SSID they&#x27;ve associated with through splash. Only enabled SSIDs with Click-through splash enabled will be included. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

Return the splash authorization for a client, for each SSID they&#x27;ve associated with through splash. Only enabled SSIDs with Click-through splash enabled will be included. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.SplashAuthorizationStatusApi();
let networkId = "networkId_example"; // String | 
let clientId = "clientId_example"; // String | 

apiInstance.getNetworkClientSplashAuthorizationStatus(networkId, clientId, (error, data, response) => {
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
 **clientId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateNetworkClientSplashAuthorizationStatus"></a>
# **updateNetworkClientSplashAuthorizationStatus**
> Object updateNetworkClientSplashAuthorizationStatus(bodynetworkIdclientId)

Update a client&#x27;s splash authorization. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

Update a client&#x27;s splash authorization. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.SplashAuthorizationStatusApi();
let body = new MerakiDashboardApi.Body56(); // Body56 | 
let networkId = "networkId_example"; // String | 
let clientId = "clientId_example"; // String | 

apiInstance.updateNetworkClientSplashAuthorizationStatus(bodynetworkIdclientId, (error, data, response) => {
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
 **body** | [**Body56**](Body56.md)|  | 
 **networkId** | **String**|  | 
 **clientId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

