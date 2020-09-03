# MerakiDashboardApi.QosRulesApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNetworkSwitchQosRule**](QosRulesApi.md#createNetworkSwitchQosRule) | **POST** /networks/{networkId}/switch/qosRules | Add a quality of service rule
[**deleteNetworkSwitchQosRule**](QosRulesApi.md#deleteNetworkSwitchQosRule) | **DELETE** /networks/{networkId}/switch/qosRules/{qosRuleId} | Delete a quality of service rule
[**getNetworkSwitchQosRule**](QosRulesApi.md#getNetworkSwitchQosRule) | **GET** /networks/{networkId}/switch/qosRules/{qosRuleId} | Return a quality of service rule
[**getNetworkSwitchQosRules**](QosRulesApi.md#getNetworkSwitchQosRules) | **GET** /networks/{networkId}/switch/qosRules | List quality of service rules
[**getNetworkSwitchQosRulesOrder**](QosRulesApi.md#getNetworkSwitchQosRulesOrder) | **GET** /networks/{networkId}/switch/qosRules/order | Return the quality of service rule IDs by order in which they will be processed by the switch
[**updateNetworkSwitchQosRule**](QosRulesApi.md#updateNetworkSwitchQosRule) | **PUT** /networks/{networkId}/switch/qosRules/{qosRuleId} | Update a quality of service rule
[**updateNetworkSwitchQosRulesOrder**](QosRulesApi.md#updateNetworkSwitchQosRulesOrder) | **PUT** /networks/{networkId}/switch/qosRules/order | Update the order in which the rules should be processed by the switch


<a name="createNetworkSwitchQosRule"></a>
# **createNetworkSwitchQosRule**
> Object createNetworkSwitchQosRule(networkId, createNetworkSwitchQosRule)

Add a quality of service rule

Add a quality of service rule

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.QosRulesApi();

var networkId = "networkId_example"; // String | 

var createNetworkSwitchQosRule = new MerakiDashboardApi.CreateNetworkSwitchQosRule(); // CreateNetworkSwitchQosRule | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createNetworkSwitchQosRule(networkId, createNetworkSwitchQosRule, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **createNetworkSwitchQosRule** | [**CreateNetworkSwitchQosRule**](CreateNetworkSwitchQosRule.md)|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteNetworkSwitchQosRule"></a>
# **deleteNetworkSwitchQosRule**
> deleteNetworkSwitchQosRule(networkId, qosRuleId)

Delete a quality of service rule

Delete a quality of service rule

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.QosRulesApi();

var networkId = "networkId_example"; // String | 

var qosRuleId = "qosRuleId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteNetworkSwitchQosRule(networkId, qosRuleId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **qosRuleId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkSwitchQosRule"></a>
# **getNetworkSwitchQosRule**
> Object getNetworkSwitchQosRule(networkId, qosRuleId)

Return a quality of service rule

Return a quality of service rule

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.QosRulesApi();

var networkId = "networkId_example"; // String | 

var qosRuleId = "qosRuleId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkSwitchQosRule(networkId, qosRuleId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **qosRuleId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkSwitchQosRules"></a>
# **getNetworkSwitchQosRules**
> Object getNetworkSwitchQosRules(networkId)

List quality of service rules

List quality of service rules

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.QosRulesApi();

var networkId = "networkId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkSwitchQosRules(networkId, callback);
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

<a name="getNetworkSwitchQosRulesOrder"></a>
# **getNetworkSwitchQosRulesOrder**
> Object getNetworkSwitchQosRulesOrder(networkId)

Return the quality of service rule IDs by order in which they will be processed by the switch

Return the quality of service rule IDs by order in which they will be processed by the switch

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.QosRulesApi();

var networkId = "networkId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkSwitchQosRulesOrder(networkId, callback);
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

<a name="updateNetworkSwitchQosRule"></a>
# **updateNetworkSwitchQosRule**
> Object updateNetworkSwitchQosRule(networkId, qosRuleId, opts)

Update a quality of service rule

Update a quality of service rule

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.QosRulesApi();

var networkId = "networkId_example"; // String | 

var qosRuleId = "qosRuleId_example"; // String | 

var opts = { 
  'updateNetworkSwitchQosRule': new MerakiDashboardApi.UpdateNetworkSwitchQosRule() // UpdateNetworkSwitchQosRule | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNetworkSwitchQosRule(networkId, qosRuleId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **qosRuleId** | **String**|  | 
 **updateNetworkSwitchQosRule** | [**UpdateNetworkSwitchQosRule**](UpdateNetworkSwitchQosRule.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkSwitchQosRulesOrder"></a>
# **updateNetworkSwitchQosRulesOrder**
> Object updateNetworkSwitchQosRulesOrder(networkId, updateNetworkSwitchQosRulesOrder)

Update the order in which the rules should be processed by the switch

Update the order in which the rules should be processed by the switch

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.QosRulesApi();

var networkId = "networkId_example"; // String | 

var updateNetworkSwitchQosRulesOrder = new MerakiDashboardApi.UpdateNetworkSwitchQosRulesOrder(); // UpdateNetworkSwitchQosRulesOrder | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNetworkSwitchQosRulesOrder(networkId, updateNetworkSwitchQosRulesOrder, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **updateNetworkSwitchQosRulesOrder** | [**UpdateNetworkSwitchQosRulesOrder**](UpdateNetworkSwitchQosRulesOrder.md)|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

