# MerakiDashboardApi.PortSchedulesApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNetworkSwitchPortSchedule**](PortSchedulesApi.md#createNetworkSwitchPortSchedule) | **POST** /networks/{networkId}/switch/portSchedules | Add a switch port schedule
[**deleteNetworkSwitchPortSchedule**](PortSchedulesApi.md#deleteNetworkSwitchPortSchedule) | **DELETE** /networks/{networkId}/switch/portSchedules/{portScheduleId} | Delete a switch port schedule
[**getNetworkSwitchPortSchedules**](PortSchedulesApi.md#getNetworkSwitchPortSchedules) | **GET** /networks/{networkId}/switch/portSchedules | List switch port schedules
[**updateNetworkSwitchPortSchedule**](PortSchedulesApi.md#updateNetworkSwitchPortSchedule) | **PUT** /networks/{networkId}/switch/portSchedules/{portScheduleId} | Update a switch port schedule

<a name="createNetworkSwitchPortSchedule"></a>
# **createNetworkSwitchPortSchedule**
> Object createNetworkSwitchPortSchedule(bodynetworkId)

Add a switch port schedule

Add a switch port schedule

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.PortSchedulesApi();
let body = new MerakiDashboardApi.Body83(); // Body83 | 
let networkId = "networkId_example"; // String | 

apiInstance.createNetworkSwitchPortSchedule(bodynetworkId, (error, data, response) => {
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
 **body** | [**Body83**](Body83.md)|  | 
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteNetworkSwitchPortSchedule"></a>
# **deleteNetworkSwitchPortSchedule**
> deleteNetworkSwitchPortSchedule(networkId, portScheduleId)

Delete a switch port schedule

Delete a switch port schedule

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.PortSchedulesApi();
let networkId = "networkId_example"; // String | 
let portScheduleId = "portScheduleId_example"; // String | 

apiInstance.deleteNetworkSwitchPortSchedule(networkId, portScheduleId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **portScheduleId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getNetworkSwitchPortSchedules"></a>
# **getNetworkSwitchPortSchedules**
> Object getNetworkSwitchPortSchedules(networkId)

List switch port schedules

List switch port schedules

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.PortSchedulesApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkSwitchPortSchedules(networkId, (error, data, response) => {
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

<a name="updateNetworkSwitchPortSchedule"></a>
# **updateNetworkSwitchPortSchedule**
> Object updateNetworkSwitchPortSchedule(networkIdportScheduleId, opts)

Update a switch port schedule

Update a switch port schedule

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.PortSchedulesApi();
let networkId = "networkId_example"; // String | 
let portScheduleId = "portScheduleId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body84() // Body84 | 
};
apiInstance.updateNetworkSwitchPortSchedule(networkIdportScheduleId, opts, (error, data, response) => {
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
 **portScheduleId** | **String**|  | 
 **body** | [**Body84**](Body84.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

