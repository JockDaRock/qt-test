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
> Object createNetworkSwitchQosRule(bodynetworkId)

Add a quality of service rule

Add a quality of service rule

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.QosRulesApi();
let body = new MerakiDashboardApi.Body85(); // Body85 | 
let networkId = "networkId_example"; // String | 

apiInstance.createNetworkSwitchQosRule(bodynetworkId, (error, data, response) => {
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
 **body** | [**Body85**](Body85.md)|  | 
 **networkId** | **String**|  | 

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
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.QosRulesApi();
let networkId = "networkId_example"; // String | 
let qosRuleId = "qosRuleId_example"; // String | 

apiInstance.deleteNetworkSwitchQosRule(networkId, qosRuleId, (error, data, response) => {
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
 **qosRuleId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getNetworkSwitchQosRule"></a>
# **getNetworkSwitchQosRule**
> Object getNetworkSwitchQosRule(networkId, qosRuleId)

Return a quality of service rule

Return a quality of service rule

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.QosRulesApi();
let networkId = "networkId_example"; // String | 
let qosRuleId = "qosRuleId_example"; // String | 

apiInstance.getNetworkSwitchQosRule(networkId, qosRuleId, (error, data, response) => {
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
 **qosRuleId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNetworkSwitchQosRules"></a>
# **getNetworkSwitchQosRules**
> Object getNetworkSwitchQosRules(networkId)

List quality of service rules

List quality of service rules

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.QosRulesApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkSwitchQosRules(networkId, (error, data, response) => {
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

<a name="getNetworkSwitchQosRulesOrder"></a>
# **getNetworkSwitchQosRulesOrder**
> Object getNetworkSwitchQosRulesOrder(networkId)

Return the quality of service rule IDs by order in which they will be processed by the switch

Return the quality of service rule IDs by order in which they will be processed by the switch

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.QosRulesApi();
let networkId = "networkId_example"; // String | 

apiInstance.getNetworkSwitchQosRulesOrder(networkId, (error, data, response) => {
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

<a name="updateNetworkSwitchQosRule"></a>
# **updateNetworkSwitchQosRule**
> Object updateNetworkSwitchQosRule(networkIdqosRuleId, opts)

Update a quality of service rule

Update a quality of service rule

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.QosRulesApi();
let networkId = "networkId_example"; // String | 
let qosRuleId = "qosRuleId_example"; // String | 
let opts = { 
  'body': new MerakiDashboardApi.Body87() // Body87 | 
};
apiInstance.updateNetworkSwitchQosRule(networkIdqosRuleId, opts, (error, data, response) => {
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
 **qosRuleId** | **String**|  | 
 **body** | [**Body87**](Body87.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkSwitchQosRulesOrder"></a>
# **updateNetworkSwitchQosRulesOrder**
> Object updateNetworkSwitchQosRulesOrder(bodynetworkId)

Update the order in which the rules should be processed by the switch

Update the order in which the rules should be processed by the switch

### Example
```javascript
import MerakiDashboardApi from 'meraki_dashboard_api';
let defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
let meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

let apiInstance = new MerakiDashboardApi.QosRulesApi();
let body = new MerakiDashboardApi.Body86(); // Body86 | 
let networkId = "networkId_example"; // String | 

apiInstance.updateNetworkSwitchQosRulesOrder(bodynetworkId, (error, data, response) => {
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
 **body** | [**Body86**](Body86.md)|  | 
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

