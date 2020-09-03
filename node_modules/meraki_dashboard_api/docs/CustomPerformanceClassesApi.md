# MerakiDashboardApi.CustomPerformanceClassesApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNetworkApplianceTrafficShapingCustomPerformanceClass**](CustomPerformanceClassesApi.md#createNetworkApplianceTrafficShapingCustomPerformanceClass) | **POST** /networks/{networkId}/appliance/trafficShaping/customPerformanceClasses | Add a custom performance class for an MX network
[**deleteNetworkApplianceTrafficShapingCustomPerformanceClass**](CustomPerformanceClassesApi.md#deleteNetworkApplianceTrafficShapingCustomPerformanceClass) | **DELETE** /networks/{networkId}/appliance/trafficShaping/customPerformanceClasses/{customPerformanceClassId} | Delete a custom performance class from an MX network
[**getNetworkApplianceTrafficShapingCustomPerformanceClass**](CustomPerformanceClassesApi.md#getNetworkApplianceTrafficShapingCustomPerformanceClass) | **GET** /networks/{networkId}/appliance/trafficShaping/customPerformanceClasses/{customPerformanceClassId} | Return a custom performance class for an MX network
[**getNetworkApplianceTrafficShapingCustomPerformanceClasses**](CustomPerformanceClassesApi.md#getNetworkApplianceTrafficShapingCustomPerformanceClasses) | **GET** /networks/{networkId}/appliance/trafficShaping/customPerformanceClasses | List all custom performance classes for an MX network
[**updateNetworkApplianceTrafficShapingCustomPerformanceClass**](CustomPerformanceClassesApi.md#updateNetworkApplianceTrafficShapingCustomPerformanceClass) | **PUT** /networks/{networkId}/appliance/trafficShaping/customPerformanceClasses/{customPerformanceClassId} | Update a custom performance class for an MX network

<a name="createNetworkApplianceTrafficShapingCustomPerformanceClass"></a>
# **createNetworkApplianceTrafficShapingCustomPerformanceClass**
> Object createNetworkApplianceTrafficShapingCustomPerformanceClass(bodynetworkId)

Add a custom performance class for an MX network

Add a custom performance class for an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.CustomPerformanceClassesApi();
let body = new MerakiDashboardApi.Body37(); // Body37 | 
let networkId = "networkId_example"; // String | 

apiInstance.createNetworkApplianceTrafficShapingCustomPerformanceClass(bodynetworkId, (error, data, response) => {
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
 **body** | [**Body37**](Body37.md)|  | 
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteNetworkApplianceTrafficShapingCustomPerformanceClass"></a>
# **deleteNetworkApplianceTrafficShapingCustomPerformanceClass**
> deleteNetworkApplianceTrafficShapingCustomPerformanceClass(networkId, customPerformanceClassId)

Delete a custom performance class from an MX network

Delete a custom performance class from an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.CustomPerformanceClassesApi();
let networkId = "networkId_example"; // String | 
let customPerformanceClassId = "customPerformanceClassId_example"; // String | 

apiInstance.deleteNetworkApplianceTrafficShapingCustomPerformanceClass(networkId, customPerformanceClassId, (error, data, response) => {
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
 **customPerformanceClassId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getNetworkApplianceTrafficShapingCustomPerformanceClass"></a>
# **getNetworkApplianceTrafficShapingCustomPerformanceClass**
> Object getNetworkApplianceTrafficShapingCustomPerformanceClass(networkId, customPerformanceClassId)

Return a custom performance class for an MX network

Return a custom performance class for an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.CustomPerformanceClassesApi();
let networkId = "networkId_example"; // String | 
let customPerformanceClassId = "customPerformanceClassId_example"; // String | 

apiInstance.getNetworkApplianceTrafficShapingCustomPerformanceClass(networkId, customPerformanceClassId, (error, data, response) => {
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
 **customPerformanceClassId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkApplianceTrafficShapingCustomPerformanceClasses"></a>
# **getNetworkApplianceTrafficShapingCustomPerformanceClasses**
> Object getNetworkApplianceTrafficShapingCustomPerformanceClasses(networkId)

List all custom performance classes for an MX network

List all custom performance classes for an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.CustomPerformanceClassesApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkApplianceTrafficShapingCustomPerformanceClasses(networkId, (error, data, response) => {
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

<a name="updateNetworkApplianceTrafficShapingCustomPerformanceClass"></a>
# **updateNetworkApplianceTrafficShapingCustomPerformanceClass**
> Object updateNetworkApplianceTrafficShapingCustomPerformanceClass(networkIdcustomPerformanceClassId, opts)

Update a custom performance class for an MX network

Update a custom performance class for an MX network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.CustomPerformanceClassesApi();
let networkId = "networkId_example"; // String | 
let customPerformanceClassId = "customPerformanceClassId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body38() // Body38 | 
};
apiInstance.updateNetworkApplianceTrafficShapingCustomPerformanceClass(networkIdcustomPerformanceClassId, opts, (error, data, response) => {
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
 **customPerformanceClassId** | **String**|  | 
 **body** | [**Body38**](Body38.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

