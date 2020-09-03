# MerakiDashboardApi.DscpToCosMappingsApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNetworkSwitchDscpToCosMappings**](DscpToCosMappingsApi.md#getNetworkSwitchDscpToCosMappings) | **GET** /networks/{networkId}/switch/dscpToCosMappings | Return the DSCP to CoS mappings
[**updateNetworkSwitchDscpToCosMappings**](DscpToCosMappingsApi.md#updateNetworkSwitchDscpToCosMappings) | **PUT** /networks/{networkId}/switch/dscpToCosMappings | Update the DSCP to CoS mappings


<a name="getNetworkSwitchDscpToCosMappings"></a>
# **getNetworkSwitchDscpToCosMappings**
> Object getNetworkSwitchDscpToCosMappings(networkId)

Return the DSCP to CoS mappings

Return the DSCP to CoS mappings

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.DscpToCosMappingsApi();

var networkId = "networkId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkSwitchDscpToCosMappings(networkId, callback);
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

<a name="updateNetworkSwitchDscpToCosMappings"></a>
# **updateNetworkSwitchDscpToCosMappings**
> Object updateNetworkSwitchDscpToCosMappings(networkId, updateNetworkSwitchDscpToCosMappings)

Update the DSCP to CoS mappings

Update the DSCP to CoS mappings

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.DscpToCosMappingsApi();

var networkId = "networkId_example"; // String | 

var updateNetworkSwitchDscpToCosMappings = new MerakiDashboardApi.UpdateNetworkSwitchDscpToCosMappings(); // UpdateNetworkSwitchDscpToCosMappings | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNetworkSwitchDscpToCosMappings(networkId, updateNetworkSwitchDscpToCosMappings, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **updateNetworkSwitchDscpToCosMappings** | [**UpdateNetworkSwitchDscpToCosMappings**](UpdateNetworkSwitchDscpToCosMappings.md)|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

