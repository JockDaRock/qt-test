# MerakiDashboardApi.CellularUsageHistoryApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNetworkSmDeviceCellularUsageHistory**](CellularUsageHistoryApi.md#getNetworkSmDeviceCellularUsageHistory) | **GET** /networks/{networkId}/sm/devices/{deviceId}/cellularUsageHistory | Return the client&#x27;s daily cellular data usage history. Usage data is in kilobytes.

<a name="getNetworkSmDeviceCellularUsageHistory"></a>
# **getNetworkSmDeviceCellularUsageHistory**
> Object getNetworkSmDeviceCellularUsageHistory(networkId, deviceId)

Return the client&#x27;s daily cellular data usage history. Usage data is in kilobytes.

Return the client&#x27;s daily cellular data usage history. Usage data is in kilobytes.

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.CellularUsageHistoryApi();
let networkId = "networkId_example"; // String | 
let deviceId = "deviceId_example"; // String | 

apiInstance.getNetworkSmDeviceCellularUsageHistory(networkId, deviceId, (error, data, response) => {
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
 **deviceId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

