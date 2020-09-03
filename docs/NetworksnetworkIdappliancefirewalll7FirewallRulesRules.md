# MerakiDashboardApi.NetworksnetworkIdappliancefirewalll7FirewallRulesRules

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policy** | **String** | 'Deny' traffic specified by this rule | [optional] 
**type** | **String** | Type of the L7 rule. One of: 'application', 'applicationCategory', 'host', 'port', 'ipRange' | [optional] 
**value** | **String** | The 'value' of what you want to block. Format of 'value' varies depending on type of the rule. See sample request. The application categories and application ids can be retrieved from the the 'MX L7 application categories' endpoint. The countries follow the two-letter ISO 3166-1 alpha-2 format. | [optional] 


<a name="PolicyEnum"></a>
## Enum: PolicyEnum


* `deny` (value: `"deny"`)




<a name="TypeEnum"></a>
## Enum: TypeEnum


* `application` (value: `"application"`)

* `applicationCategory` (value: `"applicationCategory"`)

* `host` (value: `"host"`)

* `port` (value: `"port"`)

* `ipRange` (value: `"ipRange"`)




