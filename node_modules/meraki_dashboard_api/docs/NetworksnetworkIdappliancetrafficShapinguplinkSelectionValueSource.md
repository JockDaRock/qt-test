# MerakiDashboardApi.NetworksnetworkIdappliancetrafficShapinguplinkSelectionValueSource

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**port** | **String** | E.g.: \&quot;any\&quot;, \&quot;0\&quot; (also means \&quot;any\&quot;), \&quot;8080\&quot;, \&quot;1-1024\&quot; | [optional] 
**cidr** | **String** | CIDR format address, or \&quot;any\&quot;. E.g.: \&quot;192.168.10.0/24\&quot;,  \&quot;192.168.10.1\&quot; (same as \&quot;192.168.10.1/32\&quot;), \&quot;0.0.0.0/0\&quot; (same as \&quot;any\&quot;) | [optional] 
**vlan** | **Number** | VLAN ID of the configured VLAN in the Meraki network. Currently only available under a template network. | [optional] 
**host** | **Number** | Host ID in the VLAN, should be used along with &#x27;vlan&#x27;, and not exceed the vlan subnet capacity. Currently only available under a template network. | [optional] 
