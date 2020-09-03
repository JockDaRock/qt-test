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
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.FirmwareUpgradesApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkFirmwareUpgrades(networkId, (error, data, response) => {
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

<a name="updateNetworkFirmwareUpgrades"></a>
# **updateNetworkFirmwareUpgrades**
> Object updateNetworkFirmwareUpgrades(networkId, opts)

Update current maintenance window for a network

Update current maintenance window for a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.FirmwareUpgradesApi();
let networkId = "networkId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body59() // Body59 | 
};
apiInstance.updateNetworkFirmwareUpgrades(networkId, opts, (error, data, response) => {
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
 **body** | [**Body59**](Body59.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

