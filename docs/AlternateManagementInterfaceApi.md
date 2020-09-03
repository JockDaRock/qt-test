# MerakiDashboardApi.AlternateManagementInterfaceApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNetworkWirelessAlternateManagementInterface**](AlternateManagementInterfaceApi.md#getNetworkWirelessAlternateManagementInterface) | **GET** /networks/{networkId}/wireless/alternateManagementInterface | Return alternate management interface and devices with IP assigned
[**updateNetworkWirelessAlternateManagementInterface**](AlternateManagementInterfaceApi.md#updateNetworkWirelessAlternateManagementInterface) | **PUT** /networks/{networkId}/wireless/alternateManagementInterface | Update alternate management interface and device static IP


<a name="getNetworkWirelessAlternateManagementInterface"></a>
# **getNetworkWirelessAlternateManagementInterface**
> Object getNetworkWirelessAlternateManagementInterface(networkId)

Return alternate management interface and devices with IP assigned

Return alternate management interface and devices with IP assigned

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.AlternateManagementInterfaceApi();

var networkId = "networkId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkWirelessAlternateManagementInterface(networkId, callback);
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

<a name="updateNetworkWirelessAlternateManagementInterface"></a>
# **updateNetworkWirelessAlternateManagementInterface**
> Object updateNetworkWirelessAlternateManagementInterface(networkId, opts)

Update alternate management interface and device static IP

Update alternate management interface and device static IP

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.AlternateManagementInterfaceApi();

var networkId = "networkId_example"; // String | 

var opts = { 
  'updateNetworkWirelessAlternateManagementInterface': new MerakiDashboardApi.UpdateNetworkWirelessAlternateManagementInterface() // UpdateNetworkWirelessAlternateManagementInterface | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNetworkWirelessAlternateManagementInterface(networkId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **updateNetworkWirelessAlternateManagementInterface** | [**UpdateNetworkWirelessAlternateManagementInterface**](UpdateNetworkWirelessAlternateManagementInterface.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

