# MerakiDashboardApi.NetworksnetworkIdappliancetrafficShapinguplinkSelectionValue1Destination

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**port** | **String** | E.g.: \&quot;any\&quot;, \&quot;0\&quot; (also means \&quot;any\&quot;), \&quot;8080\&quot;, \&quot;1-1024\&quot; | [optional] 
**cidr** | **String** | CIDR format address, or \&quot;any\&quot;. E.g.: \&quot;192.168.10.0/24\&quot;,  \&quot;192.168.10.1\&quot; (same as \&quot;192.168.10.1/32\&quot;), \&quot;0.0.0.0/0\&quot; (same as \&quot;any\&quot;) | [optional] 
**network** | **String** | Meraki network ID. Currently only available under a template network, and the value should be ID of either same template network, or another template network currently. E.g.: \&quot;L_12345678\&quot;. | [optional] 
**vlan** | **Number** | VLAN ID of the configured VLAN in the Meraki network. Currently only available under a template network. | [optional] 
**host** | **Number** | Host ID in the VLAN, should be used along with &#x27;vlan&#x27;, and not exceed the vlan subnet capacity. Currently only available under a template network. | [optional] 
**fqdn** | **String** | FQDN format address. Currently only availabe in &#x27;destination&#x27; of &#x27;vpnTrafficUplinkPreference&#x27; object. E.g.: &#x27;www.google.com&#x27; | [optional] 