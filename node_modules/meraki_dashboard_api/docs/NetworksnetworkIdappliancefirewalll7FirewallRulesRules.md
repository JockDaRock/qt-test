# MerakiDashboardApi.NetworksnetworkIdappliancefirewalll7FirewallRulesRules

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policy** | **String** | &#x27;Deny&#x27; traffic specified by this rule | [optional] 
**type** | **String** | Type of the L7 rule. One of: &#x27;application&#x27;, &#x27;applicationCategory&#x27;, &#x27;host&#x27;, &#x27;port&#x27;, &#x27;ipRange&#x27; | [optional] 
**value** | **String** | The &#x27;value&#x27; of what you want to block. Format of &#x27;value&#x27; varies depending on type of the rule. See sample request. The application categories and application ids can be retrieved from the the &#x27;MX L7 application categories&#x27; endpoint. The countries follow the two-letter ISO 3166-1 alpha-2 format. | [optional] 

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

