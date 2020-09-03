# MerakiDashboardApi.GroupPoliciesApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNetworkGroupPolicy**](GroupPoliciesApi.md#createNetworkGroupPolicy) | **POST** /networks/{networkId}/groupPolicies | Create a group policy
[**deleteNetworkGroupPolicy**](GroupPoliciesApi.md#deleteNetworkGroupPolicy) | **DELETE** /networks/{networkId}/groupPolicies/{groupPolicyId} | Delete a group policy
[**getNetworkGroupPolicies**](GroupPoliciesApi.md#getNetworkGroupPolicies) | **GET** /networks/{networkId}/groupPolicies | List the group policies in a network
[**getNetworkGroupPolicy**](GroupPoliciesApi.md#getNetworkGroupPolicy) | **GET** /networks/{networkId}/groupPolicies/{groupPolicyId} | Display a group policy
[**updateNetworkGroupPolicy**](GroupPoliciesApi.md#updateNetworkGroupPolicy) | **PUT** /networks/{networkId}/groupPolicies/{groupPolicyId} | Update a group policy


<a name="createNetworkGroupPolicy"></a>
# **createNetworkGroupPolicy**
> Object createNetworkGroupPolicy(networkId, createNetworkGroupPolicy)

Create a group policy

Create a group policy

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.GroupPoliciesApi();

var networkId = "networkId_example"; // String | 

var createNetworkGroupPolicy = new MerakiDashboardApi.CreateNetworkGroupPolicy(); // CreateNetworkGroupPolicy | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createNetworkGroupPolicy(networkId, createNetworkGroupPolicy, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **createNetworkGroupPolicy** | [**CreateNetworkGroupPolicy**](CreateNetworkGroupPolicy.md)|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteNetworkGroupPolicy"></a>
# **deleteNetworkGroupPolicy**
> deleteNetworkGroupPolicy(networkId, groupPolicyId)

Delete a group policy

Delete a group policy

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.GroupPoliciesApi();

var networkId = "networkId_example"; // String | 

var groupPolicyId = "groupPolicyId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteNetworkGroupPolicy(networkId, groupPolicyId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **groupPolicyId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkGroupPolicies"></a>
# **getNetworkGroupPolicies**
> Object getNetworkGroupPolicies(networkId)

List the group policies in a network

List the group policies in a network

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.GroupPoliciesApi();

var networkId = "networkId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkGroupPolicies(networkId, callback);
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

<a name="getNetworkGroupPolicy"></a>
# **getNetworkGroupPolicy**
> Object getNetworkGroupPolicy(networkId, groupPolicyId)

Display a group policy

Display a group policy

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.GroupPoliciesApi();

var networkId = "networkId_example"; // String | 

var groupPolicyId = "groupPolicyId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkGroupPolicy(networkId, groupPolicyId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **groupPolicyId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkGroupPolicy"></a>
# **updateNetworkGroupPolicy**
> Object updateNetworkGroupPolicy(networkId, groupPolicyId, opts)

Update a group policy

Update a group policy

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.GroupPoliciesApi();

var networkId = "networkId_example"; // String | 

var groupPolicyId = "groupPolicyId_example"; // String | 

var opts = { 
  'updateNetworkGroupPolicy': new MerakiDashboardApi.UpdateNetworkGroupPolicy() // UpdateNetworkGroupPolicy | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNetworkGroupPolicy(networkId, groupPolicyId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **groupPolicyId** | **String**|  | 
 **updateNetworkGroupPolicy** | [**UpdateNetworkGroupPolicy**](UpdateNetworkGroupPolicy.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

