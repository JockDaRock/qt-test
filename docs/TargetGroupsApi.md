# MerakiDashboardApi.TargetGroupsApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNetworkSmTargetGroup**](TargetGroupsApi.md#createNetworkSmTargetGroup) | **POST** /networks/{networkId}/sm/targetGroups | Add a target group
[**deleteNetworkSmTargetGroup**](TargetGroupsApi.md#deleteNetworkSmTargetGroup) | **DELETE** /networks/{networkId}/sm/targetGroups/{targetGroupId} | Delete a target group from a network
[**getNetworkSmTargetGroup**](TargetGroupsApi.md#getNetworkSmTargetGroup) | **GET** /networks/{networkId}/sm/targetGroups/{targetGroupId} | Return a target group
[**getNetworkSmTargetGroups**](TargetGroupsApi.md#getNetworkSmTargetGroups) | **GET** /networks/{networkId}/sm/targetGroups | List the target groups in this network
[**updateNetworkSmTargetGroup**](TargetGroupsApi.md#updateNetworkSmTargetGroup) | **PUT** /networks/{networkId}/sm/targetGroups/{targetGroupId} | Update a target group


<a name="createNetworkSmTargetGroup"></a>
# **createNetworkSmTargetGroup**
> Object createNetworkSmTargetGroup(networkId, opts)

Add a target group

Add a target group

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.TargetGroupsApi();

var networkId = "networkId_example"; // String | 

var opts = { 
  'createNetworkSmTargetGroup': new MerakiDashboardApi.CreateNetworkSmTargetGroup() // CreateNetworkSmTargetGroup | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createNetworkSmTargetGroup(networkId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **createNetworkSmTargetGroup** | [**CreateNetworkSmTargetGroup**](CreateNetworkSmTargetGroup.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteNetworkSmTargetGroup"></a>
# **deleteNetworkSmTargetGroup**
> deleteNetworkSmTargetGroup(networkId, targetGroupId)

Delete a target group from a network

Delete a target group from a network

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.TargetGroupsApi();

var networkId = "networkId_example"; // String | 

var targetGroupId = "targetGroupId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteNetworkSmTargetGroup(networkId, targetGroupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **targetGroupId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkSmTargetGroup"></a>
# **getNetworkSmTargetGroup**
> Object getNetworkSmTargetGroup(networkId, targetGroupId, opts)

Return a target group

Return a target group

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.TargetGroupsApi();

var networkId = "networkId_example"; // String | 

var targetGroupId = "targetGroupId_example"; // String | 

var opts = { 
  'withDetails': true // Boolean | Boolean indicating if the the ids of the devices or users scoped by the target group should be included in the response
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkSmTargetGroup(networkId, targetGroupId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **targetGroupId** | **String**|  | 
 **withDetails** | **Boolean**| Boolean indicating if the the ids of the devices or users scoped by the target group should be included in the response | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkSmTargetGroups"></a>
# **getNetworkSmTargetGroups**
> Object getNetworkSmTargetGroups(networkId, opts)

List the target groups in this network

List the target groups in this network

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.TargetGroupsApi();

var networkId = "networkId_example"; // String | 

var opts = { 
  'withDetails': true // Boolean | Boolean indicating if the the ids of the devices or users scoped by the target group should be included in the response
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkSmTargetGroups(networkId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **withDetails** | **Boolean**| Boolean indicating if the the ids of the devices or users scoped by the target group should be included in the response | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkSmTargetGroup"></a>
# **updateNetworkSmTargetGroup**
> Object updateNetworkSmTargetGroup(networkId, targetGroupId, opts)

Update a target group

Update a target group

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.TargetGroupsApi();

var networkId = "networkId_example"; // String | 

var targetGroupId = "targetGroupId_example"; // String | 

var opts = { 
  'updateNetworkSmTargetGroup': new MerakiDashboardApi.UpdateNetworkSmTargetGroup() // UpdateNetworkSmTargetGroup | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNetworkSmTargetGroup(networkId, targetGroupId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **targetGroupId** | **String**|  | 
 **updateNetworkSmTargetGroup** | [**UpdateNetworkSmTargetGroup**](UpdateNetworkSmTargetGroup.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

