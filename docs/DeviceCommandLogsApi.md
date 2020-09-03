# MerakiDashboardApi.DeviceCommandLogsApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNetworkSmDeviceDeviceCommandLogs**](DeviceCommandLogsApi.md#getNetworkSmDeviceDeviceCommandLogs) | **GET** /networks/{networkId}/sm/devices/{deviceId}/deviceCommandLogs |     Return historical records of commands sent to Systems Manager devices.     &lt;p&gt;Note that this will include the name of the Dashboard user who initiated the command if it was generated     by a Dashboard admin rather than the automatic behavior of the system; you may wish to filter this out     of any reports.&lt;/p&gt; 

<a name="getNetworkSmDeviceDeviceCommandLogs"></a>
# **getNetworkSmDeviceDeviceCommandLogs**
> Object getNetworkSmDeviceDeviceCommandLogs(networkId, deviceId, opts)

    Return historical records of commands sent to Systems Manager devices.     &lt;p&gt;Note that this will include the name of the Dashboard user who initiated the command if it was generated     by a Dashboard admin rather than the automatic behavior of the system; you may wish to filter this out     of any reports.&lt;/p&gt; 

    Return historical records of commands sent to Systems Manager devices.     &lt;p&gt;Note that this will include the name of the Dashboard user who initiated the command if it was generated     by a Dashboard admin rather than the automatic behavior of the system; you may wish to filter this out     of any reports.&lt;/p&gt; 

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.DeviceCommandLogsApi();
let networkId = "networkId_example"; // String | 
let deviceId = "deviceId_example"; // String | 
let opts = { 
  'perPage': 56, // Number | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.
  'startingAfter': "startingAfter_example", // String | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'endingBefore': "endingBefore_example" // String | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
};
apiInstance.getNetworkSmDeviceDeviceCommandLogs(networkId, deviceId, opts, (error, data, response) => {
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
 **perPage** | **Number**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. | [optional] 
 **startingAfter** | **String**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **endingBefore** | **String**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json
