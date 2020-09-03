# MerakiDashboardApi.NetworksnetworkIdappliancesecurityintrusionProtectedNetworks

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**useDefault** | **Boolean** | true/false whether to use special IPv4 addresses: https://tools.ietf.org/html/rfc5735 (required). Default value is true if none currently saved | [optional] 
**includedCidr** | **[String]** | list of IP addresses or subnets being protected (required if &#x27;useDefault&#x27; is false) | [optional] 
**excludedCidr** | **[String]** | list of IP addresses or subnets being excluded from protection (required if &#x27;useDefault&#x27; is false) | [optional] 
