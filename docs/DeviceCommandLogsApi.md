# MerakiDashboardApi.DeviceCommandLogsApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNetworkSmDeviceDeviceCommandLogs**](DeviceCommandLogsApi.md#getNetworkSmDeviceDeviceCommandLogs) | **GET** /networks/{networkId}/sm/devices/{deviceId}/deviceCommandLogs |     Return historical records of commands sent to Systems Manager devices.     <p>Note that this will include the name of the Dashboard user who initiated the command if it was generated     by a Dashboard admin rather than the automatic behavior of the system; you may wish to filter this out     of any reports.</p> 


<a name="getNetworkSmDeviceDeviceCommandLogs"></a>
# **getNetworkSmDeviceDeviceCommandLogs**
> Object getNetworkSmDeviceDeviceCommandLogs(networkId, deviceId, opts)

    Return historical records of commands sent to Systems Manager devices.     <p>Note that this will include the name of the Dashboard user who initiated the command if it was generated     by a Dashboard admin rather than the automatic behavior of the system; you may wish to filter this out     of any reports.</p> 

    Return historical records of commands sent to Systems Manager devices.     <p>Note that this will include the name of the Dashboard user who initiated the command if it was generated     by a Dashboard admin rather than the automatic behavior of the system; you may wish to filter this out     of any reports.</p> 

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.DeviceCommandLogsApi();

var networkId = "networkId_example"; // String | 

var deviceId = "deviceId_example"; // String | 

var opts = { 
  'perPage': 56, // Number | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.
  'startingAfter': "startingAfter_example", // String | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'endingBefore': "endingBefore_example" // String | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkSmDeviceDeviceCommandLogs(networkId, deviceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **deviceId** | **String**|  | 
 **perPage** | **Number**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. | [optional] 
 **startingAfter** | **String**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **endingBefore** | **String**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

