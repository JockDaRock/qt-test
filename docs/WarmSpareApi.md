# MerakiDashboardApi.WarmSpareApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDeviceSwitchWarmSpare**](WarmSpareApi.md#getDeviceSwitchWarmSpare) | **GET** /devices/{serial}/switch/warmSpare | Return warm spare configuration for a switch
[**getNetworkApplianceWarmSpare**](WarmSpareApi.md#getNetworkApplianceWarmSpare) | **GET** /networks/{networkId}/appliance/warmSpare | Return MX warm spare settings
[**swapNetworkApplianceWarmSpare**](WarmSpareApi.md#swapNetworkApplianceWarmSpare) | **POST** /networks/{networkId}/appliance/warmSpare/swap | Swap MX primary and warm spare appliances
[**updateDeviceSwitchWarmSpare**](WarmSpareApi.md#updateDeviceSwitchWarmSpare) | **PUT** /devices/{serial}/switch/warmSpare | Update warm spare configuration for a switch. The spare will use the same L3 configuration as the primary. Note that this will irreversibly destroy any existing L3 configuration on the spare.
[**updateNetworkApplianceWarmSpare**](WarmSpareApi.md#updateNetworkApplianceWarmSpare) | **PUT** /networks/{networkId}/appliance/warmSpare | Update MX warm spare settings


<a name="getDeviceSwitchWarmSpare"></a>
# **getDeviceSwitchWarmSpare**
> Object getDeviceSwitchWarmSpare(serial)

Return warm spare configuration for a switch

Return warm spare configuration for a switch

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.WarmSpareApi();

var serial = "serial_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDeviceSwitchWarmSpare(serial, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkApplianceWarmSpare"></a>
# **getNetworkApplianceWarmSpare**
> Object getNetworkApplianceWarmSpare(networkId)

Return MX warm spare settings

Return MX warm spare settings

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.WarmSpareApi();

var networkId = "networkId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkApplianceWarmSpare(networkId, callback);
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

<a name="swapNetworkApplianceWarmSpare"></a>
# **swapNetworkApplianceWarmSpare**
> Object swapNetworkApplianceWarmSpare(networkId)

Swap MX primary and warm spare appliances

Swap MX primary and warm spare appliances

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.WarmSpareApi();

var networkId = "networkId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.swapNetworkApplianceWarmSpare(networkId, callback);
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

<a name="updateDeviceSwitchWarmSpare"></a>
# **updateDeviceSwitchWarmSpare**
> Object updateDeviceSwitchWarmSpare(serial, updateDeviceSwitchWarmSpare)

Update warm spare configuration for a switch. The spare will use the same L3 configuration as the primary. Note that this will irreversibly destroy any existing L3 configuration on the spare.

Update warm spare configuration for a switch. The spare will use the same L3 configuration as the primary. Note that this will irreversibly destroy any existing L3 configuration on the spare.

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.WarmSpareApi();

var serial = "serial_example"; // String | 

var updateDeviceSwitchWarmSpare = new MerakiDashboardApi.UpdateDeviceSwitchWarmSpare(); // UpdateDeviceSwitchWarmSpare | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateDeviceSwitchWarmSpare(serial, updateDeviceSwitchWarmSpare, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **String**|  | 
 **updateDeviceSwitchWarmSpare** | [**UpdateDeviceSwitchWarmSpare**](UpdateDeviceSwitchWarmSpare.md)|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkApplianceWarmSpare"></a>
# **updateNetworkApplianceWarmSpare**
> Object updateNetworkApplianceWarmSpare(networkId, updateNetworkApplianceWarmSpare)

Update MX warm spare settings

Update MX warm spare settings

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.WarmSpareApi();

var networkId = "networkId_example"; // String | 

var updateNetworkApplianceWarmSpare = new MerakiDashboardApi.UpdateNetworkApplianceWarmSpare(); // UpdateNetworkApplianceWarmSpare | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNetworkApplianceWarmSpare(networkId, updateNetworkApplianceWarmSpare, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **updateNetworkApplianceWarmSpare** | [**UpdateNetworkApplianceWarmSpare**](UpdateNetworkApplianceWarmSpare.md)|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

