# MerakiDashboardApi.AlertsApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNetworkAlertsSettings**](AlertsApi.md#getNetworkAlertsSettings) | **GET** /networks/{networkId}/alerts/settings | Return the alert configuration for this network
[**updateNetworkAlertsSettings**](AlertsApi.md#updateNetworkAlertsSettings) | **PUT** /networks/{networkId}/alerts/settings | Update the alert configuration for this network


<a name="getNetworkAlertsSettings"></a>
# **getNetworkAlertsSettings**
> Object getNetworkAlertsSettings(networkId)

Return the alert configuration for this network

Return the alert configuration for this network

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.AlertsApi();

var networkId = "networkId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkAlertsSettings(networkId, callback);
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

<a name="updateNetworkAlertsSettings"></a>
# **updateNetworkAlertsSettings**
> Object updateNetworkAlertsSettings(networkId, opts)

Update the alert configuration for this network

Update the alert configuration for this network

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.AlertsApi();

var networkId = "networkId_example"; // String | 

var opts = { 
  'updateNetworkAlertsSettings': new MerakiDashboardApi.UpdateNetworkAlertsSettings() // UpdateNetworkAlertsSettings | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNetworkAlertsSettings(networkId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **updateNetworkAlertsSettings** | [**UpdateNetworkAlertsSettings**](UpdateNetworkAlertsSettings.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

