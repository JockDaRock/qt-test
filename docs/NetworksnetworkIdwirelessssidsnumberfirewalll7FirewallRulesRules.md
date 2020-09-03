# MerakiDashboardApi.NetworksnetworkIdwirelessssidsnumberfirewalll7FirewallRulesRules

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policy** | **String** | 'Deny' traffic specified by this rule | [optional] 
**type** | **String** | Type of the L7 firewall rule. One of: 'application', 'applicationCategory', 'host', 'port', 'ipRange' | [optional] 
**value** | **String** | The value of what needs to get blocked. Format of the value varies depending on type of the firewall rule selected. | [optional] 


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




