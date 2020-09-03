# MerakiDashboardApi.SplashApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNetworkWirelessSsidSplashSettings**](SplashApi.md#getNetworkWirelessSsidSplashSettings) | **GET** /networks/{networkId}/wireless/ssids/{number}/splash/settings | Display the splash page settings for the given SSID
[**updateNetworkWirelessSsidSplashSettings**](SplashApi.md#updateNetworkWirelessSsidSplashSettings) | **PUT** /networks/{networkId}/wireless/ssids/{number}/splash/settings | Modify the splash page settings for the given SSID


<a name="getNetworkWirelessSsidSplashSettings"></a>
# **getNetworkWirelessSsidSplashSettings**
> Object getNetworkWirelessSsidSplashSettings(networkId, _number)

Display the splash page settings for the given SSID

Display the splash page settings for the given SSID

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.SplashApi();

var networkId = "networkId_example"; // String | 

var _number = "_number_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkWirelessSsidSplashSettings(networkId, _number, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **_number** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkWirelessSsidSplashSettings"></a>
# **updateNetworkWirelessSsidSplashSettings**
> Object updateNetworkWirelessSsidSplashSettings(networkId, _number, opts)

Modify the splash page settings for the given SSID

Modify the splash page settings for the given SSID

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.SplashApi();

var networkId = "networkId_example"; // String | 

var _number = "_number_example"; // String | 

var opts = { 
  'updateNetworkWirelessSsidSplashSettings': new MerakiDashboardApi.UpdateNetworkWirelessSsidSplashSettings() // UpdateNetworkWirelessSsidSplashSettings | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNetworkWirelessSsidSplashSettings(networkId, _number, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **_number** | **String**|  | 
 **updateNetworkWirelessSsidSplashSettings** | [**UpdateNetworkWirelessSsidSplashSettings**](UpdateNetworkWirelessSsidSplashSettings.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

