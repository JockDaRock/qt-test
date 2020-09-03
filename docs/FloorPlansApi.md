# MerakiDashboardApi.FloorPlansApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNetworkFloorPlan**](FloorPlansApi.md#createNetworkFloorPlan) | **POST** /networks/{networkId}/floorPlans | Upload a floor plan
[**deleteNetworkFloorPlan**](FloorPlansApi.md#deleteNetworkFloorPlan) | **DELETE** /networks/{networkId}/floorPlans/{floorPlanId} | Destroy a floor plan
[**getNetworkFloorPlan**](FloorPlansApi.md#getNetworkFloorPlan) | **GET** /networks/{networkId}/floorPlans/{floorPlanId} | Find a floor plan by ID
[**getNetworkFloorPlans**](FloorPlansApi.md#getNetworkFloorPlans) | **GET** /networks/{networkId}/floorPlans | List the floor plans that belong to your network
[**updateNetworkFloorPlan**](FloorPlansApi.md#updateNetworkFloorPlan) | **PUT** /networks/{networkId}/floorPlans/{floorPlanId} | Update a floor plan's geolocation and other meta data


<a name="createNetworkFloorPlan"></a>
# **createNetworkFloorPlan**
> Object createNetworkFloorPlan(networkId, createNetworkFloorPlan)

Upload a floor plan

Upload a floor plan

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.FloorPlansApi();

var networkId = "networkId_example"; // String | 

var createNetworkFloorPlan = new MerakiDashboardApi.CreateNetworkFloorPlan(); // CreateNetworkFloorPlan | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createNetworkFloorPlan(networkId, createNetworkFloorPlan, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **createNetworkFloorPlan** | [**CreateNetworkFloorPlan**](CreateNetworkFloorPlan.md)|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteNetworkFloorPlan"></a>
# **deleteNetworkFloorPlan**
> deleteNetworkFloorPlan(networkId, floorPlanId)

Destroy a floor plan

Destroy a floor plan

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.FloorPlansApi();

var networkId = "networkId_example"; // String | 

var floorPlanId = "floorPlanId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteNetworkFloorPlan(networkId, floorPlanId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **floorPlanId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkFloorPlan"></a>
# **getNetworkFloorPlan**
> Object getNetworkFloorPlan(networkId, floorPlanId)

Find a floor plan by ID

Find a floor plan by ID

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.FloorPlansApi();

var networkId = "networkId_example"; // String | 

var floorPlanId = "floorPlanId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkFloorPlan(networkId, floorPlanId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **floorPlanId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkFloorPlans"></a>
# **getNetworkFloorPlans**
> Object getNetworkFloorPlans(networkId)

List the floor plans that belong to your network

List the floor plans that belong to your network

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.FloorPlansApi();

var networkId = "networkId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkFloorPlans(networkId, callback);
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

<a name="updateNetworkFloorPlan"></a>
# **updateNetworkFloorPlan**
> Object updateNetworkFloorPlan(networkId, floorPlanId, opts)

Update a floor plan's geolocation and other meta data

Update a floor plan's geolocation and other meta data

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.FloorPlansApi();

var networkId = "networkId_example"; // String | 

var floorPlanId = "floorPlanId_example"; // String | 

var opts = { 
  'updateNetworkFloorPlan': new MerakiDashboardApi.UpdateNetworkFloorPlan() // UpdateNetworkFloorPlan | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNetworkFloorPlan(networkId, floorPlanId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **floorPlanId** | **String**|  | 
 **updateNetworkFloorPlan** | [**UpdateNetworkFloorPlan**](UpdateNetworkFloorPlan.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

