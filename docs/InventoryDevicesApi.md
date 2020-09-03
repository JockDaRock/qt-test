# MerakiDashboardApi.InventoryDevicesApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOrganizationInventoryDevice**](InventoryDevicesApi.md#getOrganizationInventoryDevice) | **GET** /organizations/{organizationId}/inventoryDevices/{serial} | Return a single device from the inventory of an organization
[**getOrganizationInventoryDevices**](InventoryDevicesApi.md#getOrganizationInventoryDevices) | **GET** /organizations/{organizationId}/inventoryDevices | Return the device inventory for an organization


<a name="getOrganizationInventoryDevice"></a>
# **getOrganizationInventoryDevice**
> Object getOrganizationInventoryDevice(organizationId, serial)

Return a single device from the inventory of an organization

Return a single device from the inventory of an organization

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.InventoryDevicesApi();

var organizationId = "organizationId_example"; // String | 

var serial = "serial_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrganizationInventoryDevice(organizationId, serial, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **serial** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrganizationInventoryDevices"></a>
# **getOrganizationInventoryDevices**
> Object getOrganizationInventoryDevices(organizationId, opts)

Return the device inventory for an organization

Return the device inventory for an organization

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.InventoryDevicesApi();

var organizationId = "organizationId_example"; // String | 

var opts = { 
  'perPage': 56, // Number | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.
  'startingAfter': "startingAfter_example", // String | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'endingBefore': "endingBefore_example", // String | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
  'usedState': "usedState_example", // String | Filter results by used or unused inventory. Accepted values are \"used\" or \"unused\".
  'search': "search_example" // String | Search for devices in inventory based on serial number, mac address, or model.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrganizationInventoryDevices(organizationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**|  | 
 **perPage** | **Number**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. | [optional] 
 **startingAfter** | **String**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **endingBefore** | **String**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **usedState** | **String**| Filter results by used or unused inventory. Accepted values are \"used\" or \"unused\". | [optional] 
 **search** | **String**| Search for devices in inventory based on serial number, mac address, or model. | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

