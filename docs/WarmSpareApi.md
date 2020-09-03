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
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.WarmSpareApi();
let serial = "serial_example"; // String | 

apiInstance.getDeviceSwitchWarmSpare(serial, (error, data, response) => {
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
 **serial** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkApplianceWarmSpare"></a>
# **getNetworkApplianceWarmSpare**
> Object getNetworkApplianceWarmSpare(networkId)

Return MX warm spare settings

Return MX warm spare settings

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.WarmSpareApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkApplianceWarmSpare(networkId, (error, data, response) => {
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

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="swapNetworkApplianceWarmSpare"></a>
# **swapNetworkApplianceWarmSpare**
> Object swapNetworkApplianceWarmSpare(networkId)

Swap MX primary and warm spare appliances

Swap MX primary and warm spare appliances

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.WarmSpareApi();
let networkId = "networkId_example"; // String | 

apiInstance.swapNetworkApplianceWarmSpare(networkId, (error, data, response) => {
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

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateDeviceSwitchWarmSpare"></a>
# **updateDeviceSwitchWarmSpare**
> Object updateDeviceSwitchWarmSpare(bodyserial)

Update warm spare configuration for a switch. The spare will use the same L3 configuration as the primary. Note that this will irreversibly destroy any existing L3 configuration on the spare.

Update warm spare configuration for a switch. The spare will use the same L3 configuration as the primary. Note that this will irreversibly destroy any existing L3 configuration on the spare.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.WarmSpareApi();
let body = new MerakiDashboardApi.Body16(); // Body16 | 
let serial = "serial_example"; // String | 

apiInstance.updateDeviceSwitchWarmSpare(bodyserial, (error, data, response) => {
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
 **body** | [**Body16**](Body16.md)|  | 
 **serial** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkApplianceWarmSpare"></a>
# **updateNetworkApplianceWarmSpare**
> Object updateNetworkApplianceWarmSpare(bodynetworkId)

Update MX warm spare settings

Update MX warm spare settings

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.WarmSpareApi();
let body = new MerakiDashboardApi.Body46(); // Body46 | 
let networkId = "networkId_example"; // String | 

apiInstance.updateNetworkApplianceWarmSpare(bodynetworkId, (error, data, response) => {
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
 **body** | [**Body46**](Body46.md)|  | 
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

