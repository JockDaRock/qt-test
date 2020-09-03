# MerakiDashboardApi.NetworksnetworkIdwirelessssidsnumberfirewalll7FirewallRulesRules

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policy** | **String** | &#x27;Deny&#x27; traffic specified by this rule | [optional] 
**type** | **String** | Type of the L7 firewall rule. One of: &#x27;application&#x27;, &#x27;applicationCategory&#x27;, &#x27;host&#x27;, &#x27;port&#x27;, &#x27;ipRange&#x27; | [optional] 
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

