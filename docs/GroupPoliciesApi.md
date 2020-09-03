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
> Object createNetworkGroupPolicy(bodynetworkId)

Create a group policy

Create a group policy

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.GroupPoliciesApi();
let body = new MerakiDashboardApi.Body62(); // Body62 | 
let networkId = "networkId_example"; // String | 

apiInstance.createNetworkGroupPolicy(bodynetworkId, (error, data, response) => {
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
 **body** | [**Body62**](Body62.md)|  | 
 **networkId** | **String**|  | 

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
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.GroupPoliciesApi();
let networkId = "networkId_example"; // String | 
let groupPolicyId = "groupPolicyId_example"; // String | 

apiInstance.deleteNetworkGroupPolicy(networkId, groupPolicyId, (error, data, response) => {
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
 **groupPolicyId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getNetworkGroupPolicies"></a>
# **getNetworkGroupPolicies**
> Object getNetworkGroupPolicies(networkId)

List the group policies in a network

List the group policies in a network

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.GroupPoliciesApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkGroupPolicies(networkId, (error, data, response) => {
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

<a name="getNetworkGroupPolicy"></a>
# **getNetworkGroupPolicy**
> Object getNetworkGroupPolicy(networkId, groupPolicyId)

Display a group policy

Display a group policy

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.GroupPoliciesApi();
let networkId = "networkId_example"; // String | 
let groupPolicyId = "groupPolicyId_example"; // String | 

apiInstance.getNetworkGroupPolicy(networkId, groupPolicyId, (error, data, response) => {
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
 **groupPolicyId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateNetworkGroupPolicy"></a>
# **updateNetworkGroupPolicy**
> Object updateNetworkGroupPolicy(networkIdgroupPolicyId, opts)

Update a group policy

Update a group policy

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.GroupPoliciesApi();
let networkId = "networkId_example"; // String | 
let groupPolicyId = "groupPolicyId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body63() // Body63 | 
};
apiInstance.updateNetworkGroupPolicy(networkIdgroupPolicyId, opts, (error, data, response) => {
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
 **groupPolicyId** | **String**|  | 
 **body** | [**Body63**](Body63.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

