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
> Object createNetworkSwitchPortSchedule(networkId, createNetworkSwitchPortSchedule)

Add a switch port schedule

Add a switch port schedule

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.PortSchedulesApi();

var networkId = "networkId_example"; // String | 

var createNetworkSwitchPortSchedule = new MerakiDashboardApi.CreateNetworkSwitchPortSchedule(); // CreateNetworkSwitchPortSchedule | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createNetworkSwitchPortSchedule(networkId, createNetworkSwitchPortSchedule, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **createNetworkSwitchPortSchedule** | [**CreateNetworkSwitchPortSchedule**](CreateNetworkSwitchPortSchedule.md)|  | 

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
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.PortSchedulesApi();

var networkId = "networkId_example"; // String | 

var portScheduleId = "portScheduleId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteNetworkSwitchPortSchedule(networkId, portScheduleId, callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkSwitchPortSchedules"></a>
# **getNetworkSwitchPortSchedules**
> Object getNetworkSwitchPortSchedules(networkId)

List switch port schedules

List switch port schedules

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.PortSchedulesApi();

var networkId = "networkId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkSwitchPortSchedules(networkId, callback);
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

<a name="updateNetworkSwitchPortSchedule"></a>
# **updateNetworkSwitchPortSchedule**
> Object updateNetworkSwitchPortSchedule(networkId, portScheduleId, opts)

Update a switch port schedule

Update a switch port schedule

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.PortSchedulesApi();

var networkId = "networkId_example"; // String | 

var portScheduleId = "portScheduleId_example"; // String | 

var opts = { 
  'updateNetworkSwitchPortSchedule': new MerakiDashboardApi.UpdateNetworkSwitchPortSchedule() // UpdateNetworkSwitchPortSchedule | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNetworkSwitchPortSchedule(networkId, portScheduleId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **portScheduleId** | **String**|  | 
 **updateNetworkSwitchPortSchedule** | [**UpdateNetworkSwitchPortSchedule**](UpdateNetworkSwitchPortSchedule.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

