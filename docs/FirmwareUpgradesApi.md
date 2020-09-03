# MerakiDashboardApi.FirmwareUpgradesApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNetworkFirmwareUpgrades**](FirmwareUpgradesApi.md#getNetworkFirmwareUpgrades) | **GET** /networks/{networkId}/firmwareUpgrades | Get current maintenance window for a network
[**updateNetworkFirmwareUpgrades**](FirmwareUpgradesApi.md#updateNetworkFirmwareUpgrades) | **PUT** /networks/{networkId}/firmwareUpgrades | Update current maintenance window for a network


<a name="getNetworkFirmwareUpgrades"></a>
# **getNetworkFirmwareUpgrades**
> Object getNetworkFirmwareUpgrades(networkId)

Get current maintenance window for a network

Get current maintenance window for a network

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.FirmwareUpgradesApi();

var networkId = "networkId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkFirmwareUpgrades(networkId, callback);
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

<a name="updateNetworkFirmwareUpgrades"></a>
# **updateNetworkFirmwareUpgrades**
> Object updateNetworkFirmwareUpgrades(networkId, opts)

Update current maintenance window for a network

Update current maintenance window for a network

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.FirmwareUpgradesApi();

var networkId = "networkId_example"; // String | 

var opts = { 
  'updateNetworkFirmwareUpgrades': new MerakiDashboardApi.UpdateNetworkFirmwareUpgrades() // UpdateNetworkFirmwareUpgrades | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNetworkFirmwareUpgrades(networkId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **updateNetworkFirmwareUpgrades** | [**UpdateNetworkFirmwareUpgrades**](UpdateNetworkFirmwareUpgrades.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

