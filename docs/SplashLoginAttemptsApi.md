# MerakiDashboardApi.SplashLoginAttemptsApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNetworkSplashLoginAttempts**](SplashLoginAttemptsApi.md#getNetworkSplashLoginAttempts) | **GET** /networks/{networkId}/splashLoginAttempts | List the splash login attempts for a network


<a name="getNetworkSplashLoginAttempts"></a>
# **getNetworkSplashLoginAttempts**
> Object getNetworkSplashLoginAttempts(networkId, opts)

List the splash login attempts for a network

List the splash login attempts for a network

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.SplashLoginAttemptsApi();

var networkId = "networkId_example"; // String | 

var opts = { 
  'ssidNumber': 56, // Number | Only return the login attempts for the specified SSID
  'loginIdentifier': "loginIdentifier_example", // String | The username, email, or phone number used during login
  'timespan': 56 // Number | The timespan, in seconds, for the login attempts. The period will be from [timespan] seconds ago until now. The maximum timespan is 3 months
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkSplashLoginAttempts(networkId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **ssidNumber** | **Number**| Only return the login attempts for the specified SSID | [optional] 
 **loginIdentifier** | **String**| The username, email, or phone number used during login | [optional] 
 **timespan** | **Number**| The timespan, in seconds, for the login attempts. The period will be from [timespan] seconds ago until now. The maximum timespan is 3 months | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

